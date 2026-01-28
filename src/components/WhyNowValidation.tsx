'use client';

import { TrendingUp, Activity, Dna, Database } from 'lucide-react';

interface GeneCardProps {
    gene: string;
    title: string;
    saudiRate: number;
    globalRate: number;
    description: string;
    delay?: number;
}

const GeneCard = ({ gene, title, saudiRate, globalRate, description }: GeneCardProps) => (
    <div className="bg-slate-800/50 border border-slate-700/50 p-6 rounded-2xl backdrop-blur-sm hover:border-emerald-500/30 transition-all hover:bg-slate-800/80 group">
        <div className="flex justify-between items-start mb-6">
            <div>
                <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
                <span className="text-sm text-emerald-400 font-mono tracking-wider">{gene}</span>
            </div>
            <span className="bg-emerald-500/10 text-emerald-400 text-[10px] px-2 py-1 rounded border border-emerald-500/20">
                علمياً مثبت
            </span>
        </div>

        {/* Comparison Bars */}
        <div className="space-y-4 mb-6">
            <div>
                <div className="flex justify-between text-xs mb-2">
                    <span className="text-slate-300 font-medium">المجتمع السعودي</span>
                    <span className="font-bold text-emerald-400">{saudiRate}%</span>
                </div>
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div style={{ width: `${saudiRate}%` }} className="h-full bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.3)]" />
                </div>
            </div>
            <div>
                <div className="flex justify-between text-xs mb-2">
                    <span className="text-slate-500">المعدل العالمي</span>
                    <span className="font-bold text-slate-500">{globalRate}%</span>
                </div>
                <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                    <div style={{ width: `${globalRate}%` }} className="h-full bg-slate-500/50 rounded-full" />
                </div>
            </div>
        </div>

        <p className="text-sm text-slate-400 leading-loose border-t border-slate-700/50 pt-4">
            {description}
        </p>
    </div>
);

export default function WhyNowValidation() {
    return (
        <section className="py-24 px-6 bg-slate-900 border-t border-slate-800 relative overflow-hidden" dir="rtl">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-900/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-900/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <span className="text-emerald-500 font-bold tracking-wider uppercase text-sm mb-3 block flex items-center justify-center gap-2">
                        <Database className="w-4 h-4" /> بيانات تكشف الواقع
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        الحقيقة الجينية <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">للمجتمع السعودي</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        الأرقام تثبت أن القواعد الصحية العالمية لا تنطبق علينا دائماً. هذه البيانات الذهبية هي السبب الحقيقي لحاجتك لفحص مصمم لخصوصيتك.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {/* Card 1: Obesity */}
                    <GeneCard
                        gene="FTO Variant"
                        title="لست كسولاً، جيناتك تقاومك"
                        saudiRate={51}
                        globalRate={39}
                        description="نصف عملائنا يواجهون صعوبة وراثية في حرق الدهون. ماسح وقاية لا يحسب السعرات فقط، بل يخبرك كيف يتعامل جين FTO مع الكبسة."
                    />

                    {/* Card 2: Diabetes */}
                    <GeneCard
                        gene="TCF7L2 Variant"
                        title="السكري ليس قدراً محتوماً"
                        saudiRate={40}
                        globalRate={22}
                        description="المعدلات العالمية لا تكفي. مؤشر وقاية يأخذ في الاعتبار هذا الثقل الجيني ليصمم لك خطة وقاية استباقية قبل سنوات من ظهور الأعراض."
                    />

                    {/* Card 3: Insulin */}
                    <GeneCard
                        gene="SLC30A8 Variant"
                        title="خصوصية شبه الجزيرة العربية"
                        saudiRate={18}
                        globalRate={4}
                        description="جيناتنا تختلف عن الغرب. نقدم لك تحليلاً مبنياً على دراسات سعودية محلية (2022) وليس مجرد قواعد بيانات أوروبية."
                    />
                </div>

                <div className="mt-12 text-center">
                    <p className="text-xs text-slate-600 flex items-center justify-center gap-2">
                        <Activity className="w-3 h-3" />
                        المصدر: بيانات مجمعة من دراسات الجينوم السعودي (2022-2024) والأبحاث الوطنية المنشورة.
                    </p>
                </div>
            </div>
        </section>
    );
}
