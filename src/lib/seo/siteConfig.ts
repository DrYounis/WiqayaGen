export const siteConfig = {
  name: "وقاية جين",
  nameEn: "WiqayaGen",
  // Canonical domain — gen.sara.plus (override via NEXT_PUBLIC_SITE_URL if it changes).
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://gen.sara.plus",
  description:
    "أول منصة سعودية تدمج الذكاء الاصطناعي والتحليل الجيني للوقاية من الأمراض، ضمن رؤية تحول القطاع الصحي 2030.",
  locale: "ar_SA",
  logoPath: "/wiqaya-logo.png", // reuse existing asset if present, otherwise export the navbar mark as a static PNG
  founderNote:
    "خوارزميات وقاية جين مطوَّرة بشكل مستقل استناداً إلى بيانات بحثية عامة منشورة، ولا تمثل ارتباطاً إدارياً مباشراً ببرنامج الجينوم السعودي.",
};
