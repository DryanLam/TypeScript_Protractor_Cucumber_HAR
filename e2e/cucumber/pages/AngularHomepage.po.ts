// var {browser,element,by, $$, $} = require('protractor');
import { browser, element,by, $$, $ } from 'protractor';
import 'protractor-puppeteer-plugin';

export class AngularHomepage {

  async navigateTo() {
    await browser.get('http://www.angularjs.org');
    // await browser.waitForAngular();
  }

  async getTitleText() {
    const title = await browser.getTitle();
    return title.toString().trim();
  }

  async setName(name) {
    let nameInput = element(by.model('yourName'));
    await nameInput.sendKeys(name);
  };

  getGreetingText = () => {
    let greeting = element(by.binding('yourName'));
    return greeting.getText();
  };

  writeHARFile(vData) {
    let fs = require('fs');
    let jsonData = JSON.stringify(JSON.parse(vData));
    fs.writeFile('HAR/testlog.har', unescape(jsonData), 'utf8', function (err) {
      if (err) return console.log(err);

      console.log('HAR file is written successfully!');
    });
  }
}
