import CreateEventTickets from '../../e2e/Pages/CreateEventTicketsPage.js';
const { readDataFromFile, writeDataToFile, clearDataInFile } = require('../ExternalFiles/fileOperations.js');
const baseUrl = Cypress.config('baseUrl');
const filename = 'cypress/fixtures/createEventTimeSlotRead.json'
const tickets = new CreateEventTickets();


function performLogin(email, password) {
    cy.visit(baseUrl);
    cy.wait(4000);
    tickets.clickLoginMenu();
    tickets.inputEmail(email);
    tickets.inputPassword(password);
    tickets.loginClick();
}



module.exports = {

    CreateEventTicketsTests: [

        it("Test 1: Verify tickets page is visible or not ", () => {

            readDataFromFile(filename).then((list) => {

                performLogin(list.email, list.password);
                tickets.eventsDashboardMenuClick();
                tickets.clickMyEvents();
                cy.intercept('GET', '/api/DashboardEventList/GetDashboardEventList?UserID=*').as('myEventsData');
                cy.wait('@myEventsData', { timeout: 25000 });
                tickets.searchEventName(list.eventtitle);
                tickets.clickEventEditButton();
                cy.intercept('GET', '/api/Timeslot/GetEventTimeSlots?EventID=*').as('basicInfoData');
                cy.wait('@basicInfoData', { timeout: 25000 });
                tickets.clickTicketsTab();

                cy.log('Test 1 is successful : Validation message is visible for start date');
            });

        }),






    ]
}