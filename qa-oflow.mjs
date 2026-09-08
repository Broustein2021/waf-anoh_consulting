import { chromium } from "playwright";

const browser = await chromium.launch({
  executablePath: "C:\\Users\\LENOVO\\AppData\\Local\\ms-playwright\\chromium-1243\\chrome-win64\\chrome.exe",
  headless: true,
});
const page = await browser.newPage({ viewport: { width: 320, height: 844 }, isMobile: true, hasTouch: true });
await page.goto("http://127.0.0.1:8080/", { waitUntil: "networkidle" });
await page.waitForTimeout(400);

const offenders = await page.evaluate(() => {
  const vw = document.documentElement.clientWidth;
  const out = [];
  for (const el of document.querySelectorAll("*")) {
    const r = el.getBoundingClientRect();
    if (r.right > vw + 1 || r.left < -1) {
      out.push({
        tag: el.tagName,
        cls: (el.getAttribute("class") || "").slice(0, 110),
        left: Math.round(r.left),
        right: Math.round(r.right),
        w: Math.round(r.width),
      });
    }
  }
  return out.slice(0, 25);
});
console.log(JSON.stringify({ vw: 320, offenders }, null, 2));
await browser.close();