'use client';

import { QrCode, Share2, Users, Activity, ScanLine, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function ServicesGrid() {
    return (
        <div className="grid md:grid-cols-3 gap-6">

            {/* Service 1: Wiqaya Score (Gamified Health) */}
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

                {/* Visual: Circular Score */}
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

                <button className="mt-auto w-full py-3 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 text-sm font-bold">
                    ابدأ المنافسة <ArrowRight className="w-4 h-4 rotate-180" />
                </button>
            </div>

            {/* Service 2: Gen-Halal AI Scanner (Nutrition) */}
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

                {/* Visual: Phone Check */}
                <div className="bg-slate-900 rounded-2xl p-4 mb-6 border border-slate-800 relative overflow-hidden h-40 flex items-center justify-center">
                    {/* Camera Viewfinder UI */}
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

                <button className="mt-auto w-full py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 text-sm font-bold">
                    افحص المنتج <ArrowRight className="w-4 h-4 rotate-180" />
                </button>
            </div>

            {/* Service 3: Wiqaya Family Tree (Legacy) */}
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

                {/* Visual: Tree Diagram */}
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

                <button className="mt-auto w-full py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 text-sm font-bold">
                    ارسم العائلة <ArrowRight className="w-4 h-4 rotate-180" />
                </button>
            </div>

        </div>
    );
}
