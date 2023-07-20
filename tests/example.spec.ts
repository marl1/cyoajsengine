import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://127.0.0.1:3000/jeux/1_jeu_exemple/index.htm');
});

test('doit avoir le bon titre de page', async ({ page }) => {
  await expect(page).toHaveTitle(/Jeu exemple/);
});

test("doit afficher le bon titre d'épisode", async ({ page }) => {
  //await page.isVisible("text='village'")
  //await page.innerText('#titre');
  

  const inputElement = page.locator('#titre');
  const minLength = await expect(inputElement).toHaveText(`Un village simple`);

});