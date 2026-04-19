const fs = require("fs");
const puppeteer = require("puppeteer");

(async ()=>{

    const browser = await puppeteer.launch({
        headless : false,
        slowMo : 75,
        defaultViewport : null
    });

    const page = await browser.newPage();
    console.log("opening LeapAP");

    await page.goto("https://app-dev.condoworks.co", {
        waitUntil:"networkidle2"
    });

    // TODO: login to LeapAP platform
    await page.type('input[type="email"]', "coop.test@condoworks.co");
    await page.type('input[type="password"]', "TheTest139");

    // Wait for submit button to be visible before clicking
    await page.waitForSelector('button[type="submit"]', { visible: true });
    await page.click('button[type="submit"]');

    console.log("Logged in successfully");

    // Wait for navigation after login
    await page.waitForSelector("nav", { timeout: 15000 });

    // Navigate to invoices page
    await page.goto("https://app-dev.condoworks.co/invoices",
        {
            waitUntil: "networkidle2"
        });

    // Search invoice number 123
    console.log("Searching invoice 123...");
    console.log("Opening invoice...");

    // Wait for search input field and type invoice number
    await page.waitForSelector('input[type="text"]', { visible: true });
    await page.type('input[type="text"]', '123');

    // Click magnifying glass for invoice 123444
    await page.waitForSelector("table tbody tr:first-child td:last-child button", {
        visible: true
    });
    await page.click("table tbody tr:first-child td:last-child button");

    // Wait for invoice preview iframe
    await page.waitForSelector("iframe", { visible: true });

    const pdfUrl = await page.$eval("iframe", el => el.src);

    // Download PDF file
    const pdfResponse = await page.goto(pdfUrl);

    if (!pdfResponse) {
        console.log("PDF not found");
        await browser.close();
        return;
    }

    const buffer = await pdfResponse.buffer();

    const fileName = "invoice-123444.pdf";
    fs.writeFileSync(fileName, buffer);

    console.log("PDF saved at:", fileName);

    await browser.close();

})();