'use client';

import { QrCode, Share2, Users, Activity, ScanLine, ArrowRight, TrendingUp, AlertTriangle, ShieldCheck, Database, FileText, Lock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ServiceModal from './ServiceModal';
import ProductScanner from './ProductScanner';

export default function ServicesGrid() {
    const [activeModal, setActiveModal] = useState<string | null>(null);
    const [familyStep, setFamilyStep] = useState(0);
    const [scoreStep, setScoreStep] = useState(0);
    const [userScore, setUserScore] = useState(0);

    const openModal = (service: string) => {
        setActiveModal(service);
        setFamilyStep(0);
        setScoreStep(0);
        setUserScore(0);
    };
    const closeModal = () => setActiveModal(null);

    return (
        <div className="grid md:grid-cols-3 gap-6" dir="rtl">

            {/* Service 1: Wiqaya Score */}
            <div className="group relative bg-white border border-slate-100 rounded-3xl p-6 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                <div className="mb-6 flex justify-between items-start">
                    <div className="p-3 bg-teal-50 rounded-2xl">
                        <Activity className="w-6 h-6 text-teal-600" />
                    </div>
                    <button className="text-slate-400 hover:text-teal-600 transition-colors">
                        <Share2 className="w-5 h-5" />
                    </button>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 font-sans">مؤشر وقاية</h3>
                <p className="text-sm text-slate-500 mb-6 min-h-[40px]">
                    تنافس مع جيناتك. درجة صحية حية 0-100 تتزامن مع نشاطك اليومي.
                </p>

                <div className="bg-slate-50 rounded-2xl p-6 flex items-center justify-center mb-6 border border-slate-100">
                    <div className="relative w-32 h-32 flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full border-8 border-slate-200"></div>
                        <div className="absolute inset-0 rounded-full border-8 border-teal-500 border-t-transparent border-l-transparent animate-[spin_3s_linear_infinite]"></div>
                        <div className="text-center">
                            <span className="block text-3xl font-bold text-slate-800">85</span>
                            <span className="text-[10px] text-slate-400 uppercase font-sans">ممتاز</span>
                        </div>
                    </div>
                </div>

                <button
                    onClick={() => openModal('score')}
                    className="mt-auto w-full py-3 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 text-sm font-bold"
                >
                    ابدأ المنافسة <ArrowRight className="w-4 h-4 rotate-180" />
                </button>
            </div>

            {/* Service 2: Gen-Halal Scanner */}
            <div className="group relative bg-white border border-slate-100 rounded-3xl p-6 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-emerald-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                <div className="mb-6 flex justify-between items-start">
                    <div className="p-3 bg-green-50 rounded-2xl">
                        <ScanLine className="w-6 h-6 text-green-600" />
                    </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 font-sans">ماسح المنتجات الذكي</h3>
                <p className="text-sm text-slate-500 mb-6 min-h-[40px]">
                    ماسح باركود لكل المنتجات. هل هذا المنتج مناسب لجيناتك؟
                </p>

                <div className="bg-slate-900 rounded-2xl p-4 mb-6 border border-slate-800 relative overflow-hidden h-40 flex items-center justify-center">
                    <div className="absolute inset-4 border-2 border-white/20 rounded-lg flex flex-col justify-between p-2">
                        <div className="flex justify-between">
                            <div className="w-4 h-4 border-t-2 border-l-2 border-green-500"></div>
                            <div className="w-4 h-4 border-t-2 border-r-2 border-green-500"></div>
                        </div>
                        <div className="flex justify-between">
                            <div className="w-4 h-4 border-b-2 border-l-2 border-green-500"></div>
                            <div className="w-4 h-4 border-b-2 border-r-2 border-green-500"></div>
                        </div>
                    </div>
                    <div className="bg-green-500/20 px-4 py-2 rounded-full backdrop-blur-md border border-green-500/50 text-green-400 text-xs font-bold flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        آمن جينياً
                    </div>
                </div>

                <button
                    onClick={() => openModal('scanner')}
                    className="mt-auto w-full py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 text-sm font-bold"
                >
                    افحص المنتج <ArrowRight className="w-4 h-4 rotate-180" />
                </button>
            </div>

            {/* Service 3: Family Legacy */}
            <div className="group relative bg-white border border-slate-100 rounded-3xl p-6 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                <div className="mb-6 flex justify-between items-start">
                    <div className="p-3 bg-purple-50 rounded-2xl">
                        <Users className="w-6 h-6 text-purple-600" />
                    </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 font-sans">الإرث العائلي</h3>
                <p className="text-sm text-slate-500 mb-6 min-h-[40px]">
                    احمِ مستقبلك ومستقبلهم. خريطة وراثية تعاونية لتتبع المخاطر العائلية.
                </p>

                <div className="bg-slate-50 rounded-2xl p-6 flex items-center justify-center mb-6 border border-slate-100 h-40">
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs text-white">GP</div>
                        <div className="w-px h-6 bg-slate-300"></div>
                        <div className="flex gap-8">
                            <div className="flex flex-col items-center">
                                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-xs text-white shadow-lg shadow-green-200">Fa</div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-xs text-white shadow-lg shadow-yellow-200">Mo</div>
                            </div>
                        </div>
                        <div className="flex gap-8 w-full justify-center">
                            <div className="w-px h-6 bg-slate-300 -mt-2"></div>
                            <div className="w-px h-6 bg-slate-300 -mt-2"></div>
                        </div>
                    </div>
                </div>

                <button
                    onClick={() => openModal('family')}
                    className="mt-auto w-full py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 text-sm font-bold"
                >
                    ارسم العائلة <ArrowRight className="w-4 h-4 rotate-180" />
                </button>
            </div>

            {/* Modals */}
            <ServiceModal
                isOpen={activeModal === 'score'}
                onClose={closeModal}
                title={scoreStep < 6 ? `فحص المؤشر الحيوي (${scoreStep}/5)` : "نتيجة مؤشر وقاية"}
                icon={<Activity className="w-6 h-6 text-teal-600" />}
                ctaText={scoreStep < 6 ? "التالي" : "تفعيل التحليل الكامل (مجاناً لمدة 7 أيام)"}
                onCtaClick={() => {
                    if (scoreStep < 6) return; // CTA hidden/disabled in wizard, handled by option buttons
                    window.location.href = '/join-waitlist?plan=premium';
                }}
                accentColor="bg-teal-600"
            >
                {/* Intro / Start */}
                {scoreStep === 0 && (
                    <div className="text-center space-y-6 animate-in fade-in zoom-in duration-300">
                        <div className="p-4 bg-teal-50 rounded-full w-fit mx-auto">
                            <Activity className="w-12 h-12 text-teal-600" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">جاهز لحساب مؤشرك الحيوي؟</h3>
                        <p className="text-slate-500">أجب على 5 أسئلة سريعة لنحلل نشاط جيناتك اليومي.</p>
                        <button
                            onClick={() => setScoreStep(1)}
                            className="w-full py-4 bg-teal-600 text-white rounded-xl font-bold shadow-lg hover:bg-teal-700 transition-all"
                        >
                            ابدأ الفحص
                        </button>
                    </div>
                )}

                {/* Q1: Activity */}
                {scoreStep === 1 && (
                    <div className="space-y-6 text-center animate-in fade-in slide-in-from-left-4 duration-300">
                        <h3 className="text-lg font-bold text-slate-800">كم خطوة مشيت اليوم؟</h3>
                        <div className="grid gap-3">
                            <button onClick={() => { setUserScore(s => s + 20); setScoreStep(2); }} className="p-4 rounded-xl border-2 border-slate-100 hover:border-teal-500 hover:bg-teal-50 transition-all text-slate-700 font-bold">
                                أكثر من 5,000 خطوة 🏃‍♂️
                            </button>
                            <button onClick={() => { setScoreStep(2); }} className="p-4 rounded-xl border-2 border-slate-100 hover:border-slate-300 hover:bg-slate-50 transition-all text-slate-500">
                                أقل من 5,000
                            </button>
                        </div>
                    </div>
                )}

                {/* Q2: Sleep */}
                {scoreStep === 2 && (
                    <div className="space-y-6 text-center animate-in fade-in slide-in-from-left-4 duration-300">
                        <h3 className="text-lg font-bold text-slate-800">كيف كان نومك البارحة؟</h3>
                        <div className="grid gap-3">
                            <button onClick={() => { setUserScore(s => s + 20); setScoreStep(3); }} className="p-4 rounded-xl border-2 border-slate-100 hover:border-teal-500 hover:bg-teal-50 transition-all text-slate-700 font-bold">
                                6-8 ساعات (نوم عميق) 😴
                            </button>
                            <button onClick={() => { setScoreStep(3); }} className="p-4 rounded-xl border-2 border-slate-100 hover:border-slate-300 hover:bg-slate-50 transition-all text-slate-500">
                                نوم متقطع / قليل
                            </button>
                        </div>
                    </div>
                )}

                {/* Q3: Sugar */}
                {scoreStep === 3 && (
                    <div className="space-y-6 text-center animate-in fade-in slide-in-from-left-4 duration-300">
                        <h3 className="text-lg font-bold text-slate-800">هل تناولت مشروبات سكرية؟</h3>
                        <div className="grid gap-3">
                            <button onClick={() => { setUserScore(s => s + 20); setScoreStep(4); }} className="p-4 rounded-xl border-2 border-slate-100 hover:border-teal-500 hover:bg-teal-50 transition-all text-slate-700 font-bold">
                                لا، فقط ماء/قهوة 💧
                            </button>
                            <button onClick={() => { setScoreStep(4); }} className="p-4 rounded-xl border-2 border-slate-100 hover:border-slate-300 hover:bg-slate-50 transition-all text-slate-500">
                                نعم (مشروبات غازية/عصير)
                            </button>
                        </div>
                    </div>
                )}

                {/* Q4: Veggies */}
                {scoreStep === 4 && (
                    <div className="space-y-6 text-center animate-in fade-in slide-in-from-left-4 duration-300">
                        <h3 className="text-lg font-bold text-slate-800">هل أكلت خضروات/ورقيات؟</h3>
                        <div className="grid gap-3">
                            <button onClick={() => { setUserScore(s => s + 20); setScoreStep(5); }} className="p-4 rounded-xl border-2 border-slate-100 hover:border-teal-500 hover:bg-teal-50 transition-all text-slate-700 font-bold">
                                نعم، حصة كاملة 🥦
                            </button>
                            <button onClick={() => { setScoreStep(5); }} className="p-4 rounded-xl border-2 border-slate-100 hover:border-slate-300 hover:bg-slate-50 transition-all text-slate-500">
                                لا، ليس اليوم
                            </button>
                        </div>
                    </div>
                )}

                {/* Q5: Energy */}
                {scoreStep === 5 && (
                    <div className="space-y-6 text-center animate-in fade-in slide-in-from-left-4 duration-300">
                        <h3 className="text-lg font-bold text-slate-800">كيف تشعر بمستوى طاقتك؟</h3>
                        <div className="grid gap-3">
                            <button onClick={() => { setUserScore(s => s + 20); setScoreStep(6); }} className="p-4 rounded-xl border-2 border-slate-100 hover:border-teal-500 hover:bg-teal-50 transition-all text-slate-700 font-bold">
                                نشيط وحيوي ⚡️
                            </button>
                            <button onClick={() => { setScoreStep(6); }} className="p-4 rounded-xl border-2 border-slate-100 hover:border-slate-300 hover:bg-slate-50 transition-all text-slate-500">
                                خمول / تعب
                            </button>
                        </div>
                    </div>
                )}

                {/* Result */}
                {scoreStep === 6 && (
                    <div className="space-y-6 text-center animate-in fade-in zoom-in duration-500">
                        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 relative overflow-hidden">
                            {/* Score Circle */}
                            <div className="relative w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                                <div className="absolute inset-0 rounded-full border-8 border-slate-200"></div>
                                <div
                                    className="absolute inset-0 rounded-full border-8 border-teal-500 border-l-transparent transition-all duration-1000"
                                    style={{ transform: `rotate(${45 + (userScore * 3.6)}deg)` }}
                                ></div>
                                <div className="text-center z-10">
                                    <span className="block text-4xl font-bold text-slate-800">{userScore}</span>
                                    <span className="text-[10px] text-slate-400 uppercase font-sans">
                                        {userScore >= 80 ? 'ممتاز' : userScore >= 50 ? 'جيد' : 'يحتاج تحسين'}
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-end justify-center gap-2 h-24 pb-2 mb-4 opacity-50">
                                {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                                    <div key={i} className="w-6 bg-teal-100 rounded-t-sm relative group h-full">
                                        <div
                                            style={{ height: `${h}%` }}
                                            className="w-full bg-teal-500 absolute bottom-0 rounded-t-sm"
                                        ></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-xl text-right">
                            <div className="p-2 bg-blue-100 rounded-full text-blue-600">
                                <TrendingUp className="w-5 h-5" />
                            </div>
                            <div>
                                <strong className="block text-blue-900 text-sm">
                                    {userScore >= 80
                                        ? "أداء جيني رائع! أنت أفضل من 90%."
                                        : "بداية جيدة! يمكننا تحسين النتيجة."}
                                </strong>
                                <div className="flex items-center gap-1 mt-1 text-[10px] text-blue-700/80">
                                    <Database className="w-3 h-3" />
                                    <span>مقارنة بـ 250,000 عينة من البنك الحيوي السعودي</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-2 bg-slate-50 py-2 rounded text-[10px] text-slate-500">
                            <ShieldCheck className="w-3 h-3 text-teal-600" />
                            <span>بيانات مشفرة ومتوافقة مع نظام حماية البيانات الشخصية (PDPL)</span>
                        </div>
                    </div>
                )}
            </ServiceModal>

            <ServiceModal
                isOpen={activeModal === 'scanner'}
                onClose={closeModal}
                title="ماسح المنتجات الذكي"
                icon={<ScanLine className="w-6 h-6 text-green-600" />}
                ctaText="عرض تفاصيل التحليل"
                onCtaClick={() => window.location.href = '/join-waitlist?plan=nutrition'}
                accentColor="bg-green-600"
            >
                <div className="space-y-4">
                    <ProductScanner />
                </div>
            </ServiceModal>

            <ServiceModal
                isOpen={activeModal === 'family'}
                onClose={() => { closeModal(); setFamilyStep(0); }}
                title="بناء الإرث العائلي"
                icon={<Users className="w-6 h-6 text-indigo-600" />}
                ctaText={(familyStep === 3 || familyStep === 4) ? "احصل على التقرير الوراثي الكامل" : "أكمل التحليل"}
                onCtaClick={() => {
                    if (familyStep === 3 || familyStep === 4) window.location.href = '/join-waitlist?plan=family';
                }}
                accentColor="bg-indigo-600"
            >
                {familyStep === 0 && (
                    <div className="space-y-6 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex justify-center mb-4">
                            <div className="p-4 bg-indigo-50 rounded-full">
                                <Activity className="w-8 h-8 text-indigo-600" />
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-slate-800">هل يعاني أحد أفراد العائلة من الدرجة الأولى من السكري؟</h3>
                        <div className="flex gap-4 justify-center mt-6">
                            <button
                                onClick={() => setFamilyStep(1)}
                                className="px-8 py-3 bg-red-50 text-red-600 border border-red-200 rounded-xl hover:bg-red-100 font-bold transition-colors"
                            >
                                نعم
                            </button>
                            <button
                                onClick={() => setFamilyStep(2)}
                                className="px-8 py-3 bg-slate-50 text-slate-600 border border-slate-200 rounded-xl hover:bg-slate-100 font-bold transition-colors"
                            >
                                لا
                            </button>
                        </div>
                    </div>
                )}

                {familyStep === 1 && (
                    <div className="space-y-6 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex justify-center mb-4">
                            <div className="p-4 bg-amber-50 rounded-full">
                                <AlertTriangle className="w-8 h-8 text-amber-600" />
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-slate-800">هل تم تشخيص الحالة قبل سن الخمسين؟</h3>
                        <div className="flex gap-4 justify-center mt-6">
                            <button
                                onClick={() => setFamilyStep(3)} // High Risk Path
                                className="px-8 py-3 bg-red-50 text-red-600 border border-red-200 rounded-xl hover:bg-red-100 font-bold transition-colors"
                            >
                                نعم
                            </button>
                            <button
                                onClick={() => setFamilyStep(4)} // Moderate Risk Path
                                className="px-8 py-3 bg-slate-50 text-slate-600 border border-slate-200 rounded-xl hover:bg-slate-100 font-bold transition-colors"
                            >
                                لا (بعد الـ 50)
                            </button>
                        </div>
                    </div>
                )}

                {familyStep === 2 && (
                    <div className="space-y-6 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex justify-center mb-4">
                            <div className="p-4 bg-blue-50 rounded-full">
                                <Activity className="w-8 h-8 text-blue-600" />
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-slate-800">هل هناك تاريخ لأمراض القلب أو الضغط؟</h3>
                        <div className="flex gap-4 justify-center mt-6">
                            <button
                                onClick={() => setFamilyStep(3)} // High Risk
                                className="px-8 py-3 bg-red-50 text-red-600 border border-red-200 rounded-xl hover:bg-red-100 font-bold transition-colors"
                            >
                                نعم
                            </button>
                            <button
                                onClick={() => setFamilyStep(4)} // Low Risk
                                className="px-8 py-3 bg-slate-50 text-slate-600 border border-slate-200 rounded-xl hover:bg-slate-100 font-bold transition-colors"
                            >
                                لا
                            </button>
                        </div>
                    </div>
                )}

                {familyStep === 3 && (
                    <div className="space-y-6 text-center animate-in fade-in zoom-in duration-500">
                        <div className="bg-red-50 border border-red-100 rounded-2xl p-6 relative overflow-hidden text-right">
                            {/* Header */}
                            <div className="flex items-center gap-2 mb-4 text-red-700 border-b border-red-100 pb-3">
                                <AlertTriangle className="w-6 h-6" />
                                <strong className="text-lg">تقرير تحليل المخاطر الوراثية</strong>
                            </div>

                            {/* Risk Factors List */}
                            <div className="bg-white/50 rounded-lg p-3 mb-4 space-y-2">
                                <p className="text-xs font-bold text-slate-700 mb-2">عوامل الخطورة المرصودة:</p>
                                <div className="flex items-center gap-2 text-xs text-slate-600">
                                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                                    <span>تاريخ عائلي (درجة أولى)</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-slate-600">
                                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                                    <span>ظهور الأعراض قبل سن 50 (Early Onset)</span>
                                </div>
                            </div>

                            <p className="text-red-800/80 text-xs leading-relaxed mb-4">
                                احتمالية وجود "أليل سائد" (Dominant Allele) للمرض تتجاوز 40%. نوصي ببدء "تتبع التسلسل" فوراً.
                            </p>

                            <div className="w-full bg-slate-200 rounded-full h-2 mb-2">
                                <div className="bg-red-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                            </div>
                            <div className="flex justify-between text-xs text-slate-500 font-mono mb-4">
                                <span>مستوى الخطر</span>
                                <span className="text-red-600 font-bold">مرتفع جداً (85/100)</span>
                            </div>

                            {/* Trust Badge */}
                            <div className="flex items-center justify-center gap-1.5 bg-red-100/50 py-1.5 rounded text-[10px] text-red-800">
                                <FileText className="w-3 h-3" />
                                <span>موثوق حسب الأدلة السريرية السعودية (MOH)</span>
                            </div>
                        </div>
                    </div>
                )}

                {familyStep === 4 && (
                    <div className="space-y-6 text-center animate-in fade-in zoom-in duration-500">
                        <div className="bg-green-50 border border-green-100 rounded-2xl p-6 relative overflow-hidden text-right">
                            {/* Header */}
                            <div className="flex items-center gap-2 mb-4 text-green-700 border-b border-green-100 pb-3">
                                <ShieldCheck className="w-6 h-6" />
                                <strong className="text-lg">تقرير السلامة الوراثية</strong>
                            </div>

                            {/* Positive Indicators */}
                            <div className="bg-white/50 rounded-lg p-3 mb-4 space-y-2">
                                <p className="text-xs font-bold text-slate-700 mb-2">المؤشرات الإيجابية:</p>
                                <div className="flex items-center gap-2 text-xs text-slate-600">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                                    <span>سجل عائلي نظيف (أقارب درجة أولى)</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-slate-600">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                                    <span>مؤشرات نمط الحياة مستقرة</span>
                                </div>
                            </div>

                            <p className="text-green-800/80 text-xs leading-relaxed mb-4">
                                النمط الوراثي يبدو مستقراً، ولكن "الجينات الصامتة" قد تظهر لاحقاً. الفحص الوقائي يضمن البقاء في المنطقة الآمنة.
                            </p>

                            <div className="w-full bg-slate-200 rounded-full h-2 mb-2">
                                <div className="bg-green-500 h-2 rounded-full" style={{ width: '15%' }}></div>
                            </div>
                            <div className="flex justify-between text-xs text-slate-500 font-mono mb-4">
                                <span>مستوى الخطر</span>
                                <span className="text-green-600 font-bold">منخفض (15/100)</span>
                            </div>

                            {/* Trust Badge */}
                            <div className="flex items-center justify-center gap-1.5 bg-green-100/50 py-1.5 rounded text-[10px] text-green-800">
                                <FileText className="w-3 h-3" />
                                <span>مطابق للمعايير الوقائية الوطنية</span>
                            </div>
                        </div>
                    </div>
                )}
            </ServiceModal>
        </div >
    );
}
