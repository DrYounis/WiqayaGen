import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'سياسة الخصوصية | وقاية جين',
    description: 'سياسة حماية البيانات الجينية وامتثال وقاية جين لأنظمة المملكة العربية السعودية.',
};

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-slate-900" dir="rtl">
            <div className="max-w-3xl mx-auto px-6 py-20">
                <h1 className="text-3xl md:text-4xl font-extrabold mb-8 text-slate-900 leading-tight">
                    سياسة الخصوصية وحماية البيانات الجينية
                </h1>

                <div className="prose prose-lg prose-slate max-w-none">
                    <p className="text-slate-500 mb-8 font-bold">
                        **آخر تحديث: 2026**
                    </p>

                    <p className="lead text-lg text-slate-600 mb-8">
                        في وقاية جين (Wiqaya Gen)، ندرك أن شفرتك الوراثية هي أثمن بياناتك الشخصية. نحن ملتزمون بأعلى معايير الأمن السيبراني والامتثال لأنظمة المملكة العربية السعودية (بما في ذلك نظام حماية البيانات الشخصية PDPL).
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-4 text-emerald-800">1. سيادة البيانات ومكان التخزين</h2>
                    <ul className="list-disc pr-6 space-y-2 mb-8 text-slate-600">
                        <li>
                            <strong className="text-slate-900">توطين البيانات:</strong> جميع بياناتك الجينية والصحية مخزنة حصرياً داخل خوادم مؤمنة في المملكة العربية السعودية. لا يتم نقل أي عينة بيولوجية أو ملف رقمي خارج حدود الوطن، تماشياً مع معايير الأمن القومي الصحي.
                        </li>
                        <li>
                            <strong className="text-slate-900">التشفير:</strong> نستخدم تقنيات تشفير متقدمة (AES-256) لحماية البيانات أثناء النقل وأثناء التخزين.
                        </li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-12 mb-4 text-emerald-800">2. كيف نستخدم بياناتك؟ (الاستخدام المشروع)</h2>
                    <p className="text-slate-600 mb-4">نستخدم بياناتك الجينية لغرض واحد فقط: <strong className="text-slate-900">خدمتك</strong>.</p>
                    <ul className="list-disc pr-6 space-y-2 mb-8 text-slate-600">
                        <li>تحليل المخاطر الصحية الوراثية وتقديم توصيات وقائية.</li>
                        <li>مواءمة الحمض النووي مع التغذية (خدمة Gen-Halal).</li>
                        <li><strong className="text-slate-900">لن نقوم أبداً</strong> ببيع بياناتك لشركات التأمين، جهات التوظيف، أو شركات التسويق الخارجية.</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-12 mb-4 text-emerald-800">3. ملكية البيانات</h2>
                    <p className="text-slate-600 mb-4">أنت المالك الوحيد لبياناتك الجينية.</p>
                    <ul className="list-disc pr-6 space-y-2 mb-8 text-slate-600">
                        <li>
                            <strong className="text-slate-900">حق الوصول:</strong> يمكنك تحميل ملفك الجيني الخام (Raw Data) في أي وقت.
                        </li>
                        <li>
                            <strong className="text-slate-900">حق النسيان:</strong> يمكنك طلب حذف حسابك وبياناتك نهائياً من خوادمنا بضغطة زر، وسيتم إتلاف البيانات فوراً دون الاحتفاظ بنسخ احتياطية.
                        </li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-12 mb-4 text-emerald-800">4. المواءمة مع المعايير الوطنية</h2>
                    <p className="text-slate-600 mb-4">نتبع الإرشادات الأخلاقية المستوحاة من برنامج الجينوم السعودي فيما يخص:</p>
                    <ul className="list-disc pr-6 space-y-2 mb-8 text-slate-600">
                        <li>الموافقة المستنيرة (Informed Consent) قبل أي تحليل.</li>
                        <li>الخصوصية العائلية (حماية المعلومات التي قد تكشف عن أمراض وراثية للأقارب).</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-12 mb-4 text-emerald-800">5. موافقة المستخدم</h2>
                    <p className="text-slate-600 mb-8">
                        بتسجيلك في منصة وقاية جين، فإنك تمنحنا الموافقة الصريحة لمعالجة بياناتك الصحية لأغراض تحسين جودة حياتك الصحية وفقاً لهذه السياسة.
                    </p>

                    <hr className="my-12 border-slate-200" />

                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-center">
                        <p className="text-slate-500 font-medium mb-2">للتواصل مع مسؤول حماية البيانات:</p>
                        <a href="mailto:Privacy@wiqaya-gen.com" className="text-emerald-600 font-bold hover:underline dir-ltr block">
                            Privacy@wiqaya-gen.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
