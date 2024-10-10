
// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   watchForFileChanges: false,
//   video: true,
  
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });

const { defineConfig } = require("cypress");

module.exports = defineConfig({

  
  watchForFileChanges: false,
  video: true,
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'cypress/results/TEST-[hash].xml',
    outputs: true,
    testCaseSwitchClassnameAndName: true
  },
  e2e: {
    
    baseUrl: "https://test.eventzet.com/#/Eventshell/Eventhome",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

