import React from 'react';
import Link from 'next/link';
import { FileText, ShieldCheck, Activity, BrainCircuit, CheckCircle, ArrowLeft, Building2 } from 'lucide-react';
import Footer from '@/components/Footer';

export default function TechnicalProposal() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans" dir="rtl">

            {/* Header / Nav */}
            <nav className="bg-white border-b border-slate-200 px-6 py-4">
                <div className="max-w-5xl mx-auto flex justify-between items-center">
                    <Link href="/" className="text-xl font-bold text-slate-900 flex items-center gap-2">
                        <span className="bg-teal-600 text-white w-8 h-8 rounded-lg flex items-center justify-center">W</span>
                        <span>وقاية<span className="text-teal-600">جين</span></span>
                        <span className="text-xs text-slate-500 font-normal border-r border-slate-300 pr-2 mr-2">العرض الفني</span>
                    </Link>
                    <Link href="/" className="text-sm text-slate-500 hover:text-teal-600 flex items-center gap-1">
                        العودة للرئيسية <ArrowLeft className="w-4 h-4" />
                    </Link>
                </div>
            </nav>

            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-6 py-12">

                {/* Cover Section */}
                <section className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 border border-teal-100 rounded-full text-teal-800 text-xs font-bold mb-6">
                        <Building2 className="w-4 h-4" />
                        موجه لوزارة الصحة وشركة الصحة القابضة
                    </div>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                        حلول الجينوم والذكاء التأميني <br />
                        <span className="text-teal-600">لريادة التحول الصحي</span>
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                        نحو رعاية صحية وقائية تدعم كفاءة الإنفاق وتحقق مستهدفات رؤية المملكة 2030 من خلال دمج البيانات الجينية في نماذج اتخاذ القرار.
                    </p>
                </section>

                {/* Executive Summary */}
                <section className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <FileText className="w-6 h-6 text-teal-600" />
                        ملخص المشروع
                    </h2>
                    <p className="text-slate-600 leading-loose text-lg">
                        في ظل تحول وزارة الصحة نحو تخصيص القطاعات (المستشفيات، المختبرات، والرعاية الأولية)، تبرز الحاجة إلى أدوات تقنية تضمن استدامة هذا التحول مالياً وفنياً. نقدم منصتنا المتكاملة التي تدمج بين <strong>علوم الجينوم</strong> و <strong>أنظمة التأمين الطبي</strong> لتوفير حلول تنبؤية تقلل من الهدر المالي وترفع جودة الحياة.
                    </p>
                </section>

                {/* Technical Services */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">الخدمات التقنية الموجهة للقطاع الحكومي</h2>

                    <div className="grid gap-6">

                        {/* Service 1 */}
                        <div className="bg-white rounded-xl p-6 border border-slate-200 hover:border-teal-300 transition-colors flex gap-6 items-start">
                            <div className="bg-teal-50 p-4 rounded-lg hidden md:block">
                                <Activity className="w-8 h-8 text-teal-600" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">1. نظام التدقيق الجيني للتأمين الصحي</h3>
                                <p className="text-slate-600 mb-4 leading-relaxed">
                                    محرك ذكاء اصطناعي يربط الخريطة الجينية للمريض بالنماذج الاكتوارية لشركات التأمين.
                                </p>
                                <div className="bg-slate-50 p-3 rounded border border-slate-100 text-sm text-slate-700">
                                    <strong className="text-teal-700 block mb-1">القيمة الحكومية:</strong>
                                    خفض ميزانيات العلاج طويلة الأمد من خلال التنبؤ بالأمراض المزمنة قبل حدوثها، مما يدعم "كفاءة الإنفاق" في عقود التخصيص الجديدة.
                                </div>
                            </div>
                        </div>

                        {/* Service 2 */}
                        <div className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-300 transition-colors flex gap-6 items-start">
                            <div className="bg-blue-50 p-4 rounded-lg hidden md:block">
                                <BrainCircuit className="w-8 h-8 text-blue-600" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">2. مساعد الطبيب الذكي للأبحاث (AI-CDSS)</h3>
                                <p className="text-slate-600 mb-4 leading-relaxed">
                                    منصة تسحب وتلخص أحدث الدراسات الطبية والبروتوكولات الجينية عالمياً بشكل لحظي.
                                </p>
                                <div className="bg-slate-50 p-3 rounded border border-slate-100 text-sm text-slate-700">
                                    <strong className="text-blue-700 block mb-1">القيمة الحكومية:</strong>
                                    تزويد الـ 150 مركز رعاية أولية التي تم تخصيصها بأحدث الأدلة العلمية لضمان وحدة جودة التشخيص (Standardization).
                                </div>
                            </div>
                        </div>

                        {/* Service 3 */}
                        <div className="bg-white rounded-xl p-6 border border-slate-200 hover:border-indigo-300 transition-colors flex gap-6 items-start">
                            <div className="bg-indigo-50 p-4 rounded-lg hidden md:block">
                                <ShieldCheck className="w-8 h-8 text-indigo-600" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">3. منصة رقابة جودة "الرعاية الافتراضية"</h3>
                                <p className="text-slate-600 mb-4 leading-relaxed">
                                    أداة رقمية لمتابعة جودة الفحوصات والتشخيصات في منظومة "الطب الاتصالي".
                                </p>
                                <div className="bg-slate-50 p-3 rounded border border-slate-100 text-sm text-slate-700">
                                    <strong className="text-indigo-700 block mb-1">القيمة الحكومية:</strong>
                                    ضمان امتثال الشركات المشغلة للمعايير الطبية الوطنية وحماية بيانات المرضى الجينية (سيادة البيانات).
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Why Us? */}
                <section className="grid md:grid-cols-3 gap-6 mb-16">
                    <div className="bg-slate-900 text-white p-6 rounded-xl">
                        <h3 className="font-bold text-lg mb-3">خبرة طبية وتأمينية</h3>
                        <p className="text-slate-400 text-sm">قيادة المشروع من قبل طبيب ممارس وخبير في قطاع التأمين الطبي.</p>
                    </div>
                    <div className="bg-teal-600 text-white p-6 rounded-xl shadow-lg shadow-teal-600/20">
                        <h3 className="font-bold text-lg mb-3">التزام بالمحتوى المحلي</h3>
                        <p className="text-teal-50 text-sm">منشأة وطنية مرخصة تجارياً في منطقة حائل، ندعم مستهدفات توطين التقنية.</p>
                    </div>
                    <div className="bg-white border border-slate-200 p-6 rounded-xl">
                        <h3 className="font-bold text-lg mb-3 text-slate-900">الريادة التقنية</h3>
                        <p className="text-slate-500 text-sm">بنية تحتية برمجية قادرة على أتمتة البيانات الطبية المعقدة وتلخيصها.</p>
                    </div>
                </section>

                {/* Vision 2030 Alignment */}
                <section className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 mb-16">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">مواءمة الرؤية 2030</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm text-teal-600 font-bold">1</div>
                            <h4 className="font-bold text-slate-800 mb-2">برنامج التحول الصحي</h4>
                            <p className="text-sm text-slate-500">تعزيز الرعاية الوقائية بدلاً من العلاجية.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm text-teal-600 font-bold">2</div>
                            <h4 className="font-bold text-slate-800 mb-2">التخصيص</h4>
                            <p className="text-sm text-slate-500">رفع الكفاءة التشغيلية للمستشفيات المخصصة.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm text-teal-600 font-bold">3</div>
                            <h4 className="font-bold text-slate-800 mb-2">الاقتصاد الرقمي</h4>
                            <p className="text-sm text-slate-500">بناء قاعدة بيانات جينية للبحث والابتكار.</p>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="text-center">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">جاهزون للمستقبل.</h2>
                    <p className="text-slate-600 mb-8 max-w-lg mx-auto">
                        نحن مستعدون لتقديم عرض تفصيلي (Demo) وتوضيح كيفية دمج هذه التقنيات في منظومة الرعاية الصحية الجديدة.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link href="mailto:contact@wiqayagen.sa" className="px-8 py-3 bg-slate-900 text-white rounded-lg font-bold hover:bg-slate-800 transition-colors shadow-xl">
                            طلب اجتماع تقني
                        </Link>
                        <Link href="/b2g-vision.pdf" className="px-8 py-3 bg-white text-slate-700 border border-slate-200 rounded-lg font-bold hover:bg-slate-50 transition-colors">
                            تحميل الملف التعريفي
                        </Link>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
