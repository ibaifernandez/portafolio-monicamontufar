import { test, expect } from '@playwright/test';

test.describe('Homepage E2E', () => {
  test('should load the Spanish homepage by default', async ({ page }) => {
    await page.goto('http://localhost:4321/');
    
    // Check if hero title is correct
    const heroTitle = await page.textContent('h1');
    expect(heroTitle).toContain('Soy Món Mont');

    // Check if Cookie Banner appears
    const cookieBanner = page.locator('#cookie-banner');
    await expect(cookieBanner).toBeVisible();

    // Accept cookies
    await page.click('#accept-cookies');
    await expect(cookieBanner).toBeHidden({ timeout: 2000 });
  });

  test('should load the English homepage and show translated content', async ({ page }) => {
    await page.goto('http://localhost:4321/en/');
    
    // Check if hero title is translated
    const heroTitle = await page.textContent('h1');
    expect(heroTitle).toContain("I'm Món Mont");

    // Check if "Portfolio" link in nav is translated (wait, I haven't added main nav yet, but I have it in sections)
    const portfolioTitle = await page.textContent('#portafolio h2');
    expect(portfolioTitle).toContain('Take a look at my');
  });

  test('should be responsive', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('http://localhost:4321/');
    
    // Select the first h1 in main to avoid dev toolbar collisions
    const heroTitle = page.locator('main h1').first();
    await expect(heroTitle).toBeVisible();
    
    // Check if images are hidden or resized correctly (simulated check)
    const heroImage = page.locator('img[alt="Mónica Montúfar"]');
    await expect(heroImage).toBeVisible();
  });
});
