const puppeteer = require('puppeteer');

export default async function handler(req, res) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto('http://example.com/', { waitUntil: 'networkidle0' });

  await page.screenshot({
    path: `./static/images/example-image.jpg`,
    clip: {
      x: 0,
      y: 0,
      width: 1200,
      height: 628
    }
  });
  await browser.close();

  res.status(200).json({ hello: `world` });
}
