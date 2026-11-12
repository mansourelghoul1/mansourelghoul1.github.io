/* ELGHOUL · الغول — packages and prices.  ← EDIT PRICES HERE
   Both the landing page (#plans) and the form (start.html) read this file,
   so a price changed here changes everywhere. Prices are in EGP. */
window.GHOUL_PLANS = {
  durations: [1, 3, 6, 12],
  defaultDuration: 3,
  popular: "popular",
  plans: [
    // CUSTOM PROGRAM (was BASIC) is a one-time program, not a subscription:
    // one price, no length to pick, no online coaching.
    { id: "basic", name: "CUSTOM PROGRAM", oneTime: true, price: 399,
      features: {
        ar: ["برنامج تمرين معمول ليك من إجاباتك", "كل تمرين متشرح بالتفصيل", "من غير متابعة أونلاين"],
        en: ["A training program made for you from your answers", "Every exercise explained in detail", "No online coaching or check-ins"] } },
    { id: "popular", name: "MOST POPULAR",
      prices: { 1: 799, 3: 2199, 6: 3999, 12: 7499 },
      features: {
        ar: ["برنامج تمرين معمول ليك", "نظام أكل معمول ليك", "متابعة تقدمك", "دعم على الواتساب", "رد خلال ٦ ساعات"],
        en: ["Customized workout program", "Customized nutrition plan", "Progress tracking", "WhatsApp support", "Response within 6 hours"] } },
    { id: "vip", name: "VIP",
      prices: { 1: 1099, 3: 2999, 6: 5499, 12: 9999 },
      features: {
        ar: ["كوتشينج بريميوم على مقاسك", "برنامج تمرين ونظام أكل معمولين ليك", "مكالمة فيديو ١:١ كل أسبوع", "٢ مكالمة فيديو وقت التمرين", "تواصل مباشر مع الكوتش", "أولوية في العروض"],
        en: ["Premium personalized coaching", "Customized training & nutrition plans", "Weekly 1:1 video call", "2 workout video calls", "Direct access to your coach", "Priority access to offers"] } }
  ],
  consultation: { minutes: 60, price: 250 },
  // Discount codes: "CODE": percent off. Typed in the form, not case-sensitive.
  codes: { "GHOUL15": 15 }
};

// Price of a plan for a length in months (one-time plans ignore the length).
window.ghoulPrice = function (p, months) { return p.oneTime ? p.price : p.prices[months]; };

window.ghoulMoney = function (n) { return n.toLocaleString("en-US") + " EGP"; };
window.ghoulMoneyAr = function (n) { return n.toLocaleString("en-US") + " جنيه"; };
window.ghoulDur = function (m, lang) {
  if (lang === "ar") return m === 1 ? "شهر" : m === 12 ? "سنة" : (m + " شهور");
  return m === 1 ? "1 month" : m === 12 ? "12 months" : (m + " months");
};
