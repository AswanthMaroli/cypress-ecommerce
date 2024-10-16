import CreateEventVenue from '../../e2e/Pages/createEventVenuePage.js';
const { readDataFromFile, writeDataToFile, clearDataInFile } = require('../ExternalFiles/fileOperations.js');
const baseUrl = Cypress.config('baseUrl');
const filename = 'cypress/fixtures/createEventVenueRead.json'
const venue = new CreateEventVenue();


function performLogin(email, password) {
    cy.visit(baseUrl);
    cy.wait(4000);
    venue.clickLoginMenu();
    venue.inputEmail(email);
    venue.inputPassword(password);
    venue.loginClick();
}


module.exports = {

    CreateEventVenueTests: [

        //test 1

        it("Test 1: Verify that user cannot save the venue without inputting the venue name  ", () => {

            readDataFromFile(filename).then((list) => {

                performLogin(list.email, list.password);
                venue.eventsDashboardMenuClick();
                venue.clickMyEvents();
                cy.intercept('GET', 'api/DashboardEventList/GetDashboardEventList?UserID=*').as('myEventsData');
                cy.wait('@myEventsData', { timeout: 25000 });
                venue.searchEventName(list.eventtitle);
                venue.clickEventEditButton();
                cy.intercept('GET', '/api/Timeslot/GetEventTimeSlots?EventID=*').as('basicInfoData');
                cy.wait('@basicInfoData', { timeout: 25000 });
                venue.clickVenueTab();
                // venue.inputVenue(list.venue1);
                venue.inputAddress(list.address1);
                venue.clickAddVenueButton();
                cy.wait(1000);
                venue.checkVenueValidation();
                cy.log('Test 1 is successful : unable to save the venue without venue name');
            });

        }),


        it("Test 2: Verify that user cannot save the venue without inputting the address", () => {

            readDataFromFile(filename).then((list) => {

                performLogin(list.email, list.password);
                venue.eventsDashboardMenuClick();
                venue.clickMyEvents();
                cy.intercept('GET', 'api/DashboardEventList/GetDashboardEventList?UserID=*').as('myEventsData');
                cy.wait('@myEventsData', { timeout: 25000 });
                venue.searchEventName(list.eventtitle);
                venue.clickEventEditButton();
                cy.intercept('GET', '/api/Timeslot/GetEventTimeSlots?EventID=*').as('basicInfoData');
                cy.wait('@basicInfoData', { timeout: 25000 });
                venue.clickVenueTab();
                venue.inputVenue(list.venue1);
                // venue.inputAddress(list.address1);
                venue.clickAddVenueButton();
                cy.wait(1000);
                venue.checkAddressValidation();
                cy.log('Test 2 is successful : unable to save the venue without address');
                
                

            });

        }),

        it("Test 3: Verify that user can save the venue or not", () => {

            readDataFromFile(filename).then((list) => {

                performLogin(list.email, list.password);
                venue.eventsDashboardMenuClick();
                venue.clickMyEvents();
                cy.intercept('GET', 'api/DashboardEventList/GetDashboardEventList?UserID=*').as('myEventsData');
                cy.wait('@myEventsData', { timeout: 25000 });
                venue.searchEventName(list.eventtitle);
                venue.clickEventEditButton();
                cy.intercept('GET', '/api/Timeslot/GetEventTimeSlots?EventID=*').as('basicInfoData');
                cy.wait('@basicInfoData', { timeout: 25000 });
                venue.clickVenueTab();
                venue.inputVenue(list.venue1);
                venue.inputAddress(list.address1);
                venue.clickAddVenueButton();
                cy.wait(6000);
                venue.checkSavedVenueData(list.venue1,list.address1);
                cy.log('Test 3 is successful : User can save the venue');
            });

        }),

        
        it("Test 4: Verify that user can edit the saved venue or not", () => {

            readDataFromFile(filename).then((list) => {

                performLogin(list.email, list.password);
                venue.eventsDashboardMenuClick();
                venue.clickMyEvents();
                cy.intercept('GET', 'api/DashboardEventList/GetDashboardEventList?UserID=*').as('myEventsData');
                cy.wait('@myEventsData', { timeout: 25000 });
                venue.searchEventName(list.eventtitle);
                venue.clickEventEditButton();
                cy.intercept('GET', '/api/Timeslot/GetEventTimeSlots?EventID=*').as('basicInfoData');
                cy.wait('@basicInfoData', { timeout: 25000 });
                venue.clickVenueTab();
                venue.clickVenueEditButton();
                cy.wait(1000);
                venue.inputVenue(list.venue2);
                venue.inputAddress(list.address2);
                venue.clickAddVenueButton();
                cy.wait(5000);
                venue.checkSavedVenueData(list.venue2,list.address2);
                cy.log('Test 4 is successful : User can edit the saved venues');
            });

        }),

        it("Test 5: Verify that user can delete a saved venue", () => {
            readDataFromFile(filename).then((list) => {
                performLogin(list.email, list.password);
                venue.eventsDashboardMenuClick();
                venue.clickMyEvents();
                cy.intercept('GET', 'api/DashboardEventList/GetDashboardEventList?UserID=*').as('myEventsData');
                cy.wait('@myEventsData', { timeout: 25000 });
                venue.searchEventName(list.eventtitle);
                venue.clickEventEditButton();
                cy.intercept('GET', '/api/Timeslot/GetEventTimeSlots?EventID=*').as('basicInfoData');
                cy.wait('@basicInfoData', { timeout: 25000 });
                venue.clickVenueTab();
                venue.clickVenueDeleteButton();
                cy.wait(2000);
                venue.checkVenueListEmpty();
                cy.log('Test 5 is successful: User can delete a saved venue');
            });
        }),

        it("Test 6: Verify that user can add an online venue", () => {
            readDataFromFile(filename).then((list) => {
                performLogin(list.email, list.password);
                venue.eventsDashboardMenuClick();
                venue.clickMyEvents();
                cy.intercept('GET', 'api/DashboardEventList/GetDashboardEventList?UserID=*').as('myEventsData');
                cy.wait('@myEventsData', { timeout: 25000 });
                venue.searchEventName(list.eventtitle);
                venue.clickEventEditButton();
                cy.intercept('GET', '/api/Timeslot/GetEventTimeSlots?EventID=*').as('basicInfoData');
                cy.wait('@basicInfoData', { timeout: 25000 });
                venue.clickVenueTab();
                venue.clickOnlineButton();
                cy.wait(2000);
                venue.inputOnlineTitle(list.onlinetitle);
                venue.inputOnlineUrl(list.onlineurl);
                venue.inputOnlineInstructions(list.onlineinstructions);
                venue.clickOnlineSaveButton();
                cy.wait(2000);
                venue.checkSavedOnlineVenueData(list.onlinetitle, list.onlineurl, list.onlineinstructions);
                console.log('Test 6 is successful: User can add an online venue');
            });
        }),



        it("Test 7: Verify that user cannot save online venue without online title", () => {
            readDataFromFile(filename).then((list) => {
                performLogin(list.email, list.password);
                venue.eventsDashboardMenuClick();
                venue.clickMyEvents();
                cy.intercept('GET', 'api/DashboardEventList/GetDashboardEventList?UserID=*').as('myEventsData');
                cy.wait('@myEventsData', { timeout: 25000 });
                venue.searchEventName(list.eventtitle);
                venue.clickEventEditButton();
                cy.intercept('GET', '/api/Timeslot/GetEventTimeSlots?EventID=*').as('basicInfoData');
                cy.wait('@basicInfoData', { timeout: 25000 });
                venue.clickVenueTab();
                venue.clickOnlineButton();
                cy.wait(1000);
                venue.inputOnlineUrl(list.onlineurl);
                venue.inputOnlineInstructions(list.onlineinstructions);
                venue.clickOnlineSaveButton();
                cy.wait(1000);
                venue.checkOnlineTitleValidation();
                console.log('Test 7 is successful: Unable to save online venue without title');
            });
        }),

          it("Test 8: Verify that user cannot save online venue without online url", () => {
            readDataFromFile(filename).then((list) => {
                performLogin(list.email, list.password);
                venue.eventsDashboardMenuClick();
                venue.clickMyEvents();
                cy.intercept('GET', 'api/DashboardEventList/GetDashboardEventList?UserID=*').as('myEventsData');
                cy.wait('@myEventsData', { timeout: 25000 });
                venue.searchEventName(list.eventtitle);
                venue.clickEventEditButton();
                cy.intercept('GET', '/api/Timeslot/GetEventTimeSlots?EventID=*').as('basicInfoData');
                cy.wait('@basicInfoData', { timeout: 25000 });
                venue.clickVenueTab();
                venue.clickOnlineButton();
                cy.wait(1000);
                venue.inputOnlineTitle(list.onlinetitle);
                venue.inputOnlineInstructions(list.onlineinstructions);
                venue.clickOnlineSaveButton();
                cy.wait(1000);
                venue.checkOnlineURLValidation();
                console.log('Test 8 is successful: Unable to save online venue without online url');
            });
        }),

          it("Test 9: Verify that user can edit the saved online datas", () => {

            readDataFromFile(filename).then((list) => {

                performLogin(list.email, list.password);
                venue.eventsDashboardMenuClick();
                venue.clickMyEvents();
                cy.intercept('GET', 'api/DashboardEventList/GetDashboardEventList?UserID=*').as('myEventsData');
                cy.wait('@myEventsData', { timeout: 25000 });
                venue.searchEventName(list.eventtitle);
                venue.clickEventEditButton();
                cy.intercept('GET', '/api/Timeslot/GetEventTimeSlots?EventID=*').as('basicInfoData');
                cy.wait('@basicInfoData', { timeout: 25000 });
                venue.clickVenueTab();
                venue.clickOnlineButton();
                cy.wait(1000);
                venue.clickOnlineEditButton();
                cy.wait(1000);
                venue.inputOnlineTitle(list.onlinetitle1);
                venue.inputOnlineUrl(list.onlineurl1);
                venue.inputOnlineInstructions(list.onlineinstructions1);
                venue.clickOnlineSaveButton();
                cy.wait(4000);
                venue.checkSavedOnlineVenueData(list.onlinetitle1,list.onlineurl1,list.onlineinstructions1);
                cy.log('Test 9 is successful : User can edit the saved online datas ');
            });

        }),

        it("Test 10: Verify that user can delete a saved online data", () => {
            readDataFromFile(filename).then((list) => {
                performLogin(list.email, list.password);
                venue.eventsDashboardMenuClick();
                venue.clickMyEvents();
                cy.intercept('GET', 'api/DashboardEventList/GetDashboardEventList?UserID=*').as('myEventsData');
                cy.wait('@myEventsData', { timeout: 25000 });
                venue.searchEventName(list.eventtitle);
                venue.clickEventEditButton();
                cy.intercept('GET', '/api/Timeslot/GetEventTimeSlots?EventID=*').as('basicInfoData');
                cy.wait('@basicInfoData', { timeout: 25000 });
                venue.clickVenueTab();
                venue.clickOnlineButton();
                cy.wait(1000);
                venue.clickOnlineDeleteButton();
                venue.checkOnlineListEmpty();
                cy.log('Test 10 is successful: User can delete a saved online datas');
            });
        }),

        it("Test 11: Verify that user can toggle 'To be announced' option", () => {
            readDataFromFile(filename).then((list) => {
                performLogin(list.email, list.password);
                venue.eventsDashboardMenuClick();
                venue.clickMyEvents();
                cy.intercept('GET', 'api/DashboardEventList/GetDashboardEventList?UserID=*').as('myEventsData');
                cy.wait('@myEventsData', { timeout: 25000 });
                venue.searchEventName(list.eventtitle);
                venue.clickEventEditButton();
                cy.intercept('GET', '/api/Timeslot/GetEventTimeSlots?EventID=*').as('basicInfoData');
                cy.wait('@basicInfoData', { timeout: 25000 });
                venue.clickVenueTab();
                venue.clickToBeAnnouncedButton();
                venue.checkToBeAnnouncedEnabled();
                venue.clickToBeAnnouncedButton();
                venue.checkToBeAnnouncedDisabled();
                console.log('Test 11 is successful: User can toggle To be announced option');
            });
        }),

        it("Test 12: Verify that user cannot save city  without inputting city name ", () => {
            readDataFromFile(filename).then((list) => {
                performLogin(list.email, list.password);
                venue.eventsDashboardMenuClick();
                venue.clickMyEvents();
                cy.intercept('GET', 'api/DashboardEventList/GetDashboardEventList?UserID=*').as('myEventsData');
                cy.wait('@myEventsData', { timeout: 25000 });
                venue.searchEventName(list.eventtitle);
                venue.clickEventEditButton();
                cy.intercept('GET', '/api/Timeslot/GetEventTimeSlots?EventID=*').as('basicInfoData');
                cy.wait('@basicInfoData', { timeout: 25000 });
                venue.clickVenueTab();
                venue.clickToBeAnnouncedButton();
                cy.wait(1000);
                venue.clickAddVenueButton();
                venue.checkCityValidation();
                console.log('Test 12 is successful: Unable to save city  without city name');
            });
        }),

        it("Test 13: Verify that user can save city", () => {
            readDataFromFile(filename).then((list) => {
                performLogin(list.email, list.password);
                venue.eventsDashboardMenuClick();
                venue.clickMyEvents();
                cy.intercept('GET', 'api/DashboardEventList/GetDashboardEventList?UserID=*').as('myEventsData');
                cy.wait('@myEventsData', { timeout: 25000 });
                venue.searchEventName(list.eventtitle);
                venue.clickEventEditButton();
                cy.intercept('GET', '/api/Timeslot/GetEventTimeSlots?EventID=*').as('basicInfoData');
                cy.wait('@basicInfoData', { timeout: 25000 });
                venue.clickVenueTab();
                venue.clickToBeAnnouncedButton();
                cy.wait(1000);
                venue.inputCity(list.city1);
                cy.wait(1000);
                venue.clickAddVenueButton();
                cy.wait(4000);
                console.log('Test 13 is successful: User can save the city ');
            });
        }),

              it("Test 14: Verify that user can edit the city", () => {

            readDataFromFile(filename).then((list) => {

                performLogin(list.email, list.password);
                venue.eventsDashboardMenuClick();
                venue.clickMyEvents();
                cy.intercept('GET', 'api/DashboardEventList/GetDashboardEventList?UserID=*').as('myEventsData');
                cy.wait('@myEventsData', { timeout: 25000 });
                venue.searchEventName(list.eventtitle);
                venue.clickEventEditButton();
                cy.intercept('GET', '/api/Timeslot/GetEventTimeSlots?EventID=*').as('basicInfoData');
                cy.wait('@basicInfoData', { timeout: 25000 });
                venue.clickVenueTab();
                cy.wait(1000);
                venue.clickCityEditButton();
                cy.wait(1000);
                venue.inputCity(list.city2);
                cy.wait(1000);
                venue.clickAddVenueButton();
                cy.wait(4000);
                cy.log('Test 14 is successful : User can edit the city ');
            });

        }),

        it("Test 15: Verify that user can delete the city", () => {
            readDataFromFile(filename).then((list) => {
                performLogin(list.email, list.password);
                venue.eventsDashboardMenuClick();
                venue.clickMyEvents();
                cy.intercept('GET', 'api/DashboardEventList/GetDashboardEventList?UserID=*').as('myEventsData');
                cy.wait('@myEventsData', { timeout: 25000 });
                venue.searchEventName(list.eventtitle);
                venue.clickEventEditButton();
                cy.intercept('GET', '/api/Timeslot/GetEventTimeSlots?EventID=*').as('basicInfoData');
                cy.wait('@basicInfoData', { timeout: 25000 });
                venue.clickVenueTab();
                cy.wait(1000);
                venue.clickCityDeleteButton();
                venue.checkVenueListEmpty();
                cy.log('Test 15 is successful: User can delete the city');
            });
        }),

        it("Test 16: Verify that user can navigate to the timeslot page by cliking Continue button ", () => {
            readDataFromFile(filename).then((list) => {
                performLogin(list.email, list.password);
                venue.eventsDashboardMenuClick();
                venue.clickMyEvents();
                cy.intercept('GET', 'api/DashboardEventList/GetDashboardEventList?UserID=*').as('myEventsData');
                cy.wait('@myEventsData', { timeout: 25000 });
                venue.searchEventName(list.eventtitle);
                venue.clickEventEditButton();
                cy.intercept('GET', '/api/Timeslot/GetEventTimeSlots?EventID=*').as('basicInfoData');
                cy.wait('@basicInfoData', { timeout: 25000 });
                venue.clickVenueTab();
                venue.inputVenue(list.venue1);
                venue.inputAddress(list.address1);
                venue.clickAddVenueButton();
                cy.wait(4000);
                venue.clickOnlineButton();
                cy.wait(2000);
                venue.inputOnlineTitle(list.onlinetitle);
                venue.inputOnlineUrl(list.onlineurl);
                venue.inputOnlineInstructions(list.onlineinstructions);
                venue.clickOnlineSaveButton();
                cy.wait(3000);
                venue.clickVenueButton();
                cy.wait(1000);
                venue.clickToBeAnnouncedButton();
                cy.wait(1000);
                venue.inputCity(list.city1);
                cy.wait(1000);
                venue.clickAddVenueButton();
                cy.wait(4000);
                venue.clickContinueButton();
                cy.log('Test 16 is successful: User can navigate to the time slot page by clicking continue button');
            });
        }),




        
        


    ]
};