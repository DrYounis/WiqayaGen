import React from 'react';
import { Dna, BrainCircuit, ShieldCheck, Activity, TrendingUp, Lock, FileText, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import NafathLoginBtn from '@/components/NafathLoginBtn';
import ServicesGrid from '@/components/ServicesGrid';
import SaudiHealthMap from '@/components/SaudiHealthMap';
import HealthPulse from '@/components/HealthPulse';
import ScientificCredibility from '@/components/ScientificCredibility';
import VisionAlignment from '@/components/VisionAlignment';
import WhyNowValidation from '@/components/WhyNowValidation';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden font-sans" dir="rtl">

      {/* Top Banner */}
      <div className="bg-slate-900 text-teal-400 text-xs md:text-sm py-2 text-center px-4 font-bold tracking-wide">
        🚀 انضم إلى حراك #صحتك_جيناتك. تقييم مخاطر جينية مجاني لأول 1,000 مواطن.
      </div>

      {/* Navbar relative */}
      <nav className="relative w-full p-6 flex justify-between items-center z-50 max-w-7xl mx-auto">
        <Link href="/" className="text-2xl font-bold text-slate-900 tracking-tighter">
          وقاية<span className="text-teal-600">جين</span>
        </Link>

        <div className="hidden md:flex gap-8 font-medium text-slate-600 text-sm">
          <Link href="/executive-summary" className="hover:text-teal-600 transition-colors">رؤية 2030</Link>
          <Link href="/tech-specs" className="hover:text-teal-600 transition-colors">التقنية</Link>
          <Link href="/pitch-deck" className="hover:text-teal-600 transition-colors">المستثمرين</Link>
        </div>

        <Link href="/join-waitlist" className="hidden md:block">
          <span className="px-5 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-lg hover:bg-slate-800 transition-colors">
            ابدأ الآن
          </span>
        </Link>
      </nav>

      {/* Hero Section */}
      <header className="relative py-16 px-6 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <div className="relative z-10 text-center lg:text-right">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 border border-teal-100 rounded-full text-teal-700 text-xs font-bold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              Vision 2030 Aligned
              متوافق مع رؤية 2030
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-[1.2] tracking-tight">
              جيناتك تضع <span className="text-teal-600">المشهد،</span> <br />
              وقراراتك تُخرج <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">القصة.</span>
            </h1>

            <p className="text-lg text-slate-600 mb-8 leading-loose max-w-xl mx-auto lg:mx-0">
              في حين أن جيناتك تحدد البداية، فإن خياراتك اليومية—من النوم، الحركة، إلى التغذية—هي التي تقود رحلتك الصحية.
              <br /><br />
              <strong className="text-slate-900">نقدم لك "مؤشر وقاية":</strong> نظام الملاحة الصحي (GPS) الأول المصمم للجينوم السعودي. نحول البيانات المعقدة إلى خطة عمل وقائية ذكية، لننتقل سوياً من "رعاية المرض" إلى "ذكاء الوقاية".
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <NafathLoginBtn />
              <Link href="/join-waitlist" className="px-8 py-3 bg-white text-slate-900 border border-slate-200 rounded-lg hover:bg-slate-50 transition-all font-bold text-lg flex items-center justify-center gap-2">
                افحص مجاناً
              </Link>
            </div>
          </div>


          {/* Hero Visual - Saudi Health Map */}
          <div className="relative z-10">
            <SaudiHealthMap />
          </div>

        </div>
      </header>

      {/* Scientific Credibility Section */}
      <ScientificCredibility />

      {/* Vision Alignment Section */}
      <VisionAlignment />

      {/* Validation / Why Now Section */}
      <WhyNowValidation />

      {/* Services Grid Section */}
      <section className="py-20 px-6 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">منظومة وقاية</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              ثلاث أدوات قوية مصممة لنمط الحياة السعودي الحديث. من الإرث العائلي إلى التغذية اليومية.
            </p>
          </div>

          <ServicesGrid />

        </div>
      </section>

      {/* CTA Section - Public Health Challenge */}
      <section className="py-24 px-6 relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-teal-900/40 via-slate-900 to-slate-900"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-teal-400 font-bold tracking-widest uppercase text-sm mb-4 block">تحدي الصحة العامة</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8">#صحتك_جيناتك</h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            ادعُ 3 من أفراد عائلتك لفتح <span className="text-white font-bold">باقة البداية المميزة</span> مجاناً.
            انضم إلى الحراك لرفع المؤشر الوطني للوقاية.
          </p>
          <Link href="/join-waitlist" className="inline-flex items-center gap-3 px-10 py-5 bg-teal-500 text-slate-900 rounded-xl font-bold text-xl hover:bg-teal-400 transition-all transform hover:scale-105 shadow-lg shadow-teal-500/20">
            ابدأ التحدي <TrendingUp className="w-6 h-6 rotate-180" />
          </Link>
        </div>
      </section>

      {/* Health Pulse News Bar */}
      <HealthPulse />

      {/* Footer */}
      <Footer />

    </div>
  );
}
