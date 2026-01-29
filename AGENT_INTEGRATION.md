# External Agent News Integration Guide

## Overview
This endpoint allows your external AI agent (Moltbot) to push daily medical news updates securely.

---

## 🔐 Setup

### 1. Add Environment Variable

Add to `.env.local`:
```env
AGENT_SECRET_KEY=your-secure-random-token-here
```

**Generate a secure token:**
```bash
# macOS/Linux
openssl rand -hex 32

# Or use any secure random string (min 32 characters)
```

---

## 📡 API Endpoint

### Endpoint Details
- **URL**: `https://yoursite.com/api/agent/update-news`
- **Method**: `POST`
- **Authentication**: Bearer Token
- **Content-Type**: `application/json`

### Request Headers
```
Authorization: Bearer your-secret-token-here
Content-Type: application/json
```

### Request Payload
```json
{
  "news": [
    {
      "title": "Breakthrough in Genomic Medicine",
      "summary": "دراسة جديدة تكشف عن دور الجينات في تحديد مخاطر الأمراض",
      "source": "NIH",
      "url": "https://example.com/article",
      "date": "2026-01-29T08:00:00Z"
    },
    {
      "title": "Insurance Coverage Update",
      "summary": "التأمين الصحي يوسع تغطية الفحوصات الجينومية",
      "source": "Health Ministry",
      "url": "https://example.com/article2",
      "date": "2026-01-29T08:00:00Z"
    }
  ]
}
```

### Success Response (200)
```json
{
  "success": true,
  "message": "News updated successfully",
  "itemsProcessed": 2,
  "itemsSaved": 2,
  "lastUpdated": "2026-01-29T08:16:45.000Z"
}
```

### Error Responses

**401 Unauthorized** - Missing or invalid token:
```json
{
  "error": "Unauthorized - Bearer token required"
}
```

**400 Bad Request** - Invalid payload:
```json
{
  "error": "Validation failed",
  "details": [
    "Item 0: missing or invalid 'title'"
  ]
}
```

**500 Internal Server Error**:
```json
{
  "error": "Internal server error",
  "details": "..."
}
```

---

## 🧪 Testing

### Using cURL

```bash
curl -X POST http://localhost:3000/api/agent/update-news \
  -H "Authorization: Bearer your-secret-token" \
  -H "Content-Type: application/json" \
  -d '{
    "news": [
      {
        "title": "Test News",
        "summary": "اختبار الأخبار الطبية",
        "source": "Test Source",
        "url": "https://example.com",
        "date": "2026-01-29T08:00:00Z"
      }
    ]
  }'
```

### Health Check

```bash
curl http://localhost:3000/api/agent/update-news
```

Expected response:
```json
{
  "endpoint": "/api/agent/update-news",
  "method": "POST",
  "description": "Secure endpoint for external agents to push news updates",
  "authentication": "Bearer token required in Authorization header",
  "requiredEnvVar": "AGENT_SECRET_KEY"
}
```

---

## 🤖 Moltbot Integration

### Configuration in Moltbot

1. **Set Base URL**: `https://yoursite.com`
2. **Set Endpoint**: `/api/agent/update-news`
3. **Set Auth Header**: `Bearer your-secret-token`
4. **Set Schedule**: Daily at your preferred time

### Sample Moltbot Code (Python)

```python
import requests
import os
from datetime import datetime

AGENT_SECRET = os.getenv('AGENT_SECRET_KEY')
API_URL = 'https://yoursite.com/api/agent/update-news'

def push_news_update(news_items):
    """
    Push news updates to WiqayaGen
    
    Args:
        news_items: List of dicts with title, summary, source, url, date
    """
    headers = {
        'Authorization': f'Bearer {AGENT_SECRET}',
        'Content-Type': 'application/json'
    }
    
    payload = {'news': news_items}
    
    response = requests.post(API_URL, json=payload, headers=headers)
    
    if response.status_code == 200:
        result = response.json()
        print(f"✅ Updated {result['itemsSaved']} news items")
    else:
        print(f"❌ Error: {response.status_code}")
        print(response.json())
    
    return response

# Example usage
news = [
    {
        'title': 'Genomic Study',
        'summary': 'دراسة حديثة في علم الجينوم',
        'source': 'Nature',
        'url': 'https://nature.com/article',
        'date': datetime.utcnow().isoformat() + 'Z'
    }
]

push_news_update(news)
```

---

## 🔄 Data Flow

```
┌─────────────┐
│   Moltbot   │
│ (AI Agent)  │
└──────┬──────┘
       │ POST /api/agent/update-news
       │ Bearer Token
       │
       ▼
┌──────────────────┐
│ Security Check   │
│ - Verify Token   │
│ - Validate Data  │
└──────┬───────────┘
       │
       ▼
┌──────────────────┐
│ Auto-Categorize  │
│ - Genomics       │
│ - Insurance      │
│ - Preventive     │
└──────┬───────────┘
       │
       ▼
┌──────────────────┐
│ Save to JSON     │
│ latest-news.json │
└──────┬───────────┘
       │
       ▼
┌──────────────────┐
│ NewsTicker       │
│ (Auto-refresh)   │
└──────────────────┘
```

---

## 🎯 Auto-Categorization Logic

The endpoint automatically categorizes news based on keywords:

- **Genomics**: gene, genom, dna, جين
- **Insurance**: insurance, تأمين
- **Preventive**: Default category

You can customize this in `route.ts` if needed.

---

## ✅ Validation Rules

Each news item must have:
- ✓ `title` (string, required)
- ✓ `summary` (string, required) - Arabic preferred
- ✓ `source` (string, required)
- ✓ `url` (string, required)
- ✓ `date` (string, required) - ISO 8601 format

Max items stored: **3** (most recent)

---

## 📊 Frontend Integration

The `NewsTicker` component already reads from `latest-news.json`:
- ✅ No changes needed
- ✅ Auto-refresh on data update
- ✅ Displays last updated timestamp

---

## 🔒 Security Best Practices

1. **Never commit** `AGENT_SECRET_KEY` to version control
2. **Use HTTPS** in production (enforced by Vercel)
3. **Rotate tokens** periodically
4. **Monitor logs** for unauthorized access attempts
5. **Rate limiting**: Consider adding if needed

---

## 🚨 Remember

> **Important**: Add `AGENT_SECRET_KEY` to:
> - Local: `.env.local`
> - Production: Vercel Dashboard → Environment Variables

Without this, the endpoint will return `500 Server configuration error`.
