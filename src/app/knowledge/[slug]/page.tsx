import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, ArrowLeft } from "lucide-react";
import { knowledgeArticles, getKnowledgeArticle } from "@/content/knowledge/articles";
import { siteConfig } from "@/lib/seo/siteConfig";
import { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/lib/seo/jsonld";

export function generateStaticParams() {
  return knowledgeArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getKnowledgeArticle(slug);
  if (!article) return {};

  const url = `${siteConfig.url}/knowledge/${article.slug}`;
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url,
      type: "article",
      locale: siteConfig.locale,
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.metaDescription,
    },
  };
}

export default async function KnowledgeArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getKnowledgeArticle(slug);
  if (!article) return notFound();

  const jsonLdBlocks = [
    articleJsonLd(article),
    faqJsonLd(article),
    breadcrumbJsonLd([
      { name: "الرئيسية", url: siteConfig.url },
      { name: "مركز المعرفة", url: `${siteConfig.url}/knowledge` },
      { name: article.title, url: `${siteConfig.url}/knowledge/${article.slug}` },
    ]),
  ];

  return (
    <article className="min-h-screen bg-white" dir="rtl">
      {jsonLdBlocks.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}

      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Breadcrumb (visible) */}
        <nav className="text-xs text-slate-400 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-teal-600">الرئيسية</Link>
          <span>/</span>
          <Link href="/knowledge" className="hover:text-teal-600">مركز المعرفة</Link>
        </nav>

        <span className="text-xs font-bold text-teal-600 uppercase tracking-wide">
          {article.heroKicker}
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 mb-4 leading-tight">
          {article.title}
        </h1>
        <div className="flex items-center gap-4 text-sm text-slate-400 mb-10 pb-6 border-b border-slate-100">
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" /> {article.readingTimeMinutes} دقائق قراءة
          </span>
          <span>آخر تحديث: {new Date(article.updatedAt).toLocaleDateString("ar-SA")}</span>
        </div>

        <div className="prose prose-lg prose-slate max-w-none">
          {article.intro.map((p, i) => (
            <p key={i} className="text-slate-600 leading-loose mb-6 text-lg">{p}</p>
          ))}

          {article.sections.map((section, i) => (
            <section key={i} className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">{section.heading}</h2>
              {section.paragraphs.map((p, j) => (
                <p key={j} className="text-slate-600 leading-loose mb-4">{p}</p>
              ))}
            </section>
          ))}

          {/* Summary table — GEO-friendly quick-scan block */}
          <div className="not-prose my-12 overflow-x-auto rounded-2xl border border-slate-100">
            <table className="w-full text-sm text-right">
              <thead className="bg-slate-50">
                <tr>
                  <th className="p-4 font-bold text-slate-900">المتطلب</th>
                  <th className="p-4 font-bold text-slate-900">باختصار</th>
                </tr>
              </thead>
              <tbody>
                {article.summaryTable.map((row, i) => (
                  <tr key={i} className="border-t border-slate-100">
                    <td className="p-4 font-bold text-teal-700 whitespace-nowrap">{row.requirement}</td>
                    <td className="p-4 text-slate-600">{row.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <section className="mb-10 bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 mb-3">{article.extraNote.heading}</h2>
            {article.extraNote.paragraphs.map((p, i) => (
              <p key={i} className="text-slate-600 leading-loose mb-2">{p}</p>
            ))}
          </section>

          {/* FAQ — must mirror faqJsonLd exactly */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">الأسئلة الشائعة</h2>
            <div className="space-y-4">
              {article.faq.map((qa, i) => (
                <div key={i} className="p-5 rounded-xl border border-slate-100 bg-white">
                  <h3 className="font-bold text-slate-900 mb-2">{qa.question}</h3>
                  <p className="text-slate-600 leading-relaxed">{qa.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-lg font-bold text-slate-900 mb-3">المصادر</h2>
            <ul className="text-sm text-slate-500 space-y-1">
              {article.sources.map((s, i) => (
                <li key={i}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer nofollow" className="hover:text-teal-600 hover:underline">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <div className="bg-amber-50 border border-amber-100 rounded-xl p-5 text-sm text-amber-900">
            {article.disclaimer}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-100">
          <Link href="/join-waitlist" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg font-bold hover:bg-slate-800 transition-colors">
            اطلب عرضاً تجريبياً لمنصة وقاية جين <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
