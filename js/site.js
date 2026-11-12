/* ELGHOUL · الغول — shared settings and the language switch.
   Change contact details here once; both pages read them. */
window.GHOUL = {
  whatsapp: "201039994995",                 // international, digits only
  email: "mansourelghoul1@gmail.com",
  instagram: "https://www.instagram.com/mansourelgoul1/",
  instapayLink: "https://ipn.eg/S/mansourelghoul/instapay/8rzYBM",
  instapayHandle: "mansourelghoul@instapay"
};

(function () {
  "use strict";
  var KEY = "ghoul-lang";

  function apply(lang) {
    var html = document.documentElement;
    html.lang = lang;
    html.dir = lang === "ar" ? "rtl" : "ltr";
    document.querySelectorAll("[data-lang-btn]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang-btn") === lang));
    });
    var t = document.querySelector("title[data-ar]");
    if (t) document.title = t.getAttribute("data-" + lang);
    document.dispatchEvent(new CustomEvent("ghoul:lang", { detail: lang }));
  }

  function initial() {
    var q = new URLSearchParams(location.search).get("lang");
    if (q === "ar" || q === "en") return q;
    try { var s = localStorage.getItem(KEY); if (s === "ar" || s === "en") return s; } catch (e) {}
    return "ar";
  }

  window.ghoulLang = function () { return document.documentElement.lang === "en" ? "en" : "ar"; };
  window.ghoulSetLang = function (l) { try { localStorage.setItem(KEY, l); } catch (e) {} apply(l); };

  apply(initial());

  document.addEventListener("click", function (e) {
    var b = e.target.closest && e.target.closest("[data-lang-btn]");
    if (b) window.ghoulSetLang(b.getAttribute("data-lang-btn"));
  });

  // contact links filled from settings
  function fill() {
    var g = window.GHOUL;
    document.querySelectorAll("[data-wa]").forEach(function (a) {
      var msg = a.getAttribute("data-wa-" + window.ghoulLang()) || a.getAttribute("data-wa") || "";
      a.href = "https://wa.me/" + g.whatsapp + (msg ? "?text=" + encodeURIComponent(msg) : "");
    });
    document.querySelectorAll("[data-ig]").forEach(function (a) { a.href = g.instagram; });
    document.querySelectorAll("[data-mail]").forEach(function (a) { a.href = "mailto:" + g.email; if (!a.textContent.trim()) a.textContent = g.email; });
  }
  fill();
  document.addEventListener("ghoul:lang", fill);

  // header border on scroll
  var head = document.querySelector(".site-head");
  if (head) {
    var on = function () { head.classList.toggle("scrolled", window.scrollY > 8); };
    window.addEventListener("scroll", on, { passive: true }); on();
  }
})();
