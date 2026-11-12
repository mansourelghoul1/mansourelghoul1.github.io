# Send the form to a Google Sheet (about 10 minutes, free)

Until this is done, the form still works: it hands the client's answers to WhatsApp and they send them to you. After this, every sign-up also lands as a row in your Google Sheet, automatically.

Do this signed in to **your** Google account (mansourelghoul1@gmail.com).

1. Go to **sheets.new**. Name the sheet **ELGHOUL – Sign-ups**.
2. Menu **Extensions → Apps Script**.
3. Delete everything in the editor. Paste the whole of `google-apps-script.gs` (in this folder). Click **Save** (💾).
4. Optional check: pick **testRow** in the function menu at the top and click **Run**. Allow access when Google asks. A tab called **Sign-ups** appears in your sheet with one TEST row. Delete that row.
5. Click **Deploy → New deployment**.
   - Gear icon ⚙ → **Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
   - Click **Deploy**, allow access, and **copy the Web app URL** (it ends in `/exec`).
6. Open `start.html` and paste the URL between the quotes:
   ```js
   var FORM_ENDPOINT = "https://script.google.com/macros/s/…/exec";
   ```
7. Save, upload the change to GitHub, wait a minute, and send yourself a test sign-up from your phone. A new row should appear in the sheet.

**Status column:** each row starts as `New`. Change it yourself to `Paid`, `Active` etc.

**If you change the script later:** Deploy → **Manage deployments** → ✏ → Version: **New version** → Deploy. The URL stays the same.

**Get an email for every sign-up (optional):** in the sheet, **Tools → Notification settings → Edit notifications → Any changes are made → Email – right away**.
