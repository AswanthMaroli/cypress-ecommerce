import CreateEventSettings from '../../e2e/Pages/createEventSettingsPage.js';
const { readDataFromFile, writeDataToFile, clearDataInFile } = require('../ExternalFiles/fileOperations.js');
const baseUrl = Cypress.config('baseUrl');
const filename = 'cypress/fixtures/createEventSettingsRead.json';
const settings = new CreateEventSettings();



function performLogin(email, password) {
    cy.visit(baseUrl);
    cy.wait(4000);
    settings.clickLoginMenu();
    settings.inputEmail(email);
    settings.inputPassword(password);
    settings.loginClick();
}


function navigateToSettingsPage() {
    readDataFromFile(filename).then((list) => {
        settings.eventsDashboardMenuClick();
        settings.clickMyEvents();
        cy.intercept('GET', '/api/DashboardEventList/GetDashboardEventList?UserID=*').as('myEventsData');
        cy.wait('@myEventsData', { timeout: 40000 });
        settings.searchEventName(list.eventtitle);
        settings.clickEventEditButton();
        cy.intercept('GET', '/api/Timeslot/GetEventTimeSlots?EventID=*').as('basicInfoData');
        cy.wait('@basicInfoData', { timeout: 40000 });
        settings.clickSettingsProgressTab();
    });
}


module.exports = {


    CreateEventSettingsTests: [

        it("Test 1: Add a new question", () => {
            readDataFromFile(filename).then((list) => {
                performLogin(list.email, list.password);
                navigateToSettingsPage();
                settings.clickAddQuestionButton()
                settings.inputQustion(list.question1);

            });
        }),

        it("Test 2: Mark question as required", () => {

            readDataFromFile(filename).then((list) => {
                performLogin(list.email, list.password);
                navigateToSettingsPage();
                settings.clickAddQuestionButton()
                settings.inputQustion(list.question1);
                settings.checkMarkAsRequiredCheckBox();

            });
        }),

        it("Test 3: Delete a question", () => {

            readDataFromFile(filename).then((list) => {
                performLogin(list.email, list.password);
                navigateToSettingsPage();
                settings.clickAddQuestionButton()
                settings.inputQustion(list.question1);
                settings.checkMarkAsRequiredCheckBox();
                cy.wait(1000);
                settings.deleteQuestion();

            });
        }),

        it("Test 4: Add special instructions & Email message", () => {

            readDataFromFile(filename).then((list) => {
                performLogin(list.email, list.password);
                navigateToSettingsPage();
                settings.inputSpecialInstruction(list.instructions1);
                settings.inputMessage(list.message1);
            });
        }),

        it("Test 6: Save settings", () => {

            readDataFromFile(filename).then((list) => {
                performLogin(list.email, list.password);
                navigateToSettingsPage();
                settings.clickAddQuestionButton()
                settings.inputQustion(list.question1);
                settings.checkMarkAsRequiredCheckBox();
                cy.wait(1000);
                settings.inputSpecialInstruction(list.instructions1);
                cy.wait(1000);
                settings.inputMessage(list.message1);
                cy.wait(1000);
                settings.clickSettingsPageSaveButton();
                cy.wait(4000);
                cy.url().should('include','https://test.eventzet.com/#/events/Dashboard/EventzetEventsCreate/Eventpublish');
            });
        }),







    ]
}