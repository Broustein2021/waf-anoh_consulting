import { chromium } from "playwright";

const browser = await chromium.launch({
  executablePath: "C:\\Users\\LENOVO\\AppData\\Local\\ms-playwright\\chromium-1243\\chrome-win64\\chrome.exe",
  headless: true,
});
const results = [];
for (const width of [320, 360, 390, 768, 1280]) {
  const page = await browser.newPage({ viewport: { width, height: 844 }, isMobile: width < 600, hasTouch: width < 600 });
  const errors = [];
  page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
  page.on("pageerror", (e) => errors.push("PAGEERROR: " + e.message));
  await page.goto("http://127.0.0.1:8080/", { waitUntil: "networkidle" });
  await page.waitForTimeout(400);
  await page.evaluate(() => window.scrollTo(0, 3000));
  await page.waitForTimeout(400);
  const h = await page.locator("header").boundingBox();
  results.push({
    width,
    hOverflow: await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth),
    headerStuck: h ? h.y <= 1 : null,
    errors,
  });
  await page.close();
}
console.log(JSON.stringify(results, null, 2));
await browser.close();