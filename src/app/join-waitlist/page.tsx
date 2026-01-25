'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, CheckCircle, Smartphone, Mail, Globe, MapPin, User, Calendar, Smile } from 'lucide-react';
import Link from 'next/link';
import { joinWaitlist } from '@/app/actions/waitlist';

export default function JoinWaitlist() {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        age: '',
        gender: '',
        phone: '',
        email: '',
        country: '',
        city: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleNext = () => {
        // Basic validation per step
        if (step === 1 && !formData.firstName) return;
        if (step === 2 && !formData.lastName) return;
        if (step === 3 && !formData.age) return;
        if (step === 4 && !formData.gender) return;
        if (step === 5 && !formData.phone) return;
        if (step === 6 && !formData.email) return; // Add better email validation logic if needed
        if (step === 7 && !formData.country) return;

        setStep(prev => prev + 1);
    };

    const handleSubmit = async () => {
        if (!formData.city) return;
        setIsSubmitting(true);

        // Call Server Action
        const result = await joinWaitlist(formData);

        setIsSubmitting(false);
        if (result.success) {
            setIsSuccess(true);
        } else {
            alert('حدث خطأ أثناء التسجيل، يرجى المحاولة مرة أخرى.');
        }
    };

    // Supported Countries List
    const countries = [
        "المملكة العربية السعودية", "الإمارات العربية المتحدة", "الكويت", "قطر", "سلطنة عمان", "البحرين",
        "جمهورية مصر العربية", "الأردن", "العراق", "لبنان", "المغرب", "تونس", "الجزائر",
        "الولايات المتحدة الأمريكية", "المملكة المتحدة", "كندا"
    ];

    // Animation variants
    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 50 : -50,
            opacity: 0,
            scale: 0.95
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 50 : -50,
            opacity: 0,
            scale: 0.95
        })
    };

    if (isSuccess) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 flex items-center justify-center p-6 text-center" dir="rtl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white p-12 rounded-3xl shadow-2xl max-w-lg w-full"
                >
                    <div className="w-24 h-24 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-12 h-12 text-teal-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">تم التسجيل بنجاح!</h2>
                    <p className="text-slate-600 mb-8 text-lg">شكراً لك {formData.firstName}. سنوافيك بكل جديد وموعد انطلاقنا قريباً.</p>
                    <Link href="/" className="inline-block px-8 py-4 bg-teal-600 text-white rounded-xl font-bold hover:bg-teal-700 transition-colors">
                        العودة للرئيسية
                    </Link>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row overflow-hidden" dir="rtl">

            {/* Side Image / Motivation */}
            <div className="hidden md:flex w-1/3 bg-slate-900 text-white flex-col justify-between p-12 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900 via-slate-900 to-slate-950 z-0"></div>
                <div className="relative z-10">
                    <Link href="/" className="text-2xl font-bold tracking-tighter block mb-12">
                        وقاية<span className="text-teal-500">جين</span>
                    </Link>
                    <h1 className="text-4xl font-extrabold leading-tight mb-6">
                        ابدأ رحلة <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">هندسة صحتك</span>
                        <br /> اليوم.
                    </h1>
                    <p className="text-slate-400 text-lg leading-relaxed">
                        انضم لقائمة الانتظار لتكون من أوائل المستفيدين من تقنياتنا الثورية في الوقاية الصحية الشخصية.
                    </p>
                </div>
                <div className="relative z-10 opacity-50">
                    <div className="flex gap-2 mb-2">
                        <div className="w-3 h-3 bg-teal-500 rounded-full animate-bounce"></div>
                        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-100"></div>
                        <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce delay-200"></div>
                    </div>
                    <span className="text-sm font-mono">معالجة آمنة وخاصة بالذكاء التوليدي</span>
                </div>
            </div>

            {/* Form Area */}
            <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 relative">
                <div className="max-w-md w-full">

                    {/* Progress Bar Removed as per user request */}
                    <div className="mb-8"></div>

                    <AnimatePresence mode="wait" custom={1}>
                        <motion.div
                            key={step}
                            custom={1}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
                            className="min-h-[300px] flex flex-col"
                        >

                            {/* Step 1: First Name */}
                            {step === 1 && (
                                <div className="space-y-6">
                                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                                        <User className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-slate-900">ما هو اسمك الأول؟</h2>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        placeholder="اكتب اسمك الأول هنا..."
                                        className="w-full text-2xl p-4 border-b-2 border-slate-200 focus:border-blue-600 focus:outline-none bg-transparent transition-colors placeholder:text-slate-300"
                                        autoFocus
                                    />
                                    <div className="flex justify-end pt-4">
                                        <button onClick={handleNext} disabled={!formData.firstName} className="px-8 py-3 bg-blue-900 text-white rounded-xl shadow-lg hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2">
                                            استمر <ArrowLeft className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Step 2: Last Name */}
                            {step === 2 && (
                                <div className="space-y-6">
                                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                                        <User className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-slate-900">...واسم العائلة؟</h2>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        placeholder="اكتب اسم العائلة..."
                                        className="w-full text-2xl p-4 border-b-2 border-slate-200 focus:border-blue-600 focus:outline-none bg-transparent transition-colors placeholder:text-slate-300"
                                        autoFocus
                                    />
                                    <div className="flex justify-end pt-4">
                                        <button onClick={handleNext} disabled={!formData.lastName} className="px-8 py-3 bg-blue-900 text-white rounded-xl shadow-lg hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2">
                                            استمر <ArrowLeft className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Step 3: Age */}
                            {step === 3 && (
                                <div className="space-y-6">
                                    <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-4">
                                        <Calendar className="w-8 h-8 text-teal-600" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-slate-900">كم عمرك؟</h2>
                                    <p className="text-slate-500">يساعدنا هذا في تخصيص خطتك الصحية.</p>
                                    <input
                                        type="number"
                                        name="age"
                                        value={formData.age}
                                        onChange={handleChange}
                                        placeholder="مثال: 30"
                                        className="w-full text-2xl p-4 border-b-2 border-slate-200 focus:border-teal-600 focus:outline-none bg-transparent transition-colors placeholder:text-slate-300"
                                        autoFocus
                                    />
                                    <div className="flex justify-end pt-4">
                                        <button onClick={handleNext} disabled={!formData.age} className="px-8 py-3 bg-teal-600 text-white rounded-xl shadow-lg hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2">
                                            استمر <ArrowLeft className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Step 4: Gender */}
                            {step === 4 && (
                                <div className="space-y-6">
                                    <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-4">
                                        <Smile className="w-8 h-8 text-teal-600" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-slate-900">الجنس</h2>
                                    <div className="grid grid-cols-2 gap-4">
                                        <button
                                            onClick={() => setFormData({ ...formData, gender: 'male' })}
                                            className={`p-6 rounded-2xl border-2 transition-all ${formData.gender === 'male' ? 'border-teal-600 bg-teal-50 text-teal-900' : 'border-slate-100 hover:border-slate-300'}`}
                                        >
                                            <span className="text-3xl block mb-2">👨</span>
                                            <span className="font-bold">ذكر</span>
                                        </button>
                                        <button
                                            onClick={() => setFormData({ ...formData, gender: 'female' })}
                                            className={`p-6 rounded-2xl border-2 transition-all ${formData.gender === 'female' ? 'border-teal-600 bg-teal-50 text-teal-900' : 'border-slate-100 hover:border-slate-300'}`}
                                        >
                                            <span className="text-3xl block mb-2">👩</span>
                                            <span className="font-bold">أنثى</span>
                                        </button>
                                    </div>
                                    <div className="flex justify-end pt-4">
                                        <button onClick={handleNext} disabled={!formData.gender} className="px-8 py-3 bg-teal-600 text-white rounded-xl shadow-lg hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2">
                                            استمر <ArrowLeft className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Step 5: Phone */}
                            {step === 5 && (
                                <div className="space-y-6">
                                    <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-4">
                                        <Smartphone className="w-8 h-8 text-purple-600" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-slate-900">رقم الهاتف</h2>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="05xxxxxxxx"
                                        className="w-full text-2xl p-4 border-b-2 border-slate-200 focus:border-purple-600 focus:outline-none bg-transparent transition-colors placeholder:text-slate-300"
                                        autoFocus
                                    />
                                    <div className="flex justify-end pt-4">
                                        <button onClick={handleNext} disabled={!formData.phone} className="px-8 py-3 bg-purple-600 text-white rounded-xl shadow-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2">
                                            استمر <ArrowLeft className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Step 6: Email */}
                            {step === 6 && (
                                <div className="space-y-6">
                                    <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-4">
                                        <Mail className="w-8 h-8 text-purple-600" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-slate-900">البريد الإلكتروني</h2>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="name@example.com"
                                        className="w-full text-2xl p-4 border-b-2 border-slate-200 focus:border-purple-600 focus:outline-none bg-transparent transition-colors placeholder:text-slate-300"
                                        autoFocus
                                    />
                                    <div className="flex justify-end pt-4">
                                        <button onClick={handleNext} disabled={!formData.email} className="px-8 py-3 bg-purple-600 text-white rounded-xl shadow-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2">
                                            استمر <ArrowLeft className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Step 7: Country */}
                            {step === 7 && (
                                <div className="space-y-6">
                                    <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-4">
                                        <Globe className="w-8 h-8 text-orange-600" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-slate-900">الدولة</h2>
                                    <select
                                        name="country"
                                        value={formData.country}
                                        onChange={handleChange}
                                        className="w-full text-xl p-4 border-2 border-slate-200 rounded-xl focus:border-orange-500 focus:outline-none bg-white transition-colors"
                                    >
                                        <option value="">اختر الدولة...</option>
                                        {countries.map(c => (
                                            <option key={c} value={c}>{c}</option>
                                        ))}
                                    </select>
                                    <div className="flex justify-end pt-4">
                                        <button onClick={handleNext} disabled={!formData.country} className="px-8 py-3 bg-orange-500 text-white rounded-xl shadow-lg hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2">
                                            استمر <ArrowLeft className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Step 8: City & Submit */}
                            {step === 8 && (
                                <div className="space-y-6">
                                    <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-4">
                                        <MapPin className="w-8 h-8 text-orange-600" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-slate-900">المدينة</h2>
                                    <input
                                        type="text"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        placeholder="مثال: الدمام"
                                        className="w-full text-2xl p-4 border-b-2 border-slate-200 focus:border-orange-600 focus:outline-none bg-transparent transition-colors placeholder:text-slate-300"
                                        autoFocus
                                    />
                                    <div className="flex justify-end pt-4">
                                        <button onClick={handleSubmit} disabled={!formData.city || isSubmitting} className="px-8 py-4 bg-slate-900 text-white rounded-xl shadow-xl hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2 transform hover:scale-105">
                                            {isSubmitting ? 'جاري التقديم...' : 'انضم لقائمة الانتظار'} <ArrowLeft className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            )}

                        </motion.div>
                    </AnimatePresence>

                    {/* Persistent Back Button if needed? Or just let user start over? 
              Wizard UX usually allows Back. Let's add simple Back if step > 1 */}
                    {step > 1 && !isSuccess && !isSubmitting && (
                        <button
                            onClick={() => setStep(prev => prev - 1)}
                            className="mt-8 text-slate-400 hover:text-slate-600 flex items-center gap-2 text-sm"
                        >
                            <ArrowRight className="w-4 h-4" /> الرجوع للخلف
                        </button>
                    )}

                </div>
            </div>
        </div >
    );
}
