import CreateEventPublish from '../Pages/createEventPublishPage.js';
const { readDataFromFile, writeDataToFile, clearDataInFile } = require('.././ExternalFiles/fileOperations.js');
const baseUrl = Cypress.config('baseUrl');
var dateCalculations = require('.././ExternalFiles/dateCalculations.js');
const filename = 'cypress/fixtures/createEventPublishRead.json';
const publish = new CreateEventPublish();

function performLogin(email, password) {
    cy.visit(baseUrl);
    cy.wait(4000);
    publish.clickLoginMenu();
    publish.inputEmail(email);
    publish.inputPassword(password);
    publish.loginClick();
}


function navigateToPublishPage() {
    readDataFromFile(filename).then((list) => {
        publish.eventsDashboardMenuClick();
        publish.clickMyEvents();
        cy.intercept('GET', '/api/DashboardEventList/GetDashboardEventList?UserID=*').as('myEventsData');
        cy.wait('@myEventsData', { timeout: 40000 });
        publish.searchEventName(list.eventtitle);
        publish.clickEventEditButton();
        cy.intercept('GET', '/api/Timeslot/GetEventTimeSlots?EventID=*').as('basicInfoData');
        cy.wait('@basicInfoData', { timeout: 40000 });
        publish.clickPublishProgressTab();
    });
}


module.exports = {

    CreateEventPublishTests: [



        //test 1

        it("Test 1:Check Publish page details", () => {

            readDataFromFile(filename).then((list) => {

                performLogin(list.email, list.password);
                navigateToPublishPage();
                publish.checkPublishPageDetails(
                    list.eventtitle,
                    list.eventlocation,
                    list.onlinetitle,
                    list.ticketname1,
                    list.addonname1,
                    list.ticketname2,
                    list.addonname2,
                    list.onlineticket
                );


            });
        }),


     


        it("Test 2:Check user can save publish page without selecting refund policy in dropdown", () => {

            readDataFromFile(filename).then((list) => {

                performLogin(list.email, list.password);
                navigateToPublishPage();
                publish.clickRefundRequestButton();
                cy.wait(2000);
                publish.saveEvent();
                cy.wait(3000);
                cy.get('.invalid-feedback').should('be.visible').should('contain', ' Please select Refund Policy');

            });
            cy.log(' Please select Refund Policy validation is visible: Test is successful');
        }),
        


        it("Test 3:Check user can disable service charge is given by the event creator button", () => {

            readDataFromFile(filename).then((list) => {

                performLogin(list.email, list.password);
                navigateToPublishPage();
                publish.clickServiceChargeButton();
                cy.wait(3000);
                publish.unCheckServiceChargeButton();

            });
            cy.log('Service charge is given by the event creator button is disabled');
        }),
      

        it("Test 4:Check user can disable accept refund requests button", () => {
 
            readDataFromFile(filename).then((list) => {

                performLogin(list.email, list.password);
                navigateToPublishPage();
                publish.clickRefundRequestButton();
                cy.wait(3000);
                publish.unCheckRefundRequestButton();

            });
            cy.log('Accept refund request button is disabled');
        }),
       

        it("Test 5:Check whether user can save publish page", () => {
            
            readDataFromFile(filename).then((list) => {

                performLogin(list.email, list.password);
                navigateToPublishPage();
                cy.wait(3000);
                publish.saveEvent();
                cy.wait(10000);
                publish.checkSaveEventPopup();

            });
            cy.log('Event saved successfuly');
        }),
  
        it("Test 6:Check whether user can publish the event ", () => {
            readDataFromFile(filename).then((list) => {

                performLogin(list.email, list.password);
                navigateToPublishPage();
                cy.wait(3000);
                publish.saveEvent();
                cy.wait(12000);
                publish.checkSaveEventPopup();
                publish.publishEvent();
                cy.wait(6000);
                publish.checkPublishEventPopup();
            });
            cy.wait('@myEventsData', { timeout: 40000 });
            cy.url().should('include', 'https://test.eventzet.com/#/events/Dashboard/Dashboardevents');
            cy.get(':nth-child(1) > :nth-child(6) > .list-inline > :nth-child(2) > .btn').should('contain', 'Un Publish');
            cy.log('Event published successfuly');
        }),

    ]
};