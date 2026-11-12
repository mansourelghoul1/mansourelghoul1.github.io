/* ELGHOUL · الغول — client transformations (#results).
   Photos: assets/results/rN-before.webp and rN-after.webp (frames already removed).
   To add one: drop the two photos in that folder and add an entry below.
   Only show clients who agreed to have their photos on the site. */
window.GHOUL_RESULTS = [
  { n: 1, big: { ar: "−45 كجم", en: "−45 kg" }, from: 133, to: 88, weeks: 16,
    extra: { ar: "أونلاين · خسارة دهون وبناء عضل", en: "Online · lost fat, gained muscle" } },
  { n: 2, big: { ar: "−25 كجم", en: "−25 kg" }, from: 117, to: 92, weeks: 12,
    extra: { ar: "ديدليفت من 100 لـ 175 كجم", en: "Deadlift 100 → 175 kg (+75)" } },
  { n: 3, big: { ar: "−22 كجم", en: "−22 kg" }, from: 108, to: 86, weeks: 12 },
  { n: 4, big: { ar: "−21 كجم", en: "−21 kg" }, from: 98, to: 77, weeks: 20 },
  { n: 5, big: { ar: "−21 كجم", en: "−21 kg" }, from: 98, to: 77, weeks: 12 },
  { n: 6, big: { ar: "دهون أقل، عضل أكتر", en: "Less fat, more muscle" }, from: 81, to: 84, weeks: 12 },
  { n: 7, big: { ar: "ديدليفت +70 كجم", en: "Deadlift +70 kg" }, from: 77, to: 78, weeks: 12,
    extra: { ar: "ديدليفت من 80 لـ 150 كجم · عضل +3 · دهون −2", en: "80 → 150 kg · muscle +3 kg · fat −2 kg" } },
  { n: 8, big: { ar: "+4 كجم عضل", en: "+4 kg muscle" }, from: 76, to: 78, weeks: 12,
    extra: { ar: "دهون −2 كجم", en: "Fat −2 kg" } }
];

(function () {
  "use strict";
  var grid = document.getElementById("resultsGrid"), more = document.getElementById("resultsMore");
  if (!grid) return;
  var SHOW = 4, open = false;
  function render() {
    var ar = window.ghoulLang() === "ar";
    var list = open ? window.GHOUL_RESULTS : window.GHOUL_RESULTS.slice(0, SHOW);
    grid.innerHTML = list.map(function (r) {
      var line = ar ? ("من " + r.from + " لـ " + r.to + " كجم · " + r.weeks + " أسبوع")
                    : ('<span class="num">' + r.from + " → " + r.to + " kg</span> · " + r.weeks + " weeks");
      var alt = ar ? "عميل للكوتش منصور الغول" : "A client of Coach Mansour Elghoul";
      return '<figure class="tr">' +
        '<div class="pair">' +
          '<div class="shot"><img src="assets/results/r' + r.n + '-before.webp" alt="' + alt + (ar ? " قبل" : ", before") + '" loading="lazy" decoding="async"><span>' + (ar ? "قبل" : "Before") + '</span></div>' +
          '<div class="shot"><img src="assets/results/r' + r.n + '-after.webp" alt="' + alt + (ar ? " بعد" : ", after") + '" loading="lazy" decoding="async"><span class="after">' + (ar ? "بعد" : "After") + '</span></div>' +
        '</div>' +
        '<figcaption><b>' + r.big[ar ? "ar" : "en"] + '</b><span>' + line + '</span>' +
          (r.extra ? '<em>' + r.extra[ar ? "ar" : "en"] + '</em>' : '') + '</figcaption>' +
      '</figure>';
    }).join("");
    if (more) {
      more.hidden = window.GHOUL_RESULTS.length <= SHOW;
      more.textContent = open ? (ar ? "اعرض أقل" : "Show fewer") : (ar ? "شوف كل النتايج (" + window.GHOUL_RESULTS.length + ")" : "See all " + window.GHOUL_RESULTS.length + " results");
    }
  }
  if (more) more.addEventListener("click", function () {
    open = !open; render();
    if (!open) document.getElementById("results").scrollIntoView({ block: "start" });
  });
  document.addEventListener("ghoul:lang", render);
  render();
})();
