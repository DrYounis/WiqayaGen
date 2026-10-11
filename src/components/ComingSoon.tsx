import React from 'react';

export default function ComingSoon() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
      <div className="px-10 py-8 rounded-3xl bg-white shadow-2xl border border-slate-200 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900">
          Coming Soon
        </h1>
        <p className="mt-4 text-xl text-slate-500 font-medium">قريباً</p>
      </div>
    </div>
  );
}
