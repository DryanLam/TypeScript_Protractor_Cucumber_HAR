const { BeforeAll, Before, After, AfterAll, Status} = require("cucumber");
import { browser } from "protractor";
import 'protractor-puppeteer-plugin';

BeforeAll({timeout: 100 * 1000}, async () => {
    // await browser.get(config.baseUrl);
    console.log('------------------ BEFORE ALL');
    browser.har.start();
    
});

Before(() => {
    console.log('------------------ BEFORE HOOK');
});

After(async function(scenario) {
    console.log('------------------ AFTER');
    if (scenario.result.status === Status.FAILED) {
        // screenShot is a base-64 encoded PNG
         const screenShot = await browser.takeScreenshot();
         this.attach(screenShot, "image/png");
    }
    await this.attach(await browser.takeScreenshot(), "image/png");
});

AfterAll({timeout: 100 * 1000}, async () => {
    await browser.har.stop();
    console.log('------------------ AFTER ALL');
    await browser.quit();
});
