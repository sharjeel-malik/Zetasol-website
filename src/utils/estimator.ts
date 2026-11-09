export interface ScopeConfig {
  services: string[];
  platform: string;
  timeline: 'rush' | 'standard' | 'enterprise';
  maintenance: boolean;
}

export interface ScopeEstimateResult {
  basePriceMin: number;
  basePriceMax: number;
  estimatedWeeks: number;
  complexity: 'Standard' | 'Advanced' | 'Enterprise';
  recommendedStack: string[];
}

const SERVICE_BASE_RATES: Record<string, { min: number; max: number; weeks: number }> = {
  'web-dev': { min: 2500, max: 7500, weeks: 3 },
  'custom-software': { min: 6000, max: 18000, weeks: 6 },
  'app-dev': { min: 5000, max: 15000, weeks: 6 },
  'ai-integration': { min: 3500, max: 10000, weeks: 3 },
  'chatbots-agents': { min: 3000, max: 9000, weeks: 3 },
  'api-integration': { min: 1500, max: 4500, weeks: 2 },
  'digital-marketing': { min: 1200, max: 3500, weeks: 2 },
  'seo-aeo': { min: 1000, max: 3000, weeks: 2 },
  'google-ads': { min: 1000, max: 2800, weeks: 2 },
  'cgi-vfx': { min: 2000, max: 6000, weeks: 3 },
  'project-management': { min: 1000, max: 3000, weeks: 2 },
  'engineering-product': { min: 7000, max: 20000, weeks: 8 },
};

export function calculateProjectEstimate(config: ScopeConfig): ScopeEstimateResult {
  if (!config.services || config.services.length === 0) {
    return {
      basePriceMin: 1500,
      basePriceMax: 3500,
      estimatedWeeks: 2,
      complexity: 'Standard',
      recommendedStack: ['Next.js', 'Tailwind CSS', 'Vercel'],
    };
  }

  let totalMin = 0;
  let totalMax = 0;
  let maxWeeks = 2;

  config.services.forEach((serviceId) => {
    const rate = SERVICE_BASE_RATES[serviceId] || { min: 1500, max: 4000, weeks: 2 };
    totalMin += rate.min;
    totalMax += rate.max;
    if (rate.weeks > maxWeeks) {
      maxWeeks = rate.weeks;
    }
  });

  // Bundle discount if 3 or more services selected
  if (config.services.length >= 3) {
    totalMin = Math.round(totalMin * 0.85);
    totalMax = Math.round(totalMax * 0.85);
  }

  // Timeline adjustment
  if (config.timeline === 'rush') {
    totalMin = Math.round(totalMin * 1.25);
    totalMax = Math.round(totalMax * 1.25);
    maxWeeks = Math.max(2, Math.round(maxWeeks * 0.65));
  } else if (config.timeline === 'enterprise') {
    totalMin = Math.round(totalMin * 1.35);
    totalMax = Math.round(totalMax * 1.4);
    maxWeeks = Math.round(maxWeeks * 1.3);
  }

  // Monthly support add-on
  if (config.maintenance) {
    totalMin += 600;
    totalMax += 1200;
  }

  // Complexity determination
  let complexity: 'Standard' | 'Advanced' | 'Enterprise' = 'Standard';
  if (totalMax > 16000 || config.services.length >= 4) {
    complexity = 'Enterprise';
  } else if (totalMax > 7000 || config.services.length >= 2) {
    complexity = 'Advanced';
  }

  // Recommended stack based on platform and services
  const stack = new Set<string>();
  if (config.platform === 'shopify') {
    stack.add('Shopify Plus');
    stack.add('Liquid');
    stack.add('Hydrogen / Oxygen');
  } else if (config.platform === 'wordpress') {
    stack.add('WordPress Enterprise');
    stack.add('WooCommerce');
    stack.add('Advanced Custom Fields');
  } else if (config.platform === 'wix-squarespace') {
    stack.add('Wix Studio / Squarespace Engine');
    stack.add('Custom CSS / JS');
  } else if (config.platform === 'kajabi') {
    stack.add('Kajabi LMS');
    stack.add('Custom Course Funnels');
  } else {
    stack.add('Next.js 15');
    stack.add('React 19');
    stack.add('TypeScript');
    stack.add('Node.js');
    stack.add('PostgreSQL');
  }

  if (config.services.includes('ai-integration') || config.services.includes('chatbots-agents')) {
    stack.add('OpenAI & Gemini API');
    stack.add('Pinecone / pgvector');
  }

  return {
    basePriceMin: totalMin,
    basePriceMax: totalMax,
    estimatedWeeks: maxWeeks,
    complexity,
    recommendedStack: Array.from(stack),
  };
}

export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export function validatePhoneNumber(phone: string): boolean {
  // Accepts international format with optional + and numbers/spaces/dashes
  const cleaned = phone.replace(/[\s\-\(\)]/g, '');
  return cleaned.length >= 7 && /^\+?[0-9]+$/.test(cleaned);
}
