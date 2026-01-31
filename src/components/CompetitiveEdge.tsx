import React from 'react';
import { BadgeCheck, MapPin, Stethoscope, Server } from 'lucide-react';

export default function CompetitiveEdge() {
    return (
        <section className="py-20 bg-slate-900 text-white relative overflow-hidden" dir="rtl">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
                backgroundSize: '40px 40px'
            }}></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        شريك محلي يفهم <span className="text-teal-400">لغة القطاع</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        نجمع بين الخبرة السريرية والتقنية، مع التزام كامل بمستهدفات المحتوى المحلي وتنمية المناطق.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">

                    <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-teal-500/50 transition-colors">
                        <div className="bg-teal-500/10 w-14 h-14 rounded-full flex items-center justify-center mb-6 text-teal-400">
                            <MapPin className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white">رخصة تجارية من حائل</h3>
                        <p className="text-slate-400 leading-relaxed">
                            كيان تجاري مسجل في منطقة حائل، ندعم بشكل مباشر إستراتيجية تنمية المناطق ومستهدفات المحتوى المحلي في المشاريع التقنية.
                        </p>
                    </div>

                    <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-colors">
                        <div className="bg-blue-500/10 w-14 h-14 rounded-full flex items-center justify-center mb-6 text-blue-400">
                            <Stethoscope className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white">قيادة طبية متخصصة</h3>
                        <p className="text-slate-400 leading-relaxed">
                            أسسها طبيب ممارس في قطاع التأمين، مما يضمن أن حلولنا تتحدث لغة "المطالبات"، "الفواتير"، و "المسارات العلاجية" التي يحتاجها القطاع.
                        </p>
                    </div>

                    <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-indigo-500/50 transition-colors">
                        <div className="bg-indigo-500/10 w-14 h-14 rounded-full flex items-center justify-center mb-6 text-indigo-400">
                            <Server className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white">سيادة البيانات الوطنية</h3>
                        <p className="text-slate-400 leading-relaxed">
                            بنية تحتية سحابية محلية بالكامل. لا تخرج البيانات الجينية الحساسة خارج حدود المملكة، مع الامتثال التام لضوابط الأمن السيبراني.
                        </p>
                    </div>

                </div>

                <div className="mt-16 flex flex-wrap justify-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Placeholders for logos if needed, represented as text for now */}
                    <span className="px-6 py-3 border border-slate-700 rounded-lg text-slate-400 font-bold">منشآت</span>
                    <span className="px-6 py-3 border border-slate-700 rounded-lg text-slate-400 font-bold">هيئة الحكومة الرقمية</span>
                    <span className="px-6 py-3 border border-slate-700 rounded-lg text-slate-400 font-bold">وزارة الصحة</span>
                </div>
            </div>
        </section>
    );
}
