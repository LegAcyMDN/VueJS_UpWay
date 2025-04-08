import { test, expect } from '@playwright/test'

test('are price filters correct', async ({ page }) => {
  await page.goto('/accessoires')

  const minPrice = parseInt(await page.locator('#prixMin').inputValue())
  const maxPrice = parseInt(await page.locator('#prixMax').inputValue())

  const container = page.locator('#accessoires_container')
  await page.waitForTimeout(1000)

  for (const accessoire of await container.locator('.product-card').all()) {
    const price = accessoire.locator('.product-card-price')
    const text = await price.textContent()

    const parsed = parseInt(text.slice(0, -1))
    expect(parsed).toBeGreaterThanOrEqual(minPrice)
    expect(parsed).toBeLessThanOrEqual(maxPrice)
  }
})
