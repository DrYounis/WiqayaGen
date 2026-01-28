'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function SaudiHealthMap() {
    const [score, setScore] = useState(64);

    useEffect(() => {
        // Animate score slightly
        const interval = setInterval(() => {
            setScore(prev => Math.min(99, Math.max(60, prev + (Math.random() > 0.5 ? 1 : -1))));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full aspect-[16/9] md:aspect-[2/1] bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl flex items-center justify-center group">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            {/* Mock Map Shapes (Simplified blobs for MVP) */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-teal-500/40 rounded-full blur-[60px] animate-pulse"></div>
                <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-blue-600/40 rounded-full blur-[80px] animate-pulse delay-700"></div>
                <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-purple-500/40 rounded-full blur-[50px] animate-pulse delay-1000"></div>
            </div>

            {/* Saudi Map Placeholder SVG or Shape */}
            <svg viewBox="0 0 800 600" className="absolute inset-0 w-full h-full opacity-20 stroke-teal-500/50 stroke-1 fill-none">
                {/* Very abstract representation of KSA borders for MVP visual */}
                <path d="M 200 400 L 250 200 L 400 150 L 600 200 L 650 450 L 450 550 L 250 500 Z" />
            </svg>

            {/* Floating Data Points */}
            <motion.div
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                className="absolute top-6 right-6 md:top-8 md:right-12 bg-slate-800/95 backdrop-blur-md border-2 border-slate-600 p-4 md:p-5 rounded-2xl flex items-center gap-3 shadow-2xl"
            >
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
                <div>
                    <div className="text-base md:text-lg font-bold text-white font-sans">متوافق مع وزارة الصحة</div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}
                className="absolute bottom-6 left-6 md:bottom-8 md:left-12 bg-slate-800/95 backdrop-blur-md border-2 border-slate-600 p-4 md:p-5 rounded-2xl flex items-center gap-3 shadow-2xl"
            >
                <div className="w-3 h-3 bg-indigo-400 rounded-full animate-ping"></div>
                <div>
                    <div className="text-base md:text-lg font-bold text-white font-sans">دقة سعودية</div>
                </div>
            </motion.div>


            {/* Central Score */}
            <div className="relative z-10 text-center">
                <div className="inline-block relative">
                    <svg className="w-48 h-48 md:w-64 md:h-64 transform -rotate-90">
                        <circle cx="50%" cy="50%" r="45%" className="stroke-slate-800 fill-none stoke-[10px]" />
                        <circle cx="50%" cy="50%" r="45%" className="stroke-teal-500 fill-none stroke-[10px] transition-all duration-1000"
                            strokeDasharray="283"
                            strokeDashoffset={283 - (283 * score) / 100}
                            strokeLinecap="round"
                        />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-6xl md:text-8xl font-bold text-emerald-400 tracking-tighter font-sans">24/7</span>
                        <span className="text-xl md:text-2xl text-white font-semibold mt-1 font-sans">Active</span>
                        <span className="text-sm md:text-base text-teal-400 font-medium uppercase tracking-widest mt-3 font-sans flex items-center gap-2">
                            <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                            الإشراف الطبي
                        </span>
                    </div>
                </div>
                <p className="text-slate-400 mt-4 text-sm font-mono font-sans">بإشراف نخبة من الاستشاريين • المملكة العربية السعودية</p>
            </div>

        </div>
    );
}
