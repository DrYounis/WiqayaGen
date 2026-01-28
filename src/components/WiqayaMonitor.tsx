'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle, Circle, Activity, ShieldCheck, AlertCircle } from 'lucide-react';

const WiqayaMonitor = () => {
    // 1. STATE: The "Brain" of the component
    const [score, setScore] = useState(50); // Start at baseline (50% risk mitigation)
    const [status, setStatus] = useState("تحليل..."); // Analysis...
    const [tasks, setTasks] = useState([
        { id: 1, text: "تناول المكملات الجينية", category: "critical", completed: false, weight: 20 },
        { id: 2, text: "نوم عميق (>7 ساعات)", category: "lifestyle", completed: false, weight: 15 },
        { id: 3, text: "شرب 2 لتر ماء", category: "lifestyle", completed: false, weight: 10 },
        { id: 4, text: "تمرين التنفس (إغاثة)", category: "mental", completed: false, weight: 5 },
    ]);

    // 2. THE ALGORITHM: Recalculate risk whenever a task changes
    useEffect(() => {
        const completedWeight = tasks.reduce((acc, task) =>
            task.completed ? acc + task.weight : acc, 0
        );
        const newScore = 50 + completedWeight; // Base 50 + Tasks

        setScore(newScore);

        // Update Text Logic based on medical thresholds
        if (newScore >= 90) setStatus("مثالي (Optimal)");
        else if (newScore >= 75) setStatus("خطر منخفض (Low Risk)");
        else if (newScore >= 60) setStatus("مستقر (Stable)");
        else setStatus("يحتاج انتباه (Action Needed)");

    }, [tasks]);

    const toggleTask = (id: number) => {
        setTasks(tasks.map(t =>
            t.id === id ? { ...t, completed: !t.completed } : t
        ));
    };

    // 3. VISUALS: Dynamic Ring Calculation
    const radius = 80;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (score / 100) * circumference;

    // Dynamic Color Logic
    const getColor = () => {
        if (score >= 80) return "#10B981"; // Emerald Green
        if (score >= 60) return "#F59E0B"; // Amber
        return "#EF4444"; // Red
    };

    return (
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center p-8 bg-slate-900 rounded-3xl text-white w-full max-w-4xl shadow-2xl" dir="rtl">

            {/* LEFT: The "Magical" Indicator */}
            <div className="relative flex items-center justify-center w-64 h-64">
                {/* Background Circle */}
                <svg className="transform -rotate-90 w-full h-full">
                    <circle
                        cx="128" cy="128" r={radius}
                        stroke="#1e293b" strokeWidth="12" fill="transparent"
                    />
                    {/* Active Progress Circle */}
                    <circle
                        cx="128" cy="128" r={radius}
                        stroke={getColor()}
                        strokeWidth="12"
                        fill="transparent"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        className="transition-all duration-1000 ease-out"
                    />
                </svg>

                {/* Center Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-6xl font-bold tracking-tighter" style={{ color: getColor() }}>
                        {score}
                    </span>
                    <span className="text-sm text-slate-400 mt-2 uppercase tracking-widest">مؤشر الوقاية</span>
                    <div className={`mt-2 px-3 py-1 rounded-full text-xs font-bold bg-opacity-20`}
                        style={{ backgroundColor: getColor(), color: getColor() }}>
                        {status}
                    </div>
                </div>
            </div>

            {/* RIGHT: The Daily Protocol (Tasks) */}
            <div className="flex-1 w-full">
                <div className="mb-6">
                    <h3 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
                        <Activity className="w-6 h-6 text-emerald-400" />
                        بروتوكولك اليومي
                    </h3>
                    <p className="text-slate-400 text-sm">أكمل المهام لتحديث مستوى الأمان الجيني الخاص بك.</p>
                </div>

                <div className="space-y-3">
                    {tasks.map((task) => (
                        <div
                            key={task.id}
                            onClick={() => toggleTask(task.id)}
                            className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all duration-300 group
                ${task.completed
                                    ? 'bg-emerald-900/20 border-emerald-500/50'
                                    : 'bg-slate-800 border-slate-700 hover:border-slate-500'
                                }`}
                        >
                            <div className="flex items-center gap-4">
                                <div className={`w-6 h-6 rounded-full flex items-center justify-center border-2 transition-colors
                  ${task.completed ? 'bg-emerald-500 border-emerald-500' : 'border-slate-500'}`}>
                                    {task.completed && <CheckCircle className="w-4 h-4 text-white" />}
                                </div>
                                <span className={`text-lg ${task.completed ? 'text-emerald-100 line-through opacity-50' : 'text-slate-200'}`}>
                                    {task.text}
                                </span>
                            </div>

                            {/* Badge for weight/importance */}
                            <span className="text-xs font-mono text-slate-500 bg-slate-900 px-2 py-1 rounded">
                                +{task.weight}%
                            </span>
                        </div>
                    ))}
                </div>

                {/* Footer Note */}
                <div className="mt-6 flex items-center gap-2 text-xs text-slate-500">
                    <ShieldCheck className="w-4 h-4" />
                    <span>يتم تحديث الخوارزمية بناءً على نشاطك خلال 24 ساعة الماضية</span>
                </div>
            </div>
        </div>
    );
};

export default WiqayaMonitor;
