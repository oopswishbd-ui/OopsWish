==============================================================================
OOPSWISH — GOOGLE APPS SCRIPT BACKEND SETUP GUIDE
==============================================================================

Welcome! This simple guide will walk you through setting up your free backend
using Google Sheets, Google Drive, and Google Apps Script.

You do NOT need any server or database subscription. Google handles everything
for free.

Follow these 7 quick steps:

------------------------------------------------------------------------------
STEP 1: CREATE A GOOGLE SHEET
------------------------------------------------------------------------------
1. Open your browser and go to: https://sheets.new
2. Name your spreadsheet at the top left: "OopsWish Orders Database"
3. In the first tab (rename it "Orders"), create these column headers in Row 1:

   Column A: Order ID
   Column B: Date
   Column C: Customer Name
   Column D: WhatsApp Number
   Column E: Email
   Column F: Surprise Type
   Column G: Recipient Name
   Column H: Relationship
   Column I: Message
   Column J: Song
   Column K: Delivery Date
   Column L: Additional Notes
   Column M: Photo Links
   Column N: Status

4. Look at the URL in your browser address bar. It looks like:
   https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
   
   Copy the long ID between "/d/" and "/edit".
   In the example above, the ID is: 1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms


------------------------------------------------------------------------------
STEP 2: OPEN APPS SCRIPT
------------------------------------------------------------------------------
1. Inside your Google Sheet, click on the top menu:
   Extensions  ===>  Apps Script
2. A new code editor window will open.
3. Delete any default code inside the editor window (e.g. `function myFunction() {}`).


------------------------------------------------------------------------------
STEP 3: PASTE THE BACKEND CODE
------------------------------------------------------------------------------
1. Open the file `google-apps-script/Code.gs` from your OopsWish folder in VS Code.
2. Select everything (Ctrl + A or Cmd + A) and Copy (Ctrl + C or Cmd + C).
3. Paste it directly into the Google Apps Script editor.


------------------------------------------------------------------------------
STEP 4: UPDATE YOUR CONFIGURATION
------------------------------------------------------------------------------
At the top of the pasted code, find the `SCRIPT_CONFIG` section:

const SCRIPT_CONFIG = {
  SPREADSHEET_ID: "PASTE_YOUR_SPREADSHEET_ID_HERE",
  SHEET_NAME: "Orders",
  OWNER_EMAIL: "your_email@gmail.com",
  DRIVE_ROOT_FOLDER_ID: ""
};

1. Replace `"PASTE_YOUR_SPREADSHEET_ID_HERE"` with the ID you copied in Step 1.
2. Replace `"your_email@gmail.com"` with the email address where you want to
   receive instant notifications whenever a customer places an order.
3. (Optional) Leave `DRIVE_ROOT_FOLDER_ID` as `""` (empty quotes). The script will
   automatically create an "OopsWish Orders" folder in your Google Drive!
4. Click the "Save" floppy disk icon (or press Ctrl + S / Cmd + S) to save.


------------------------------------------------------------------------------
STEP 5: DEPLOY AS A WEB APP (VERY IMPORTANT)
------------------------------------------------------------------------------
1. At the top right of the Google Apps Script editor, click the blue button:
   "Deploy"  ===>  "New deployment"
2. On the left side of the popup window, click the gear icon ⚙️ next to "Select type".
3. Select "Web app".
4. Fill in these settings EXACTLY:
   - Description: "OopsWish Production Web App"
   - Execute as: "Me (your_email@gmail.com)"
   - Who has access: "Anyone"  <--- (CRITICAL: Do NOT choose 'Only myself')
5. Click "Deploy".
6. Google will ask you to authorize access:
   - Click "Authorize access".
   - Choose your Google account.
   - You might see a screen saying "Google hasn't verified this app".
     Click "Advanced" (at the bottom left) and then click:
     "Go to OopsWish Backend (unsafe)".
   - Click "Allow".
7. Copy the "Web app URL" shown on the screen.
   It looks like:
   https://script.google.com/macros/s/AKfycbz.../exec


------------------------------------------------------------------------------
STEP 6: PASTE THE WEB APP URL INTO YOUR WEBSITE
------------------------------------------------------------------------------
1. Open your project in VS Code.
2. Open `script.js`.
3. Right at the top, find:
   
   const CONFIG = {
     whatsapp: "8801XXXXXXXXX",
     email: "your@email.com",
     facebook: "https://facebook.com/oopswish",
     instagram: "https://instagram.com/oopswish",
     googleScriptUrl: "YOUR_GOOGLE_APPS_SCRIPT_URL"
   };

4. Replace `"YOUR_GOOGLE_APPS_SCRIPT_URL"` with the Web app URL you copied in Step 5:
   
   googleScriptUrl: "https://script.google.com/macros/s/AKfycbz.../exec"

5. Save `script.js`.


------------------------------------------------------------------------------
STEP 7: TEST YOUR ORDER FORM
------------------------------------------------------------------------------
1. Open `index.html` in your browser.
2. Scroll to the "Start Your Surprise Order" form.
3. Fill in a test order (e.g. your own name, WhatsApp number, message, and pick an image).
4. Click "Submit Surprise Order 🚀".
5. You will see the beautiful 3D celebration popup: "Order Received! 🎉"
6. Check your:
   - Google Sheet: A new row with Order ID, customer details, and Drive photo link will appear.
   - Google Drive: You will find a new folder "OopsWish Orders" -> "OW-XXXX" -> "photos" with the uploaded image.
   - Gmail: You will receive an instant email with all the customer information!

That's it! Your OopsWish digital surprise order backend is 100% active and live.
==============================================================================
