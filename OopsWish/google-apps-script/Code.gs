/**
 * ==============================================================================
 * OopsWish Official Google Apps Script Backend
 * ==============================================================================
 * Handles:
 * 1. Web App POST requests from OopsWish static frontend
 * 2. Order ID generation & data logging into Google Sheets
 * 3. Base64 photo decoding and saving into dedicated Google Drive order folders
 * 4. Instant HTML email notifications to the OopsWish business owner
 * 5. CORS headers & JSON responses
 * ==============================================================================
 */

// ==========================================
// BACKEND CONFIGURATION
// Replace these with your own details!
// ==========================================
const SCRIPT_CONFIG = {
  // 1. The ID of your Google Sheet where orders will be recorded.
  // Found in your Sheet's URL: https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit
  // If left as empty string "", it will use the spreadsheet bound to this script.
  SPREADSHEET_ID: "",

  // 2. The Sheet/Tab Name (Default is "Orders")
  SHEET_NAME: "Orders",

  // 3. Your email address to receive immediate order notifications
  OWNER_EMAIL: "youremail@gmail.com",

  // 4. (Optional) Root Drive Folder ID where "OopsWish Orders" should be placed.
  // Leave empty "" to create it directly in your Google Drive root directory.
  DRIVE_ROOT_FOLDER_ID: ""
};

/**
 * HTTP GET Handler (Useful to test if your Web App is deployed and reachable)
 */
function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: "success",
    message: "OopsWish Google Apps Script Backend is active and running perfectly!"
  })).setMimeType(ContentService.MimeType.JSON);
}

/**
 * HTTP POST Handler (Receives order submissions from OopsWish frontend)
 */
function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return createJsonResponse({ status: "error", message: "No data payload received." });
    }

    const data = JSON.parse(e.postData.contents);

    // 1. Ensure Order ID
    const orderId = data.orderId || ("OW-" + Math.floor(1000 + Math.random() * 9000));
    const timestamp = data.date || new Date().toISOString();

    // 2. Extract Customer & Surprise Details
    const customerName = data.customerName || "N/A";
    const customerWhatsApp = data.customerWhatsApp || data.whatsapp || "N/A";
    const customerEmail = data.customerEmail || data.email || "N/A";
    const surpriseType = data.surpriseType || "N/A";
    const recipientName = data.recipientName || "N/A";
    const relationship = data.relationship || "N/A";
    const personalMessage = data.personalMessage || "N/A";
    const preferredSong = data.preferredSong || "N/A";
    const deliveryDate = data.deliveryDate || "ASAP";
    const additionalNotes = data.additionalNotes || "N/A";
    const photos = data.photos || [];

    // 3. Save Uploaded Photos into Google Drive Folder
    const photoDriveLinks = savePhotosToDrive(orderId, photos);
    const photoLinksString = photoDriveLinks.length > 0 ? photoDriveLinks.join("\n") : "No photos uploaded";

    // 4. Record Order in Google Sheet
    recordOrderInSheet({
      orderId: orderId,
      date: timestamp,
      customerName: customerName,
      customerWhatsApp: customerWhatsApp,
      customerEmail: customerEmail,
      surpriseType: surpriseType,
      recipientName: recipientName,
      relationship: relationship,
      personalMessage: personalMessage,
      preferredSong: preferredSong,
      deliveryDate: deliveryDate,
      additionalNotes: additionalNotes,
      photoLinks: photoLinksString,
      status: "New"
    });

    // 5. Send Immediate Email Alert to Business Owner
    sendOwnerEmailNotification({
      orderId: orderId,
      customerName: customerName,
      customerWhatsApp: customerWhatsApp,
      customerEmail: customerEmail,
      surpriseType: surpriseType,
      recipientName: recipientName,
      relationship: relationship,
      personalMessage: personalMessage,
      preferredSong: preferredSong,
      deliveryDate: deliveryDate,
      additionalNotes: additionalNotes,
      photoLinks: photoDriveLinks
    });

    // 6. Return Success JSON
    return createJsonResponse({
      status: "success",
      orderId: orderId,
      message: "Order successfully processed and stored."
    });

  } catch (err) {
    Logger.log("Error in doPost: " + err.toString());
    return createJsonResponse({
      status: "error",
      message: err.toString()
    });
  }
}

/**
 * Creates folders in Google Drive: "OopsWish Orders" -> "OW-XXXX" -> "photos"
 * Decodes and uploads base64 images into the photos folder
 */
function savePhotosToDrive(orderId, photos) {
  if (!photos || photos.length === 0) return [];

  // 1. Locate or create root "OopsWish Orders" folder
  let rootFolder;
  if (SCRIPT_CONFIG.DRIVE_ROOT_FOLDER_ID && SCRIPT_CONFIG.DRIVE_ROOT_FOLDER_ID.trim() !== "") {
    rootFolder = DriveApp.getFolderById(SCRIPT_CONFIG.DRIVE_ROOT_FOLDER_ID);
  } else {
    const existingFolders = DriveApp.getFoldersByName("OopsWish Orders");
    if (existingFolders.hasNext()) {
      rootFolder = existingFolders.next();
    } else {
      rootFolder = DriveApp.createFolder("OopsWish Orders");
    }
  }

  // 2. Create Order Subfolder: e.g. "OW-1001"
  const orderFolder = rootFolder.createFolder(orderId);

  // 3. Create "photos" Subfolder
  const photosFolder = orderFolder.createFolder("photos");

  const fileUrls = [];

  // 4. Save each photo
  for (let i = 0; i < photos.length; i++) {
    const p = photos[i];
    if (!p.base64) continue;

    const mimeType = p.mimeType || "image/jpeg";
    const filename = p.filename || ("photo-" + (i + 1) + ".jpg");

    const decodedBytes = Utilities.base64Decode(p.base64);
    const blob = Utilities.newBlob(decodedBytes, mimeType, filename);
    const file = photosFolder.createFile(blob);

    // Make viewable by anyone with link
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    fileUrls.push(file.getUrl());
  }

  return fileUrls;
}

/**
 * Appends the order row to Google Sheets
 */
function recordOrderInSheet(record) {
  let spreadsheet;
  if (SCRIPT_CONFIG.SPREADSHEET_ID && SCRIPT_CONFIG.SPREADSHEET_ID.trim() !== "") {
    spreadsheet = SpreadsheetApp.openById(SCRIPT_CONFIG.SPREADSHEET_ID);
  } else {
    spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  }

  if (!spreadsheet) {
    throw new Error("Spreadsheet could not be found. Please check SPREADSHEET_ID in Code.gs.");
  }

  let sheet = spreadsheet.getSheetByName(SCRIPT_CONFIG.SHEET_NAME);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(SCRIPT_CONFIG.SHEET_NAME);
  }

  // If sheet is brand new or row 1 is empty, write header row
  if (sheet.getLastRow() === 0) {
    const headers = [
      "Order ID",
      "Date",
      "Customer Name",
      "WhatsApp Number",
      "Email",
      "Surprise Type",
      "Recipient Name",
      "Relationship",
      "Message",
      "Song",
      "Delivery Date",
      "Additional Notes",
      "Photo Links",
      "Status"
    ];
    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold").setBackground("#FFF0F5");
  }

  const row = [
    record.orderId,
    record.date,
    record.customerName,
    record.customerWhatsApp,
    record.customerEmail,
    record.surpriseType,
    record.recipientName,
    record.relationship,
    record.personalMessage,
    record.preferredSong,
    record.deliveryDate,
    record.additionalNotes,
    record.photoLinks,
    record.status
  ];

  sheet.appendRow(row);
}

/**
 * Sends an email notification to the OopsWish owner
 */
function sendOwnerEmailNotification(order) {
  if (!SCRIPT_CONFIG.OWNER_EMAIL || SCRIPT_CONFIG.OWNER_EMAIL.includes("youremail@")) {
    Logger.log("OWNER_EMAIL not configured yet. Skipping email alert.");
    return;
  }

  const subject = "New OopsWish Order — " + order.orderId;

  let photoLinksHtml = "<p>No photos attached</p>";
  if (order.photoLinks && order.photoLinks.length > 0) {
    photoLinksHtml = "<ul>";
    for (let i = 0; i < order.photoLinks.length; i++) {
      photoLinksHtml += '<li><a href="' + order.photoLinks[i] + '">View Photo ' + (i + 1) + '</a></li>';
    }
    photoLinksHtml += "</ul>";
  }

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e0d0d8; border-radius: 12px; background-color: #FFF9F5;">
      <div style="text-align: center; margin-bottom: 20px;">
        <h2 style="color: #8E3157; margin: 0;">New OopsWish Order Received! 🎉</h2>
        <p style="color: #6E626B; margin: 5px 0 0 0;">Order Reference: <strong>${order.orderId}</strong></p>
      </div>

      <table style="width: 100%; border-collapse: collapse; background: #ffffff; border-radius: 8px; overflow: hidden;">
        <tr style="border-bottom: 1px solid #f0e6eb;"><td style="padding: 10px 15px; font-weight: bold; color: #8E3157; width: 35%;">Order ID:</td><td style="padding: 10px 15px;"><strong>${order.orderId}</strong></td></tr>
        <tr style="border-bottom: 1px solid #f0e6eb;"><td style="padding: 10px 15px; font-weight: bold; color: #8E3157;">Customer Name:</td><td style="padding: 10px 15px;">${order.customerName}</td></tr>
        <tr style="border-bottom: 1px solid #f0e6eb;"><td style="padding: 10px 15px; font-weight: bold; color: #8E3157;">WhatsApp:</td><td style="padding: 10px 15px;"><a href="https://wa.me/${order.customerWhatsApp.replace(/\\D/g, '')}">${order.customerWhatsApp}</a></td></tr>
        <tr style="border-bottom: 1px solid #f0e6eb;"><td style="padding: 10px 15px; font-weight: bold; color: #8E3157;">Email:</td><td style="padding: 10px 15px;">${order.customerEmail}</td></tr>
        <tr style="border-bottom: 1px solid #f0e6eb;"><td style="padding: 10px 15px; font-weight: bold; color: #8E3157;">Surprise Type:</td><td style="padding: 10px 15px; font-weight: bold; color: #D4AF37;">${order.surpriseType}</td></tr>
        <tr style="border-bottom: 1px solid #f0e6eb;"><td style="padding: 10px 15px; font-weight: bold; color: #8E3157;">Recipient Name:</td><td style="padding: 10px 15px;">${order.recipientName} (${order.relationship})</td></tr>
        <tr style="border-bottom: 1px solid #f0e6eb;"><td style="padding: 10px 15px; font-weight: bold; color: #8E3157;">Delivery Date:</td><td style="padding: 10px 15px;">${order.deliveryDate}</td></tr>
        <tr style="border-bottom: 1px solid #f0e6eb;"><td style="padding: 10px 15px; font-weight: bold; color: #8E3157;">Preferred Song:</td><td style="padding: 10px 15px;">${order.preferredSong}</td></tr>
        <tr style="border-bottom: 1px solid #f0e6eb;"><td style="padding: 10px 15px; font-weight: bold; color: #8E3157;">Personal Message:</td><td style="padding: 10px 15px; white-space: pre-wrap; color: #252027;">${order.personalMessage}</td></tr>
        <tr style="border-bottom: 1px solid #f0e6eb;"><td style="padding: 10px 15px; font-weight: bold; color: #8E3157;">Additional Notes:</td><td style="padding: 10px 15px;">${order.additionalNotes}</td></tr>
        <tr><td style="padding: 10px 15px; font-weight: bold; color: #8E3157;">Google Drive Photos:</td><td style="padding: 10px 15px;">${photoLinksHtml}</td></tr>
      </table>

      <div style="text-align: center; margin-top: 25px;">
        <a href="https://wa.me/${order.customerWhatsApp.replace(/\\D/g, '')}" style="background-color: #25D366; color: white; padding: 12px 24px; text-decoration: none; border-radius: 50px; font-weight: bold; display: inline-block;">
          Message Customer on WhatsApp 💬
        </a>
      </div>
    </div>
  `;

  MailApp.sendEmail({
    to: SCRIPT_CONFIG.OWNER_EMAIL,
    subject: subject,
    htmlBody: htmlBody
  });
}

/**
 * Creates formatted JSON response with CORS headers
 */
function createJsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
