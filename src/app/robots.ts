import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo/siteConfig";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/dashboard", "/monitor"],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
