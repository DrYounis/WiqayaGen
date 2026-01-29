import OpenAI from 'openai';

/**
 * AI Provider Configuration
 * Supports both DeepSeek and OpenAI with automatic provider selection
 */

export type AIProvider = 'deepseek' | 'openai';

export interface AIConfig {
    provider: AIProvider;
    model: string;
    apiKey: string;
    baseURL?: string;
}

/**
 * Get the active AI configuration based on available API keys
 * Priority: DeepSeek (more cost-effective) > OpenAI
 */
export function getAIConfig(): AIConfig {
    const deepseekKey = process.env.DEEPSEEK_API_KEY;
    const openaiKey = process.env.OPENAI_API_KEY;

    if (deepseekKey) {
        return {
            provider: 'deepseek',
            model: process.env.AI_MODEL || 'deepseek-chat',
            apiKey: deepseekKey,
            baseURL: 'https://api.deepseek.com',
        };
    }

    if (openaiKey) {
        return {
            provider: 'openai',
            model: process.env.AI_MODEL || 'gpt-4o-mini',
            apiKey: openaiKey,
        };
    }

    throw new Error('No AI API key configured. Set DEEPSEEK_API_KEY or OPENAI_API_KEY');
}

/**
 * Create an OpenAI-compatible client
 * Works with both DeepSeek and OpenAI APIs
 */
export function createAIClient(config?: Partial<AIConfig>): OpenAI {
    const activeConfig = config ? { ...getAIConfig(), ...config } : getAIConfig();

    return new OpenAI({
        apiKey: activeConfig.apiKey,
        baseURL: activeConfig.baseURL,
        defaultHeaders: {
            'Content-Type': 'application/json',
        },
        timeout: 30000, // 30 seconds
    });
}

/**
 * Preset configurations for different use cases
 */
export const AIPresets = {
    /**
     * Medical news summarization and filtering
     */
    medicalNews: {
        maxTokens: 500,
        temperature: 0.7,
        systemPrompt: 'أنت محرر أخبار طبية محترف. تكتب عناوين عربية دقيقة ومختصرة.',
    },

    /**
     * Medical document summarization
     */
    medicalSummary: {
        maxTokens: 800,
        temperature: 0.7,
        systemPrompt:
            'أنت طبيب استشاري متخصص في تبسيط التقارير الطبية والجينومية. اشرح المصطلحات الطبية المعقدة بلغة عربية بسيطة وواضحة للمرضى.',
    },

    /**
     * Genomic report simplification
     */
    genomicSummary: {
        maxTokens: 800,
        temperature: 0.7,
        systemPrompt:
            'أنت عالم جينات متخصص في شرح التقارير الجينومية. وضح المتغيرات الجينية ومخاطرها الصحية بأسلوب مبسط باللغة العربية.',
    },

    /**
     * General text summarization
     */
    generalSummary: {
        maxTokens: 500,
        temperature: 0.7,
        systemPrompt: 'أنت مساعد ذكي يلخص النصوص بشكل واضح ومختصر باللغة العربية.',
    },
} as const;

/**
 * Helper function to get the current provider name for logging
 */
export function getProviderName(config?: AIConfig): string {
    const activeConfig = config || getAIConfig();
    return activeConfig.provider === 'deepseek' ? 'DeepSeek' : 'OpenAI';
}

/**
 * Helper function to get the current model name
 */
export function getModelName(config?: AIConfig): string {
    const activeConfig = config || getAIConfig();
    return activeConfig.model;
}

/**
 * Cost estimation per 1K tokens (approximate)
 */
export const CostEstimates = {
    deepseek: {
        input: 0.00014, // $0.14 per 1M tokens
        output: 0.00028, // $0.28 per 1M tokens
    },
    openai: {
        input: 0.00015, // $0.15 per 1M tokens (gpt-4o-mini)
        output: 0.00060, // $0.60 per 1M tokens
    },
} as const;
