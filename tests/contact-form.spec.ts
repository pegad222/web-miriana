import { test, expect } from "@playwright/test";

const CONTACT_URL = process.env.CONTACT_TEST_URL ?? "http://localhost:3001/contacto";

const randomSuffix = () => Math.random().toString(16).slice(2, 8);

const successMessage = "Gracias por compartir tu situación. Te escribiré en menos de 48h.";

test("should submit the contact form successfully", async ({ page }) => {
  await page.goto(CONTACT_URL, { waitUntil: "domcontentloaded" });
  await expect(page.getByRole("heading", { name: /cuéntame cuál es el conflicto/i })).toBeVisible();

  await page.locator("input[name='fullName']").fill(`Tester QA ${randomSuffix()}`);
  await page.locator("input[name='email']").fill(`qa+${randomSuffix()}@mirianapetrovic.com`);
  await page.locator("input[name='phone']").fill(`+34${Math.floor(Math.random() * 1_000_000_000)}`);
  await page.locator("select[name='conflictType']").selectOption("laboral");
  await page.locator("textarea[name='summary']").fill(
    "Prueba automática del formulario de contacto para verificar el envío de emails."
  );
  await page.locator("input[name='isEscalating'][value='si']").check();
  await page.locator("input[name='privacyAccepted']").check();

  await page.getByRole("button", { name: /enviar preselección/i }).click();

  await expect(page.getByText(successMessage)).toBeVisible({ timeout: 10_000 });
});
