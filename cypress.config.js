const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    video: false,  // Disable video recording (optional)
    screenshotOnRunFailure: true,
    //defaultCommandTimeout: 10000,
    pageLoadTimeout:20000,
    chromeWebSecurity: false, // Helps with cross-origin issues
    modifyObstructiveCode: false, // Prevent Cypress from modifying JS on the site
    experimentalModifyObstructiveThirdPartyCode: false, // Prevent Cypress from modifying third-party scripts
    
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome' || browser.name === 'edge') {
          launchOptions.args.push(
            '--disable-autofill-keyboard-accessory-view',  // Disable autofill suggestions
            '--disable-payment-autofill',  // Disable payment autofill
            '--disable-popup-blocking',  // Prevent popups from blocking the test
            '--disable-password-generation',  // Disable password save prompts
            '--disable-autocomplete',  // Disable autocomplete
            '--disable-save-password-bubble', // Prevent Chrome from showing save password prompts
            '--disable-translate' // Disable translation prompts
          );
          return launchOptions;
        }
      });
    }
  }
});
