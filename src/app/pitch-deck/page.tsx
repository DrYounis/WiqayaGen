"use client";
import React from 'react';
import { Presentation, ArrowRight, TrendingUp, Users, Target, Zap, Shield, HelpCircle } from 'lucide-react';
import Link from 'next/link';

export default function PitchDeck() {
    const slides = [
        {
            title: "1. الغلاف (The Hook)",
            icon: <Target className="w-6 h-6 text-blue-600" />,
            content: [
                "العنوان: WiqayaGen | وقاية جين",
                "العنوان الفرعي: الجيل القادم من التأمين الصحي: من \"دفع الفواتير\" إلى \"هندسة الصحة\".",
                "الصورة: شريط DNA يتحول إلى درع حماية رقمي."
            ]
        },
        {
            title: "2. المشكلة (The Money Leak)",
            icon: <TrendingUp className="w-6 h-6 text-red-500" />,
            content: [
                "التأمين اليوم يدفع لـ \"الحريق\" بدلاً من منعه.",
                "70% من المطالبات تذهب لأمراض مزمنة يمكن الوقاية منها.",
                "نفتقد \"الإنذار المبكر\" (نكتشف السكري متأخراً).",
                "النتيجة: خسارة مستمرة لشركات التأمين."
            ]
        },
        {
            title: "3. الحل (The Solution)",
            icon: <Zap className="w-6 h-6 text-yellow-500" />,
            content: [
                "الذكاء الجينومي كأداة لإدارة المخاطر.",
                "المعادلة: بيانات جينية + ذكاء اصطناعي = خطة وقاية دقيقة.",
                "منصة تتنبأ بالأمراض وتصمم خارطة طريق لتجنبها."
            ]
        },
        {
            title: "4. التقنية (The Secret Sauce)",
            icon: <Shield className="w-6 h-6 text-teal-600" />,
            content: [
                "تحليل PRS: حساب دقيق للمخاطر الوراثية.",
                "AI Health Agent: مرافق صحي ذكي 24/7.",
                "Local & Secure: بيانات محمية 100% داخل المملكة."
            ]
        },
        {
            title: "5. نموذج العمل (Business Model)",
            icon: <Users className="w-6 h-6 text-purple-600" />,
            content: [
                "شركات التأمين: تقليل المطالبات بنسبة 15%.",
                "المريض: حياة أطول بصحة أفضل.",
                "WiqayaGen: رسوم اشتراك سنوي (SaaS) + رسوم التحليل."
            ]
        },
        {
            title: "6. السوق والمنافسة",
            icon: <HelpCircle className="w-6 h-6 text-indigo-600" />,
            content: [
                "رؤية 2030: التركيز على الوقاية.",
                "هيفولوشن: المملكة عاصمة لأبحاث إطالة العمر.",
                "First Mover Advantage: لا منافس يدمج التأمين بالجينوم محلياً."
            ]
        },
        {
            title: "7. الطلب (The Ask)",
            icon: <Target className="w-6 h-6 text-green-600" />,
            content: [
                "نطلب شراكة تشريعية (Sandbox) في \"إبصار\".",
                "هدفنا: إثبات المفهوم مع 1000 مستخدم.",
                "ضمان أخلاقيات البيانات وعدم التمييز."
            ]
        },
        {
            title: "8. الفريق (The Team)",
            icon: <Users className="w-6 h-6 text-slate-800" />,
            content: [
                "د. محمد يونس: طبيب عائلة + خبرة تأمينية.",
                "فريق تقني متخصص في AI & Bioinformatics."
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Navigation */}
            <nav className="max-w-5xl mx-auto p-6 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-blue-900 tracking-tighter">
                    وقاية<span className="text-teal-500">جين</span>
                </Link>
                <Link href="/" className="flex items-center gap-2 text-slate-500 hover:text-blue-900 transition-colors text-sm font-medium">
                    العودة للرئيسية
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </nav>

            <main className="max-w-4xl mx-auto px-6 pb-24">

                <header className="mb-12 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 text-indigo-700 rounded-full text-xs font-semibold mb-6 border border-indigo-100">
                        <Presentation className="w-3 h-3" />
                        هيكل العرض التقديمي
                    </div>
                    <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
                        Pitch Deck Structure
                    </h1>
                    <p className="text-slate-600">
                        هيكل مقترح لعرض مدته 5-7 دقائق أمام لجنة "إبصار" أو المستثمرين.
                    </p>
                </header>

                <div className="grid md:grid-cols-2 gap-6">
                    {slides.map((slide, index) => (
                        <div key={index} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                            <div className="flex items-center gap-3 mb-4 border-b border-slate-100 pb-3">
                                <div className="p-2 bg-slate-50 rounded-lg">
                                    {slide.icon}
                                </div>
                                <h3 className="font-bold text-slate-900 text-lg">{slide.title}</h3>
                            </div>
                            <ul className="space-y-2">
                                {slide.content.map((point, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-slate-600 text-sm">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0"></span>
                                        <span className="leading-relaxed">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button onClick={() => window.print()} className="px-6 py-3 bg-blue-900 text-white rounded-xl hover:bg-blue-800 font-medium shadow-lg shadow-blue-900/20 transition-colors">
                        طباعة الهيكل (PDF)
                    </button>
                </div>

            </main>
        </div>
    );
}
