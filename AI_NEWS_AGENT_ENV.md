# AI News Agent - Environment Variables

## Required Configuration

Add these environment variables to your `.env.local` file (for local development) and to **Vercel Project Settings > Environment Variables** (for production).

---

## Option 1: OpenAI (Default)

```env
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxxxxxxxxxx
```

**Model used:** `gpt-4o-mini` (default)

**Cost:** ~$0.15 per 1M input tokens, $0.60 per 1M output tokens

---

## Option 2: DeepSeek (Recommended - More Cost-Effective! 🎯)

```env
DEEPSEEK_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxx
```

**Model used:** `deepseek-chat` (default)

**Cost:** ~$0.14 per 1M input tokens, $0.28 per 1M output tokens (約50% cheaper!)

**Get API Key:** https://platform.deepseek.com/

> **Note:** The OpenAI SDK works seamlessly with DeepSeek! The code automatically detects which API key is available and configures the base URL accordingly.

---

## Optional Configuration

### Custom Model Selection

Override the default model:

```env
AI_MODEL=gpt-4o-mini
# OR
AI_MODEL=deepseek-chat
# OR any OpenAI-compatible model
```

### Cron Security (Optional)

Add a secret token to protect the cron endpoint:

```env
CRON_SECRET=your-random-secret-token-here
```

Then Vercel Cron will automatically pass this as a Bearer token.

---

## Priority Order

If both keys are present:
1. **DEEPSEEK_API_KEY** takes priority (more cost-effective)
2. Falls back to **OPENAI_API_KEY** if DeepSeek key not found

---

## Testing Locally

```bash
# Add to .env.local
echo "DEEPSEEK_API_KEY=sk-your-key-here" >> .env.local

# Restart dev server
npm run dev

# Test the endpoint
curl http://localhost:3000/api/cron/daily-news
```

Expected log output:
```
[AI News Agent] Using DeepSeek with model: deepseek-chat
[AI News Agent] Fetched 20 articles
[AI News Agent] Successfully saved news to file
```

---

## Production Deployment

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add `DEEPSEEK_API_KEY` (or `OPENAI_API_KEY`)
3. Redeploy your application
4. Cron job will automatically use the configured API

---

## Cost Comparison (per day)

Assuming 1 API call per day with ~2000 input tokens + 500 output tokens:

| Provider | Daily Cost | Monthly Cost (30 days) |
|----------|------------|------------------------|
| OpenAI (gpt-4o-mini) | ~$0.0006 | ~$0.018 |
| DeepSeek | ~$0.0004 | ~$0.012 |

**Savings with DeepSeek: ~33% per month** 💰
