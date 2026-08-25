export const siteConfig = {
  name: "وقاية جين",
  nameEn: "WiqayaGen",
  // TODO: swap to the custom domain (wiqaya-gen.com) the moment DNS is live.
  // Until then this MUST match the real deployment URL or canonical/OG tags will be wrong.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://wiqaya-gen.vercel.app",
  description:
    "أول منصة سعودية تدمج الذكاء الاصطناعي والتحليل الجيني للوقاية من الأمراض، ضمن رؤية تحول القطاع الصحي 2030.",
  locale: "ar_SA",
  logoPath: "/wiqaya-logo.png", // reuse existing asset if present, otherwise export the navbar mark as a static PNG
  founderNote:
    "خوارزميات وقاية جين مطوَّرة بشكل مستقل استناداً إلى بيانات بحثية عامة منشورة، ولا تمثل ارتباطاً إدارياً مباشراً ببرنامج الجينوم السعودي.",
};
