import CreateEventDesign from '../../e2e/Pages/createEventDesignPage.js';
const { readDataFromFile, writeDataToFile, clearDataInFile } = require('../ExternalFiles/fileOperations.js');
const baseUrl = Cypress.config('baseUrl');
const filename = 'cypress/fixtures/createEventTicketsRead.json';
const design = new CreateEventDesign();


function performLogin(email, password) {
    cy.visit(baseUrl);
    cy.wait(4000);
    design.clickLoginMenu();
    design.inputEmail(email);
    design.inputPassword(password);
    design.loginClick();
}

function navigateToDesignPage() {
    readDataFromFile(filename).then((list) => {
        design.eventsDashboardMenuClick();
        design.clickMyEvents();
        cy.intercept('GET', '/api/DashboardEventList/GetDashboardEventList?UserID=*').as('myEventsData');
        cy.wait('@myEventsData', { timeout: 25000 });
        design.searchEventName(list.eventtitle);
        design.clickEventEditButton();
        cy.intercept('GET', '/api/Timeslot/GetEventTimeSlots?EventID=*').as('basicInfoData');
        cy.wait('@basicInfoData', { timeout: 25000 });
        design.clickDesignProgressTab();
    });
}

module.exports = {

    CreateEventDesignTests: [

        it("Test 1: Design page is visible or not ", () => {

            readDataFromFile(filename).then((list) => {
                performLogin(list.email, list.password);
                navigateToDesignPage();
                
                cy.log('Test 1 is successful: Design page is visible');
            });
        }),



    ]
};
