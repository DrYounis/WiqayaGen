'use client';

import { Globe, Dna, ShieldCheck, CheckCircle2, Database, Award } from 'lucide-react';

export default function ScientificCredibility() {
    return (
        <section className="py-24 px-6 bg-white relative overflow-hidden" dir="rtl">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-teal-600 font-bold tracking-wider uppercase text-sm mb-2 block">لماذا وقاية جين؟</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
                        ليش جيناتك <span className="text-teal-600 relative inline-block">
                            تفرق؟
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-teal-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                            </svg>
                        </span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                        معظم فحوصات الـ DNA العالمية مصممة لأجسام أوروبية. نحن بنينا خوارزمياتنا من الصفر لتفهم الجينوم العربي والسعودي.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
                    {/* Left Card: The Problem (Global Bias) */}
                    <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 flex flex-col items-start relative group hover:border-slate-200 transition-all">
                        <div className="bg-slate-200 p-4 rounded-2xl mb-6 group-hover:bg-slate-300 transition-colors">
                            <Globe className="w-8 h-8 text-slate-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">انحياز عالمي</h3>
                        <p className="text-slate-600 leading-loose mb-6">
                            هل تعلم أن <strong className="text-slate-900">80% من الأبحاث الجينية</strong> تعتمد على بيانات أوروبية؟ الفحوصات التقليدية قد تفوت طفرات وراثية نادرة ومهمة خاصة بالمجتمع العربي.
                        </p>
                        <div className="mt-auto w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                            <div className="bg-slate-400 w-[20%] h-full"></div>
                        </div>
                        <p className="text-xs text-slate-400 mt-2">دقة منخفضة للجينوم العربي</p>
                    </div>

                    {/* Right Card: The Solution (Saudi Precision) - Highlighted */}
                    <div className="bg-white rounded-3xl p-8 border-2 border-teal-500 shadow-xl shadow-teal-500/10 flex flex-col items-start relative overflow-hidden">
                        <div className="absolute top-0 left-0 bg-teal-600 text-white px-4 py-1 rounded-br-xl text-xs font-bold">
                            الخيار الأفضل لك 🇸🇦
                        </div>

                        <div className="bg-teal-50 p-4 rounded-2xl mb-6">
                            <Dna className="w-8 h-8 text-teal-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">دقة سعودية</h3>
                        <p className="text-slate-600 leading-loose mb-6">
                            خوارزمياتنا معتمدة على بيانات <strong className="text-teal-700">برنامج الجينوم السعودي</strong> والبنك الحيوي الوطني. نحلل المتغيرات الدقيقة المرتبطة بعرقك، نمط حياتك، وبيئتك المحلية.
                        </p>

                        <div className="w-full bg-teal-50 rounded-xl p-4 border border-teal-100 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-bold text-xs">
                                100%
                            </div>
                            <div>
                                <strong className="block text-teal-800 text-sm">تركيز كامل</strong>
                                <span className="text-xs text-teal-600">على المؤشرات الحيوية العربية</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-slate-100 pt-12">
                    <div className="flex items-center gap-4 justify-center md:justify-start">
                        <div className="p-2 bg-green-50 rounded-full text-green-600">
                            <CheckCircle2 className="w-6 h-6" />
                        </div>
                        <span className="font-bold text-slate-700 text-sm">متوافق مع استراتيجية الجينوم السعودي</span>
                    </div>
                    <div className="flex items-center gap-4 justify-center md:justify-start">
                        <div className="p-2 bg-green-50 rounded-full text-green-600">
                            <Database className="w-6 h-6" />
                        </div>
                        <span className="font-bold text-slate-700 text-sm">بياناتك محفوظة محلياً ومشفرة</span>
                    </div>
                    <div className="flex items-center gap-4 justify-center md:justify-start">
                        <div className="p-2 bg-green-50 rounded-full text-green-600">
                            <Award className="w-6 h-6" />
                        </div>
                        <span className="font-bold text-slate-700 text-sm">تحت إشراف مختصين سعوديين</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
