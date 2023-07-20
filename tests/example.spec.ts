import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://127.0.0.1:3000/jeux/1_jeu_exemple/index.htm');
});

test('doit avoir le bon titre de page', async ({ page }) => {
  await expect(page).toHaveTitle(/Jeu exemple/);
});

test("doit afficher le bon titre d'épisode", async ({ page }) => {
  await expect(page.locator('#titre')).toHaveText(`Un village simple`);
})

test("doit afficher 0 euros dans le titre du magasin", async ({ page }) => {
  await page
  .getByRole('link')
  .filter({ hasText: 'Aller dans le magasin.' })
  .click();

  await expect(page.locator('#titre')).toHaveText(`Aller au magasin (avec 0 euros).`);
  
});