'use client';

import { ShieldCheck, Lock, MapPin, Server, Activity, Dna } from 'lucide-react';

export default function VisionAlignment() {
    return (
        <section className="py-20 px-6 bg-slate-50 border-t border-slate-100" dir="rtl">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-sm font-bold mb-4 border border-emerald-100">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        رؤية المملكة 2030
                    </div>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
                        تماشياً مع <span className="text-emerald-600">طموح الوطن</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
                        وقاية جين ليست مجرد تطبيق، بل هي لبنة أساسية في مستهدفات برنامج تحول القطاع الصحي للوصول لمجتمع حيوي خالي من الأمراض الوراثية.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Card 1: Prevention First */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                        <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
                            <Activity className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">الوقاية قبل العلاج</h3>
                        <p className="text-slate-500 leading-loose">
                            ندعم مستهدفات <strong className="text-slate-700">برنامج الجينوم السعودي</strong> في الحد من الأمراض الوراثية عبر الانتقال من العلاج التفاعلي إلى التدخل الوقائي الاستباقي المعتمد على الذكاء الاصطناعي.
                        </p>
                    </div>

                    {/* Card 2: Data Sovereignty */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                        <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
                            <Server className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">السيادة على البيانات</h3>
                        <p className="text-slate-500 leading-loose">
                            نساهم في "تطوير القدرات الجينومية الوطنية". على خلاف التطبيقات الأجنبية، <strong className="text-slate-700">جميع بياناتك محفوظة داخل المملكة</strong> في خوادم سيادية (Data Residency) لضمان الخصوصية التامة.
                        </p>
                    </div>

                    {/* Card 3: Localized Precision */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                        <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
                            <MapPin className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">دقة محلية</h3>
                        <p className="text-slate-500 leading-loose">
                            خوارزمياتنا مصممة بدقة لتتوافق مع <strong className="text-slate-700">7,500+ متغير جيني سعودي</strong> موثق في خارطة الجينوم الوطنية، مما يجعل تحليلنا أدق للمواطن العربي مقارنة بالفحوصات العالمية العامة.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
