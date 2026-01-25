'use client';

import { QrCode, Share2, Users, Activity, ScanLine, ArrowRight, TrendingUp, AlertTriangle } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import ServiceModal from './ServiceModal';

export default function ServicesGrid() {
    const [activeModal, setActiveModal] = useState<string | null>(null);

    const openModal = (service: string) => setActiveModal(service);
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
                        <div className="absolute inset-0 rounded-full border-8 border-teal-500 border-t-transparent border-l-transparent rotate-45"></div>
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

                <h3 className="text-xl font-bold text-slate-900 mb-2 font-sans">ماسح جين-حلال</h3>
                <p className="text-sm text-slate-500 mb-6 min-h-[40px]">
                    صور، واكتشف. هل هذا التمر مناسب لجيناتك؟ تنبيهات فورية للسكر.
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
                title="مؤشر وقاية الحي"
                icon={<Activity className="w-6 h-6 text-teal-600" />}
                ctaText="تفعيل التحليل الكامل (مجاناً لمدة 7 أيام)"
                onCtaClick={() => window.location.href = '/join-waitlist?plan=premium'}
                accentColor="bg-teal-600"
            >
                <div className="space-y-6 text-center">
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                        <p className="text-slate-500 text-sm mb-4">نشاطك الجيني اليوم</p>
                        <div className="flex items-end justify-center gap-2 h-32 pb-2">
                            {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                                <div key={i} className="w-8 bg-teal-200 rounded-t-sm relative group">
                                    <div
                                        style={{ height: `${h}%` }}
                                        className="w-full bg-teal-500 absolute bottom-0 rounded-t-sm transition-all duration-500 group-hover:bg-teal-600"
                                    ></div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between items-center mt-4 text-xs text-slate-400 font-mono">
                            <span>00:00</span>
                            <span>12:00</span>
                            <span>24:00</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-xl text-right">
                        <div className="p-2 bg-blue-100 rounded-full text-blue-600">
                            <TrendingUp className="w-5 h-5" />
                        </div>
                        <div>
                            <strong className="block text-blue-900 text-sm">أنت أفضل من 85% من المستخدمين</strong>
                            <p className="text-blue-700/80 text-xs">استمر في هذا النشاط لتقليل خطر السكري.</p>
                        </div>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        هذه مجرد "لمحة". نظام وقاية المتقدم يحلل مليارات نقاط البيانات ليعطيك خطة يومية دقيقة.
                    </p>
                </div>
            </ServiceModal>

            <ServiceModal
                isOpen={activeModal === 'scanner'}
                onClose={closeModal}
                title="ماسح جين-حلال الذكي"
                icon={<ScanLine className="w-6 h-6 text-green-600" />}
                ctaText="احصل على دليلك الغذائي الجيني"
                onCtaClick={() => window.location.href = '/join-waitlist?plan=nutrition'}
                accentColor="bg-green-600"
            >
                <div className="space-y-6">
                    <div className="relative bg-slate-900 rounded-2xl h-48 overflow-hidden flex items-center justify-center border-2 border-slate-800">
                        {/* Simulation UI */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-50">
                            <span className="text-slate-600">Camera Feed Simulation...</span>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-48 h-32 border-2 border-green-400/50 rounded-lg flex items-center justify-center relative">
                                <div className="absolute top-0 w-full h-0.5 bg-green-500 animate-[scan_2s_ease-in-out_infinite]"></div>
                                <span className="text-green-400 font-mono text-xs bg-green-900/80 px-2 py-1 rounded">تم التعرف: تمر سكري</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-red-50 border border-red-100 rounded-xl p-4 flex gap-3 text-right">
                        <div className="p-2 bg-red-100 rounded-full text-red-600 shrink-0 h-fit">
                            <AlertTriangle className="w-5 h-5" />
                        </div>
                        <div>
                            <strong className="block text-red-900 text-sm">تحذير جيني: حمل  جلايسيمي مرتفع</strong>
                            <p className="text-red-700/80 text-xs mt-1">
                                بناءً على جين TCF7L2 لديك، هذا النوع من التمور يرفع الأنسولين بسرعة.
                            </p>
                            <div className="mt-2 text-xs font-bold text-red-800">البديل المقترح: تمر خلاص (مسموح 3 حبات).</div>
                        </div>
                    </div>
                </div>
            </ServiceModal>

            <ServiceModal
                isOpen={activeModal === 'family'}
                onClose={closeModal}
                title="بناء الإرث العائلي"
                icon={<Users className="w-6 h-6 text-indigo-600" />}
                ctaText="تأمين العائلة (خصم 40% للمجموعات)"
                onCtaClick={() => window.location.href = '/join-waitlist?plan=family'}
                accentColor="bg-indigo-600"
            >
                <div className="space-y-6 text-center">
                    <div className="relative h-48 border border-dashed border-slate-300 rounded-2xl bg-slate-50 flex items-center justify-center">
                        <div className="flex flex-col items-center">
                            <div className="flex gap-8 mb-4">
                                <div className="flex flex-col items-center gap-1 opacity-50">
                                    <div className="w-10 h-10 rounded-full bg-slate-300"></div>
                                    <div className="w-16 h-2 bg-slate-200 rounded"></div>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <div className="w-12 h-12 rounded-full bg-indigo-100 border-2 border-indigo-500 flex items-center justify-center text-indigo-700 font-bold text-lg">أنت</div>
                                    <div className="px-2 py-0.5 bg-indigo-100 text-indigo-700 text-[10px] rounded leading-none">المؤسس</div>
                                </div>
                                <div className="flex flex-col items-center gap-1 cursor-pointer hover:opacity-100 transition-opacity group">
                                    <div className="w-10 h-10 rounded-full border-2 border-dashed border-slate-400 flex items-center justify-center text-slate-400 group-hover:border-indigo-500 group-hover:text-indigo-500 bg-white">
                                        +
                                    </div>
                                    <span className="text-[10px] text-slate-400 group-hover:text-indigo-600">أضف عضو</span>
                                </div>
                            </div>
                            <p className="text-xs text-slate-400">ابدأ برسم شجرة العائلة الصحية</p>
                        </div>
                    </div>

                    <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 text-right">
                        <div className="flex items-center gap-2 mb-2">
                            <AlertTriangle className="w-4 h-4 text-amber-600" />
                            <strong className="text-amber-900 text-sm">تم رصد نمط وراثي محتمل</strong>
                        </div>
                        <p className="text-amber-800/80 text-xs leading-relaxed">
                            تاريخ العائلة يشير إلى احتمالية وجود "جينات صامتة" لارتفاع ضغط الدم. إضافة المزيد من الأقارب سيزيد دقة التنبؤ بنسبة 40%.
                        </p>
                    </div>
                </div>
            </ServiceModal>
        </div>
    );
}
