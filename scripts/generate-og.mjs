// Renders scripts/og-image.html to public/og-image.png (1200x630).
import { fileURLToPath } from "node:url";
import { chromium } from "@playwright/test";

const template = new URL("./og-image.html", import.meta.url).href;
const out = fileURLToPath(new URL("../public/og-image.png", import.meta.url));

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.goto(template, { waitUntil: "load" });
await page.screenshot({ path: out });
await browser.close();

console.log(`OG image written to ${out}`);
