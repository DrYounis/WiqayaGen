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
        <div className="relative w-full min-h-[22rem] md:min-h-[26rem] bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl flex group">
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

            {/*
              Layout note: badges live in normal flow (top row / bottom row), NOT absolute.
              Absolute corner badges inside an aspect-ratio box collided with the centered
              ring whenever the card narrowed. In-flow rows make overlap structurally impossible.
            */}
            <div className="relative z-10 w-full h-full flex flex-col justify-between gap-4 p-4 md:p-6">
                {/* Top row — badge pinned to the right (start side in RTL) */}
                <div className="flex justify-start">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                        className="bg-slate-800/95 backdrop-blur-md border-2 border-slate-600 px-3 py-2 md:px-4 md:py-3 rounded-2xl flex items-center gap-2 shadow-2xl"
                    >
                        <div className="w-3 h-3 bg-blue-400 rounded-full animate-ping shrink-0"></div>
                        <div className="text-sm md:text-base font-bold text-white font-sans leading-snug">متوافق مع وزارة الصحة</div>
                    </motion.div>
                </div>

                {/* Central Score — ring and digits scale together so the text always fits inside */}
                <div className="text-center">
                    <div className="inline-block relative">
                        <svg viewBox="0 0 100 100" className="w-40 h-40 md:w-52 md:h-52 transform -rotate-90">
                            <circle cx="50" cy="50" r="45" className="stroke-slate-800 fill-none" strokeWidth="6" />
                            <circle cx="50" cy="50" r="45" className="stroke-teal-500 fill-none transition-all duration-1000"
                                strokeWidth="6"
                                strokeDasharray="283"
                                strokeDashoffset={283 - (283 * score) / 100}
                                strokeLinecap="round"
                            />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-4xl md:text-5xl font-bold text-emerald-400 tracking-tighter font-sans leading-none" dir="ltr">24/7</span>
                            <span className="text-base md:text-lg text-white font-semibold mt-1 font-sans">Active</span>
                            <span className="text-xs md:text-sm text-teal-400 font-medium mt-2 font-sans flex items-center gap-1.5">
                                <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                                الإشراف الطبي
                            </span>
                        </div>
                    </div>
                    <p className="text-slate-400 mt-3 text-xs md:text-sm font-sans">بإشراف نخبة من الاستشاريين • المملكة العربية السعودية</p>
                </div>

                {/* Bottom row — badge pinned to the left (end side in RTL) */}
                <div className="flex justify-end">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}
                        className="bg-slate-800/95 backdrop-blur-md border-2 border-slate-600 px-3 py-2 md:px-4 md:py-3 rounded-2xl flex items-center gap-2 shadow-2xl"
                    >
                        <div className="w-3 h-3 bg-indigo-400 rounded-full animate-ping shrink-0"></div>
                        <div className="text-sm md:text-base font-bold text-white font-sans">دقة سعودية</div>
                    </motion.div>
                </div>
            </div>

        </div>
    );
}
