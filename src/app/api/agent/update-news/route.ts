import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

interface NewsItem {
    title: string;
    summary: string;
    source: string;
    url: string;
    date: string;
}

interface UpdateNewsPayload {
    news: NewsItem[];
}

interface StoredNewsHeadline {
    id: string;
    text: string;
    category: 'Genomics' | 'Insurance' | 'Preventive';
    url: string;
}

interface StoredNewsData {
    lastUpdated: string;
    headlines: StoredNewsHeadline[];
}

/**
 * POST /api/agent/update-news
 * 
 * Secure endpoint for external AI agents (like Moltbot) to push news updates
 * Requires Bearer token authentication
 */
export async function POST(request: NextRequest) {
    try {
        // 1. Authentication - Check Bearer token
        const authHeader = request.headers.get('authorization');
        const expectedToken = process.env.AGENT_SECRET_KEY;

        if (!expectedToken) {
            console.error('[Agent Update] AGENT_SECRET_KEY not configured');
            return NextResponse.json(
                { error: 'Server configuration error' },
                { status: 500 }
            );
        }

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            console.warn('[Agent Update] Missing or invalid authorization header');
            return NextResponse.json(
                { error: 'Unauthorized - Bearer token required' },
                { status: 401 }
            );
        }

        const token = authHeader.substring(7); // Remove 'Bearer ' prefix

        if (token !== expectedToken) {
            console.warn('[Agent Update] Invalid bearer token');
            return NextResponse.json(
                { error: 'Unauthorized - Invalid token' },
                { status: 401 }
            );
        }

        // 2. Parse and validate payload
        let payload: UpdateNewsPayload;

        try {
            payload = await request.json();
        } catch (error) {
            return NextResponse.json(
                { error: 'Invalid JSON payload' },
                { status: 400 }
            );
        }

        // Validate payload structure
        if (!payload.news || !Array.isArray(payload.news)) {
            return NextResponse.json(
                { error: 'Invalid payload - expected { news: NewsItem[] }' },
                { status: 400 }
            );
        }

        // Validate each news item
        const validationErrors: string[] = [];

        payload.news.forEach((item, index) => {
            if (!item.title || typeof item.title !== 'string') {
                validationErrors.push(`Item ${index}: missing or invalid 'title'`);
            }
            if (!item.summary || typeof item.summary !== 'string') {
                validationErrors.push(`Item ${index}: missing or invalid 'summary'`);
            }
            if (!item.source || typeof item.source !== 'string') {
                validationErrors.push(`Item ${index}: missing or invalid 'source'`);
            }
            if (!item.url || typeof item.url !== 'string') {
                validationErrors.push(`Item ${index}: missing or invalid 'url'`);
            }
            if (!item.date || typeof item.date !== 'string') {
                validationErrors.push(`Item ${index}: missing or invalid 'date'`);
            }
        });

        if (validationErrors.length > 0) {
            return NextResponse.json(
                {
                    error: 'Validation failed',
                    details: validationErrors
                },
                { status: 400 }
            );
        }

        // 3. Transform to internal format
        // Auto-categorize based on keywords in title/summary
        const headlines: StoredNewsHeadline[] = payload.news.slice(0, 3).map((item, index) => {
            const combinedText = `${item.title} ${item.summary}`.toLowerCase();

            let category: 'Genomics' | 'Insurance' | 'Preventive' = 'Preventive';

            if (combinedText.includes('gene') || combinedText.includes('genom') ||
                combinedText.includes('dna') || combinedText.includes('جين')) {
                category = 'Genomics';
            } else if (combinedText.includes('insurance') || combinedText.includes('تأمين')) {
                category = 'Insurance';
            }

            return {
                id: `agent-${Date.now()}-${index}`,
                text: item.summary,
                category: category,
                url: item.url,
            };
        });

        // 4. Save to JSON file
        const newsData: StoredNewsData = {
            lastUpdated: new Date().toISOString(),
            headlines: headlines,
        };

        const filePath = path.join(process.cwd(), 'public', 'data', 'latest-news.json');
        await fs.writeFile(filePath, JSON.stringify(newsData, null, 2));

        console.log(`[Agent Update] Successfully saved ${headlines.length} news items from external agent`);

        // 5. Return success response
        return NextResponse.json({
            success: true,
            message: 'News updated successfully',
            itemsProcessed: payload.news.length,
            itemsSaved: headlines.length,
            lastUpdated: newsData.lastUpdated,
        });

    } catch (error) {
        console.error('[Agent Update] Error:', error);
        return NextResponse.json(
            {
                error: 'Internal server error',
                details: error instanceof Error ? error.message : 'Unknown error',
            },
            { status: 500 }
        );
    }
}

/**
 * GET /api/agent/update-news
 * 
 * Health check endpoint
 */
export async function GET() {
    return NextResponse.json({
        endpoint: '/api/agent/update-news',
        method: 'POST',
        description: 'Secure endpoint for external agents to push news updates',
        authentication: 'Bearer token required in Authorization header',
        requiredEnvVar: 'AGENT_SECRET_KEY',
    });
}
