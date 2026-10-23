import { expect, test } from "@playwright/test";

const sections = ["About me", "Skills", "Projects", "Experience & education", "Work with me", "Let's talk"];

test.describe("home page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("shows the hero and every section", async ({ page }) => {
    await expect(page).toHaveTitle(/Abdullah Abu Riala/);
    await expect(page.getByRole("heading", { level: 1, name: "Abdullah Abu Riala" })).toBeVisible();
    await expect(page.getByAltText("Portrait of Abdullah Abu Riala")).toBeVisible();
    for (const name of sections) {
      await expect(page.getByRole("heading", { level: 2, name })).toBeAttached();
    }
  });

  test("never shows a phone number", async ({ page }) => {
    const text = await page.locator("body").innerText();
    // Any international phone number, e.g. "+123 456 789 012".
    expect(text).not.toMatch(/\+\d{1,3}[\s-]?\d{2,4}[\s-]?\d{3}[\s-]?\d{3}/);
  });

  test("external links open safely", async ({ page }) => {
    const external = page.locator('a[target="_blank"]');
    expect(await external.count()).toBeGreaterThan(0);
    for (const link of await external.all()) {
      await expect(link).toHaveAttribute("rel", /noopener/);
    }
    await expect(page.locator('a[href="https://github.com/aabood17"]').first()).toBeAttached();
    await expect(page.locator('a[href="https://www.linkedin.com/in/aburiala"]').first()).toBeAttached();
  });

  test("project cards open their case study", async ({ page }) => {
    const cards = page.locator("#projects article h3 a");
    const hrefs = await cards.evaluateAll((links) => links.map((a) => a.getAttribute("href")));
    expect(hrefs.length).toBe(4);
    for (const href of hrefs) {
      const response = await page.request.get(href!);
      expect(response.status(), href!).toBe(200);
    }
    await cards.first().click();
    await expect(page.getByText("My role")).toBeVisible();
  });

  test("dark mode toggle switches and persists", async ({ page }) => {
    const html = page.locator("html");
    const wasDark = await html.evaluate((el) => el.classList.contains("dark"));
    await page.getByRole("button", { name: "Toggle dark mode" }).click();
    await expect(html).toHaveClass(wasDark ? /^(?!.*dark)/ : /dark/);
    await page.reload();
    await expect(html).toHaveClass(wasDark ? /^(?!.*dark)/ : /dark/);
  });

  test("CV download is a PDF", async ({ page }) => {
    const response = await page.request.get("/cv.pdf");
    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toContain("pdf");
  });
});

test.describe("contact form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/#contact");
  });

  const field = (page: import("@playwright/test").Page, name: string) =>
    page.locator("[data-contact-form]").getByRole("textbox", { name, exact: true });

  test("blocks empty and invalid input", async ({ page }) => {
    let submitted = false;
    await page.route("https://api.web3forms.com/**", (route) => {
      submitted = true;
      return route.abort();
    });
    await page.getByRole("button", { name: "Send message" }).click();
    await expect(page.getByText("Please enter your name.")).toBeVisible();
    await field(page, "Name").fill("Test Visitor");
    await field(page, "Email").fill("not-an-email");
    await field(page, "Message").fill("Hello there, this is a test.");
    await page.getByRole("button", { name: "Send message" }).click();
    await expect(page.getByText("Please enter a valid email address.")).toBeVisible();
    expect(submitted).toBe(false);
  });

  test("sends a valid message", async ({ page }) => {
    const form = page.locator("[data-contact-form]");
    const hasKey = !!(await form.getAttribute("data-access-key"));
    let body: Record<string, string> = {};
    await page.route("https://api.web3forms.com/**", async (route) => {
      body = route.request().postDataJSON();
      await route.fulfill({ json: { success: true, message: "ok" } });
    });

    await field(page, "Name").fill("Test Visitor");
    await field(page, "Email").fill("visitor@example.com");
    await field(page, "Message").fill("Hello Abdullah, I'd like to talk about a project.");
    await page.getByRole("button", { name: "Send message" }).click();

    if (hasKey) {
      await expect(page.getByText("Thanks! Your message was sent.")).toBeVisible();
      expect(body.email).toBe("visitor@example.com");
      expect(body.botcheck).toBeUndefined();
    } else {
      await expect(page.getByText("The form isn't connected yet.")).toBeVisible();
    }
  });
});

test("unknown pages show the 404 page", async ({ page }) => {
  const response = await page.goto("/does-not-exist");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { name: "Page not found" })).toBeVisible();
});
