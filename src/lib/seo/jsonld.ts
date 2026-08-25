import { siteConfig } from "./siteConfig";
import type { KnowledgeArticle } from "@/content/knowledge/articles";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: `${siteConfig.name} | ${siteConfig.nameEn}`,
    url: siteConfig.url,
    description: siteConfig.description,
    areaServed: "SA",
    disambiguatingDescription: siteConfig.founderNote,
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function articleJsonLd(article: KnowledgeArticle) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": `${siteConfig.url}/knowledge/${article.slug}`,
    headline: article.title,
    description: article.metaDescription,
    inLanguage: "ar",
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: {
      "@type": "Organization",
      name: `${siteConfig.name} | ${siteConfig.nameEn}`,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: `${siteConfig.name} | ${siteConfig.nameEn}`,
      url: siteConfig.url,
    },
    about: {
      "@type": "MedicalTherapy",
      name: "العلاج الجيني (Gene Therapy)",
    },
    audience: {
      "@type": "MedicalAudience",
      audienceType: "Patient, Caregiver, Health Policy Maker",
    },
    mainEntityOfPage: `${siteConfig.url}/knowledge/${article.slug}`,
  };
}

export function faqJsonLd(article: KnowledgeArticle) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faq.map((qa) => ({
      "@type": "Question",
      name: qa.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: qa.answer,
      },
    })),
  };
}
