const chromium = require('chrome-aws-lambda');

export default async function handler(req, res) {
  const browser = await chromium.puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
    headless: chromium.headless,
    ignoreHTTPSErrors: true
  });
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
