import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/seo/siteConfig";
import { organizationJsonLd } from "@/lib/seo/jsonld";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  variable: "--font-tajawal",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "وقاية جين | WiqayaGen",
    template: "%s | وقاية جين",
  },
  description: siteConfig.description,
  keywords: [
    "الجينوم السعودي",
    "الوقاية الوراثية",
    "مؤشر وقاية",
    "تحليل جيني السعودية",
    "العلاج الجيني",
    "Polygenic Risk Score",
  ],
  authors: [{ name: "WiqayaGen" }],
  robots: { index: true, follow: true },
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title: "وقاية جين | WiqayaGen",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: "وقاية جين",
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "وقاية جين | WiqayaGen",
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgJsonLd = organizationJsonLd();
  return (
    <html lang="ar" dir="rtl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className={`${tajawal.variable} font-sans antialiased bg-slate-50 text-slate-800`}>
        {children}
      </body>
    </html>
  );
}
