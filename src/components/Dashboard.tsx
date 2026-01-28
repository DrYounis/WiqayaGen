'use client';

import { motion } from 'framer-motion';
import { Sun, Coffee, BedDouble, ScanBarcode, ChevronLeft, Activity, BrainCircuit, Users, AlertTriangle } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { calculateSaudiRiskScore, DEMO_VARIANTS, DEMO_USER_GENOTYPE, type RiskResult } from '@/lib/riskEngine';

const CircularGauge = ({ score }: { score: number }) => {
    const radius = 80;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (score / 100) * circumference;

    return (
        <div className="relative flex items-center justify-center w-64 h-64 md:w-80 md:h-80 mx-auto">
            {/* Background Circle */}
            <svg className="w-full h-full transform -rotate-90">
                <circle
                    cx="50%"
                    cy="50%"
                    r={radius}
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="transparent"
                    className="text-slate-100"
                />
                {/* Progress Circle */}
                <motion.circle
                    cx="50%"
                    cy="50%"
                    r={radius}
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="transparent"
                    className="text-teal-500"
                    strokeDasharray={circumference}
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset: offset }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    strokeLinecap="round"
                />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">مستوى الأمان الصحي</span>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold text-emerald-600 tracking-tight"
                >
                    خطر منخفض
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="text-lg md:text-xl text-slate-500 mt-1 font-sans"
                >
                    Low Risk
                </motion.div>
                <div className="mt-3 flex flex-col items-center">
                    <span className="text-xs text-emerald-600 font-bold bg-emerald-50 px-2 py-1 rounded-full border border-emerald-100">
                        ممتاز +2.4%
                    </span>
                    <p className="text-xs text-slate-400 mt-2 font-medium">
                        تم التحديث بناءً على خطوات الأمس
                        <span className="block text-[10px] opacity-70 font-sans mt-0.5" dir="ltr">Updated based on yesterday's activity</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

const InsightCard = ({ icon: Icon, title, status, color, action, delay }: any) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        className="bg-white/80 backdrop-blur-sm border border-slate-100 rounded-3xl p-6 shadow-xl shadow-slate-200/50 flex flex-col justify-between hover:shadow-2xl hover:border-slate-200 transition-all group"
    >
        <div className="flex justify-between items-start mb-4">
            <div className={`p-3 rounded-2xl ${color.bg} ${color.text}`}>
                <Icon className="w-6 h-6" />
            </div>
            <span className={`text-xs font-bold px-2 py-1 rounded border ${color.badgeBg} ${color.badgeText} ${color.badgeBorder}`}>
                {status}
            </span>
        </div>

        <div>
            <h3 className="text-slate-900 font-bold text-lg mb-1">{title}</h3>
            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden mt-3 mb-4">
                <div className={`h-full rounded-full ${color.bar}`} style={{ width: '75%' }}></div>
            </div>

            <button className="w-full py-3 bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-xl text-sm font-bold transition-colors flex items-center justify-center gap-2 group-hover:bg-slate-900 group-hover:text-white">
                {action}
                <ChevronLeft className="w-4 h-4 rotate-180 group-hover:text-teal-400" />
            </button>
        </div>
    </motion.div>
);

export default function Dashboard() {
    const [score, setScore] = useState(0);
    const [riskResults, setRiskResults] = useState<RiskResult[]>([]);

    useEffect(() => {
        // Simulate score counting up
        const timer = setTimeout(() => setScore(84), 100);

        // Run Risk Engine
        const risks = calculateSaudiRiskScore(DEMO_USER_GENOTYPE, DEMO_VARIANTS);
        setRiskResults(risks);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-slate-50 font-sans pb-24" dir="rtl">

            {/* Header */}
            <div className="pt-8 px-6 pb-4 max-w-7xl mx-auto flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">مرحباً، عبد الله 👋</h1>
                    <p className="text-slate-500 text-sm">بروتوكولك اليومي جاهز</p>
                </div>
                <div className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center text-slate-400 cursor-pointer hover:bg-slate-100 hover:text-slate-600 transition-colors">
                    <Activity className="w-5 h-5" />
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 space-y-12">

                {/* 1. Hero Health Gauge */}
                <section className="pt-8 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-teal-100/40 to-blue-100/40 rounded-full blur-[100px] pointer-events-none"></div>
                    <CircularGauge score={score} />
                </section>

                {/* 2. Biomarker Insight Grid */}
                <section className="grid md:grid-cols-3 gap-6 relative z-10">

                    {/* Card A: Personalized Prevention Plan */}
                    <InsightCard
                        icon={BrainCircuit}
                        title="خطة وقاية شخصية"
                        status="جاهزة"
                        action="عرض خطة اليوم"
                        color={{
                            bg: 'bg-teal-50', text: 'text-teal-600',
                            badgeBg: 'bg-teal-50', badgeText: 'text-teal-700', badgeBorder: 'border-teal-100',
                            bar: 'bg-teal-500'
                        }}
                        delay={0.2}
                    />

                    {/* Card B: Caffeine */}
                    <InsightCard
                        icon={Coffee}
                        title="حساسية الكافيين"
                        status="أيض بطيء"
                        action="كوب واحد كحد أقصى (قبل 2 ظهراً)"
                        color={{
                            bg: 'bg-amber-50', text: 'text-amber-600',
                            badgeBg: 'bg-amber-50', badgeText: 'text-amber-700', badgeBorder: 'border-amber-100',
                            bar: 'bg-amber-500'
                        }}
                        delay={0.3}
                    />

                    {/* Card C: Genomic Risk Analysis */}
                    <InsightCard
                        icon={AlertTriangle}
                        title="تحليل المخاطر الجينية"
                        status="تم التحليل"
                        action="عرض التقرير الكامل"
                        color={{
                            bg: 'bg-purple-50', text: 'text-purple-600',
                            badgeBg: 'bg-purple-50', badgeText: 'text-purple-700', badgeBorder: 'border-purple-100',
                            bar: 'bg-purple-500'
                        }}
                        delay={0.4}
                    />
                </section>

            </div>

            {/* 3. Gen-Halal Smart Action FAB */}
            <div className="fixed bottom-8 right-8 z-50">
                <motion.button
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.05, width: 'auto' }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="flex items-center gap-3 bg-slate-900 text-white p-4 rounded-2xl shadow-2xl shadow-slate-900/30 group overflow-hidden"
                >
                    <ScanBarcode className="w-6 h-6 text-teal-400" />
                    <span className="font-bold whitespace-nowrap overflow-hidden max-w-0 group-hover:max-w-xs transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                        افحص منتجك (Gen-Halal)
                    </span>
                </motion.button>
            </div>

            {/* Footer: AI-Driven Health Forecasting */}
            <div className="max-w-7xl mx-auto px-6 mt-16 pb-8">
                <div className="text-center">
                    <p className="text-slate-400 text-sm font-medium">
                        تنبؤ صحي مدعوم بالذكاء الاصطناعي
                    </p>
                    <p className="text-slate-300 text-xs mt-1 font-sans">
                        AI-Driven Health Forecasting
                    </p>
                </div>
            </div>

        </div>
    );
}
