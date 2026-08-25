import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BookOpen, Clock } from "lucide-react";
import { knowledgeArticles } from "@/content/knowledge/articles";
import { siteConfig } from "@/lib/seo/siteConfig";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "مركز المعرفة الجينية | وقاية جين",
  description:
    "دليل وقاية جين المعرفي: مقالات علمية موثقة عن الجينوم، العلاج الجيني، والوقاية الوراثية، مدعومة بمصادر عالمية ومحلية.",
  alternates: { canonical: `${siteConfig.url}/knowledge` },
  openGraph: {
    title: "مركز المعرفة الجينية | وقاية جين",
    description: "مقالات علمية موثقة عن الجينوم والعلاج الجيني والوقاية الوراثية.",
    url: `${siteConfig.url}/knowledge`,
    locale: siteConfig.locale,
    type: "website",
  },
};

export default function KnowledgeHubPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "الرئيسية", url: siteConfig.url },
    { name: "مركز المعرفة", url: `${siteConfig.url}/knowledge` },
  ]);

  return (
    <div className="min-h-screen bg-slate-50" dir="rtl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 border border-teal-100 rounded-full text-teal-800 text-xs font-bold mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            مركز المعرفة الجينية
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            دليلك العلمي إلى عالم الجينوم
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {knowledgeArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/knowledge/${article.slug}`}
              className="block bg-white p-8 rounded-2xl border border-slate-100 hover:border-teal-300 hover:shadow-lg transition-all group"
            >
              <span className="text-xs font-bold text-teal-600 uppercase tracking-wide">
                {article.category}
              </span>
              <h2 className="text-xl font-bold text-slate-900 mt-2 mb-3 leading-snug">
                {article.title}
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2">
                {article.metaDescription}
              </p>
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {article.readingTimeMinutes} دقائق قراءة
                </span>
                <span className="flex items-center gap-1 text-teal-600 font-bold group-hover:gap-2 transition-all">
                  اقرأ المزيد <ArrowLeft className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
