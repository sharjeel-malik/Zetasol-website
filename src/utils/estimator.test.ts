import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateProjectEstimate, validateEmail, validatePhoneNumber } from './estimator';

test('calculateProjectEstimate returns default baseline when no services selected', () => {
  const result = calculateProjectEstimate({
    services: [],
    platform: 'custom',
    timeline: 'standard',
    maintenance: false,
  });
  assert.equal(result.basePriceMin, 1500);
  assert.equal(result.complexity, 'Standard');
});

test('calculateProjectEstimate calculates single service correctly', () => {
  const result = calculateProjectEstimate({
    services: ['web-dev'],
    platform: 'custom',
    timeline: 'standard',
    maintenance: false,
  });
  assert.equal(result.basePriceMin, 2500);
  assert.equal(result.basePriceMax, 7500);
  assert.equal(result.estimatedWeeks, 3);
  assert.ok(result.recommendedStack.includes('Next.js 15'));
});

test('calculateProjectEstimate applies multi-service bundle discount for 3+ services', () => {
  const result = calculateProjectEstimate({
    services: ['web-dev', 'ai-integration', 'seo-aeo'],
    platform: 'shopify',
    timeline: 'standard',
    maintenance: false,
  });
  // (2500 + 3500 + 1000) = 7000 * 0.85 = 5950
  assert.equal(result.basePriceMin, 5950);
  assert.ok(result.recommendedStack.includes('Shopify Plus'));
  assert.ok(result.recommendedStack.includes('OpenAI & Gemini API'));
});

test('email validation passes valid emails and rejects malformed', () => {
  assert.equal(validateEmail('client@zetasol.net'), true);
  assert.equal(validateEmail('john.doe@company.co.uk'), true);
  assert.equal(validateEmail('invalid-email'), false);
  assert.equal(validateEmail(''), false);
});

test('phone validation supports international numbers', () => {
  assert.equal(validatePhoneNumber('+923433524913'), true);
  assert.equal(validatePhoneNumber('+1 (949) 529-0697'), true);
  assert.equal(validatePhoneNumber('+44 20 7946 0991'), true);
  assert.equal(validatePhoneNumber('abc'), false);
  assert.equal(validatePhoneNumber('123'), false); // too short
});
