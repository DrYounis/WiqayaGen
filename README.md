# WiqayaGen | وقاية جين 🧬

**"Your Health Lies in Your DNA"**
**"صحتك تكمن في حمضك النووي"**

WiqayaGen is Saudi Arabia's first AI-powered genomic health platform, built to shift healthcare from "sick care" to **precision prevention**. It integrates genomic data (Polygenic Risk Scores) with generative AI to produce hyper-personalized health plans — and packages the same engine as a **B2G SaaS suite** for the Kingdom's healthcare-transformation program (Value-Based Care), aligned with Saudi Vision 2030.

## 🎯 What It Does

The platform has two faces, powered by one engine:

1. **Consumer / B2C** — a Saudi-tailored personal health companion (Wiqaya Score, Gen-Halal scanner, daily protocol, DNA-based lifestyle insights).
2. **Government / B2G** — an actuarial & clinical-decision toolkit for the Ministry of Health, health clusters, and insurers (genomic risk → national spending efficiency).

## 🚀 Key Features

- **Arabic-First UI**: fully localized RTL interface (Tajawal font) for the Saudi market.
- **Wiqaya Score (مؤشر وقاية)**: gamified 0–100 health score weighing the *exposome* (75% lifestyle) against genetic risk (25%), with an interactive simulator.
- **Gen-Halal Scanner (ماسح جين-حلال)**: real barcode scanning (`react-zxing`) against Open Food Facts, overlaid with a gene-compatibility verdict (e.g. TCF7L2 insulin sensitivity).
- **Saudi Risk Engine**: PRS scoring adjusted for Saudi allele frequencies (FTO, TCF7L2, SLC30A8) — not generic European reference data.
- **Genetic Archetypes (أنماط وقاية)**: viral 3-question quiz mapping users to 4 local archetypes (الخيل / الذيب / سفينة الصحراء / الصقر).
- **Genetic Alibi (العذر الجيني)**: playful "science-backed excuse" generator (FTO, PER3, COMT, CYP1A2).
- **Daily Protocol Monitor (نبض وقاية اليومي)**: a checklist that live-recalculates a genetic-risk score.
- **AI Medical Summarizer**: simplifies medical/genomic reports into plain Arabic (DeepSeek or OpenAI).
- **Health Pulse (نبض وقاية)**: AI-curated news ticker (RSS → AI Arabic headlines) plus a manual news-scroll section.
- **Knowledge Hub (مركز المعرفة)**: SEO-optimized, sourced scientific articles (JSON-LD MedicalWebPage + FAQ schema).
- **Nafath Integration**: simulated National Single Sign-On flow in the waitlist wizard.
- **B2G Surface**: live actuarial dashboard demo, technical proposal, executive summary, and pitch deck.

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Charts | Recharts |
| Backend / DB | [Supabase](https://supabase.com/) (`@supabase/supabase-js`, SSR-ready) |
| AI | OpenAI SDK → **DeepSeek** (preferred) or **OpenAI** (fallback) |
| Barcode | `react-zxing` |
| RSS | `rss-parser` |
| Deployment | Vercel (with cron) |

## 📂 Project Structure

```bash
WiqayaGen/
├── src/
│   ├── app/
│   │   ├── page.tsx                  # Homepage (B2G hero + SaaS solutions)
│   │   ├── layout.tsx                # Root layout (RTL, Tajawal font, SEO meta)
│   │   ├── sitemap.ts / robots.ts    # SEO
│   │   ├── join-waitlist/            # Nafath + Supabase registration wizard
│   │   ├── demo/                     # Live national actuarial dashboard demo
│   │   ├── dashboard/                # Personal health dashboard
│   │   ├── wiqaya-score/             # Exposome score simulator
│   │   ├── archetypes/               # Genetic archetypes quiz
│   │   ├── alibi/                    # "Genetic alibi" scanner
│   │   ├── monitor/                  # Daily protocol monitor
│   │   ├── summarizer/               # AI medical summarizer
│   │   ├── knowledge/                # Knowledge hub (list + [slug] articles)
│   │   ├── b2g-vision/               # Government technical proposal
│   │   ├── executive-summary/        # Investor executive summary
│   │   ├── tech-specs/               # Technical documentation
│   │   ├── pitch-deck/               # Interactive pitch deck
│   │   ├── privacy-policy/
│   │   ├── actions/waitlist.ts       # Server action → Supabase
│   │   └── api/
│   │       ├── cron/daily-news/      # Vercel cron: RSS → AI headlines
│   │       ├── agent/update-news/    # Secure external-agent news push
│   │       └── summarize/            # AI text summarization
│   ├── components/                   # Feature + marketing components
│   ├── content/knowledge/articles.ts # Knowledge-hub article source of truth
│   ├── hooks/useDeepSeekSummarizer.ts
│   └── lib/
│       ├── ai/config.ts              # Centralized AI provider config
│       ├── riskEngine.ts             # Saudi-adjusted PRS scoring
│       ├── supabase.ts               # Supabase client
│       └── seo/                      # siteConfig + JSON-LD builders
├── public/
│   ├── data/latest-news.json         # News ticker data (written by cron/agent)
│   └── images/                       # Static assets + pitch-deck slides
├── vercel.json                       # Cron schedule
└── ...config files (next, tailwind, eslint, tsconfig)
```

## ⚡ Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/DrYounis/WiqayaGen.git
   cd WiqayaGen
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables** (see [Environment Variables](#-environment-variables) below), then run:
   ```bash
   npm run dev
   ```

4. **Open locally:** [http://localhost:3000](http://localhost:3000)

## 🔐 Environment Variables

Create a `.env.local` (never committed) with the following:

| Variable | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | ✅ | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | ✅ | Supabase anonymous key (waitlist inserts) |
| `DEEPSEEK_API_KEY` | ⚠️ | AI provider (preferred — more cost-effective) |
| `OPENAI_API_KEY` | ⚠️ | AI provider (fallback) |
| `AI_MODEL` | — | Override the default model (e.g. `deepseek-chat`, `gpt-4o-mini`) |
| `CRON_SECRET` | — | Protects `/api/cron/daily-news` (Bearer token) |
| `AGENT_SECRET_KEY` | — | Protects `/api/agent/update-news` (external agent push) |
| `NEXT_PUBLIC_SITE_URL` | — | Canonical URL for SEO/OG tags (defaults to `https://wiqaya-gen.vercel.app`) |

> **Note:** At least one of `DEEPSEEK_API_KEY` or `OPENAI_API_KEY` is required for the AI features (news summarization, medical summarizer). DeepSeek takes priority when both are present.

## 🤖 AI Integration

AI access is centralized in `src/lib/ai/config.ts` and is OpenAI-SDK-compatible with automatic provider selection:

```
DEEPSEEK_API_KEY set?  → DeepSeek (https://api.deepseek.com)
  else OPENAI_API_KEY? → OpenAI (default)
  else                 → throws "No AI API key configured"
```

Three consumers:
1. **Daily news cron** (`/api/cron/daily-news`) — fetches RSS feeds, has the AI select + write 3 Arabic medical headlines, writes `public/data/latest-news.json`.
2. **Medical summarizer** (`/api/summarize`) — simplifies medical / genomic / general text into plain Arabic, with per-type preset prompts.
3. **External agent push** (`/api/agent/update-news`) — Bearer-authenticated endpoint for an external agent (e.g. Moltbot) to overwrite the news feed.

See [`AGENT_INTEGRATION.md`](./AGENT_INTEGRATION.md) and [`AI_NEWS_AGENT_ENV.md`](./AI_NEWS_AGENT_ENV.md) for full request/response schemas and setup.

## 📡 API Endpoints

| Endpoint | Method | Auth | Description |
|---|---|---|---|
| `/api/cron/daily-news` | GET | `CRON_SECRET` (optional) | RSS → AI → `latest-news.json` |
| `/api/agent/update-news` | POST | `AGENT_SECRET_KEY` (Bearer) | External agent news push |
| `/api/agent/update-news` | GET | — | Health check |
| `/api/summarize` | POST | — | AI text summarization |

## 📦 Deployment

Optimized for **Vercel** — pushes to `main` trigger automatic builds. The `vercel.json` cron runs the news pipeline daily at `05:00`:

```json
{ "crons": [{ "path": "/api/cron/daily-news", "schedule": "0 5 * * *" }] }
```

Add all required environment variables in **Vercel → Project Settings → Environment Variables**.

## 🧪 Verification & Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

---

**Developed by Dr. Younis** for the **Ibsar Accelerator** (مجلس الضمان الصحي — CHI).
Made in Hail, Saudi Arabia 🇸🇦

> ⚕️ **Disclaimer:** WiqayaGen's algorithms are independently developed from published public research and do not constitute a direct administrative affiliation with the Saudi Genome Program. Content is for general health education and is not medical advice.
