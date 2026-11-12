/**
 * ELGHOUL · الغول — receives the website form and adds one row per sign-up.
 * Paste this whole file into the Google Sheet: Extensions → Apps Script.
 * Then Deploy → New deployment → Web app (see GOOGLE-SHEET.md).
 */
var SHEET_NAME = "Sign-ups";
var COLUMNS = [
  "submission_date", "form_lang",
  "plan", "months", "list_price_egp", "discount_code", "discount_pct", "price_egp",
  "client_name", "age", "height_cm", "weight_kg", "whatsapp_number", "email",
  "fitness_goal", "fitness_level", "training_days_per_week", "injuries", "gym_type",
  "disliked_foods", "supplements", "wake_up_time", "sleep_time", "training_time",
  "status"
];

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sh = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
    if (sh.getLastRow() === 0) {
      sh.appendRow(COLUMNS);
      sh.setFrozenRows(1);
      sh.getRange(1, 1, 1, COLUMNS.length).setFontWeight("bold");
    }
    data.status = data.status || "New";
    // Text format stops Sheets turning phone numbers and times into numbers/dates.
    var row = COLUMNS.map(function (c) { var v = data[c]; return v == null ? "" : String(v); });
    var r = sh.getLastRow() + 1;
    sh.getRange(r, 1, 1, row.length).setNumberFormat("@").setValues([row]);
    return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) })).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

// Optional: run this once from the editor to check the sheet is set up.
function testRow() {
  doPost({ postData: { contents: JSON.stringify({ submission_date: new Date().toISOString(), client_name: "TEST - delete me", plan: "BASIC", months: 1, price_egp: 399 }) } });
}
