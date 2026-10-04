==============================================================================
OOPSWISH — OFFICIAL WEBSITE DOCUMENTATION & EDITING GUIDE
==============================================================================
Brand: OopsWish
Tagline: "Turn Your Feelings Into An Unforgettable Surprise."
Bangla Tagline: "আপনার অনুভূতিকে বানিয়ে দিন একটি unforgettable surprise."
Architecture: Pure HTML5 + CSS3 + Vanilla JavaScript (Static Web Application)
No frameworks, no build steps, no npm, no Node.js required.
Works directly by double-clicking index.html!

==============================================================================
TABLE OF CONTENTS
==============================================================================
1. How to Change or Add Images (Auto-Format Supported)
2. How to Add a New Sample Template
3. How to Clear Browser Cache (If Images Don't Show Instantly)
4. How to Open and Run the Website
5. How to Change the Logo
6. How to Change Prices
7. How to Change WhatsApp Number & Links
8. Backend Integration (Google Apps Script & Google Sheets)
9. How to Deploy Free on Vercel

==============================================================================
1. HOW TO CHANGE OR ADD IMAGES (AUTO-FORMAT SUPPORTED)
==============================================================================
The website now includes a Smart Image Loader!
Supported image formats: .jpg, .png, .jpeg, .webp, .JPG, .PNG

To replace an existing sample image:
1. Open your OopsWish folder in VS Code or in your Computer's File Explorer.
2. Go to the appropriate sample folder:
   - For Birthday:    assets/samples/birthday/
   - For Anniversary: assets/samples/anniversary/
   - For Proposal:    assets/samples/proposal/
   - For Keepsake:    assets/frames/
3. Take your new image and rename it to the template name:
   For example: birthday-01.jpg (or birthday-01.png, birthday-01.webp)
4. Put your image into that folder (replace or overwrite).
5. Open or refresh index.html in your browser.
6. The Smart Loader will automatically find and display your image!

==============================================================================
2. HOW TO ADD A NEW SAMPLE TEMPLATE
==============================================================================
All sample cards are generated automatically from the SAMPLE_TEMPLATES list in script.js.

Step-by-step:
1. Put your new sample picture inside the appropriate folder:
   Example: assets/samples/birthday/birthday-10.jpg
2. Open script.js in VS Code or any text editor.
3. Look at section 2 labeled:
   // =========================================================
   // 2. SAMPLE TEMPLATES
   // =========================================================
4. Copy an existing template block and paste it into the SAMPLE_TEMPLATES list:

    {
        id: "birthday-10",
        title: "Birthday Neon Glow 2",
        category: "Birthday",
        tier: "Basic",
        image: "assets/samples/birthday/birthday-10.jpg",
        link: "https://your-live-demo-link.vercel.app/",
        price: "৳299"
    }

5. Change title, category, tier (Basic, Premium, or Pro), image path, link, and price.
6. Save script.js and refresh your browser.

==============================================================================
3. HOW TO CLEAR BROWSER CACHE (IF IMAGES DON'T SHOW INSTANTLY)
==============================================================================
When you replace an image with the same name, web browsers often cache the old photo.
To see your new photo immediately:
- On Windows / Chrome / Edge: Press Ctrl + F5 or Ctrl + Shift + R
- On Mac: Press Cmd + Shift + R
- Or open index.html in an Incognito / Private window.

==============================================================================
4. HOW TO OPEN AND RUN THE WEBSITE
==============================================================================
This website is 100% static.

Method 1 (Direct Browser):
1. Open the OopsWish folder.
2. Double-click on index.html.
3. It will open directly in Chrome, Edge, Safari, or Firefox.

Method 2 (Using VS Code Live Server):
1. Open the OopsWish folder in VS Code.
2. Right-click on index.html and select "Open with Live Server".

==============================================================================
5. HOW TO CHANGE THE LOGO
==============================================================================
To change the Brand Logo:
- Put your new logo image in: assets/logo/logo.png
- Keep the name logo.png.

==============================================================================
6. HOW TO CHANGE PRICES
==============================================================================
- Product starting prices are displayed in index.html and script.js sample templates.
- You can edit any price directly in index.html (under the PRICING section) and in
  script.js (under SAMPLE_TEMPLATES).

==============================================================================
7. HOW TO CHANGE WHATSAPP NUMBER & LINKS
==============================================================================
At the top of script.js, find the CONFIG section:

const CONFIG = {
    whatsapp: "8801341078165",
    googleScriptUrl: "https://script.google.com/macros/s/AKfycbwLREYVXrTHO_6eptsYPl0EiqHvEmwGAP85ASjY-3GQ9oPXCVbVY_qRK_Y-YqFw10yofg/exec"
};

==============================================================================
8. BACKEND INTEGRATION (GOOGLE APPS SCRIPT)
==============================================================================
The order form connects directly to your Google Apps Script Web App URL.
When a user submits an order, it sends customer details directly to Google Sheets
and triggers an order summary email to the business owner. Customers can also
order directly via WhatsApp using the pre-filled template button.

==============================================================================
9. HOW TO DEPLOY FREE ON VERCEL
==============================================================================
1. Push your OopsWish folder to a GitHub repository.
2. Log into https://vercel.com and import the repository.
3. Deploy! Because it is static HTML/CSS/JS, no build command is needed.

==============================================================================
Created with ❤️ for OopsWish — Turn Your Feelings Into An Unforgettable Surprise.
==============================================================================
