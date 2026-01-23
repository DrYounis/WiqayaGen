"use client";
import React from 'react';
import { Database, BrainCircuit, ShieldCheck, Server, Dna, Lock, FileCode, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function TechSpecs() {
    return (
        <div className="min-h-screen bg-slate-50 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-blue-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

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

            <main className="relative z-10 max-w-4xl mx-auto px-6 pb-24">

                {/* Header */}
                <header className="mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-50 text-teal-700 rounded-full text-xs font-semibold mb-6 border border-teal-100">
                        <FileCode className="w-3 h-3" />
                        المواصفات الفنية
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                        كيف يعمل السحر؟ <br />
                        <span className="text-blue-600">The Technology Stack</span>
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        محرك "وقاية جين" يعتمد على هيكلية تقنية هجينة تدمج المعلوماتية الحيوية (Bioinformatics) مع الذكاء الاصطناعي التوليدي.
                    </p>
                </header>

                <div className="space-y-12">

                    {/* Layer 1 */}
                    <section className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                                <Dna className="w-8 h-8" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900">1. طبقة تحليل البيانات الجينومية</h2>
                                <span className="text-sm font-mono text-slate-500">The Genomic Layer</span>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <strong className="block text-slate-900 mb-2">التقنية</strong>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    نستخدم خوارزميات حساب <strong>"درجات المخاطر متعددة الجينات" (Polygenic Risk Scores - PRS)</strong>.
                                </p>
                            </div>
                            <div>
                                <strong className="block text-slate-900 mb-2">الوظيفة</strong>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    بدلاً من البحث عن طفرة نادرة، نمسح آلاف المتغيرات الجينية لتحديد احتمالية الإصابة بأمراض معقدة (السكري، القلب، الزهايمر) بدقة تصل إلى 85% أعلى من الطرق التقليدية.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Layer 2 */}
                    <section className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="flex items-start gap-4 mb-6 relative z-10">
                            <div className="p-3 bg-teal-50 rounded-xl text-teal-600">
                                <BrainCircuit className="w-8 h-8" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900">2. طبقة الذكاء الاصطناعي التوليدي</h2>
                                <span className="text-sm font-mono text-slate-500">The Agentic AI Layer</span>
                            </div>
                        </div>

                        <div className="space-y-6 relative z-10">
                            <div>
                                <strong className="block text-slate-900 mb-2">النموذج</strong>
                                <p className="text-slate-600 text-sm">
                                    نموذج لغة كبير (LLM) مدقق طبياً ومربوط بأحدث البروتوكولات العلاجية السعودية عبر تقنية <strong>RAG</strong>.
                                </p>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                <strong className="block text-slate-800 text-sm mb-2">مثال عملي:</strong>
                                <p className="text-slate-600 text-sm italic">
                                    "المريض X لديه خطر جيني مرتفع للسكري + مؤشر كتلة جسم 28. النظام يولد خطة غذائية تستبعد الأطعمة التي تثير الأنسولين لديه، ويقترح فحص HbA1c كل 3 أشهر."
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Layer 3 */}
                    <section className="bg-slate-900 rounded-3xl p-8 md:p-10 border border-slate-800 shadow-lg text-white">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="p-3 bg-white/10 rounded-xl text-teal-400">
                                <ShieldCheck className="w-8 h-8" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-white">3. طبقة الامتثال والخصوصية</h2>
                                <span className="text-sm font-mono text-slate-400">Privacy & Compliance Layer</span>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <Server className="w-4 h-4 text-teal-400" />
                                    <strong className="text-white">السيادة (Sovereignty)</strong>
                                </div>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    استضافة البيانات كاملة داخل المملكة (Local Cloud Hosting) لضمان الامتثال لمتطلبات "سدايا".
                                </p>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <Lock className="w-4 h-4 text-teal-400" />
                                    <strong className="text-white">التعلم الموحد (Federated Learning)</strong>
                                </div>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    تدريب الذكاء الاصطناعي دون نقل البيانات الخام خارج خوادم المستشفى، مما يضمن سرية الهوية تماماً.
                                </p>
                            </div>
                        </div>
                    </section>

                </div>
            </main>
        </div>
    );
}
