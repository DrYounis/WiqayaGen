import React from 'react';
import { Activity, BookOpen, ShieldCheck, TrendingDown, ArrowRight, Database, FileText } from 'lucide-react';
import Link from 'next/link';

export default function SaaSSolutions() {
    return (
        <section className="py-20 px-6 bg-slate-50" id="solutions" dir="rtl">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-teal-600 font-bold tracking-wider text-sm uppercase mb-2 block">حلولنا التقنية</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                        منصة متكاملة لخدمة <span className="text-teal-600">التحول الصحي الوطني</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
                        نقدم أدوات نوعية مصممة لسد الفجوة بين البيانات الجينية وصنع القرار الاستراتيجي في وزارة الصحة وتجمعاتها الصحية.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">

                    {/* Solution 1: Actuarial Risk Analysis */}
                    <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-teal-200 hover:shadow-xl transition-all duration-300 group">
                        <div className="bg-teal-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-teal-600 group-hover:scale-110 transition-transform">
                            <TrendingDown className="w-8 h-8" />
                        </div>

                        <h3 className="text-2xl font-bold text-slate-900 mb-3">
                            منصة تحليل المخاطر<br />للتأمين الوطني
                        </h3>

                        <p className="text-slate-600 mb-6 leading-relaxed">
                            اربط المخاطر الجينية بالنماذج الاكتوارية. أداتنا تساعد مركز التأمين الوطني على التنبؤ بتكاليف الأمراض الوراثية وخفض الهدر المالي في الرعاية طويلة الأمد.
                        </p>

                        <div className="bg-slate-50 rounded-lg p-4 mb-8">
                            <div className="flex items-center gap-3 mb-2">
                                <Activity className="w-5 h-5 text-teal-600" />
                                <span className="font-bold text-slate-900">الأثر المالي المتوقع</span>
                            </div>
                            <p className="text-sm text-slate-500">
                                خفض تكلفة علاج الأمراض المزمنة بنسبة تصل إلى <strong>20%</strong> عبر الكشف المبكر.
                            </p>
                        </div>

                        <Link href="/join-waitlist" className="inline-flex items-center text-teal-700 font-bold hover:gap-2 transition-all">
                            طلب عرض تجريبي <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                        </Link>
                    </div>

                    {/* Solution 2: Automated Clinical Protocols */}
                    <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-blue-200 hover:shadow-xl transition-all duration-300 group">
                        <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform">
                            <BookOpen className="w-8 h-8" />
                        </div>

                        <h3 className="text-2xl font-bold text-slate-900 mb-3">
                            محرك الدليل العلمي<br />المؤتمت (CDSS)
                        </h3>

                        <p className="text-slate-600 mb-6 leading-relaxed">
                            سد الفجوة المعرفية في مراكز الرعاية الأولية. نظام يسحب أحدث الدراسات الجينية ويحولها فورياً لبروتوكولات علاجية معتمدة وموحدة لـ 150 مركز.
                        </p>

                        <div className="bg-slate-50 rounded-lg p-4 mb-8">
                            <div className="flex items-center gap-3 mb-2">
                                <FileText className="w-5 h-5 text-blue-600" />
                                <span className="font-bold text-slate-900">القيمة المضافة</span>
                            </div>
                            <p className="text-sm text-slate-500">
                                توحيد معايير الرعاية (Standardization) وتقليل التباين الإكلينيكي بين التجمعات.
                            </p>
                        </div>

                        <Link href="/join-waitlist" className="inline-flex items-center text-blue-700 font-bold hover:gap-2 transition-all">
                            طلب عرض تجريبي <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                        </Link>
                    </div>

                    {/* Solution 3: Telehealth Audit */}
                    <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-indigo-200 hover:shadow-xl transition-all duration-300 group">
                        <div className="bg-indigo-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-indigo-600 group-hover:scale-110 transition-transform">
                            <ShieldCheck className="w-8 h-8" />
                        </div>

                        <h3 className="text-2xl font-bold text-slate-900 mb-3">
                            نظام الرقابة الجينية<br />للطب الاتصالي
                        </h3>

                        <p className="text-slate-600 mb-6 leading-relaxed">
                            ذراع رقابي رقمي يضمن جودة التشخيص الجيني عن بعد، ويمنع الهدر الناتج عن الفحوصات غير الضرورية (Over-utilization).
                        </p>

                        <div className="bg-slate-50 rounded-lg p-4 mb-8">
                            <div className="flex items-center gap-3 mb-2">
                                <Database className="w-5 h-5 text-indigo-600" />
                                <span className="font-bold text-slate-900">الحوكمة والأمن</span>
                            </div>
                            <p className="text-sm text-slate-500">
                                امتثال كامل لسياسات الأمن السيبراني وحماية بيانات المستفيدين (PDPL).
                            </p>
                        </div>

                        <Link href="/join-waitlist" className="inline-flex items-center text-indigo-700 font-bold hover:gap-2 transition-all">
                            طلب عرض تجريبي <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}
