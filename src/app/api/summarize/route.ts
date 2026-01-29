import { NextRequest, NextResponse } from 'next/server';
import { createAIClient, AIPresets, getProviderName, getModelName } from '@/lib/ai/config';

export async function POST(request: NextRequest) {
    try {
        const { text, type = 'medical' } = await request.json();

        if (!text || text.trim().length === 0) {
            return NextResponse.json({ error: 'Text is required' }, { status: 400 });
        }

        // Create AI client with centralized config
        const client = createAIClient();
        const model = getModelName();
        const provider = getProviderName();

        console.log(`[Summarizer] Using ${provider} with model: ${model}`);

        // Get preset configuration based on type
        const presetMap = {
            medical: AIPresets.medicalSummary,
            genomic: AIPresets.genomicSummary,
            general: AIPresets.generalSummary,
        };

        const preset = presetMap[type as keyof typeof presetMap] || AIPresets.generalSummary;

        const response = await client.chat.completions.create({
            model: model,
            messages: [
                {
                    role: 'system',
                    content: preset.systemPrompt,
                },
                {
                    role: 'user',
                    content: `الرجاء تلخيص وتبسيط النص التالي بأسلوب واضح ومباشر:\n\n${text}`,
                },
            ],
            max_tokens: preset.maxTokens,
            temperature: preset.temperature,
        });

        const summary = response.choices[0]?.message?.content || '';

        return NextResponse.json({
            success: true,
            summary: summary,
            provider: provider,
            model: model,
        });

    } catch (error) {
        console.error('Summarization error:', error);
        return NextResponse.json(
            {
                error: 'Failed to summarize text',
                details: error instanceof Error ? error.message : 'Unknown error',
            },
            { status: 500 }
        );
    }
}
