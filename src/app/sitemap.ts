import type { MetadataRoute } from "next";
import { knowledgeArticles } from "@/content/knowledge/articles";
import { siteConfig } from "@/lib/seo/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/knowledge",
    "/b2g-vision",
    "/tech-specs",
    "/join-waitlist",
    "/privacy-policy",
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const articleRoutes = knowledgeArticles.map((article) => ({
    url: `${siteConfig.url}/knowledge/${article.slug}`,
    lastModified: new Date(article.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...articleRoutes];
}
