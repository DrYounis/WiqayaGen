'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Share2, RefreshCcw, ScanLine, ArrowRight } from 'lucide-react';

// The "Scientific" Data
const ALIBIS = [
    {
        id: 'food',
        emoji: '🍔',
        title: 'خربت الدايت؟',
        gene: 'FTO Gene',
        geneName: 'جين "النهم"',
        excuse: 'موب منك! هذا الجين يخلي إشارات الشبع تتأخر في الوصول لمخك ٢٠ دقيقة.',
        fix: '💡 الحل السحري: اشرب كاستين موية قبل الأكل عشان تخدع الجين.',
        color: 'bg-rose-50 border-rose-200 text-rose-700',
    },
    {
        id: 'sleep',
        emoji: '😴',
        title: 'القومه صعبة؟',
        gene: 'PER3 Gene',
        geneName: 'جين "البومة"',
        excuse: 'جيناتك مبرمجة على توقيت ليلي. ساعتك البيولوجية أطول من ٢٤ ساعة!',
        fix: '💡 الحل السحري: تعرض لأشعة الشمس أول دقيقة تفتح عينك فيها.',
        color: 'bg-indigo-50 border-indigo-200 text-indigo-700',
    },
    {
        id: 'mood',
        emoji: '😤',
        title: 'مودك سيء؟',
        gene: 'COMT Gene',
        geneName: 'جين "المحارب"',
        excuse: 'جسمك يكسر هرمونات التوتر ببطء، عشان كذا تمسك معك "الزعلة" فترة أطول.',
        fix: '💡 الحل السحري: جرب "التنفس الصندوقي" (٤ ثواني شهيق، ٤ حبس، ٤ زفير).',
        color: 'bg-amber-50 border-amber-200 text-amber-700',
    },
    {
        id: 'coffee',
        emoji: '☕',
        title: 'رجفة قهوة؟',
        gene: 'CYP1A2 Gene',
        geneName: 'جين "الأيض البطيء"',
        excuse: 'كبدك يأخذ وقت طويل عشان يفلتر الكافيين، فيتراكم ويسبب لك قلق.',
        fix: '💡 الحل السحري: وقف كافيين تماماً بعد الساعة ٢ الظهر.',
        color: 'bg-emerald-50 border-emerald-200 text-emerald-700',
    },
];

export default function GeneticAlibi() {
    const [selected, setSelected] = useState<null | typeof ALIBIS[0]>(null);
    const [scanning, setScanning] = useState(false);
    const [mounted, setMounted] = useState(false);

    // Prevent hydration mismatch by only rendering after client mount
    useEffect(() => {
        setMounted(true);
    }, []);

    const handleSelect = (item: typeof ALIBIS[0]) => {
        setScanning(true);
        // Simulate "DNA Scanning" Delay
        setTimeout(() => {
            setScanning(false);
            setSelected(item);
        }, 1500);
    };

    const shareOnWhatsApp = () => {
        if (!selected) return;
        const text = `طلع الموضوع مو مني، الموضوع جينات! 😂\n\nعذري هو: ${selected.geneName}\nاكتشف عذرك الجيني هنا: https://gen.sara.plus\n#صحتك_جيناتك`;
        window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
    };

    // Don't render until mounted to prevent hydration mismatch
    if (!mounted) {
        return (
            <div className="w-full max-w-3xl mx-auto p-4 py-12">
                <div className="text-center mb-10 space-y-2">
                    <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold tracking-wide">
                        ✨ تجربة مجانية
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                        وش "عذرك الطبي" اليوم؟
                    </h2>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full max-w-3xl mx-auto p-4 py-12" dir="rtl" suppressHydrationWarning>

            {/* Header Section */}
            <div className="text-center mb-10 space-y-2">
                <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold tracking-wide">
                    ✨ تجربة مجانية
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                    وش "عذرك الطبي" اليوم؟
                </h2>
                <p className="text-slate-500 text-lg">
                    اختار مشكلتك، والذكاء الاصطناعي بيطلع لك "العذر الجيني" المثبت علمياً.
                </p>
            </div>

            {/* Main Content Area */}
            <div className="relative min-h-[400px]">
                <AnimatePresence mode="wait">

                    {/* STATE 1: SELECTION GRID */}
                    {!selected && !scanning && (
                        <motion.div
                            key="grid"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-4"
                        >
                            {ALIBIS.map((item) => (
                                <motion.button
                                    key={item.id}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => handleSelect(item)}
                                    className="group relative flex flex-col items-center justify-center p-6 h-48 bg-white rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(16,185,129,0.1)] transition-colors"
                                >
                                    <span className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">
                                        {item.emoji}
                                    </span>
                                    <span className="font-bold text-slate-700 group-hover:text-emerald-600 transition-colors">
                                        {item.title}
                                    </span>
                                </motion.button>
                            ))}
                        </motion.div>
                    )}

                    {/* STATE 2: SCANNING ANIMATION */}
                    {scanning && (
                        <motion.div
                            key="scanning"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 flex flex-col items-center justify-center bg-white/50 backdrop-blur-sm rounded-3xl z-10"
                        >
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                className="text-emerald-500 mb-4"
                            >
                                <ScanLine size={48} />
                            </motion.div>
                            <p className="text-lg font-bold text-slate-600 animate-pulse">
                                جاري تحليل الـ DNA...
                            </p>
                        </motion.div>
                    )}

                    {/* STATE 3: THE RESULT (ALIBI) */}
                    {selected && !scanning && (
                        <motion.div
                            key="result"
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            className="relative bg-white rounded-3xl shadow-[0_20px_50px_rgb(0,0,0,0.1)] border border-slate-100 overflow-hidden"
                        >
                            {/* Header of Card */}
                            <div className={`p-6 ${selected.color} bg-opacity-30 flex items-center justify-between`}>
                                <div className="flex items-center gap-3">
                                    <span className="text-4xl">{selected.emoji}</span>
                                    <div>
                                        <p className="text-xs font-bold uppercase opacity-70 tracking-wider">المتهم الرسمي</p>
                                        <h3 className="text-xl font-bold">{selected.gene}</h3>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setSelected(null)}
                                    className="p-2 hover:bg-white/50 rounded-full transition-colors"
                                >
                                    <RefreshCcw size={20} />
                                </button>
                            </div>

                            {/* Body of Card */}
                            <div className="p-8 space-y-6">
                                <div>
                                    <h4 className="text-lg font-bold text-slate-800 mb-2">
                                        {selected.geneName}
                                    </h4>
                                    <p className="text-slate-600 leading-relaxed text-lg">
                                        {selected.excuse}
                                    </p>
                                </div>

                                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3">
                                    <span className="text-emerald-500 mt-1"><ScanLine size={20} /></span>
                                    <p className="text-slate-700 text-sm font-medium">
                                        {selected.fix}
                                    </p>
                                </div>

                                {/* Actions */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">
                                    <button
                                        onClick={shareOnWhatsApp}
                                        className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-xl active:scale-95"
                                    >
                                        <Share2 size={18} />
                                        <span>شارك العذر بالواتس</span>
                                    </button>

                                    <button className="flex items-center justify-center gap-2 w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold transition-all active:scale-95">
                                        <span>تحليل شامل (مجاني)</span>
                                        <ArrowRight size={18} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
