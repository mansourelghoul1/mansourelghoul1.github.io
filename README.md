# ELGHOUL · الغول — website

Coach Mansour Elghoul's website. Plain files, no build step: edit, upload, done. Hosted on GitHub Pages.

```
index.html        landing page (Arabic by default, English switch)
start.html        sign-up form → Google Sheet (or WhatsApp until the sheet is connected)
css/ghoul.css     colours, fonts, buttons (the whole look)
js/site.js        WhatsApp number, email, Instagram, InstaPay + the language switch  ← contact details
js/plans.js       packages, prices, discount codes                                   ← prices
setup/            Google Sheet script + instructions
assets/           logo and photos go here
```

## Changing things

- **Prices, package features, discount codes:** `js/plans.js`. The landing page and the form both read it.
- **WhatsApp number, email, Instagram, InstaPay:** top of `js/site.js`.
- **Text:** every sentence exists twice, `<span class="ar">…</span><span class="en">…</span>`. Change both.
- **Where the form goes:** `FORM_ENDPOINT` at the top of the script in `start.html` (see `setup/GOOGLE-SHEET.md`).

## Photos still to add

In `index.html`, the striped boxes are placeholders: 3 client before/after photos (with each client's OK) and 1 coach photo in the gym. Portrait 3:4, about 1600 px on the long side.
