'use client';

import { useState } from 'react';
import { Activity, Brain, Dna, Utensils, Moon, Zap, ArrowRight, Home } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import Link from 'next/link';
import ServiceModal from '@/components/ServiceModal';

export default function WiqayaScorePage() {
    const [lifestyleScore, setLifestyleScore] = useState(50);
    const [geneticRisk, setGeneticRisk] = useState(30);

    // Calculate "Final Impact" based on the user's requested logic
    // 25% Genetics (Fixed) + 75% Lifestyle (Variable)
    const finalScore = Math.min(100, Math.round((25 * (100 - geneticRisk) / 100) + (75 * lifestyleScore / 100)));

    const data = [
        { name: 'الجينات (ثابت)', value: 25, color: '#94a3b8' }, // Slate 400
        { name: 'نمط الحياة (متغير)', value: 75, color: '#0d9488' }, // Teal 600
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="min-h-screen bg-slate-50 font-sans" dir="rtl">

            {/* Nav */}
            <nav className="p-6 flex justify-between items-center max-w-7xl mx-auto">
                <Link href="/" className="text-2xl font-bold text-slate-900 tracking-tighter">
                    وقاية<span className="text-teal-600">جين</span>
                </Link>
                <Link href="/" className="p-2 text-slate-500 hover:text-slate-900 transition-colors">
                    <Home className="w-6 h-6" />
                </Link>
            </nav>

            {/* Hero */}
            <header className="py-16 px-6 text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-xs font-bold mb-6">
                    <Brain className="w-4 h-4" />
                    علم الإكسبوزوم (Exposome)
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
                    جيناتك هي <span className="text-slate-400">البداية</span>،<br />
                    نمط حياتك هو <span className="text-teal-600">القصة الكاملة</span>.
                </h1>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    هل تعلم أن 25% فقط من طول عمرك يتحدد بجيناتك؟<br />
                    أما الـ 75% الباقية؟ فهي ما نسميه <strong>"الإكسبوزوم"</strong>.. قراراتك اليومية، بيئتك، أكلك، ونومك.
                    أنت المتحكم في عجلة القيادة.
                </p>
            </header>

            {/* Concept: The 25/75 Split */}
            <section className="py-12 bg-white border-y border-slate-100">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                    {/* Visual Pie Chart */}
                    <div className="relative h-64 md:h-80 w-full bg-slate-50 rounded-3xl border border-slate-100 flex items-center justify-center p-6">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none">
                            <span className="text-3xl font-bold text-slate-800">75%</span>
                            <span className="text-xs text-slate-500">تحت سيطرتك</span>
                        </div>
                    </div>

                    {/* Explanation */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-slate-900">مقياس تأثير الإكسبوزوم</h2>
                        <p className="text-slate-600 leading-relaxed">
                            مؤشر وقاية ليس مجرد رقم. إنه <strong>GPS صحي</strong> يجمع بين:
                        </p>
                        <ul className="space-y-4">
                            <li className="flex gap-4 items-start">
                                <div className="mt-1 p-2 bg-slate-100 rounded-lg text-slate-500">
                                    <Dna className="w-5 h-5" />
                                </div>
                                <div>
                                    <strong className="block text-slate-900">الخطر الجيني (Polygenic Risk)</strong>
                                    <span className="text-sm text-slate-500">الاستعداد الوراثي الذي ولدت به. (ثابت نسبياً)</span>
                                </div>
                            </li>
                            <li className="flex gap-4 items-start">
                                <div className="mt-1 p-2 bg-teal-100 rounded-lg text-teal-600">
                                    <Activity className="w-5 h-5" />
                                </div>
                                <div>
                                    <strong className="block text-slate-900">الإكسبوزوم (Exposome)</strong>
                                    <span className="text-sm text-slate-500">مجموع قراراتك: تغذية، نوم، حركة، وتوتر. (متغير يومياً)</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Interactive Simulator */}
            <section className="py-20 px-6 max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">جرب بنفسك: كيف تؤثر قراراتك؟</h2>
                    <p className="text-slate-500">حرك المؤشر لترى كيف يمكنك التغلب على المخاطر الجينية بنمط حياة ذكي.</p>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-yellow-400 to-green-500"></div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Controls */}
                        <div className="space-y-8">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2 flex justify-between">
                                    <span>جودة نمط الحياة (نوم، أكل، رياضة)</span>
                                    <span className="text-teal-600">{lifestyleScore}%</span>
                                </label>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={lifestyleScore}
                                    onChange={(e) => setLifestyleScore(parseInt(e.target.value))}
                                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
                                />
                                <div className="flex justify-between text-xs text-slate-400 mt-2">
                                    <span>سيء جداً</span>
                                    <span>ممتاز</span>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-slate-100 opacity-70">
                                <label className="block text-sm font-bold text-slate-400 mb-2 flex justify-between">
                                    <span>خطر جيني مفترض (ثابت)</span>
                                    <span>{geneticRisk}%</span>
                                </label>
                                <input
                                    type="range"
                                    min="0"
                                    max="50"
                                    disabled
                                    value={geneticRisk}
                                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-not-allowed accent-slate-400"
                                />
                            </div>
                        </div>

                        {/* Result */}
                        <div className="flex flex-col items-center justify-center text-center space-y-4 bg-slate-50 rounded-2xl p-6">
                            <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">نقاط وقاية المتوقعة</span>
                            <div className={`text-6xl font-extrabold ${finalScore > 75 ? 'text-green-600' : finalScore > 50 ? 'text-yellow-600' : 'text-red-500'}`}>
                                {finalScore}
                            </div>
                            <p className="text-sm text-slate-400">
                                {finalScore > 80 ? 'رائع! نمط حياتك يحميك بفعالية عالية.' :
                                    finalScore > 50 ? 'جيد، لكن يمكنك تحسين حمايتك.' :
                                        'انتبه! نمط حياتك يزيد من مخاطرك الجينية.'}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-8 py-4 bg-teal-600 text-white rounded-xl font-bold text-lg hover:bg-teal-700 transition w-full md:w-auto shadow-lg shadow-teal-500/20"
                    >
                        احسب درجتي الحقيقية الآن
                    </button>
                    <p className="mt-4 text-xs text-slate-400">مجاناً لأول 1,000 مستخدم</p>
                </div>
            </section>

            {/* Modal for Questionnaire */}
            <ServiceModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="حساب مؤشر وقاية"
                icon={<Activity className="w-6 h-6 text-teal-600" />}
                ctaText="عرض تفاصيل التحليل"
                onCtaClick={() => window.location.href = '/join-waitlist'}
                accentColor="bg-teal-600"
            >
                <div className="text-center py-8">
                    <p className="text-lg text-slate-600 mb-6">للحصول على تقييم دقيق وشامل، انضم لقائمة الانتظار لبدء التحليل الجيني.</p>
                    <Link href="/join-waitlist" className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold">
                        سجل الآن
                    </Link>
                </div>
            </ServiceModal>

        </div>
    );
}
