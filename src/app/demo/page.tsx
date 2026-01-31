"use client";
import React, { useState } from 'react';
import { Activity, Users, TrendingDown, AlertTriangle, Map, Database, ShieldCheck, ArrowUpRight } from 'lucide-react';
import SaudiHealthMap from '@/components/SaudiHealthMap';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function DemoDashboard() {
    const [activeTab, setActiveTab] = useState<'overview' | 'risk_map' | 'outcomes'>('overview');

    return (
        <div className="min-h-screen bg-slate-50 font-sans" dir="rtl">

            {/* Top Navigation Bar */}
            <nav className="bg-slate-900 text-white px-6 py-4 sticky top-0 z-50 shadow-md">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <Link href="/" className="font-bold text-xl tracking-tighter">
                            وقاية<span className="text-teal-500">جين</span>
                        </Link>
                        <div className="h-6 w-px bg-slate-700 mx-2"></div>
                        <span className="text-xs font-mono text-teal-400 bg-teal-400/10 px-2 py-1 rounded border border-teal-400/20">LIVE DEMO</span>
                    </div>
                    <div className="flex gap-4 text-sm text-slate-300">
                        <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4" /> آمن حكومي</span>
                        <span className="flex items-center gap-1"><Database className="w-4 h-4" /> متصل بالبنك الحيوي</span>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-6 py-8">

                {/* Header Stats */}
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-slate-900 mb-2">لوحة التحكم الاكتوارية الوطنية</h1>
                    <p className="text-slate-500 text-sm">بيانات حية (محاكاة) لتحليل مخاطر الصحة السكانية في المملكة.</p>
                </div>

                {/* KPI Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-blue-50 text-blue-600 rounded-lg"><Users className="w-6 h-6" /></div>
                            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded flex items-center gap-1">
                                +12% <ArrowUpRight className="w-3 h-3" />
                            </span>
                        </div>
                        <div>
                            <span className="text-slate-500 text-sm font-medium">إجمالي السكان المحللين</span>
                            <h3 className="text-3xl font-bold text-slate-900 mt-1">1,240,500</h3>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-red-50 text-red-600 rounded-lg"><AlertTriangle className="w-6 h-6" /></div>
                            <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded">حرج</span>
                        </div>
                        <div>
                            <span className="text-slate-500 text-sm font-medium">مخاطر وراثية عالية (السكري)</span>
                            <h3 className="text-3xl font-bold text-slate-900 mt-1">28.4%</h3>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-teal-50 text-teal-600 rounded-lg"><TrendingDown className="w-6 h-6" /></div>
                            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">توفير</span>
                        </div>
                        <div>
                            <span className="text-slate-500 text-sm font-medium">وفر متوقع (سنة واحدة)</span>
                            <h3 className="text-3xl font-bold text-slate-900 mt-1">450M ر.س</h3>
                        </div>
                    </div>

                    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-sm flex flex-col justify-between relative overflow-hidden text-white">
                        <div className="absolute top-0 right-0 p-32 bg-teal-500/10 rounded-full blur-3xl"></div>
                        <div className="flex justify-between items-start mb-4 relative z-10">
                            <div className="p-3 bg-slate-800 text-teal-400 rounded-lg"><Activity className="w-6 h-6" /></div>
                        </div>
                        <div className="relative z-10">
                            <span className="text-slate-400 text-sm font-medium">مؤشر وقاية الوطني</span>
                            <h3 className="text-3xl font-bold text-white mt-1">72.4/100</h3>
                        </div>
                    </div>
                </div>

                {/* Main Content Areas */}
                <div className="grid lg:grid-cols-3 gap-8">

                    {/* Left Column: Interactive Map */}
                    <div className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm min-h-[500px]">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2">
                                <Map className="w-5 h-5 text-teal-600" />
                                الخريطة الحرارية للمخاطر الوراثية
                            </h3>
                            <div className="flex bg-slate-100 rounded-lg p-1 text-xs font-bold">
                                <button
                                    className={`px-3 py-1.5 rounded-md transition-all ${activeTab === 'risk_map' ? 'bg-white shadow text-slate-900' : 'text-slate-500'}`}
                                    onClick={() => setActiveTab('risk_map')}
                                >السكري</button>
                                <button className="px-3 py-1.5 rounded-md text-slate-500 hover:text-slate-900 transition-all">القلب</button>
                                <button className="px-3 py-1.5 rounded-md text-slate-500 hover:text-slate-900 transition-all">السمنة</button>
                            </div>
                        </div>

                        <div className="w-full h-[400px] bg-slate-50 rounded-xl relative overflow-hidden flex items-center justify-center border border-slate-100">
                            <div className="scale-110 opacity-90 grayscale-[0.2] hover:grayscale-0 transition-all">
                                <SaudiHealthMap />
                            </div>
                            {/* Overlay Stats */}
                            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur rounded-lg p-3 text-xs border border-slate-200 shadow-lg">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="w-3 h-3 rounded-full bg-red-500"></span>
                                    <span className="font-bold">الرياض:</span> تفشي بنسبة 32%
                                </div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="w-3 h-3 rounded-full bg-orange-400"></span>
                                    <span className="font-bold">الشرقية:</span> تفشي بنسبة 28%
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-green-500"></span>
                                    <span className="font-bold">حائل:</span> تفشي بنسبة 19%
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Actuarial Insights Feed */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm lg:h-[500px] overflow-hidden flex flex-col">
                        <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2 mb-4">
                            <TrendingDown className="w-5 h-5 text-teal-600" />
                            الرؤى الاكتوارية (Actuarial Feed)
                        </h3>

                        <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">

                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="p-3 bg-slate-50 border border-slate-100 rounded-lg hover:border-teal-200 transition-colors group cursor-pointer">
                                    <div className="flex justify-between text-[10px] text-slate-400 mb-2">
                                        <span>MC-ID: 8829-{i}32</span>
                                        <span>منذ {i * 2} دقيقة</span>
                                    </div>
                                    <p className="text-xs font-bold text-slate-800 leading-relaxed mb-2">
                                        تم الكشف عن نمط وراثي عالي الخطورة لـ "اعتلال الشبكية السكري" في
                                        <span className="text-teal-600"> مجموعة سكان الرياض (شمال)</span>.
                                    </p>
                                    <div className="flex items-center gap-2 mt-2">
                                        <span className="px-2 py-0.5 bg-red-100 text-red-600 text-[10px] font-bold rounded">إجراء وقائي مطلوب</span>
                                        <span className="text-[10px] text-slate-500 ml-auto group-hover:text-teal-600 underline">عرض التوصية</span>
                                    </div>
                                </div>
                            ))}

                            <div className="p-4 bg-teal-50 border border-teal-100 rounded-lg text-center">
                                <p className="text-teal-800 text-xs font-bold mb-2">توصية الذكاء الاصطناعي</p>
                                <p className="text-xs text-teal-700/80 leading-relaxed">
                                    زيادة مخصصات "الفحص المبكر" لعيادات العيون في منطقة الرياض بنسبة 15% للربع القادم لتفادي تكاليف العمليات الجراحية.
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}
