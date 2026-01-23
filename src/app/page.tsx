import React from 'react';
import { Dna, BrainCircuit, ShieldCheck, Activity, TrendingUp, Lock, FileText } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 overflow-x-hidden">
      {/* Navbar via absolute positioning for now */}
      <nav className="absolute top-0 w-full p-6 flex justify-between items-center z-50 max-w-7xl left-0 right-0 mx-auto">
        <div className="text-2xl font-bold text-blue-900 tracking-tighter">
          وقاية<span className="text-teal-500">جين</span>
        </div>
        <button className="hidden md:block px-6 py-2 bg-white/50 backdrop-blur-sm border border-blue-100 text-blue-900 rounded-full hover:bg-white transition-colors font-medium">
          تسجيل الدخول
        </button>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 px-6 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-200/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-100 rounded-full text-blue-800 text-sm mb-8 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            مدعوم بتقنيات الذكاء الاصطناعي التوليدي
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
            صحتك في <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-teal-500">جيناتك</span>..
            <br className="hidden md:block" />
            ومستقبلك <span className="text-blue-900">بيدك</span>
          </h1>

          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            أول منصة سعودية تدمج الذكاء الاصطناعي والتحليل الجيني لتقديم خطط وقائية فائقة الدقة تسبق المرض بخطوات.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-blue-900 text-white rounded-xl shadow-lg shadow-blue-900/20 hover:bg-blue-800 transition-all transform hover:scale-105 font-bold text-lg flex items-center gap-2">
              انضم لقائمة الانتظار
              <TrendingUp className="w-5 h-5" />
            </button>
          </button>
          <Link href="/executive-summary" className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all font-medium text-lg flex items-center gap-2">
            <FileText className="w-5 h-5" />
            ملخص المشروع
          </Link>
        </div>
    </div>
      </header >

    {/* How it Works */ }
    < section className = "py-20 px-6 bg-white/50 backdrop-blur-sm relative" >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">كيف تعمل وقاية جين؟</h2>
          <p className="text-slate-500">ثلاث خطوات بسيطة لحياة صحية مديدة</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="group p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-rn from-transparent via-blue-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
            <div className="w-16 h-16 mx-auto bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Dna className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">1. افحص</h3>
            <p className="text-slate-500 leading-relaxed">
              تحليل جيني بسيط لمرة واحدة يفك شفرة حمضك النووي ويكشف خارطة طريق صحتك المستقبلية.
            </p>
          </div>

          {/* Step 2 */}
          <div className="group p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-500 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
            <div className="w-16 h-16 mx-auto bg-teal-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <BrainCircuit className="w-8 h-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">2. حلل</h3>
            <p className="text-slate-500 leading-relaxed">
              خوارزميات الذكاء الاصطناعي المتقدمة تدمج بياناتك الجينية مع سجلك الصحي لاكتشاف المخاطر الكامنة.
            </p>
          </div>

          {/* Step 3 */}
          <div className="group p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-500 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
            <div className="w-16 h-16 mx-auto bg-purple-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <ShieldCheck className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">3. استبق</h3>
            <p className="text-slate-500 leading-relaxed">
              نصمم لك خطة وقاية فائقة التخصيص لتأخير الشيخوخة ومنع الأمراض المزمنة قبل حدوثها.
            </p>
          </div>
        </div>
      </div>
      </section >

    {/* Value Proposition */ }
    < section className = "py-20 px-6" >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* For Individuals */}
          <div className="bg-gradient-to-br from-blue-900 to-slate-900 rounded-3xl p-10 text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <Activity className="w-6 h-6 text-teal-400" />
                <span className="text-teal-400 font-bold uppercase tracking-wider text-sm">للأفراد والعائلات</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">عش أطول، بصحة أفضل</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-blue-100">
                  <span className="w-1.5 h-1.5 bg-teal-400 rounded-full"></span>
                  تقارير جينية سهلة الفهم باللغة العربية
                </li>
                <li className="flex items-center gap-3 text-blue-100">
                  <span className="w-1.5 h-1.5 bg-teal-400 rounded-full"></span>
                  توصيات تغذية ولياقة بدنية مصممة لجيناتك
                </li>
                <li className="flex items-center gap-3 text-blue-100">
                  <span className="w-1.5 h-1.5 bg-teal-400 rounded-full"></span>
                  تنبيهات مبكرة للمخاطر الصحية الوراثية
                </li>
              </ul>
              <button className="text-white hover:text-teal-400 font-semibold transition-colors flex items-center gap-2">
                اكتشف رحلتك الصحية <span className="text-xl">←</span>
              </button>
            </div>
          </div>

          {/* For Insurance */}
          <div className="bg-white border border-slate-200 rounded-3xl p-10 relative overflow-hidden shadow-xl shadow-slate-200/50">
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-slate-100/50 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-6 h-6 text-blue-600" />
                <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">لشركات التأمين</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">قلل المخاطر، ضاعف الأرباح</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-slate-600">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  لوحة تحكم ذكية لقياس انخفاض المخاطر
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  تحويل النموذج من علاجي مكلف إلى وقائي مربح
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  زيادة ولاء العملاء عبر برامج العافية المخصصة
                </li>
              </ul>
              <button className="text-blue-900 hover:text-blue-700 font-semibold transition-colors flex items-center gap-2">
                احجز عرضاً توضيحياً <span className="text-xl">←</span>
              </button>
            </div>
          </div>

        </div>
      </div>
      </section >

    {/* Trust & Compliance Badge */ }
    < section className = "py-12 bg-slate-900 text-white border-t border-slate-800" >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Placeholders for logos, using text styling for MVP */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 border-2 border-white/50 rounded-lg flex items-center justify-center font-bold text-xs">KSA</div>
            <span className="font-semibold text-lg">رؤية السعودية 2030</span>
          </div>
          <div className="h-8 w-px bg-white/20 hidden md:block"></div>
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-teal-400" />
            <span>متوافق مع معايير حماية البيانات (PDPL)</span>
          </div>
          <div className="h-8 w-px bg-white/20 hidden md:block"></div>
          <div className="flex items-center gap-2">
            <span>Sandbox البيئة التشريعية</span>
          </div>
        </div>
      </div>
      </section >

    {/* Footer */ }
    < footer className = "bg-slate-950 text-slate-400 py-12 px-6 text-sm" >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-right">
          <div className="text-2xl font-bold text-white tracking-tighter mb-2">
            وقاية<span className="text-teal-500">جين</span>
          </div>
          <p>مستقبل الوقاية الصحية في المملكة.</p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">عن المنصة</a>
          <a href="#" className="hover:text-white transition-colors">الخصوصية</a>
          <a href="#" className="hover:text-white transition-colors">اتصل بنا</a>
        </div>

        <div className="flex items-center gap-2 opacity-60">
          <span>Powered by Generative AI</span>
          <BrainCircuit className="w-4 h-4" />
        </div>
      </div>
      </footer >
    </div >
  );
}
