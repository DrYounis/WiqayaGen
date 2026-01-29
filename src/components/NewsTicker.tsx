'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dna, Shield, Activity, ExternalLink } from 'lucide-react';

interface NewsHeadline {
    id: string;
    text: string;
    category: 'Genomics' | 'Insurance' | 'Preventive';
    url: string;
}

interface NewsData {
    lastUpdated: string;
    headlines: NewsHeadline[];
}

const getCategoryIcon = (category: string) => {
    switch (category) {
        case 'Genomics':
            return Dna;
        case 'Insurance':
            return Shield;
        case 'Preventive':
            return Activity;
        default:
            return Activity;
    }
};

const getCategoryColor = (category: string) => {
    switch (category) {
        case 'Genomics':
            return 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20';
        case 'Insurance':
            return 'text-blue-400 bg-blue-500/10 border-blue-500/20';
        case 'Preventive':
            return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
        default:
            return 'text-slate-400 bg-slate-500/10 border-slate-500/20';
    }
};

export default function NewsTicker() {
    const [news, setNews] = useState<NewsData | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Fetch news data
        fetch('/data/latest-news.json')
            .then(res => res.json())
            .then(data => setNews(data))
            .catch(err => console.error('Failed to load news:', err));
    }, []);

    useEffect(() => {
        if (!news || news.headlines.length === 0) return;

        // Auto-rotate news every 5 seconds
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % news.headlines.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [news]);

    if (!news || news.headlines.length === 0) {
        return null;
    }

    const currentNews = news.headlines[currentIndex];
    const Icon = getCategoryIcon(currentNews.category);
    const colorClass = getCategoryColor(currentNews.category);

    return (
        <div className="relative w-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700 overflow-hidden" dir="rtl">
            {/* Animated background */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] animate-pulse"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4">
                <div className="flex items-center gap-4">
                    {/* Label */}
                    <div className="flex items-center gap-2 shrink-0">
                        <div className="relative">
                            <div className="absolute inset-0 bg-emerald-500 rounded-lg blur-sm opacity-50 animate-pulse"></div>
                            <div className="relative px-3 py-1.5 bg-emerald-600 rounded-lg border border-emerald-500">
                                <span className="text-xs md:text-sm font-bold text-white uppercase tracking-wider">
                                    أخبار طبية
                                </span>
                            </div>
                        </div>

                        {/* Dots indicator */}
                        <div className="hidden md:flex items-center gap-1.5">
                            {news.headlines.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex
                                            ? 'bg-emerald-500 w-6'
                                            : 'bg-slate-600 hover:bg-slate-500'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* News Content */}
                    <div className="flex-1 min-w-0">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentNews.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="flex items-center gap-3"
                            >
                                {/* Category Icon */}
                                <div className={`p-2 rounded-lg border ${colorClass} shrink-0`}>
                                    <Icon className="w-4 h-4" />
                                </div>

                                {/* Headline */}
                                <a
                                    href={currentNews.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex-1 flex items-center gap-2 min-w-0"
                                >
                                    <p className="text-sm md:text-base text-white font-medium truncate group-hover:text-emerald-400 transition-colors">
                                        {currentNews.text}
                                    </p>
                                    {currentNews.url !== '#' && (
                                        <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-400 transition-colors shrink-0" />
                                    )}
                                </a>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Last Updated */}
                    <div className="hidden lg:block text-xs text-slate-500 shrink-0" dir="ltr">
                        {new Date(news.lastUpdated).toLocaleDateString('ar-SA', {
                            month: 'short',
                            day: 'numeric',
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
