'use client';

import { X, CheckCircle, Lock, MonitorSmartphone, TrendingUp, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';

interface ServiceModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    icon: ReactNode;
    children: ReactNode;
    ctaText: string;
    onCtaClick: () => void;
    accentColor?: string;
}

export default function ServiceModal({ isOpen, onClose, title, icon, children, ctaText, onCtaClick, accentColor = "bg-teal-600" }: ServiceModalProps) {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden relative"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className={`p-6 ${accentColor} text-white flex justify-between items-center`}>
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-white/20 rounded-xl backdrop-blur-md">
                                {icon}
                            </div>
                            <h2 className="text-xl font-bold">{title}</h2>
                        </div>
                        <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-full transition-colors">
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Content Body */}
                    <div className="p-6 md:p-8">
                        {children}
                    </div>

                    {/* Footer / CTA */}
                    <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-col gap-3">
                        <button
                            onClick={onCtaClick}
                            className={`w-full py-4 ${accentColor} hover:brightness-110 text-white rounded-xl font-bold text-lg shadow-lg transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2`}
                        >
                            <Lock className="w-4 h-4" /> {ctaText}
                        </button>
                        <p className="text-center text-xs text-slate-400">
                            يشمل ضمان استرداد الأموال لمدة 30 يوماً. الغاء في أي وقت.
                        </p>
                    </div>

                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
