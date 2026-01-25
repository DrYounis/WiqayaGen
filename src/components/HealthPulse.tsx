'use client';

import { ExternalLink, Activity } from 'lucide-react';
import Link from 'next/link';

const newsItems = [
    {
        id: 1,
        title: "Saudi Genome Program 2.0",
        summary: "Kingdom aims to sequence 63,000+ samples to map genetic diseases and reduce hereditary risks by 50%.",
        source: "Vision 2030",
        sourceColor: "bg-green-600",
        link: "https://www.vision2030.gov.sa/en/explore/projects/the-saudi-genome-program"
    },
    {
        id: 2,
        title: "National Biotech Strategy",
        summary: "Crown Prince launches strategy to make Saudi Arabia a global hub for genomic medicine and vaccine production by 2040.",
        source: "SPA (Gov)",
        sourceColor: "bg-green-600",
        link: "https://www.spa.gov.sa/en"
    },
    {
        id: 3,
        title: "$33 Billion Health Investment",
        summary: "Global Health Exhibition 2025 reveals massive funding for 'Smart Hospitals' and AI-driven preventative care in Riyadh.",
        source: "MOH News",
        sourceColor: "bg-blue-600",
        link: "https://www.moh.gov.sa/en/Ministry/MediaCenter/News/Pages/default.aspx"
    },
    {
        id: 4,
        title: "AI Predicts Heart Risks",
        summary: "New AI models can now predict cardiac events 3 years in advance using simple genetic and lifestyle data.",
        source: "Nature Medicine",
        sourceColor: "bg-purple-600",
        link: "https://www.nature.com/nm/"
    },
    {
        id: 5,
        title: "Seha Virtual Hospital Expands",
        summary: "The world's largest virtual hospital now connects 170+ Saudi hospitals for remote genetic counseling and specialized care.",
        source: "MOH",
        sourceColor: "bg-blue-600",
        link: "https://www.moh.gov.sa/en/eServices/Pages/Seha-Virtual-Hospital.aspx"
    },
    {
        id: 6,
        title: "Nutrigenomics Breakthrough",
        summary: "New 2025 study confirms 'Gene-Diet' matching can reverse pre-diabetes effectively in 60% of patients.",
        source: "NIH",
        sourceColor: "bg-purple-600",
        link: "https://www.ncbi.nlm.nih.gov/pmc/"
    },
    {
        id: 7,
        title: "Preventative Care Insurance",
        summary: "Council of Health Insurance (CHI) pushes for 'Population Health Management' to reward prevention over treatment.",
        source: "CHI Gov",
        sourceColor: "bg-green-600",
        link: "https://www.chi.gov.sa/en"
    },
    {
        id: 8,
        title: "Generative AI in Pharma",
        summary: "85% of top medical firms are now using GenAI to design personalized drugs tailored to individual DNA profiles.",
        source: "Reuters Health",
        sourceColor: "bg-red-600",
        link: "https://www.reuters.com/business/healthcare-pharmaceuticals/"
    },
    {
        id: 9,
        title: "Saudi Camel Genome Study",
        summary: "Unique study on Camel DNA offers new insights into immune system resilience and genetic survival mechanisms.",
        source: "SPA",
        sourceColor: "bg-green-600",
        link: "https://my.gov.sa/en/news/8707"
    },
    {
        id: 10,
        title: "Obesity & Genetics Link",
        summary: "Research identifies specific 'Hunger Genes' prevalent in the Gulf region, offering new paths for weight loss treatments.",
        source: "The Lancet",
        sourceColor: "bg-orange-600",
        link: "https://www.thelancet.com/"
    }
];

export default function HealthPulse() {
    return (
        <section className="bg-slate-50 border-t border-slate-200 py-10 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 mb-6 flex items-center gap-3">
                <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                    Wiqaya Pulse <span className="text-slate-400 font-normal text-sm">| Live Updates</span>
                </h2>
            </div>

            {/* Scrolling Container */}
            <div className="relative w-full">
                {/* Gradients for fading edges */}
                <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
                <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-slate-50 to-transparent z-10"></div>

                <div className="flex gap-6 animate-scroll-left hover:pause min-w-max px-6">
                    {/* Duplicate array for seamless infinite scroll */}
                    {[...newsItems, ...newsItems].map((item, idx) => (
                        <div
                            key={`${item.id}-${idx}`}
                            className="w-[300px] md:w-[350px] bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex-shrink-0"
                        >
                            <div className="flex justify-between items-start mb-3">
                                <span className={`px-2 py-1 rounded text-[10px] font-bold text-white uppercase ${item.sourceColor}`}>
                                    {item.source}
                                </span>
                                <Link href={item.link} target="_blank" className="text-slate-400 hover:text-blue-600 transition-colors">
                                    <ExternalLink className="w-4 h-4" />
                                </Link>
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2 line-clamp-1" title={item.title}>
                                {item.title}
                            </h3>
                            <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
                                {item.summary}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
