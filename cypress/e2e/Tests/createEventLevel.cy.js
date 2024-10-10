import CreateEventLevel from '../../e2e/Pages/createEventLevelPage.js';
const { readDataFromFile, writeDataToFile, clearDataInFile } = require('../ExternalFiles/fileOperations.js');
const baseUrl = Cypress.config('baseUrl');
const filename = 'cypress/fixtures/createEventLevelRead.json'
const level = new CreateEventLevel();


function performLogin(email, password) {
    cy.visit(baseUrl);
    cy.wait(4000);
    level.clickLoginMenu();
    level.inputEmail(email);
    level.inputPassword(password);
    level.loginClick();
}


module.exports ={

    CreateEventLevelTests : [

        it("Test 1: Level page  is visible or not ", () => {

            readDataFromFile(filename).then((list) => {

                performLogin(list.email, list.password);
                level.eventsDashboardMenuClick();
                level.clickMyEvents();
                cy.intercept('GET', '/api/DashboardEventList/GetDashboardEventList?UserID=*').as('myEventsData');
                cy.wait('@myEventsData', { timeout: 25000 });
                level.searchEventName(list.eventtitle);
                level.clickEventEditButton();
                cy.intercept('GET', '/api/Timeslot/GetEventTimeSlots?EventID=*').as('basicInfoData');
                cy.wait('@basicInfoData', { timeout: 25000 });
                level.clickLevelTab();

                cy.log('Test 1 is successful : level page is visible ');
            });

        }),

        it("Test 2: User can edit the default level", () => {

            readDataFromFile(filename).then((list) => {

                performLogin(list.email, list.password);
                level.eventsDashboardMenuClick();
                level.clickMyEvents();
                cy.intercept('GET', '/api/DashboardEventList/GetDashboardEventList?UserID=*').as('myEventsData');
                cy.wait('@myEventsData', { timeout: 25000 });
                level.searchEventName(list.eventtitle);
                level.clickEventEditButton();
                cy.intercept('GET', '/api/Timeslot/GetEventTimeSlots?EventID=*').as('basicInfoData');
                cy.wait('@basicInfoData', { timeout: 25000 });
                level.clickLevelTab();
                level.InputFirstLevel(list.levelname1);
                level.clickSaveAndContinueButton();
                level.clickLevelTab();
                cy.intercept('GET', '/api/Levels/GetEventLevels?EventID=*').as('levelPage');
                cy.wait('@levelPage').then((interception) =>{
                    expect(interception.response.statusCode).to.eq(200);
                    expect(interception.response.body[0].Name).to.include(list.levelname1);
                    cy.log('Test 2 is successful : Default level is editable ');
            });
        });

     }),

     
     it("Test 3: User cam Add new level or not", () => {
        readDataFromFile(filename).then((list) => {
            performLogin(list.email, list.password);
            level.eventsDashboardMenuClick();
            level.clickMyEvents();
            cy.intercept('GET', '/api/DashboardEventList/GetDashboardEventList?UserID=*').as('myEventsData');
            cy.wait('@myEventsData', { timeout: 25000 });
            level.searchEventName(list.eventtitle);
            level.clickEventEditButton();
            cy.intercept('GET', '/api/Timeslot/GetEventTimeSlots?EventID=*').as('basicInfoData');
            cy.wait('@basicInfoData', { timeout: 25000 });
            level.clickLevelTab();
            level.clickAddLevelButton();
            level.InputSecondLevel(list.levelname2);
            level.clickSaveAndContinueButton();
            level.clickLevelTab();
            cy.intercept('GET', '/api/Levels/GetEventLevels?EventID=*').as('levelPage');
            cy.wait('@levelPage').then((interception) =>{
                 expect(interception.response.statusCode).to.eq(200);
                 expect(interception.response.body[1].Name).to.include(list.levelname2);
                 cy.log('Test 3 is successful : New level is added ');
            });

        });
    }),

    it("Test 4: User can delete level or not ", () => {
        readDataFromFile(filename).then((list) => {
            performLogin(list.email, list.password);
            level.eventsDashboardMenuClick();
            level.clickMyEvents();
            cy.intercept('GET', '/api/DashboardEventList/GetDashboardEventList?UserID=*').as('myEventsData');
            cy.wait('@myEventsData', { timeout: 25000 });
            level.searchEventName(list.eventtitle);
            level.clickEventEditButton();
            cy.intercept('GET', '/api/Timeslot/GetEventTimeSlots?EventID=*').as('basicInfoData');
            cy.wait('@basicInfoData', { timeout: 25000 });
            level.clickLevelTab();
            cy.wait(2000);
            level.clickLevelDeleteButton();
            cy.wait(1000);
            level.clickSaveAndContinueButton();
            level.clickLevelTab();
            cy.intercept('GET', '/api/Levels/GetEventLevels?EventID=*').as('levelPage');
            cy.wait('@levelPage').then((interception) => {
                expect(interception.response.statusCode).to.eq(200);
                const levels = interception.response.body;
                const levelNames = levels.map(level => level.Name);
                expect(levelNames).to.not.include(list.levelname2);
                cy.log('Test 4 is successful: level is deleted');
           });

        });
    }),

    it("Test 5: Save and continue to timeslot page", () => {
        readDataFromFile(filename).then((list) => {
            performLogin(list.email, list.password);
            level.eventsDashboardMenuClick();
            level.clickMyEvents();
            cy.intercept('GET', '/api/DashboardEventList/GetDashboardEventList?UserID=*').as('myEventsData');
            cy.wait('@myEventsData', { timeout: 25000 });
            level.searchEventName(list.eventtitle);
            level.clickEventEditButton();
            cy.intercept('GET', '/api/Timeslot/GetEventTimeSlots?EventID=*').as('basicInfoData');
            cy.wait('@basicInfoData', { timeout: 25000 });
            level.clickLevelTab();
            level.clickAddLevelButton();
            level.InputSecondLevel(list.levelname2);
            level.clickSaveAndContinueButton();
            cy.log('Test 5 is successful: redirected to timeslot page');
       
        });
    }),









    ]




}