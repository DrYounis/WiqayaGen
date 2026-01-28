
export interface Variant {
    rsId: string;
    geneSymbol: string;
    riskAllele: string;
    effectSizeOr: number; // Odds Ratio
    saudiMaf: number; // Minor Allele Frequency in Saudi population (0.0 - 1.0)
}

export interface Genotype {
    [rsId: string]: string; // e.g., "rs9939609": "A"
}

export type RiskResult =
    | { type: 'Community_Lifestyle_Plan'; message: string; gene: string }
    | { type: 'High_Risk_Alert'; message: string; gene: string }
    | { type: 'Standard_Prevention'; message: string; gene: string };

export function calculateSaudiRiskScore(userGenotype: Genotype, variantDb: Variant[]): RiskResult[] {
    const results: RiskResult[] = [];

    for (const variant of variantDb) {
        // 1. Check if user has the risk allele
        // In a real app, we'd check for hetero/homozygous, here we simplify to presence
        if (userGenotype[variant.rsId] === variant.riskAllele) {

            // 2. The "Saudi Adjustment" Magic
            // If the gene is common (> 40% MAF), it's a community trait, not an anomaly.

            if (variant.saudiMaf > 0.40) {
                console.log(`[RiskEngine] User has common Saudi variant: ${variant.geneSymbol} (MAF: ${variant.saudiMaf})`);
                results.push({
                    type: 'Community_Lifestyle_Plan',
                    gene: variant.geneSymbol,
                    message: `جين ${variant.geneSymbol} شائع جداً محلياً. خطتك تعتمد على نمط الحياة الجماعي (تغذية/حركة) بدلاً من القلق الطبي.`
                });
            } else {
                // Rare and risky -> Medical intervention needed
                console.log(`[RiskEngine] User has rare/high-risk variant: ${variant.geneSymbol}`);
                results.push({
                    type: 'High_Risk_Alert',
                    gene: variant.geneSymbol,
                    message: `تنبيه: متغير ${variant.geneSymbol} يتطلب متابعة وقائية دقيقة نظراً لندرة انتشاره وتأثيره العالي.`
                });
            }
        }
    }

    return results;
}

// Mock Database for Demo
export const DEMO_VARIANTS: Variant[] = [
    {
        rsId: 'rs9939609',
        geneSymbol: 'FTO',
        riskAllele: 'A',
        effectSizeOr: 1.5,
        saudiMaf: 0.51 // 51% (Common)
    },
    {
        rsId: 'rs7903146',
        geneSymbol: 'TCF7L2',
        riskAllele: 'T',
        effectSizeOr: 1.4,
        saudiMaf: 0.40 // 40% (Borderline/Common)
    },
    {
        rsId: 'rs13266634',
        geneSymbol: 'SLC30A8',
        riskAllele: 'C',
        effectSizeOr: 1.2,
        saudiMaf: 0.18 // 18% (Less Common)
    }
];

// Mock User for Demo
export const DEMO_USER_GENOTYPE: Genotype = {
    'rs9939609': 'A', // Has FTO Risk
    'rs7903146': 'C', // No TCF7L2 Risk (Normal)
    'rs13266634': 'C' // Has SLC30A8 Risk
};
