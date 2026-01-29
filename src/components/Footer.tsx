import { BrainCircuit } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-400 py-12 px-6 text-sm border-t border-slate-900" dir="rtl">
            <div className="max-w-7xl mx-auto flex flex-col gap-8">

                {/* Main Footer Content */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <Link href="/" className="text-2xl font-bold text-white tracking-tighter">
                            وقاية<span className="text-teal-600">جين</span>
                        </Link>
                        <div className="flex items-center gap-2 border px-3 py-1 rounded-full border-slate-800 bg-slate-900/50">
                            <div className="w-4 h-4 rounded-sm bg-green-600 flex items-center justify-center text-[8px] text-white font-bold">SA</div>
                            <span className="text-xs font-semibold text-emerald-400">فخر الصناعه السعوديه ب صُنع بحب في حائل ♥️</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                        <span>مدعوم بالذكاء الاصطناعي التوليدي</span>
                        <BrainCircuit className="w-4 h-4" />
                    </div>
                </div>

                {/* Disclaimer Section */}
                <div className="border-t border-slate-900/50 pt-8 mt-4 text-center md:text-right">
                    <p className="text-xs text-slate-600 leading-relaxed max-w-4xl mx-auto md:mx-0">
                        إخلاء مسؤولية: خوارزميات وقاية (Wiqaya Gen) تم تطويرها بشكل مستقل بالاعتماد على البيانات البحثية العامة المنشورة من قبل الجهات البحثية الوطنية، ولا تمثل هذه الخدمة ارتباطاً إدارياً مباشراً ببرنامج الجينوم السعودي.
                    </p>
                    <div className="mt-4 flex gap-4 text-xs text-slate-500 justify-center md:justify-start">
                        <Link href="/privacy-policy" className="hover:text-teal-500 transition-colors">سياسة الخصوصية</Link>
                        <span>•</span>
                        <span>جميع الحقوق محفوظة © 2026</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
