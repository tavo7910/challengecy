const { defineConfig } = require("cypress");

module.exports = defineConfig({

  // Cypress config to save video and screenshots by default
  video: true,
  screenshotOnRunFailure: true,

  // Mochawesome parameters
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'SauceDemo Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    autoOpen: true,
    overwrite: true
  },

  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },

    // Custom Execution Order
    specPattern: [
      'cypress/e2e/sauceDemo/loginSpecs.cy.js',
      'cypress/e2e/sauceDemo/purchaseSpecs.cy.js',
      'cypress/e2e/sauceDemo/logoutSpec.cy.js'
    ],

    // Base URL global variable
    baseUrl: 'https://www.saucedemo.com/',

    // Config to run all specs on the cypress UI
    experimentalRunAllSpecs: true,
  },

  // Default render resolution of the webpage
  viewportWidth: 1366,
  viewportHeight: 768,

  // Config to allow 3rd party code on web Browser
  chromeWebSecurity: false,

});
