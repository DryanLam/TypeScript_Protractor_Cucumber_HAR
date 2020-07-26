var  Config = require('protractor');

// let { Reporter } = require("../support/reporter");

const df = require('dateformat');
let harReport = df(new Date(), 'yyyy-mm-dd');

exports.config = {
  //----
  plugins: [
    {
      package: 'protractor-puppeteer-plugin',
      configFile: 'puppeteer.conf.json'
    }
  ],

  //-------
  // Use webdriver-manager start
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome',
    
    chromeOptions: {
      args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
    }
  },

  // Set to "custom" for cucumber.
  framework: 'custom',  
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  specs: [
    'e2e/cucumber/feature/*.feature'
  ],

  // Cucumber options
  cucumberOpts: {
    require: ['e2e/cucumber/steps/*.ts', 'e2e/cucumber/support/hooks.ts'], 
    // tags: ['@Regression'],                
    strict: true,                         // Fail if there are any undefined or pending steps
    format: 'json:output/results.json',
    'dry-run': false,             
  },

  //Create HTML report 
  onComplete: () => {
    var reporter = require('cucumber-html-reporter');
    var options = {
      theme: 'bootstrap',
      jsonFile: './output/results.json',
      output: './output/results.html',
      reportSuiteAsScenarios: true,
      launchReport: true,
      metadata: {
        "Author": "DRYAN LAM",
        "Test Environment": "STAGING",
        "Platform": "MAC OS CATALINA",
        "Browser": "Chrome 84",
        "Headless": "TRUE"
      },
      output: './report/cucumber_report.html',
    };
    reporter.generate(options);
  },

  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
    
    browser.manage().window().maximize();
  },
};
