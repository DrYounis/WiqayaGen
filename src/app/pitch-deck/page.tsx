"use client";
import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function PitchDeck() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            title: "المبادرة",
            imageSrc: "/images/pitch-deck/slide-1.png",
            content: [
                "مرشح لمبادرة 'إبصار' - مجلس الضمان الصحي (CHI).",
                "العنوان: WiqayaGen | ذكاء الوقاية الجيني.",
                "الرؤية: تمكين 'الرعاية القائمة على القيمة' (Value-Based Healthcare) عبر دمج المخاطر الوراثية في نماذج التأمين."
            ]
        },
        {
            title: "الفجوة الحالية",
            imageSrc: "/images/pitch-deck/slide-2.png",
            content: [
                "شركات التأمين تدفع تكلفة 'المرض' (Sick Care) وليس 'الصحة'.",
                "70% من التكاليف تذهب لإدارة أمراض مزمنة كان يمكن التنبؤ بها وتفاديها جينياً.",
                "غياب البيانات الدقيقة (Actuarial Blindspot) حول المخاطر المستقبلية للمؤمن عليهم."
            ]
        },
        {
            title: "حلنا: وقاية جين",
            imageSrc: "/images/pitch-deck/slide-3.png",
            content: [
                "أول منصة SaaS للذكاء الاكتواري الجيني (Genomic Actuarial Intelligence).",
                "نقوم بتحليل الـ Polygenic Risk Scores (PRS) وتحويلها إلى 'مؤشرات قابلة للعمل' لشركات التأمين.",
                "الهدف: خفض تكلفة الوثيقة عبر الوقاية الاستباقية."
            ]
        },
        {
            title: "تجربة العميل",
            imageSrc: "/images/pitch-deck/slide-4.png",
            content: [
                "للمؤمن عليه: 'مدرب صحي شخصي' يكافئه على تحسين خياراته (Gamification).",
                "لشركة التأمين: لوحة تحكم (Dashboard) لرصد المخاطر السكانية وتصميم برامج وقاية موجهة.",
                "للمشرع (CHI): تحسين مخرجات الصحة السكانية وتقليل الهدر."
            ]
        },
        {
            title: "الأثر المالي",
            imageSrc: "/images/pitch-deck/slide-5.png",
            content: [
                "توقع خفض المطالبات بنسبة 15-20% للفئات عالية الخطورة.",
                "زيادة ولاء العملاء عبر برامج المكافآت الصحية.",
                "نموذج عمل مستدام: اشتراك سنوي + مشاركة في الوفورات (Shared Savings)."
            ]
        },
        {
            title: "لماذا إبصار؟",
            imageSrc: "/images/pitch-deck/slide-6.png",
            content: [
                "نتوافق تماماً مع ركائز إبصار: الابتكار، التحول الرقمي، والاستدامة.",
                "نحتاج البيئة التشريعية التجريبية (Sandbox) لاختبار 'التسعير القائم على الوقاية' دون عوائق تنظيمية.",
                "نحن نمثل الجيل القادم من InsurTech."
            ]
        },
        {
            title: "الطلب (Sandbox)",
            imageSrc: "/images/pitch-deck/slide-7.png",
            content: [
                "المطلوب: قبولنا في 'إبصار ساندبوكس' (Ibsar Sandbox).",
                "النطاق التجريبي: 1,000 مستخدم بالتعاون مع شركة تأمين شريكة.",
                "مؤشر النجاح: إثبات تحسن المؤشرات الصحية للمشاركين خلال 6 أشهر."
            ]
        },
        {
            title: "الفريق",
            imageSrc: "/images/pitch-deck/slide-8.png",
            content: [
                "قيادة طبية: د. محمد يونس (خبير تأمين وطب أسرة).",
                "فريق تقني: مطورين سعوديين متخصصين في الذكاء الاصطناعي وأمن البيانات.",
                "التزام كامل بضوابط الأمن السيبراني (NDMO/NCA)."
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
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'ArrowRight') nextSlide();
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
                        شريحة {currentSlide + 1} / {slides.length}
                    </span>
                    <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium border border-slate-800 rounded-full px-4 py-2 bg-slate-900/50 backdrop-blur-sm">
                        الخروج
                    </Link>
                </div>
            </nav>

            {/* Main Slide Content */}
            <main className="relative z-10 w-full max-w-6xl px-4 md:px-12 flex-1 flex flex-col justify-center">

                <div className="relative">
                    {/* Content Card with Image */}
                    <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl transition-all duration-500 min-h-[600px] flex flex-col md:flex-row items-center gap-8 md:gap-12">

                        {/* Image Section (Right on RTL, Left on LTR - but standard Flex is Row) */}
                        <div className="w-full md:w-1/2 flex justify-center items-center">
                            <div className="relative w-64 h-64 md:w-96 md:h-96">
                                {/* Glow Effect behind image */}
                                <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>
                                <Image
                                    src={currentSlideData.imageSrc}
                                    alt={currentSlideData.title}
                                    fill
                                    className="object-contain drop-shadow-2xl animate-in fade-in zoom-in duration-700"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Text Section */}
                        <div className="w-full md:w-1/2 text-center md:text-right"> {/* md:text-right for RTL feel if desired, but centered is fine too. Let's stick to Center/Right logic */}

                            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300 leading-tight">
                                {currentSlideData.title}
                            </h2>

                            <div className="space-y-6 text-lg md:text-xl text-slate-300 font-light leading-relaxed">
                                {currentSlideData.content.map((point, idx) => (
                                    <p key={idx} className="flex items-start gap-3 justify-center md:justify-start">
                                        {/* Using md:justify-start makes sense if RTL is strictly followed, assuming container is rtl. 
                                        Since we have dir="rtl" on layout, flex-row items order will be reversed (Image Right, Text Left).
                                        Wait, dir="rtl" makes first item absolute right?
                                        Flex Row: Item 1 (Image), Item 2 (Text).
                                        In RTL: Item 1 is Right, Item 2 is Left.
                                        So Text will be on the Left. 
                                        Usually Pitch Decks have Image Left, Text Right in LTR. 
                                        In RTL, Image Right, Text Left is standard.
                                        So the current order <Image> <Text> is correct for RTL (Image starts right).
                                        Alignment: md:text-right (align text to right) is WRONG if text is on left. It should be md:text-right if it's purely RTL text block.
                                        Let's keep it centered on mobile, and justified right (start in RTL) on desktop?
                                        Actually, let's trust standard flow.
                                     */}
                                        <span className="w-1.5 h-1.5 bg-teal-500 rounded-full shrink-0 mt-2.5 hidden md:block"></span>
                                        {point}
                                    </p>
                                ))}
                            </div>
                        </div>

                    </div>


                    {/* Navigation Buttons */}
                    <button
                        onClick={nextSlide}
                        className="hidden md:flex absolute top-1/2 -right-16 -translate-y-1/2 p-4 text-slate-500 hover:text-white hover:bg-slate-800/50 rounded-full transition-all hover:scale-110 active:scale-95 z-20"
                        aria-label="Next Slide"
                    >
                        <ChevronRight className="w-12 h-12" />
                    </button>

                    <button
                        onClick={prevSlide}
                        className="hidden md:flex absolute top-1/2 -left-16 -translate-y-1/2 p-4 text-slate-500 hover:text-white hover:bg-slate-800/50 rounded-full transition-all hover:scale-110 active:scale-95 z-20"
                        aria-label="Previous Slide"
                    >
                        <ChevronLeft className="w-12 h-12" />
                    </button>

                </div>

                {/* Mobile Navigation */}
                <div className="flex justify-between items-center mt-8 md:hidden px-4">
                    <button
                        onClick={prevSlide}
                        className="p-3 text-slate-400 bg-slate-900 rounded-full border border-slate-800 hover:bg-slate-800"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <span className="text-slate-500 font-mono">
                        {currentSlide + 1} / {slides.length}
                    </span>
                    <button
                        onClick={nextSlide}
                        className="p-3 text-slate-400 bg-slate-900 rounded-full border border-slate-800 hover:bg-slate-800"
                    >
                        <ChevronRight className="w-6 h-6" />
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
