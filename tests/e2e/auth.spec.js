import { test, expect } from '@playwright/test'

test('login success', async ({ page }) => {
  await page.goto('/auth')

  const emailField = page.locator("input[name='email']")
  const passwordField = page.locator("input[name='password']")
  const loginBtn = page.locator('#login_btn')

  await emailField.fill('redboxing@redboxing.moe')
  await passwordField.fill('thomas2005')

  await loginBtn.click()
  await page.waitForTimeout(1000)

  await expect(page).toHaveURL('/')
})

test('login invalid email', async ({ page }) => {
  await page.goto('/auth')

  const emailField = page.locator("input[name='email']")
  const passwordField = page.locator("input[name='password']")
  const loginBtn = page.locator('#login_btn')
  const errorText = page.locator('.error')

  await emailField.fill('thisisaninvalidemailaddress')
  await passwordField.fill('erererer')

  await loginBtn.click()
  await page.waitForTimeout(1000)

  await expect(page).toHaveURL('/auth')
  await expect(errorText).toContainText('Email Does not exist!')
})

test('login invalid password', async ({ page }) => {
  await page.goto('/auth')

  const emailField = page.locator("input[name='email']")
  const passwordField = page.locator("input[name='password']")
  const loginBtn = page.locator('#login_btn')
  const errorText = page.locator('.error')

  await emailField.fill('redboxing@redboxing.moe')
  await passwordField.fill('erererer')

  await loginBtn.click()
  await page.waitForTimeout(1000)

  await expect(page).toHaveURL('/auth')
  await expect(errorText).toContainText('Wrong password!')
})
