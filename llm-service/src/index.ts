import puppeteer from "puppeteer";

console.log("Hello World");

const main = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://developer.chrome.com/', {
    waitUntil: 'networkidle2'
  });

  await page.setViewport({width: 1080, height: 1024});

  console.log("Taking screenshot for llm");

  await page.screenshot({ path: 'screenshot.png', fullPage: true });

  console.log("Screenshot saved at screenshot.png");

  await browser.close();
}

main();
