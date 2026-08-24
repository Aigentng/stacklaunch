# Contact form to Google Sheets

The Contact page form (name, work email, company, message) writes each
submission as a new row in a Google Sheet, using a small script attached
to the Sheet itself. No separate server or paid service is involved, and
it stays entirely within the client's own free Google account.

## One-time setup

### 1. Create the Sheet

1. Go to [sheets.google.com](https://sheets.google.com) and create a new
   blank spreadsheet.
2. Name it something like "StackLaunch contact form submissions".
3. In row 1, add these column headers: `Timestamp`, `Name`, `Email`,
   `Company`, `Message`.

### 2. Add the script

1. In the Sheet, go to **Extensions → Apps Script**.
2. Delete whatever is in the editor and paste this in its place:

   ```javascript
   function doPost(e) {
     var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
     var data = JSON.parse(e.postData.contents);

     sheet.appendRow([
       new Date(),
       data.name || '',
       data.email || '',
       data.company || '',
       data.detail || '',
     ]);

     return ContentService
       .createTextOutput(JSON.stringify({ result: 'success' }))
       .setMimeType(ContentService.MimeType.JSON);
   }
   ```

3. Click the disk icon (or Ctrl/Cmd+S) to save. Give the project a name
   like "Contact form receiver" when prompted.

### 3. Deploy it as a Web App

1. Click **Deploy → New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Set:
   - **Execute as**: Me (your own Google account)
   - **Who has access**: Anyone
4. Click **Deploy**.
5. The first time, Google will ask you to authorise the script. Click
   through the consent screens (it will warn the app is unverified,
   which is expected for a script you wrote yourself; click **Advanced**
   then **Go to (project name)** to proceed).
6. Copy the **Web app URL** it gives you. It looks like:
   `https://script.google.com/macros/s/AKfycb.../exec`

### 4. Wire it into the site

Send that URL back, and it gets pasted into `SHEET_ENDPOINT` in
`src/pages/contact.astro`, committed and pushed. Once deployed, form
submissions on the live site will start appearing as new rows in the
Sheet within a few seconds.

## Notes

- If you ever edit the script later (Extensions → Apps Script again),
  you need to **Deploy → Manage deployments → edit (pencil icon) → New
  version** for the change to take effect. Saving the script alone does
  not update the live Web App.
- The Web app URL is not secret in the way a password is, but treat it
  as something you would not casually publish. Anyone with the URL can
  submit rows to the Sheet; there is no login required for the form to
  work.
- Until `SHEET_ENDPOINT` is set, the form still shows the "message
  received" confirmation to visitors but does not save anything, so the
  site is not broken while this is being set up.
