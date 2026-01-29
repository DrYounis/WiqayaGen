import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

export async function POST(request: NextRequest) {
    try {
        const { text, type = 'medical' } = await request.json();

        if (!text || text.trim().length === 0) {
            return NextResponse.json({ error: 'Text is required' }, { status: 400 });
        }

        // Support both DeepSeek and OpenAI
        const apiKey = process.env.DEEPSEEK_API_KEY || process.env.OPENAI_API_KEY;

        if (!apiKey) {
            return NextResponse.json(
                { error: 'No API key configured' },
                { status: 500 }
            );
        }

        const useDeepSeek = !!process.env.DEEPSEEK_API_KEY;
        const client = new OpenAI({
            apiKey: apiKey,
            baseURL: useDeepSeek ? 'https://api.deepseek.com' : undefined,
        });

        const model = process.env.AI_MODEL || (useDeepSeek ? 'deepseek-chat' : 'gpt-4o-mini');

        // Different prompts for different document types
        const systemPrompts = {
            medical: 'أنت طبيب استشاري متخصص في تبسيط التقارير الطبية والجينومية. اشرح المصطلحات الطبية المعقدة بلغة عربية بسيطة وواضحة للمرضى.',
            genomic: 'أنت عالم جينات متخصص في شرح التقارير الجينومية. وضح المتغيرات الجينية ومخاطرها الصحية بأسلوب مبسط باللغة العربية.',
            general: 'أنت مساعد ذكي يلخص النصوص بشكل واضح ومختصر باللغة العربية.',
        };

        const systemContent = systemPrompts[type as keyof typeof systemPrompts] || systemPrompts.general;

        const response = await client.chat.completions.create({
            model: model,
            messages: [
                {
                    role: 'system',
                    content: systemContent,
                },
                {
                    role: 'user',
                    content: `الرجاء تلخيص وتبسيط النص التالي بأسلوب واضح ومباشر:\n\n${text}`,
                },
            ],
            max_tokens: 800,
            temperature: 0.7,
        });

        const summary = response.choices[0]?.message?.content || '';

        return NextResponse.json({
            success: true,
            summary: summary,
            provider: useDeepSeek ? 'DeepSeek' : 'OpenAI',
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
