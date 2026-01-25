"use client";
import React from 'react';
import { FileText, ShieldAlert, BrainCircuit, Target, Building2, UserCheck, Scale, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ExecutiveSummary() {
    return (
        <div className="min-h-screen bg-slate-50 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-100/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            {/* Navigation */}
            <nav className="relative z-10 max-w-5xl mx-auto p-6 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-blue-900 tracking-tighter hover:opacity-80 transition-opacity">
                    وقاية<span className="text-teal-500">جين</span>
                </Link>
                <Link href="/" className="flex items-center gap-2 text-slate-500 hover:text-blue-900 transition-colors text-sm font-medium">
                    العودة للرئيسية
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </nav>

            {/* Main Content */}
            <main className="relative z-10 max-w-4xl mx-auto px-6 pb-24">

                {/* Header */}
                <header className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100/50 text-blue-800 rounded-full text-xs font-semibold mb-6 border border-blue-200">
                        <FileText className="w-3 h-3" />
                        مسودة مسرعة "إبصار"
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                        ملخص المشروع <span className="text-slate-400 font-light text-3xl block mt-2">(Executive Summary)</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
                        من "تأمين المرض" إلى "تأمين الصحة":
                        <br />
                        دمج الجينوم والذكاء الاصطناعي لتقليل المخاطر التأمينية.
                    </p>
                </header>

                {/* Content Details */}
                <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden divide-y divide-slate-100">

                    {/* 1. Problem */}
                    <section className="p-8 md:p-12">
                        <div className="flex items-start gap-4 mb-4">
                            <div className="p-3 bg-red-50 rounded-xl text-red-600">
                                <ShieldAlert className="w-6 h-6" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-2">1. المشكلة</h2>
                                <h3 className="text-lg text-slate-500 font-medium mb-4">من منظور شركات التأمين</h3>
                            </div>
                        </div>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            شركات التأمين الطبي في المملكة تعاني من ارتفاع <strong className="text-slate-900">"نسبة الخسارة"</strong> بسبب الأمراض المزمنة (سكري، قلب، ضغط) التي يتم اكتشافها وعلاجها متأخراً. النموذج الحالي للتأمين "تفاعلي" يدفع تكلفة العلاج، ولا يملك أدوات "تنبؤية" لمنع المرض قبل وقوعه، مما يؤدي لاستنزاف المحافظ التأمينية.
                        </p>
                    </section>

                    {/* 2. Solution */}
                    <section className="p-8 md:p-12 bg-gradient-to-br from-blue-50/50 to-transparent">
                        <div className="flex items-start gap-4 mb-4">
                            <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
                                <BrainCircuit className="w-6 h-6" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-2">2. الحل المقترح</h2>
                                <h3 className="text-lg text-slate-500 font-medium mb-4">الابتكار</h3>
                            </div>
                        </div>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            منصة ذكاء اصطناعي (SaaS) تعمل كطبقة وسيطة بين "شركات التأمين" و"المؤمن عليهم"، تعتمد على:
                        </p>
                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <span className="w-6 h-6 rounded-full bg-blue-200 text-blue-700 flex items-center justify-center text-sm font-bold shrink-0 mt-1">1</span>
                                <div>
                                    <strong className="block text-slate-900 mb-1">تحليل المخاطر الجينومي</strong>
                                    <p className="text-slate-600">دمج بيانات التسلسل الجيني (DNA) مع التاريخ الطبي لتحديد الأشخاص ذوي القابلية العالية للإصابة بالأمراض المزمنة قبل حدوثها بسنوات.</p>
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <span className="w-6 h-6 rounded-full bg-blue-200 text-blue-700 flex items-center justify-center text-sm font-bold shrink-0 mt-1">2</span>
                                <div>
                                    <strong className="block text-slate-900 mb-1">المساعد الصحي الذكي</strong>
                                    <p className="text-slate-600">وكيل صحي ذكي يقدم خططاً "فائقة التخصيص" (تغذية، مكملات، نمط حياة) بناءً على جينات الفرد.</p>
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <span className="w-6 h-6 rounded-full bg-blue-200 text-blue-700 flex items-center justify-center text-sm font-bold shrink-0 mt-1">3</span>
                                <div>
                                    <strong className="block text-slate-900 mb-1">نظام الحوافز التأمينية</strong>
                                    <p className="text-slate-600">ربط الالتزام بالخطة الصحية بخصومات على تجديد البوليصة أو نقاط ولاء.</p>
                                </div>
                            </li>
                        </ul>
                    </section>

                    {/* 3. Value Proposition */}
                    <section className="p-8 md:p-12">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="p-3 bg-teal-50 rounded-xl text-teal-600">
                                <Target className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900">3. القيمة المضافة</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-slate-50 p-6 rounded-2xl">
                                <h4 className="font-bold text-slate-900 mb-2">لشركات التأمين</h4>
                                <p className="text-slate-600 text-sm leading-relaxed">خفض المطالبات المستقبلية بنسبة متوقعة (15-20%) وتحسين دقة البيانات الاكتوارية.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-2xl">
                                <h4 className="font-bold text-slate-900 mb-2">للمريض</h4>
                                <p className="text-slate-600 text-sm leading-relaxed">إطالة "العمر الصحي"، وتلقي رعاية وقائية مخصصة.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-2xl">
                                <h4 className="font-bold text-slate-900 mb-2">للقطاع الصحي</h4>
                                <p className="text-slate-600 text-sm leading-relaxed">التحول نحو نموذج الرعاية القائمة على القيمة ومواكبة رؤية 2030.</p>
                            </div>
                        </div>
                    </section>

                    {/* 4. Business Model */}
                    <section className="p-8 md:p-12">
                        <div className="flex items-start gap-4 mb-4">
                            <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600">
                                <Building2 className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900">4. نموذج العمل</h2>
                        </div>
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="flex-1 border-r-0 md:border-r border-slate-100 md:pr-8 last:border-0">
                                <strong className="block text-lg text-slate-900 mb-2">B2B2C</strong>
                                <p className="text-slate-600">التعاقد مع شركات التأمين لتقديم الخدمة كـ "إضافة" للفئات الذهبية أو الفئات عالية الخطورة.</p>
                            </div>
                            <div className="flex-1">
                                <strong className="block text-lg text-slate-900 mb-2">الاشتراكات</strong>
                                <p className="text-slate-600">رسوم اشتراك شهرية لإدارة "الأصل الصحي" للمشترك.</p>
                            </div>
                        </div>
                    </section>

                    {/* 5. The Edge */}
                    <section className="p-8 md:p-12 bg-slate-50/50">
                        <div className="flex items-start gap-4 mb-4">
                            <div className="p-3 bg-orange-50 rounded-xl text-orange-600">
                                <UserCheck className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900">5. لماذا نحن؟</h2>
                        </div>
                        <p className="text-slate-600 leading-relaxed italic border-r-4 border-orange-200 pr-4">
                            "بصفتي طبيباً ممارساً في قلب قطاع التأمين، أدرك الفجوة الحقيقية بين 'القرار الطبي' و'التكلفة التأمينية'. نحن لا نبني تطبيقاً للياقة البدنية، بل نبني <strong className="text-slate-900 not-italic">أداة لإدارة المخاطر الطبية</strong> تتحدث لغة الأرقام التي يفهمها الاكتواريون، ولغة الطب التي يثق بها الأطباء."
                        </p>
                    </section>

                    {/* 6. Sandbox Ask */}
                    <section className="p-8 md:p-12 bg-blue-900 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                                    <Scale className="w-6 h-6 text-teal-400" />
                                </div>
                                <h2 className="text-2xl font-bold">6. ما نحتاجه من "البيئة التجريبية"</h2>
                            </div>

                            <p className="text-blue-200 mb-6 text-lg">نطلب الدخول في البيئة التشريعية التجريبية (Regulatory Sandbox) لاختبار:</p>

                            <div className="space-y-4">
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl">
                                    <strong className="block text-teal-400 mb-1">الخصوصية وعدم التمييز</strong>
                                    <p className="text-blue-100">آليات استخدام البيانات الجينومية في تحسين برامج الوقاية دون انتهاك خصوصية المريض أو التمييز في التسعير.</p>
                                </div>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl">
                                    <strong className="block text-teal-400 mb-1">التكامل التقني (NPHIES)</strong>
                                    <p className="text-blue-100">دمج البيانات من المختبرات الجينية مباشرة مع أنظمة شركات التأمين.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>

                {/* Footer Actions */}
                <div className="mt-12 flex justify-center gap-4 hidden print:hidden">
                    <button onClick={() => window.print()} className="px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 font-medium shadow-sm transition-colors flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        طباعة كـ PDF
                    </button>
                    <Link href="/" className="px-6 py-3 bg-blue-900 text-white rounded-xl hover:bg-blue-800 font-medium shadow-lg shadow-blue-900/20 transition-colors">
                        العودة للموقع
                    </Link>
                </div>

            </main>
        </div>
    );
}
