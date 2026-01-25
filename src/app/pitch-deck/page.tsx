"use client";
import React, { useState, useEffect } from 'react';
import { Presentation, ArrowRight, ArrowLeft, TrendingUp, Users, Target, Zap, Shield, HelpCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function PitchDeck() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            title: "1. الغلاف (The Hook)",
            icon: <Target className="w-12 h-12 text-blue-400" />,
            content: [
                "العنوان: WiqayaGen | وقاية جين",
                "العنوان الفرعي: الجيل القادم من التأمين الصحي: من \"دفع الفواتير\" إلى \"هندسة الصحة\".",
                "الصورة: شريط DNA يتحول إلى درع حماية رقمي."
            ]
        },
        {
            title: "2. المشكلة (The Money Leak)",
            icon: <TrendingUp className="w-12 h-12 text-red-400" />,
            content: [
                "التأمين اليوم يدفع لـ \"الحريق\" بدلاً من منعه.",
                "70% من المطالبات تذهب لأمراض مزمنة يمكن الوقاية منها.",
                "نفتقد \"الإنذار المبكر\" (نكتشف السكري متأخراً).",
                "النتيجة: خسارة مستمرة لشركات التأمين."
            ]
        },
        {
            title: "3. الحل (The Solution)",
            icon: <Zap className="w-12 h-12 text-yellow-400" />,
            content: [
                "الذكاء الجينومي كأداة لإدارة المخاطر.",
                "المعادلة: بيانات جينية + ذكاء اصطناعي = خطة وقاية دقيقة.",
                "منصة تتنبأ بالأمراض وتصمم خارطة طريق لتجنبها."
            ]
        },
        {
            title: "4. التقنية (The Secret Sauce)",
            icon: <Shield className="w-12 h-12 text-teal-400" />,
            content: [
                "تحليل PRS: حساب دقيق للمخاطر الوراثية.",
                "AI Health Agent: مرافق صحي ذكي 24/7.",
                "Local & Secure: بيانات محمية 100% داخل المملكة."
            ]
        },
        {
            title: "5. نموذج العمل (Business Model)",
            icon: <Users className="w-12 h-12 text-purple-400" />,
            content: [
                "شركات التأمين: تقليل المطالبات بنسبة 15%.",
                "المريض: حياة أطول بصحة أفضل.",
                "WiqayaGen: رسوم اشتراك سنوي (SaaS) + رسوم التحليل."
            ]
        },
        {
            title: "6. السوق والمنافسة",
            icon: <HelpCircle className="w-12 h-12 text-indigo-400" />,
            content: [
                "رؤية 2030: التركيز على الوقاية.",
                "هيفولوشن: المملكة عاصمة لأبحاث إطالة العمر.",
                "First Mover Advantage: لا منافس يدمج التأمين بالجينوم محلياً."
            ]
        },
        {
            title: "7. الطلب (The Ask)",
            icon: <Target className="w-12 h-12 text-green-400" />,
            content: [
                "نطلب شراكة تشريعية (Sandbox) في \"إبصار\".",
                "هدفنا: إثبات المفهوم مع 1000 مستخدم.",
                "ضمان أخلاقيات البيانات وعدم التمييز."
            ]
        },
        {
            title: "8. الفريق (The Team)",
            icon: <Users className="w-12 h-12 text-slate-200" />,
            content: [
                "د. محمد يونس: طبيب عائلة + خبرة تأمينية.",
                "فريق تقني متخصص في AI & Bioinformatics."
            ]
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') nextSlide();  // RTL: Left arrow goes to next slide logic wise for Arabic flow? Usually Left is Back, Right is Next. But let's stick to logical direction.
            // Let's stick to standard: Right Arrow -> Next, Left Arrow -> Previous. 
            // WAIT: In RTL, "Next" (Forward) is usually Left Arrow visually. 
            // In a presentation context, Right Key usually advances. Let's make Right Key -> Next slide for universality, 
            // but visually the "Next" button might be on the left.
            if (e.key === 'ArrowRight') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const currentSlideData = slides[currentSlide];

    return (
        <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden flex flex-col items-center justify-center">

            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-950 to-slate-950 z-0"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl z-0"></div>

            {/* Navbar (Minimal) */}
            <nav className="absolute top-0 w-full p-6 flex justify-between items-center z-50">
                <Link href="/" className="text-xl md:text-2xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
                    <span className="text-white">وقاية</span><span className="text-teal-500">جين</span>
                </Link>
                <div className="flex items-center gap-4">
                    <span className="text-slate-500 text-sm font-mono hidden md:inline-block">
                        Slide {currentSlide + 1} / {slides.length}
                    </span>
                    <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium border border-slate-800 rounded-full px-4 py-2 bg-slate-900/50 backdrop-blur-sm">
                        الخروج
                    </Link>
                </div>
            </nav>

            {/* Main Slide Content */}
            <main className="relative z-10 w-full max-w-5xl px-4 md:px-12 flex-1 flex flex-col justify-center">

                <div className="relative">
                    {/* Content Card */}
                    <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 md:p-16 shadow-2xl transition-all duration-500 min-h-[500px] flex flex-col justify-center items-center text-center">

                        <div className="mb-8 p-4 bg-slate-800/50 rounded-2xl ring-1 ring-slate-700 shadow-lg">
                            {currentSlideData.icon}
                        </div>

                        <h2 className="text-3xl md:text-5xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 leading-tight">
                            {currentSlideData.title}
                        </h2>

                        <div className="space-y-6 max-w-2xl text-lg md:text-xl text-slate-300 font-light leading-relaxed">
                            {currentSlideData.content.map((point, idx) => (
                                <p key={idx} className="flex items-center justify-center gap-3">
                                    {/* <span className="w-1.5 h-1.5 bg-teal-500 rounded-full shrink-0 mt-2"></span> */}
                                    {point}
                                </p>
                            ))}
                        </div>

                    </div>


                    {/* Navigation Buttons (Desktop: on Sides) */}
                    <button
                        onClick={prevSlide}
                        className="hidden md:flex absolute top-1/2 -right-20 -translate-y-1/2 p-4 text-slate-500 hover:text-white hover:bg-slate-800/50 rounded-full transition-all hover:scale-110 active:scale-95"
                        aria-label="Previous Slide"
                    >
                        <ChevronRight className="w-10 h-10" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="hidden md:flex absolute top-1/2 -left-20 -translate-y-1/2 p-4 text-slate-500 hover:text-white hover:bg-slate-800/50 rounded-full transition-all hover:scale-110 active:scale-95"
                        aria-label="Next Slide"
                    >
                        <ChevronLeft className="w-10 h-10" />
                    </button>

                </div>

                {/* Mobile Navigation */}
                <div className="flex justify-between items-center mt-8 md:hidden px-4">
                    <button
                        onClick={prevSlide}
                        className="p-3 text-slate-400 bg-slate-900 rounded-full border border-slate-800 hover:bg-slate-800"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                    <span className="text-slate-500 font-mono">
                        {currentSlide + 1} / {slides.length}
                    </span>
                    <button
                        onClick={nextSlide}
                        className="p-3 text-slate-400 bg-slate-900 rounded-full border border-slate-800 hover:bg-slate-800"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                </div>

            </main>

            {/* Footer / Progress */}
            <div className="relative z-10 w-full p-6">
                <div className="w-full h-1 bg-slate-900 rounded-full overflow-hidden max-w-3xl mx-auto">
                    <div
                        className="h-full bg-teal-500 transition-all duration-300 ease-out"
                        style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                    ></div>
                </div>
            </div>

        </div>
    );
}
