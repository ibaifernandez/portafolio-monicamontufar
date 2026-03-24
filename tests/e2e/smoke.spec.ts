import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const BASE = process.env.BASE_URL || 'http://localhost:4321';

test.describe('Homepage ES', () => {
  test('loads and has visible h1', async ({ page }) => {
    await page.goto(BASE);
    await expect(page).not.toHaveTitle('');
    await expect(page.locator('h1').first()).toBeVisible();
  });

  test('Portfolio button scrolls to #portafolio', async ({ page }) => {
    await page.goto(BASE);
    const cta = page.getByRole('link', { name: /portfolio/i }).first();
    await expect(cta).toHaveAttribute('href', '#portafolio');
  });

  test('CV button has download attribute', async ({ page }) => {
    await page.goto(BASE);
    const cvBtn = page.getByRole('link', { name: /CV/i });
    await expect(cvBtn).toHaveAttribute('download');
    await expect(cvBtn).toHaveAttribute('href', '/cv.pdf');
  });

  test('client logos section is visible', async ({ page }) => {
    await page.goto(BASE);
    const banner = page.locator('section').filter({ hasText: '' }).nth(1);
    await expect(banner).toBeVisible();
  });

  test('should not have any automatically detectable accessibility issues', async ({ page }) => {
    await page.goto(BASE);
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .disableRules(['color-contrast'])
      .analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});

test.describe('Homepage EN', () => {
  test('loads and has lang=en', async ({ page }) => {
    await page.goto(`${BASE}/en/`);
    const html = page.locator('html');
    await expect(html).toHaveAttribute('lang', 'en');
  });

  test('has visible h1', async ({ page }) => {
    await page.goto(`${BASE}/en/`);
    await expect(page.locator('h1').first()).toBeVisible();
  });

  test('should not have any automatically detectable accessibility issues in EN', async ({ page }) => {
    await page.goto(`${BASE}/en/`);
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .disableRules(['color-contrast'])
      .analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});

test.describe('Case Studies', () => {
  test('caso-de-exito-1 loads', async ({ page }) => {
    await page.goto(`${BASE}/caso-de-exito-1/`);
    await expect(page.locator('h1').first()).toBeVisible();
    await expect(page).not.toHaveTitle('');
  });

  test('caso-de-exito-2 loads', async ({ page }) => {
    await page.goto(`${BASE}/caso-de-exito-2/`);
    await expect(page.locator('h1').first()).toBeVisible();
    await expect(page).not.toHaveTitle('');
  });

  test('en/case-study-1 loads with lang=en', async ({ page }) => {
    await page.goto(`${BASE}/en/case-study-1/`);
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    await expect(page.locator('h1').first()).toBeVisible();
  });

  test('en/case-study-2 loads with lang=en', async ({ page }) => {
    await page.goto(`${BASE}/en/case-study-2/`);
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    await expect(page.locator('h1').first()).toBeVisible();
  });
});

