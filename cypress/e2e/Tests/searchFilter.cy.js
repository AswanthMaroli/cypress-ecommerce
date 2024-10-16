import SearchFilter from '../Pages/searchFilterPages.js';
const { readDataFromFile, writeDataToFile, clearDataInFile } = require('../ExternalFiles/fileOperations.js');
const baseUrl = Cypress.config('baseUrl');
var dateCalculations = require('../ExternalFiles/dateCalculations.js');


// const baseUrl='https://test.eventzet.com/#/Eventshell/Eventhome';
const filename = 'cypress/fixtures/searchFilterRead.json';
const startDate = dateCalculations.calculateSevenDaysLater();
const endDate = dateCalculations.calculateSevenDaysLater();

const sf = new SearchFilter();
var eventName = '';
var eventLocation = '';
var categoryName = '';
var typeName = '';
module.exports = {

      SearchFilterTests: [
            //test 1

            it("Test 1:Checking SearchFilter Button is Clickable", () => {
                  cy.visit(baseUrl);
                  sf.searchFilterClick();

                  cy.wait(2000);
                  cy.url().should('not.include', baseUrl);
                  cy.url().then((url) => {
                        cy.log('Current URL: ' + url);
                        var exprctedurl = 'https://test.eventzet.com/#/Eventshell/Eventlistsearch';
                        if (url == exprctedurl) {
                              cy.log('SearchFilter Button is Clickable :test is successful');
                        }
                  });

            }),

            // test 2


            it("Test 2:Search event by using searchbox", () => {
                  cy.visit(baseUrl);
                  sf.searchFilterClick();
                  cy.wait(2000);

                  readDataFromFile(filename).then((list) => {
                        eventName = list.Eventname;
                        sf.searchEvent(eventName);
                        cy.wait(2000);
                        sf.checkEventName(eventName);

                  });

                  cy.log('Search event by using searchbox test is successful')

            }),
            //test 3


            it("Test 3:Search event by using loacation searchbox", () => {
                  cy.visit(baseUrl);
                  sf.searchFilterClick();
                  cy.wait(2000);

                  readDataFromFile(filename).then((list) => {
                        eventLocation = list.Location1;
                        sf.searchLocation(eventLocation);
                        cy.wait(2000);

                        // sf.checkEventLocation(eventLocation);

                  });
                  cy.log('Search event by using loacation searchbox test is successful')

            }),
            //test 4

            it("Test 4:Filter events by category", () => {
                  cy.visit(baseUrl);
                  sf.searchFilterClick();
                  cy.wait(2000);
                  //const category = " Food&Drink ";
                  sf.clickFilterButton();
                  readDataFromFile(filename).then((list) => {
                        categoryName = list.Category2;
                        sf.checkCategory(categoryName);
                  });
                  cy.wait(1000);
                  sf.applyFilter();
                  cy.wait(1000);
                  cy.log('Filter events by category test is successful');

            }),
            //test 5


            it("Test 5:Filter events by type", () => {
                  cy.visit(baseUrl);
                  sf.searchFilterClick();
                  cy.wait(2000);
                  sf.clickFilterButton();
                  readDataFromFile(filename).then((list) => {
                        typeName = list.Types;
                        sf.checkType(typeName);
                  });

                  cy.wait(1000);
                  sf.applyFilter();
                  cy.wait(1000);
                  cy.log('Filter events by type test is successful');

            }),
            //test 6

            it("Test 6:Filter events by StartDate", () => {
                  cy.visit(baseUrl);
                  sf.searchFilterClick();
                  cy.wait(2000);
                  sf.clickFilterButton();
                  sf.selectStartDate(startDate);
                  sf.applyFilter();
                  cy.wait(1000);
                  cy.log('Filter events by StartDate test is successful');

            }),
            //test 7


            it("Test 7:Filter events by EndDate", () => {
                  cy.visit(baseUrl);
                  sf.searchFilterClick();
                  cy.wait(2000);
                  sf.clickFilterButton();
                  sf.selectEndDate(endDate);
                  cy.wait(1000);
                  sf.applyFilter();
                  cy.wait(1000);
                  cy.log('Filter events by Event EndDate test is successful');

            }),
            //test 8


            it("Test 8:Filter free events", () => {
                  cy.visit(baseUrl);
                  sf.searchFilterClick();
                  cy.wait(2000);
                  sf.clickFilterButton();
                  sf.checkFreeEvent();
                  cy.wait(1000);
                  sf.applyFilter();
                  cy.wait(2000);

                  cy.log('Filter free events test is successful');

            }),
            //test 9


            it("Test 9:Filter paid events", () => {
                  cy.visit(baseUrl);
                  sf.searchFilterClick();
                  cy.wait(2000);
                  sf.clickFilterButton();
                  sf.checkPaidEvent();
                  cy.wait(1000);
                  sf.applyFilter();
                  cy.wait(2000);
                  cy.log('Filter paid events test is successful');

            }),
            //test 10


            it("Test 10:Filter online events", () => {
                  cy.visit(baseUrl);
                  sf.searchFilterClick();
                  cy.wait(2000);
                  sf.clickFilterButton();
                  sf.checkOnlineEvent();
                  cy.wait(1000);
                  sf.applyFilter();
                  cy.wait(2000);
                  cy.log('Filter online events test is successful');

            }),
            //test 11


            it("Test 11:Clear Searchbox input filter ", () => {
                  cy.visit(baseUrl);
                  sf.searchFilterClick();
                  cy.wait(2000);
                  readDataFromFile(filename).then((list) => {
                        eventName = list.Eventname;
                        sf.searchEvent(eventName);
                        sf.checkEventName(eventName);
                  });
                  cy.wait(2000);
                  sf.clickFilterButton();
                  sf.clearFilter();
                  cy.wait(1000);
                  cy.log('Clear Searchbox input filter test is successful');

            }),
            //test 12


            it("Test 12:Clear locationbox input filter ", () => {
                  cy.visit(baseUrl);
                  sf.searchFilterClick();
                  cy.wait(2000);
                  readDataFromFile(filename).then((list) => {
                        eventLocation = list.Location2;
                        sf.searchLocation(eventLocation);
                  });
                  sf.clickFilterButton();
                  sf.clearFilter();
                  cy.wait(1000);
                  cy.log('Clear locationbox input filter  test is successful');

            }),
            //test 13


            it("Test 13:Filter Paid&Free event", () => {
                  cy.visit(baseUrl);
                  sf.searchFilterClick();
                  cy.wait(2000);
                  sf.clickFilterButton();
                  sf.checkFreeEvent();
                  sf.checkPaidEvent();
                  cy.wait(1000);
                  sf.applyFilter();
                  cy.wait(2000);
                  cy.log('Filter Paid&Free event test is successful');

            }),
            //test 14

            it("Test 14:Filter Paid Online event", () => {
                  cy.visit(baseUrl);
                  sf.searchFilterClick();
                  cy.wait(2000);
                  sf.clickFilterButton();
                  sf.checkOnlineEvent();
                  sf.checkPaidEvent();
                  cy.wait(1000);
                  sf.applyFilter();
                  cy.wait(2000);
                  cy.log('Filter Paid Online event test is successful');

            }),
            //test 15


            it("Test 15:Filter Free Online event", () => {
                  cy.visit(baseUrl);
                  sf.searchFilterClick();
                  cy.wait(2000);
                  sf.clickFilterButton();
                  sf.checkOnlineEvent();
                  sf.checkFreeEvent();
                  cy.wait(1000);
                  sf.applyFilter();
                  cy.wait(2000);
                  cy.log('Filter Free Online event test is successful');

            }),
            //test 16


            it("Test 16:Filter Free&Paid Online event", () => {
                  cy.visit(baseUrl);
                  sf.searchFilterClick();
                  cy.wait(2000);
                  sf.clickFilterButton();
                  sf.checkOnlineEvent();
                  sf.checkFreeEvent();
                  sf.checkPaidEvent();
                  cy.wait(1000);
                  sf.applyFilter();
                  cy.wait(2000);
                  cy.log('Filter Free&Paid Online event test is successful');


            }),
            //test 17


            it("Test 17:Filter Free event having any category", () => {
                  cy.visit(baseUrl);
                  sf.searchFilterClick();
                  cy.wait(2000);
                  sf.clickFilterButton();
                  sf.checkFreeEvent();
                  readDataFromFile(filename).then((list) => {
                        categoryName = list.Category;
                        sf.checkCategory(categoryName);
                  });
                  cy.wait(1000);
                  sf.applyFilter();
                  cy.wait(1000);
                  cy.log('Filter Free event having any category test is successful');

            }),
            //test 18

            it("Test 18:Filter Paid event having any category", () => {
                  cy.visit(baseUrl);
                  sf.searchFilterClick();
                  cy.wait(2000);
                  sf.clickFilterButton();
                  sf.checkPaidEvent();
                  readDataFromFile(filename).then((list) => {
                        categoryName = list.Category;
                        sf.checkCategory(categoryName);
                  });
                  cy.wait(1000);
                  sf.applyFilter();
                  cy.wait(1000);
                  cy.log('Filter Paid event having any category test is successful');

            }),
            //test 19

            it("Test 19:Filter Online event having any category", () => {
                  cy.visit(baseUrl);
                  sf.searchFilterClick();
                  cy.wait(2000);
                  sf.clickFilterButton();
                  sf.checkOnlineEvent();
                  readDataFromFile(filename).then((list) => {
                        categoryName = list.Category;
                        sf.checkCategory(categoryName);
                  });
                  cy.wait(1000);
                  sf.applyFilter();
                  cy.wait(1000);
                  cy.log('Filter Online event having any category test is successful');

            }),
            //test 20


            it("Test 20:Filter Paid event having any type", () => {
                  cy.visit(baseUrl);
                  sf.searchFilterClick();
                  cy.wait(2000);
                  sf.clickFilterButton();
                  sf.checkPaidEvent();
                  readDataFromFile(filename).then((list) => {
                        typeName = list.Types;
                        sf.checkType(typeName);
                  });
                  cy.wait(1000);
                  sf.applyFilter();
                  cy.wait(1000);
                  cy.log('Filter Paid event having any type test is successful');

            }),
            //test 21


            it("Test 21:Filter Free event having any type", () => {
                  cy.visit(baseUrl);
                  sf.searchFilterClick();
                  cy.wait(2000);
                  sf.clickFilterButton();
                  sf.checkFreeEvent();
                  readDataFromFile(filename).then((list) => {
                        typeName = list.Types;
                        sf.checkType(typeName);
                  });
                  cy.wait(1000);
                  sf.applyFilter();
                  cy.wait(1000);
                  cy.log('Filter Free event having any type test is successful');

            }),
            //test 22


            it("Test 22:Filter Online event having any type", () => {
                  cy.visit(baseUrl);
                  sf.searchFilterClick();
                  cy.wait(2000);
                  sf.clickFilterButton();
                  sf.checkOnlineEvent();
                  readDataFromFile(filename).then((list) => {
                        typeName = list.Types;
                        sf.checkType(typeName);
                  });
                  cy.wait(1000);
                  sf.applyFilter();
                  cy.wait(1000);
                  cy.log('Filter Online event having any type test is successful');

            }),
            //test 23


            it("Test 23:Filter Free&Paid event having any type", () => {
                  cy.visit(baseUrl);
                  sf.searchFilterClick();
                  cy.wait(2000);
                  sf.clickFilterButton();
                  sf.checkFreeEvent();
                  sf.checkPaidEvent();
                  readDataFromFile(filename).then((list) => {
                        typeName = list.Types;
                        sf.checkType(typeName);
                  });
                  cy.wait(1000);
                  sf.applyFilter();
                  cy.wait(1000);
                  cy.log('Filter Free&Paid event having any type test is successful');

            }),
            //test 24


            it("Test 24:Filter Free Online event having any type", () => {
                  cy.visit(baseUrl);
                  sf.searchFilterClick();
                  cy.wait(2000);
                  sf.clickFilterButton();
                  sf.checkFreeEvent();
                  sf.checkOnlineEvent();
                  readDataFromFile(filename).then((list) => {
                        typeName = list.Types;
                        sf.checkType(typeName);
                  });
                  cy.wait(1000);
                  sf.applyFilter();
                  cy.wait(1000);
                  cy.log('Filter Free Online event having any type test is successful');

            }),
            //test 25


            it("Test 25:Filter Paid Online event having any type", () => {
                  cy.visit(baseUrl);
                  sf.searchFilterClick();
                  cy.wait(2000);
                  sf.clickFilterButton();
                  sf.checkPaidEvent();
                  sf.checkOnlineEvent();
                  readDataFromFile(filename).then((list) => {
                        typeName = list.Types;
                        sf.checkType(typeName);
                  });
                  cy.wait(1000);
                  sf.applyFilter();
                  cy.wait(1000);
                  cy.log('Filter Paid Online event having any type test is successful');

            }),
            //test 26


            it("Test 26:Filter Free&Paid event having any category", () => {
                  cy.visit(baseUrl);
                  sf.searchFilterClick();
                  cy.wait(2000);
                  sf.clickFilterButton();
                  sf.checkFreeEvent();
                  sf.checkPaidEvent();
                  readDataFromFile(filename).then((list) => {
                        categoryName = list.Category;
                        sf.checkCategory(categoryName);
                  });
                  cy.wait(1000);
                  sf.applyFilter();
                  cy.wait(1000);
                  cy.log('Filter Free&Paid event having any category test is successful');

            }),
            //test 27


            it("Test 27:Filter Free Online event having any category", () => {
                  cy.visit(baseUrl);
                  sf.searchFilterClick();
                  cy.wait(2000);
                  sf.clickFilterButton();
                  sf.checkFreeEvent();
                  sf.checkOnlineEvent();
                  readDataFromFile(filename).then((list) => {
                        categoryName = list.Category;
                        sf.checkCategory(categoryName);
                  });
                  cy.wait(1000);
                  sf.applyFilter();
                  cy.wait(1000);
                  cy.log('Filter Free Online event having any category test is successful');

            }),
            //test 28


            it("Test 28:Filter Paid Online event having any category", () => {
                  cy.visit(baseUrl);
                  sf.searchFilterClick();
                  cy.wait(2000);
                  sf.clickFilterButton();
                  sf.checkPaidEvent();
                  sf.checkOnlineEvent();
                  readDataFromFile(filename).then((list) => {
                        categoryName = list.Category;
                        sf.checkCategory(categoryName);
                  });
                  cy.wait(1000);
                  sf.applyFilter();
                  cy.wait(1000);
                  cy.log('Filter Paid Online event having any category  test is successful');

            }),
            //test 29


            it("Test 29:Filter Free event combination with StartDate ", () => {
                  cy.visit(baseUrl);
                  sf.searchFilterClick();
                  cy.wait(2000);
                  sf.clickFilterButton();
                  sf.checkFreeEvent();

                  sf.selectStartDate(startDate);
                  cy.wait(1000);
                  sf.applyFilter();
                  cy.wait(1000);
                  cy.log('Filter Free event combination with StartDate test is successful ');

            }),
            //test 30


            it("Test 30:Filter Free event combination with EndDate ", () => {
                  cy.visit(baseUrl);
                  sf.searchFilterClick();
                  cy.wait(2000);
                  sf.clickFilterButton();
                  sf.checkFreeEvent();

                  sf.selectEndDate(endDate);
                  cy.wait(1000);
                  sf.applyFilter();
                  cy.wait(1000);
                  cy.log('Filter Free event combination with EndDate test is successful ');

            }),
            //test 31


            it("Test 31:Filter Paid event combination with StartDate ", () => {
                  cy.visit(baseUrl);
                  sf.searchFilterClick();
                  cy.wait(2000);
                  sf.clickFilterButton();
                  sf.checkPaidEvent();

                  sf.selectStartDate(startDate); (1000);
                  sf.applyFilter();
                  cy.wait(1000);
                  cy.log('Filter Paid event combination with StartDate test is successful');

            }),
            //test 32


            it("Test 32:Filter Paid event combination with EndDate ", () => {
                  cy.visit(baseUrl);
                  sf.searchFilterClick();
                  cy.wait(2000);
                  sf.clickFilterButton();
                  sf.checkPaidEvent();

                  sf.selectEndDate(endDate);
                  cy.wait(1000);
                  sf.applyFilter();
                  cy.wait(1000);
                  cy.log('Filter Paid event combination with EndDate test is successful ');

            }),
            //test 33


            it("Test 33:Filter Online event combination with StartDate ", () => {
                  cy.visit(baseUrl);
                  sf.searchFilterClick();
                  cy.wait(2000);
                  sf.clickFilterButton();
                  sf.checkPaidEvent();
                  sf.checkOnlineEvent();

                  sf.selectStartDate(startDate);
                  cy.wait(1000);
                  sf.applyFilter();
                  cy.wait(1000);
                  cy.log('Filter Online event combination with StartDate test is successful');

            }),
            //test 34


            it("Test 34:Filter Online event combination with EndDate ", () => {
                  cy.visit(baseUrl);
                  sf.searchFilterClick();
                  cy.wait(2000);
                  sf.clickFilterButton();
                  sf.checkPaidEvent();
                  sf.checkOnlineEvent();

                  sf.selectEndDate(endDate);
                  cy.wait(1000);
                  sf.applyFilter();
                  cy.wait(1000);
                  cy.log('Filter Online event combination with EndDate test is successful');

            }),

            //test 35


            it("Test 35:Filter Free&Paid event combination with StartDate ", () => {
                  cy.visit(baseUrl);
                  sf.searchFilterClick();
                  cy.wait(2000);
                  sf.clickFilterButton();
                  sf.checkPaidEvent();
                  sf.checkFreeEvent();

                  sf.selectStartDate(startDate);
                  cy.wait(1000);
                  sf.applyFilter();
                  cy.wait(1000);
                  cy.log('Filter Free&Paid event combination with StartDate test is successful');

            }),
            //test 36


            it("Test 36:Filter Free&Paid event combination with EndDate ", () => {
                  cy.visit(baseUrl);
                  sf.searchFilterClick();
                  cy.wait(2000);
                  sf.clickFilterButton();
                  sf.checkPaidEvent();
                  sf.checkFreeEvent();

                  sf.selectEndDate(endDate);
                  cy.wait(1000);
                  sf.applyFilter();
                  cy.wait(1000);
                  cy.log('Filter Online event combination with EndDate test is successful');

            }),
            //test 37


            it("Test 37:Filter Based on Category and StartDate ", () => {
                  cy.visit(baseUrl);
                  sf.searchFilterClick();
                  cy.wait(2000);
                  sf.clickFilterButton();
                  readDataFromFile(filename).then((list) => {
                        categoryName = list.Category;
                        sf.checkCategory(categoryName);
                  });

                  sf.selectStartDate(startDate);
                  cy.wait(1000);
                  sf.applyFilter();
                  cy.wait(1000);
                  cy.log('Filter Based on Category and StartDate test is successful');

            }),
            //test 38


            it("Test 38:Filter Based on Category and EndDate ", () => {
                  cy.visit(baseUrl);
                  sf.searchFilterClick();
                  cy.wait(2000);
                  sf.clickFilterButton();
                  readDataFromFile(filename).then((list) => {
                        categoryName = list.Category;
                        sf.checkCategory(categoryName);
                  });

                  sf.selectEndDate(endDate);
                  cy.wait(1000);
                  sf.applyFilter();
                  cy.wait(1000);
                  cy.log('Filter Based on Category and EndDate test is successful');

            }),
            //test 39


            it("Test 39:Filter Based on Type and StartDate ", () => {
                  cy.visit(baseUrl);
                  sf.searchFilterClick();
                  cy.wait(2000);
                  sf.clickFilterButton();
                  readDataFromFile(filename).then((list) => {
                        typeName = list.Types;
                        sf.checkType(typeName);
                  });

                  sf.selectStartDate(startDate);
                  cy.wait(1000);
                  sf.applyFilter();
                  cy.log('Filter Based on Type and StartDate test is successful');

            }),
            //test 40

            it("Test 40:Filter Based on Type and EndDate ", () => {
                  cy.visit(baseUrl);
                  sf.searchFilterClick();
                  cy.wait(2000);
                  sf.clickFilterButton();
                  readDataFromFile(filename).then((list) => {
                        typeName = list.Types;
                        sf.checkType(typeName);
                  });

                  sf.selectEndDate(endDate);
                  cy.wait(1000);
                  sf.applyFilter();
                  cy.wait(1000);
                  cy.log('Filter Based on Type and EndDate test is successful');

            }),
            //test 41


            it("Test 41:Filter multiple categories", () => {
                  cy.visit(baseUrl);
                  sf.searchFilterClick();
                  cy.wait(2000);
                  sf.clickFilterButton();
                  readDataFromFile(filename).then((list) => {
                        categoryName = list.Category;
                        let categoryTwo = list.Category2;
                        sf.checkCategory(categoryName);
                        sf.checkCategory(categoryTwo);
                  });
                  cy.wait(1000);
                  sf.applyFilter();
                  cy.wait(1000);
                  cy.log('Filter multiple categories test is successful');

            }),
            //test 42

            it("Test 42:Filter multiple Types", () => {
                  cy.visit(baseUrl);
                  sf.searchFilterClick();
                  cy.wait(2000);
                  sf.clickFilterButton();
                  readDataFromFile(filename).then((list) => {
                        typeName = list.Types;
                        let typeTwo = list.Types2;
                        sf.checkType(typeName);
                        sf.checkType(typeTwo);
                  });

                  cy.wait(1000);
                  sf.applyFilter();
                  cy.wait(1000);
                  cy.log('Filter multiple Types test is successful');

            }),

      ]
};