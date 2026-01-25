# WiqayaGen | وقاية جين 🧬

**"Your Health Lies in Your DNA"**
**"صحتك تكمن في حمضك النووي"**

WiqayaGen is Saudi Arabia's first AI-powered genomic health platform, designed to shift healthcare from "sick care" to **precision prevention**. It integrates genomic data (Polygenic Risk Scores) with generative AI to provide hyper-personalized health plans, aligning with Saudi Vision 2030's healthcare transformation goals.

![WiqayaGen Screenshot](public/images/platform-preview.png)

## 🚀 Key Features

*   **Arabic-First UI**: Fully localized interface (`rtl`) tailored for the Saudi market.
*   **Wiqaya Score (مؤشر وقاية)**: Gamified health score (0-100) comparing users to the national average.
*   **Gen-Halal Scanner (ماسح جين-حلال)**: Privacy-preserving AI scanner that analyzes food for genetic compatibility (e.g., "Is this date fruit safe for my TCF7L2 gene?").
*   **Family Legacy (الإرث العائلي)**: Collaborative family tree builder to track and prevent hereditary risks.
*   **Health Pulse (نبض وقاية)**: AI-curated news feed covering Saudi genomic advancements (news ticker).
*   **Nafath Integration**: Simulated secure login flow using the National Single Sign-On (Nafath).

## 🛠️ Tech Stack

*   **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
*   **Language**: TypeScript
*   **Styling**: Tailwind CSS
*   **Animations**: Framer Motion
*   **Icons**: Lucide React
*   **Deployment**: Vercel

## 📂 Project Structure

```bash
wiqaya_gen/
├── src/
│   ├── app/
│   │   ├── page.tsx               # Homepage (Hero, Services, Pulse, Map)
│   │   ├── layout.tsx             # Root Layout (Theme, Fonts, Metadata)
│   │   ├── join-waitlist/         # Registration Wizard with Nafath
│   │   ├── executive-summary/     # Investor Deck (Markdown-style)
│   │   ├── tech-specs/            # Technical Documentation Page
│   │   └── pitch-deck/            # Interactive Pitch Deck Slides
│   ├── components/
│   │   ├── ServicesGrid.tsx       # Core Interactive Cards (Score, Scanner, Family)
│   │   ├── ServiceModal.tsx       # Reusable Modal for Interactive Demos
│   │   ├── SaudiHealthMap.tsx     # DNA Map Visualization
│   │   ├── HealthPulse.tsx        # News Ticker Component
│   │   └── NafathLoginBtn.tsx     # Custom Nafath Button
│   └── services/
│       └── newsService.ts         # Mock Data for Health Pulse
├── public/
│   └── images/                    # Static Assets
└── ...config files (tailwind, next, etc.)
```

## ⚡ Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/DrYounis/WiqayaGen.git
    cd WiqayaGen
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open locally:**
    Navigate to [http://localhost:3000](http://localhost:3000).

## 🧪 Verification & Demos

The platform includes interactive "Freemium" demos to showcase value:
*   **Click "Start Competition"**: To see the Live Health Graph.
*   **Click "Scan Product"**: To see the AI Camera Simulation.
*   **Click "Draw Family"**: To see the Hereditary Risk Alert.

All demos lead to the **Waitlist** with specific plan parameters (`?plan=premium`, `?plan=nutrition`, `?plan=family`) for tracking user intent.

## 📦 Deployment

This project is optimized for deployment on **Vercel**.
Pushes to the `main` branch automatically trigger a new build.

---
**Developed by [Your Team Name]** for the **Ibsar Accelerator**.
