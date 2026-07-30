const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://yang-mun.com', { waitUntil: 'networkidle2' });
  const urls = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('img')).map(img => img.src).filter(src => src.includes('.jpg') || src.includes('.png') || src.includes('.webp') || src.includes('cdn.shopify.com'));
  });
  console.log(urls.slice(0, 10).join('\n'));
  await browser.close();
})();
