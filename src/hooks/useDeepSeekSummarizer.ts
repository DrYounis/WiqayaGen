'use client';

import { useState } from 'react';

interface SummarizerResult {
    summary: string;
    provider: string;
    model: string;
}

export function useDeepSeekSummarizer() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const summarize = async (
        text: string,
        type: 'medical' | 'genomic' | 'general' = 'medical'
    ): Promise<SummarizerResult | null> => {
        if (!text || text.trim().length === 0) {
            setError('النص مطلوب');
            return null;
        }

        setLoading(true);
        setError(null);

        try {
            const response = await fetch('/api/summarize', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text, type }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'فشل التلخيص');
            }

            const data = await response.json();

            if (!data.success) {
                throw new Error(data.error || 'فشل التلخيص');
            }

            return {
                summary: data.summary,
                provider: data.provider,
                model: data.model,
            };
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'حدث خطأ غير معروف';
            setError(errorMessage);
            console.error('Summarization error:', err);
            return null;
        } finally {
            setLoading(false);
        }
    };

    return { summarize, loading, error };
}
