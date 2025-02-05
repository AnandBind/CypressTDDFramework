
export const config = {
    timeout: 10000,  // Timeout for element interaction
    pageLoadTimeout: 60000,  // Timeout for page load
    requestTimeout: 15000,  // Timeout for API requests
    baseUrl: 'https://portal.uat.sokin.com/',
    username: 'anand.bind@nuagebiz.tech',
    password: 'Nuage@123',
    loginUrl: 'https://portal.uat.sokin.com/login',
    environment: 'staging',
    apiBaseUrl: 'https://api.staging.sokin.com/',
    retryAttempts: 3,
    retryDelay: 1000,
    viewportWidth: 1280,
    viewportHeight: 720,
    browser: 'chrome',
    screenshotOnFailure: true,
    videoOnFailure: false,
    reportDirectory: './cypress/results',
    enableLogs: true,
    logLevel: 'debug',
    retryFailedTests: true,
    maxRetryAttempts: 2,
    apiKey: 'your-api-key-here',
    apiTimeout: 5000,
    defaultLanguage: 'en',
    region: 'US',
    customCommandTimeout: 15000,
  };
  