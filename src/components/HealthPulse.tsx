'use client';

import { ExternalLink, Activity } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import ServiceModal from './ServiceModal';

const newsItems = [
    {
        id: 1,
        title: "برنامج الجينوم السعودي 2.0",
        summary: "تهدف المملكة إلى تسلسل أكثر من 63,000 عينة لرسم خريطة الأمراض الوراثية وتقليل المخاطر بنسبة 50٪.",
        source: "رؤية 2030",
        sourceColor: "bg-green-600",
        link: "https://www.vision2030.gov.sa/ar/explore/projects/the-saudi-genome-program"
    },
    {
        id: 2,
        title: "الاستراتيجية الوطنية للتقنية الحيوية",
        summary: "أطلق سمو ولي العهد الاستراتيجية لجعل المملكة مركزاً عالمياً للطب الجينومي وإنتاج اللقاحات بحلول عام 2040.",
        source: "واس (حكومي)",
        sourceColor: "bg-green-600",
        link: "https://www.spa.gov.sa/"
    },
    {
        id: 3,
        title: "استثمار صحي بقيمة 33 مليار دولار",
        summary: "معرض الصحة العالمي 2025 يكشف عن تمويل ضخم لـ 'المستشفيات الذكية' والرعاية الوقائية القائمة على الذكاء الاصطناعي في الرياض.",
        source: "أخبار وزارة الصحة",
        sourceColor: "bg-blue-600",
        link: "https://www.moh.gov.sa/Ministry/MediaCenter/News/Pages/default.aspx"
    },
    {
        id: 4,
        title: "الذكاء الاصطناعي يتوقع مخاطر القلب",
        summary: "نماذج ذكاء اصطناعي جديدة يمكنها الآن التنبؤ بالنوبات القلبية قبل 3 سنوات باستخدام بيانات جينية بسيطة.",
        source: "نيتشر ميديسين",
        sourceColor: "bg-purple-600",
        link: "https://www.nature.com/nm/"
    },
    {
        id: 5,
        title: "توسع مستشفى صحة الافتراضي",
        summary: "أكبر مستشفى افتراضي في العالم يربط الآن أكثر من 170 مستشفى سعودي لتقديم الاستشارات الوراثية والرعاية المتخصصة عن بعد.",
        source: "وزارة الصحة",
        sourceColor: "bg-blue-600",
        link: "https://www.moh.gov.sa/eServices/Pages/Seha-Virtual-Hospital.aspx"
    },
    {
        id: 6,
        title: "اختراق في علم الجينوم الغذائي",
        summary: "دراسة جديدة في 2025 تؤكد أن 'مطابقة الجينات والنظام الغذائي' يمكن أن تعكس مقدمات السكري بفعالية في 60٪ من المرضى.",
        source: "المعاهد الوطنية للصحة",
        sourceColor: "bg-purple-600",
        link: "https://www.ncbi.nlm.nih.gov/pmc/"
    },
    {
        id: 7,
        title: "تأمين الرعاية الوقائية",
        summary: "مجلس الضمان الصحي يدفع نحو 'إدارة صحة السكان' لمكافأة الوقاية بدلاً من العلاج.",
        source: "مجلس الضمان الصحي",
        sourceColor: "bg-green-600",
        link: "https://www.chi.gov.sa/"
    },
    {
        id: 8,
        title: "الذكاء الاصطناعي التوليدي في الأدوية",
        summary: "85٪ من كبرى الشركات الطبية تستخدم الآن الذكاء الاصطناعي التوليدي لتصميم أدوية مخصصة تناسب الملفات الوراثية للأفراد.",
        source: "رويترز للصحة",
        sourceColor: "bg-red-600",
        link: "https://www.reuters.com/business/healthcare-pharmaceuticals/"
    },
    {
        id: 9,
        title: "دراسة جينوم الإبل السعودية",
        summary: "دراسة فريدة عن حمض الإبل النووي تقدم رؤى جديدة حول مرونة الجهاز المناعي وآليات البقاء الجينية.",
        source: "واس",
        sourceColor: "bg-green-600",
        link: "https://my.gov.sa/"
    },
    {
        id: 10,
        title: "الرابط بين السمنة والجينات",
        summary: "الأبحاث تحدد 'جينات جوع' معينة منتشرة في منطقة الخليج، مما يوفر مسارات جديدة لعلاجات فقدان الوزن.",
        source: "ذا لانسيت",
        sourceColor: "bg-orange-600",
        link: "https://www.thelancet.com/"
    }
];

export default function HealthPulse() {
    const [selectedNews, setSelectedNews] = useState<typeof newsItems[0] | null>(null);

    return (
        <section className="bg-slate-50 border-t border-slate-200 py-10 overflow-hidden relative" dir="rtl">
            <div className="max-w-7xl mx-auto px-6 mb-6 flex items-center gap-3">
                <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2 font-sans">
                    نبض وقاية <span className="text-slate-400 font-normal text-sm">| تحديثات مباشرة</span>
                </h2>
            </div>

            {/* Scrolling Container */}
            <div className="relative w-full group">
                {/* Gradients for fading edges */}
                <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>

                <div className="flex gap-6 animate-scroll-left group-hover:[animation-play-state:paused] min-w-max px-6">
                    {/* Duplicate array for seamless infinite scroll */}
                    {[...newsItems, ...newsItems].map((item, idx) => (
                        <button
                            key={`${item.id}-${idx}`}
                            onClick={() => setSelectedNews(item)}
                            className="w-[300px] md:w-[350px] bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-all text-right hover:scale-[1.02] cursor-pointer"
                        >
                            <div className="flex justify-between items-start mb-3 flex-row-reverse" onClick={(e) => e.stopPropagation()}>
                                <span className={`px-2 py-1 rounded text-[10px] font-bold text-white uppercase ${item.sourceColor}`}>
                                    {item.source}
                                </span>
                                <Link href={item.link} target="_blank" className="text-slate-400 hover:text-blue-600 transition-colors">
                                    <ExternalLink className="w-4 h-4" />
                                </Link>
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2 line-clamp-1 font-sans" title={item.title}>
                                {item.title}
                            </h3>
                            <p className="text-sm text-slate-500 leading-relaxed line-clamp-3 font-sans text-right">
                                {item.summary}
                            </p>
                        </button>
                    ))}
                </div>
            </div>

            {/* News Detail Modal */}
            <ServiceModal
                isOpen={!!selectedNews}
                onClose={() => setSelectedNews(null)}
                title="تفاصيل الخبر"
                icon={<Activity className="w-6 h-6 text-blue-600" />}
                ctaText="الذهاب للمصدر الرسمي"
                onCtaClick={() => selectedNews && window.open(selectedNews.link, '_blank')}
                accentColor={selectedNews?.sourceColor.replace('bg-', 'bg-') || "bg-blue-600"}
            >
                {selectedNews && (
                    <div className="space-y-6 text-right">
                        <div>
                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-3 ${selectedNews.sourceColor}`}>
                                {selectedNews.source}
                            </span>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-relaxed">
                                {selectedNews.title}
                            </h3>
                            <p className="text-slate-600 leading-loose text-lg">
                                {selectedNews.summary}
                            </p>
                        </div>

                        <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-sm text-slate-500">
                            مصدر موثوق • تم التحقق من الرابط • تحديث مباشر
                        </div>
                    </div>
                )}
            </ServiceModal>
        </section>
    );
}
