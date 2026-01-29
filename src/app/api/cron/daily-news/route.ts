import { NextRequest, NextResponse } from 'next/server';
import Parser from 'rss-parser';
import OpenAI from 'openai';
import fs from 'fs/promises';
import path from 'path';

const parser = new Parser();

// Medical RSS feeds
const RSS_FEEDS = [
    'https://www.nih.gov/news-events/news-releases/rss',
    'https://www.sciencedaily.com/rss/health_medicine/genetics.xml',
];

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

export async function GET(request: NextRequest) {
    try {
        // Verify cron secret (optional security)
        const authHeader = request.headers.get('authorization');
        if (process.env.CRON_SECRET && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        console.log('[AI News Agent] Starting daily news collection...');

        // Step 1: Fetch RSS feeds
        const articles = await fetchRSSFeeds();

        if (articles.length === 0) {
            console.log('[AI News Agent] No articles fetched');
            return NextResponse.json({ error: 'No articles found' }, { status: 500 });
        }

        console.log(`[AI News Agent] Fetched ${articles.length} articles`);

        // Step 2: Filter and summarize using OpenAI
        const headlines = await generateArabicHeadlines(articles);

        if (!headlines || headlines.length === 0) {
            console.log('[AI News Agent] No headlines generated');
            return useFallbackHeadlines();
        }

        // Step 3: Save to JSON file
        const newsData: NewsData = {
            lastUpdated: new Date().toISOString(),
            headlines: headlines.slice(0, 3), // Top 3
        };

        const filePath = path.join(process.cwd(), 'public', 'data', 'latest-news.json');
        await fs.writeFile(filePath, JSON.stringify(newsData, null, 2));

        console.log('[AI News Agent] Successfully saved news to file');

        return NextResponse.json({
            success: true,
            count: newsData.headlines.length,
            lastUpdated: newsData.lastUpdated,
        });

    } catch (error) {
        console.error('[AI News Agent] Error:', error);
        return NextResponse.json({
            error: 'Failed to fetch news',
            details: error instanceof Error ? error.message : 'Unknown error',
        }, { status: 500 });
    }
}

async function fetchRSSFeeds() {
    const allArticles: Array<{ title: string; link: string; pubDate?: string }> = [];

    for (const feedUrl of RSS_FEEDS) {
        try {
            const feed = await parser.parseURL(feedUrl);
            const articles = feed.items.map(item => ({
                title: item.title || '',
                link: item.link || '',
                pubDate: item.pubDate,
            }));
            allArticles.push(...articles);
        } catch (error) {
            console.error(`Failed to fetch feed ${feedUrl}:`, error);
        }
    }

    // Sort by date (most recent first)
    return allArticles
        .filter(a => a.title && a.link)
        .sort((a, b) => {
            const dateA = a.pubDate ? new Date(a.pubDate).getTime() : 0;
            const dateB = b.pubDate ? new Date(b.pubDate).getTime() : 0;
            return dateB - dateA;
        })
        .slice(0, 20); // Top 20 for OpenAI processing
}

async function generateArabicHeadlines(articles: Array<{ title: string; link: string }>) {
    if (!process.env.OPENAI_API_KEY) {
        console.error('[AI News Agent] OPENAI_API_KEY not found');
        return null;
    }

    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });

    const articleList = articles.map((a, i) => `${i + 1}. ${a.title}`).join('\n');

    const prompt = `أنت محرر طبي محترف. من القائمة التالية من الأخبار الطبية، اختر أفضل 3 أخبار تتعلق بـ:
1. علم الجينوم (Genomics)
2. التأمين الصحي (Insurance)  
3. الطب الوقائي (Preventive Medicine)

ثم اكتب عنوان عربي احترافي لكل خبر (بحد أقصى 15 كلمة). استخدم لغة طبية دقيقة.

الأخبار:
${articleList}

ردّ بصيغة JSON فقط:
[
  {
    "index": رقم الخبر الأصلي,
    "headline": "العنوان العربي",
    "category": "Genomics أو Insurance أو Preventive"
  }
]`;

    try {
        const completion = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: [
                { role: 'system', content: 'أنت محرر أخبار طبية محترف. تكتب عناوين عربية دقيقة ومختصرة.' },
                { role: 'user', content: prompt }
            ],
            temperature: 0.7,
            max_tokens: 500,
        });

        const responseText = completion.choices[0]?.message?.content || '';

        // Extract JSON from markdown code blocks if present
        const jsonMatch = responseText.match(/```json\n?([\s\S]*?)\n?```/) ||
            responseText.match(/\[[\s\S]*\]/);

        const jsonText = jsonMatch ? (jsonMatch[1] || jsonMatch[0]) : responseText;
        const parsedResponse = JSON.parse(jsonText.trim());

        const headlines: NewsHeadline[] = parsedResponse.map((item: any) => ({
            id: `news-${Date.now()}-${item.index}`,
            text: item.headline,
            category: item.category,
            url: articles[item.index - 1]?.link || '#',
        }));

        return headlines;

    } catch (error) {
        console.error('[AI News Agent] OpenAI error:', error);
        return null;
    }
}

function useFallbackHeadlines() {
    const fallbackData: NewsData = {
        lastUpdated: new Date().toISOString(),
        headlines: [
            {
                id: 'fallback-1',
                text: 'دراسة جديدة تكشف عن علاقة الجينات بالأمراض المزمنة',
                category: 'Genomics',
                url: '#',
            },
            {
                id: 'fallback-2',
                text: 'وزارة الصحة تطلق برنامج وقائي جديد للفحوصات الجينية',
                category: 'Preventive',
                url: '#',
            },
            {
                id: 'fallback-3',
                text: 'تطورات في التأمين الصحي لتغطية الفحوصات الجينومية',
                category: 'Insurance',
                url: '#',
            },
        ],
    };

    return NextResponse.json({
        success: true,
        count: fallbackData.headlines.length,
        lastUpdated: fallbackData.lastUpdated,
        note: 'Using fallback headlines',
    });
}
