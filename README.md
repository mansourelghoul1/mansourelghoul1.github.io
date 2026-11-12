# ELGHOUL · الغول — website

Coach Mansour Elghoul's website. Plain files, no build step: edit, upload, done. Hosted on GitHub Pages.

```
index.html        landing page (Arabic by default, English switch)
start.html        sign-up form → his Google Form → his Google Sheet
css/ghoul.css     colours, fonts, buttons (the whole look)
js/site.js        WhatsApp number, email, Instagram, InstaPay + the language switch  ← contact details
js/plans.js       packages, prices, discount codes                                   ← prices
assets/           logo and photos go here
```

## Changing things

- **Prices, package features, discount codes:** `js/plans.js`. The landing page and the form both read it.
- **WhatsApp number, email, Instagram, InstaPay:** top of `js/site.js`.
- **Text:** every sentence exists twice, `<span class="ar">…</span><span class="en">…</span>`. Change both.
- **Where the form goes:** every sign-up is sent to the Google Form "Mansour Elghoul Online Coaching – Application Form", so it lands in its Google Sheet. The form's address and question IDs are in `GOOGLE_FORM` at the top of the script in `start.html`.
  - Keep the Google Form **Accepting responses**, or website sign-ups are lost.
  - Don't add a file-upload question or "Limit to 1 response": both make Google demand a sign-in, which blocks the website.
  - Renaming a question or its title is fine. Deleting and re-creating a question gives it a new ID: update `GOOGLE_FORM.ids`. Changing a choice's wording: change the same text in `OPT` in `start.html`.

## Photos still to add

In `index.html`, the striped boxes are placeholders: 3 client before/after photos (with each client's OK) and 1 coach photo in the gym. Portrait 3:4, about 1600 px on the long side.
