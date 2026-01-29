'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useDeepSeekSummarizer } from '@/hooks/useDeepSeekSummarizer';
import { Sparkles, FileText, Dna, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

type SummaryType = 'medical' | 'genomic' | 'general';

export default function MedicalSummarizer() {
    const { summarize, loading, error } = useDeepSeekSummarizer();
    const [inputText, setInputText] = useState('');
    const [summary, setSummary] = useState('');
    const [summaryType, setSummaryType] = useState<SummaryType>('medical');
    const [provider, setProvider] = useState('');

    const handleSummarize = async () => {
        if (!inputText.trim()) return;

        const result = await summarize(inputText, summaryType);
        if (result) {
            setSummary(result.summary);
            setProvider(result.provider);
        }
    };

    const summaryTypes = [
        { id: 'medical', label: 'تقرير طبي', icon: FileText, color: 'emerald' },
        { id: 'genomic', label: 'تقرير جيني', icon: Dna, color: 'indigo' },
        { id: 'general', label: 'نص عام', icon: Sparkles, color: 'blue' },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8" dir="rtl">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-8"
                >
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <Sparkles className="w-4 h-4" />
                        <span>تقنية DeepSeek AI</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                        ملخص طبي ذكي
                    </h1>
                    <p className="text-slate-600">
                        بسّط تقاريرك الطبية والجينومية بالذكاء الاصطناعي
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Input Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white rounded-2xl shadow-lg p-6"
                    >
                        <div className="mb-4">
                            <label className="block text-sm font-semibold text-slate-700 mb-3">
                                نوع المستند
                            </label>
                            <div className="grid grid-cols-3 gap-2">
                                {summaryTypes.map((type) => {
                                    const Icon = type.icon;
                                    const isActive = summaryType === type.id;
                                    return (
                                        <button
                                            key={type.id}
                                            onClick={() => setSummaryType(type.id as SummaryType)}
                                            className={`p-3 rounded-lg border-2 transition-all ${isActive
                                                    ? `border-${type.color}-500 bg-${type.color}-50 text-${type.color}-700`
                                                    : 'border-slate-200 hover:border-slate-300 text-slate-600'
                                                }`}
                                        >
                                            <Icon className="w-5 h-5 mx-auto mb-1" />
                                            <span className="text-xs font-medium">{type.label}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                النص المطلوب تلخيصه
                            </label>
                            <textarea
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                placeholder="الصق هنا التقرير الطبي أو الجينومي..."
                                className="w-full h-64 p-4 border-2 border-slate-200 rounded-lg focus:border-emerald-500 focus:outline-none resize-none text-slate-700"
                                disabled={loading}
                            />
                            <p className="text-xs text-slate-500 mt-2">
                                {inputText.length} حرف
                            </p>
                        </div>

                        <button
                            onClick={handleSummarize}
                            disabled={loading || !inputText.trim()}
                            className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    <span>جاري التلخيص...</span>
                                </>
                            ) : (
                                <>
                                    <Sparkles className="w-5 h-5" />
                                    <span>لخّص الآن</span>
                                </>
                            )}
                        </button>
                    </motion.div>

                    {/* Output Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white rounded-2xl shadow-lg p-6"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-slate-900">الملخص</h3>
                            {provider && (
                                <span className="text-xs bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-medium">
                                    {provider}
                                </span>
                            )}
                        </div>

                        {error && (
                            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 mb-4 flex items-start gap-3">
                                <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-sm font-semibold text-red-900">خطأ</p>
                                    <p className="text-sm text-red-700">{error}</p>
                                </div>
                            </div>
                        )}

                        {summary ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-6 border-2 border-emerald-200"
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                    <span className="text-sm font-semibold text-emerald-900">
                                        تم التلخيص بنجاح
                                    </span>
                                </div>
                                <div className="prose prose-sm max-w-none text-slate-700 leading-relaxed whitespace-pre-wrap">
                                    {summary}
                                </div>
                            </motion.div>
                        ) : (
                            <div className="h-64 flex items-center justify-center text-slate-400">
                                <div className="text-center">
                                    <FileText className="w-12 h-12 mx-auto mb-3 opacity-50" />
                                    <p className="text-sm">الملخص سيظهر هنا</p>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>

                {/* Info Footer */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-8 bg-blue-50 border-2 border-blue-200 rounded-lg p-4 text-center"
                >
                    <p className="text-sm text-blue-900">
                        💡 <strong>نصيحة:</strong> استخدم &quot;تقرير جيني&quot; للنتائج من المختبرات الجينومية، و&quot;تقرير طبي&quot; للتشخيصات والأدوية
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
