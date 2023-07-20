import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://127.0.0.1:3000/jeux/1_jeu_exemple/index.htm');
});

test('doit avoir le bon titre de page', async ({ page }) => {
  await expect(page).toHaveTitle(/Jeu exemple/);
});

test("doit afficher le bon titre d'épisode", async ({ page }) => {
  await expect(page.locator('#titre')).toHaveText(`Un village simple`);
});


test("doit afficher 0 euros dans le titre du magasin", async ({ page }) => {
  await page.getByRole('link').filter({ hasText: 'Aller dans le magasin.' }).click();
  await expect(page.locator('#titre')).toHaveText(`Aller au magasin (avec 0 euros).`);
});

test("doit retourner à la page de départ si on sort du magasin.", async ({ page }) => {
  await page.getByRole('link').filter({ hasText: 'Aller dans le magasin.' }).click();
  await expect(page.locator('#titre')).toHaveText(`Aller au magasin (avec 0 euros).`);
  await page.getByRole('link').filter({ hasText: 'Sortir.' }).click();
  await expect(page.locator('#titre')).toHaveText(`Un village simple`);
});

test("doit afficher qu'on a pas assez d'argent si on achète la pioche.", async ({ page }) => {
  await page.getByRole('link').filter({ hasText: 'Aller dans le magasin.' }).click();
  await expect(page.locator('#titre')).toHaveText(`Aller au magasin (avec 0 euros).`);
  await page.getByRole('link').filter({ hasText: 'Acheter pioche (200 euros).' }).click();
  await expect(page.locator('#texte')).toHaveText(`Vous n'avez pas assez d'argent.`);
});

test("doit afficher qu'on achète une belle pioche si on a assez d'argent", async ({ page }) => {
  await page.getByRole('link').filter({ hasText: "Aller à l'agence d'interim." }).click();
  await page.getByRole('link').filter({ hasText: 'Sortir.' }).click();

  await page.getByRole('link').filter({ hasText: "Aller à l'agence d'interim." }).click();
  await page.getByRole('link').filter({ hasText: 'Sortir.' }).click();

  await page.getByRole('link').filter({ hasText: "Aller à l'agence d'interim." }).click();
  await page.getByRole('link').filter({ hasText: 'Sortir.' }).click();

  await page.getByRole('link').filter({ hasText: "Aller à l'agence d'interim." }).click();
  await page.getByRole('link').filter({ hasText: 'Sortir.' }).click();

  await page.getByRole('link').filter({ hasText: 'Aller dans le magasin.' }).click();
  await expect(page.locator('#titre')).toHaveText(`Aller au magasin (avec 200 euros).`);

  await page.getByRole('link').filter({ hasText: 'Acheter pioche (200 euros).' }).click();
  await expect(page.locator('#texte')).toHaveText(/une belle pioche/);
});