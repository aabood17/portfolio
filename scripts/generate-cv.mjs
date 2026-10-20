// Prints the /cv page to public/cv.pdf.
// Usage: start the site (npm run dev or npm run preview), then: npm run cv [baseUrl]
import { fileURLToPath } from "node:url";
import { chromium } from "@playwright/test";

const base = process.argv[2] ?? "http://localhost:4321";
const out = fileURLToPath(new URL("../public/cv.pdf", import.meta.url));

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(`${base}/cv`, { waitUntil: "networkidle" });
await page.emulateMedia({ media: "print" });
await page.pdf({ path: out, format: "A4", preferCSSPageSize: true, printBackground: true });
await browser.close();

console.log(`CV written to ${out}`);
