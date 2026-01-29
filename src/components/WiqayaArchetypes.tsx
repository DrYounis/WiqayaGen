'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Share2, RefreshCw, ChevronLeft, Zap, Moon, Anchor, Eye } from 'lucide-react';

// The 4 Saudi Genetic Archetypes
const ARCHETYPES = {
    horse: {
        title: 'الخيل العربي 🐎',
        gene: 'ACTN3 Gene',
        trait: 'القوة والسرعة',
        desc: 'عضلاتك من النوع "سريع الانقباض". أنت مخلوق للسرعة والأوزان الثقيلة، مو للماراثون والمشي الطويل.',
        hack: 'نصيحة: ركز على تمارين الكروس فيت (CrossFit) ولا تضيع وقتك في المشي البطيء.',
        color: 'from-amber-400 to-orange-600',
        icon: <Zap size={40} className="text-white" />
    },
    wolf: {
        title: 'الذيب الأمعط 🐺',
        gene: 'CLOCK Gene',
        trait: 'النشاط الليلي',
        desc: 'ساعتك البيولوجية مختلفة. قمة تركيزك وإبداعك تكون بعد الساعة ٩ بالليل. صباحك بطيء، وليلك نار.',
        hack: 'نصيحة: لا تجبر نفسك على الدوام الصباحي إذا تقدر. جدول مهامك الصعبة في المساء.',
        color: 'from-slate-700 to-slate-900',
        icon: <Moon size={40} className="text-white" />
    },
    camel: {
        title: 'سفينة الصحراء 🐫',
        gene: 'Thrifty Gene',
        trait: 'التحمل والبقاء',
        desc: 'جسمك عبقري في تخزين الطاقة (الدهون) للأزمات. هذا كان مفيد للجدود، لكنه مشكلة مع البوفيهات اليوم.',
        hack: 'نصيحة: الصيام المتقطع هو لعبتك! جسمك يستجيب للصيام أفضل من أي شخص ثاني.',
        color: 'from-yellow-500 to-amber-700',
        icon: <Anchor size={40} className="text-white" />
    },
    falcon: {
        title: 'الصقر الجارح 🦅',
        gene: 'COMT Gene',
        trait: 'التركيز الحاد',
        desc: 'عندك قدرة عجيبة على التركيز وحل المشاكل المعقدة، لكنك تتوتر بسرعة لأن عقلك ما يوقف تحليل.',
        hack: 'نصيحة: لازم تقطع الكافيين وقت الضغط، لأن جهازك العصبي "مشحون" خلقة.',
        color: 'from-emerald-500 to-teal-700',
        icon: <Eye size={40} className="text-white" />
    }
};

const QUESTIONS = [
    {
        id: 1,
        text: 'في النادي، وش تفضل؟',
        options: [
            { text: 'أشيل أوزان ثقيلة وحديد 🏋️', type: 'horse' },
            { text: 'أمشي سير أو أهرول 🏃', type: 'camel' }
        ]
    },
    {
        id: 2,
        text: 'متى تحس مخك "مصحصح" 100%؟',
        options: [
            { text: 'الصباح مع القهوة ☀️', type: 'falcon' },
            { text: 'تالي الليل والهدوء 🌙', type: 'wolf' }
        ]
    },
    {
        id: 3,
        text: 'إذا فاتتك وجبة الغداء.. وش يصير؟',
        options: [
            { text: 'أعصب ويصدع راسي 🤯', type: 'horse' },
            { text: 'عادي، أكمل للعشاء ❄️', type: 'camel' }
        ]
    }
];

export default function WiqayaArchetypes() {
    const [step, setStep] = useState(0); // 0=Intro, 1-3=Questions, 4=Loading, 5=Result
    const [answers, setAnswers] = useState<string[]>([]);
    const [result, setResult] = useState<any>(null);
    const [mounted, setMounted] = useState(false);

    // Prevent hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    const handleAnswer = (type: string) => {
        const newAnswers = [...answers, type];
        setAnswers(newAnswers);

        if (step < 3) {
            setStep(step + 1);
        } else {
            calculateResult(newAnswers);
        }
    };

    const calculateResult = (finalAnswers: string[]) => {
        setStep(4); // Loading
        // Simple logic: Find most frequent answer, default to 'wolf' if tie
        const counts: any = {};
        finalAnswers.forEach(x => { counts[x] = (counts[x] || 0) + 1; });
        const winner = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);

        setTimeout(() => {
            setResult(ARCHETYPES[winner as keyof typeof ARCHETYPES]);
            setStep(5); // Result
        }, 1800);
    };

    const shareResult = () => {
        const text = `أنا طلعت شخصيتي الجينية: ${result.title}!\nاكتشف نمطك الجيني (الخيل، الذيب، أو الصقر) هنا:\nhttps://wiqaya-gen.vercel.app\n#صحتك_جيناتك`;
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank');
    };

    // Simple loading state before mount
    if (!mounted) {
        return (
            <div className="w-full max-w-2xl mx-auto p-6">
                <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden min-h-[500px] animate-pulse" />
            </div>
        );
    }

    return (
        <div className="w-full max-w-2xl mx-auto p-6" dir="rtl" suppressHydrationWarning>
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden min-h-[500px] relative">

                {/* Progress Bar */}
                <div className="h-2 bg-slate-100 w-full">
                    <motion.div
                        className="h-full bg-primary-600"
                        animate={{ width: `${(step / 5) * 100}%` }}
                    />
                </div>

                <div className="p-8 flex flex-col items-center justify-center h-full text-center">
                    <AnimatePresence mode="wait">

                        {/* STEP 0: INTRO */}
                        {step === 0 && (
                            <motion.div key="intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
                                <span className="text-6xl">🧬</span>
                                <h2 className="text-3xl font-bold text-slate-900">من أنت جينياً؟</h2>
                                <p className="text-lg text-slate-500">
                                    هل جيناتك جينات "ذيب" ولا "خيل"؟ جاوب 3 أسئلة بسيطة واكتشف نمط حياتك المثالي.
                                </p>
                                <button
                                    onClick={() => setStep(1)}
                                    className="w-full py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-bold text-lg shadow-lg shadow-primary-500/30 transition-all hover:scale-105"
                                >
                                    ابدأ التحليل 🚀
                                </button>
                            </motion.div>
                        )}

                        {/* STEPS 1-3: QUESTIONS */}
                        {step >= 1 && step <= 3 && (
                            <motion.div
                                key={`q-${step}`}
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: -50, opacity: 0 }}
                                className="w-full space-y-8"
                            >
                                <span className="text-sm font-bold text-primary-600 tracking-wider">سؤال {step} من 3</span>
                                <h3 className="text-2xl font-bold text-slate-800 leading-snug">
                                    {QUESTIONS[step - 1].text}
                                </h3>
                                <div className="grid gap-4">
                                    {QUESTIONS[step - 1].options.map((opt, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => handleAnswer(opt.type)}
                                            className="p-5 text-lg font-medium bg-slate-50 hover:bg-primary-50 border-2 border-slate-100 hover:border-primary-200 rounded-xl transition-all text-right flex justify-between group"
                                        >
                                            <span>{opt.text}</span>
                                            <ChevronLeft className="text-slate-300 group-hover:text-primary-500" />
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 4: LOADING */}
                        {step === 4 && (
                            <motion.div key="loading" className="flex flex-col items-center gap-4">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                    className="w-16 h-16 border-4 border-slate-200 border-t-primary-500 rounded-full"
                                />
                                <p className="font-bold text-slate-600 animate-pulse">جاري تحليل الأنماط...</p>
                            </motion.div>
                        )}

                        {/* STEP 5: RESULT CARD */}
                        {step === 5 && result && (
                            <motion.div
                                key="result"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ type: "spring", bounce: 0.5 }}
                                className="w-full"
                            >
                                {/* The Shiny Card */}
                                <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${result.color} p-1 shadow-2xl mb-6`}>
                                    <div className="absolute top-0 left-0 w-full h-full bg-white/10" />
                                    <div className="relative bg-slate-900/20 backdrop-blur-sm p-8 rounded-xl text-white border border-white/20">
                                        <div className="flex justify-center mb-4 opacity-90">{result.icon}</div>
                                        <h2 className="text-3xl font-bold mb-1">{result.title}</h2>
                                        <p className="text-sm font-mono opacity-80 mb-6">{result.gene}</p>

                                        <div className="bg-white/10 rounded-lg p-4 text-right mb-4">
                                            <p className="font-bold text-sm opacity-70 mb-1">النمط:</p>
                                            <p className="leading-relaxed">{result.desc}</p>
                                        </div>

                                        <div className="bg-white text-slate-900 rounded-lg p-3 flex items-start gap-2 text-right">
                                            <span className="mt-1">💡</span>
                                            <p className="text-sm font-bold">{result.hack}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="grid grid-cols-2 gap-3">
                                    <button
                                        onClick={shareResult}
                                        className="flex items-center justify-center gap-2 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors"
                                    >
                                        <Share2 size={18} />
                                        <span>انشر النتيجة</span>
                                    </button>
                                    <button
                                        onClick={() => { setStep(0); setAnswers([]); }}
                                        className="flex items-center justify-center gap-2 py-3 bg-slate-100 text-slate-700 rounded-xl font-bold hover:bg-slate-200 transition-colors"
                                    >
                                        <RefreshCw size={18} />
                                        <span>عيد الاختبار</span>
                                    </button>
                                </div>

                                <div className="mt-6 pt-6 border-t border-slate-100">
                                    <p className="text-slate-500 text-sm mb-3">تبي تتأكد 100% من جيناتك؟</p>
                                    <button className="w-full py-3 border-2 border-primary-600 text-primary-600 rounded-xl font-bold hover:bg-primary-50 transition-colors">
                                        اطلب فحص الـ DNA الكامل
                                    </button>
                                </div>

                            </motion.div>
                        )}

                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
