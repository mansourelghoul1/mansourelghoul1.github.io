/* ELGHOUL · الغول — packages and prices.  ← EDIT PRICES HERE
   Both the landing page (#plans) and the form (start.html) read this file,
   so a price changed here changes everywhere. Prices are in EGP. */
window.GHOUL_PLANS = {
  durations: [1, 3, 6, 12],
  defaultDuration: 3,
  popular: "popular",
  plans: [
    { id: "basic", name: "BASIC",
      prices: { 1: 399, 3: 999, 6: 1799, 12: 3299 },
      features: {
        ar: ["برنامج تمرين معمول ليك", "توجيه في التمرين", "متابعة تقدمك"],
        en: ["Customized training program", "Training guidance", "Progress tracking"] } },
    { id: "popular", name: "MOST POPULAR",
      prices: { 1: 799, 3: 2199, 6: 3999, 12: 7499 },
      features: {
        ar: ["برنامج تمرين معمول ليك", "نظام أكل معمول ليك", "متابعة تقدمك", "دعم على الواتساب", "رد خلال ٦ ساعات"],
        en: ["Customized workout program", "Customized nutrition plan", "Progress tracking", "WhatsApp support", "Response within 6 hours"] } },
    { id: "advanced", name: "ADVANCED",
      prices: { 1: 1199, 3: 3299, 6: 5999, 12: 10999 },
      features: {
        ar: ["كوتشينج متقدم على مقاسك", "برنامج تمرين ونظام أكل معمولين ليك", "متابعة أدائك", "ملاحظات على تكنيك التمارين", "تعديل البرنامج بشكل منتظم"],
        en: ["Advanced personalized coaching", "Customized training & nutrition plans", "Performance monitoring", "Technique feedback", "Regular program adjustments"] } },
    { id: "vip", name: "VIP",
      prices: { 1: 1499, 3: 3999, 6: 7299, 12: 13499 },
      features: {
        ar: ["كوتشينج بريميوم على مقاسك", "برنامج تمرين ونظام أكل معمولين ليك", "مكالمة فيديو ١:١ كل أسبوع", "٢ مكالمة فيديو وقت التمرين", "تواصل مباشر مع الكوتش", "أولوية في العروض"],
        en: ["Premium personalized coaching", "Customized training & nutrition plans", "Weekly 1:1 video call", "2 workout video calls", "Direct access to your coach", "Priority access to offers"] } }
  ],
  consultation: { minutes: 60, price: 250 },
  // Discount codes: "CODE": percent off. Typed in the form, not case-sensitive.
  codes: { "GHOUL15": 15 }
};

window.ghoulMoney = function (n) { return n.toLocaleString("en-US") + " EGP"; };
window.ghoulMoneyAr = function (n) { return n.toLocaleString("en-US") + " جنيه"; };
window.ghoulDur = function (m, lang) {
  if (lang === "ar") return m === 1 ? "شهر" : m === 12 ? "سنة" : (m + " شهور");
  return m === 1 ? "1 month" : m === 12 ? "12 months" : (m + " months");
};
