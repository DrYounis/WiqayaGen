import React from 'react';
import Link from 'next/link';
import SaudiHealthMap from '@/components/SaudiHealthMap';
import SaaSSolutions from '@/components/SaaSSolutions';
import CompetitiveEdge from '@/components/CompetitiveEdge';
import VisionAlignment from '@/components/VisionAlignment';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden font-sans" dir="rtl">

      {/* Top Banner - B2G Focus */}
      <div className="bg-slate-900 text-teal-400 text-xs md:text-sm py-2 text-center px-4 font-bold tracking-wide">
        🏛️ حلول تقنية متخصصة لبرنامج تحول القطاع الصحي ومشاريع التخصيص.
      </div>

      {/* Navbar relative */}
      <nav className="relative w-full p-6 flex justify-between items-center z-50 max-w-7xl mx-auto">
        <Link href="/" className="text-2xl font-bold text-slate-900 tracking-tighter flex items-center gap-2">
          <span className="bg-teal-600 text-white w-8 h-8 rounded-lg flex items-center justify-center text-lg">W</span>
          <span>وقاية<span className="text-teal-600">جين</span></span>
          <span className="text-xs text-slate-400 font-normal px-2 border-r border-slate-300 mr-2">نسخة الأعمال</span>
        </Link>

        <div className="hidden md:flex gap-8 font-medium text-slate-600 text-sm">
          <Link href="#solutions" className="hover:text-teal-600 transition-colors">الحلول</Link>
          <Link href="#impact" className="hover:text-teal-600 transition-colors">الأثر الاقتصادي</Link>
          <Link href="/pitch-deck" className="hover:text-teal-600 transition-colors">علاقات المستثمرين</Link>
        </div>

        <Link href="/join-waitlist" className="hidden md:block">
          <span className="px-5 py-2.5 bg-teal-600 text-white text-sm font-bold rounded-lg hover:bg-teal-700 transition-colors shadow-lg shadow-teal-600/20">
            طلب عرض تجريبي
          </span>
        </Link>
      </nav>

      {/* Hero Section - B2G */}
      <header className="relative py-16 px-6 lg:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <div className="relative z-10 text-center lg:text-right">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 border border-teal-100 rounded-full text-teal-800 text-xs font-bold mb-6">
              <span className="w-2 h-2 rounded-full bg-teal-500"></span>
              ممكن رقمي للصحة الوقائية
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-[1.2] tracking-tight">
              من البيانات الجينية، <br />
              إلى <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">كفاءة الإنفاق الوطني.</span>
            </h1>

            <p className="text-lg text-slate-600 mb-8 leading-loose max-w-xl mx-auto lg:mx-0">
              شريكك التقني لتحويل «المخاطر الوراثية» إلى «أصول وقائية».
              <br />
              ممكّن ذكي يدعم برنامج تحول القطاع الصحي في الانتقال من الدفع مقابل الخدمة إلى <strong className="text-slate-900">الدفع مقابل القيمة (Value-Based Care).</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/join-waitlist" className="px-8 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all font-bold text-lg flex items-center justify-center gap-2 shadow-xl">
                احجز استشارة
              </Link>
              <Link href="#solutions" className="px-8 py-3 bg-white text-slate-700 border border-slate-200 rounded-lg hover:bg-slate-50 transition-all font-bold text-lg flex items-center justify-center gap-2">
                استكشف حلولنا
              </Link>
            </div>
          </div>


          {/* Hero Visual - Saudi Health Map Reused */}
          <div className="relative z-10 scale-90 lg:scale-100">
            <SaudiHealthMap />
          </div>

        </div>
      </header>

      {/* Pain Point Section - The Economic Problem */}
      <section className="py-16 bg-white border-y border-slate-100" id="impact">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-red-50 p-6 rounded-2xl border border-red-100 text-center">
                  <h3 className="text-4xl font-extrabold text-red-600 mb-2">70%</h3>
                  <p className="text-sm text-red-800 font-medium">من ميزانية الصحة تستنزفها الأمراض المزمنة</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
                  <h3 className="text-4xl font-extrabold text-slate-700 mb-2">2030</h3>
                  <p className="text-sm text-slate-600 font-medium">هدف خفض معدلات السمنة والسكري</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <span className="text-red-500 font-bold tracking-widest text-sm uppercase mb-2 block">المشكلة</span>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">التخطيط الضبابي مكلف.</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                غياب البيانات الجينية السكانية الدقيقة يعني استمرار الهدر في نماذج اكتوارية غير دقيقة، وتوجيه الميزانيات نحو «العلاج» بدلاً من «الوقاية الاستباقية».
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-700">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-xs shrink-0">✕</div>
                  ارتفاع تكلفة الرعاية الثلاثية (Tertiary Care).
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-xs shrink-0">✕</div>
                  عدم معيارية البروتوكولات في الرعاية الأولية.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SaaS Solutions Section */}
      <SaaSSolutions />

      {/* Competitive Edge - Local Content */}
      <CompetitiveEdge />

      {/* Vision Alignment */}
      <VisionAlignment />

      {/* Footer */}
      <Footer />

    </div>
  );
}
