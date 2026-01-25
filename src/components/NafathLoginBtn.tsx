import Link from 'next/link';
import { Lock } from 'lucide-react';

export default function NafathLoginBtn() {
    return (
        <Link href="/join-waitlist" className="group relative inline-flex items-center justify-center gap-3 px-8 py-3 bg-[#006C35] text-white rounded-lg hover:bg-[#005a2b] transition-all font-medium min-w-[200px] overflow-hidden">
            {/* Nafath-green background */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

            <div className="flex flex-col items-center leading-none">
                <span className="text-xs opacity-80 font-normal mb-0.5">تسجيل الدخول عبر</span>
                <span className="text-lg font-bold tracking-wide">نفاذ | Nafath</span>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <Lock className="w-5 h-5" />
        </Link>
    );
}
