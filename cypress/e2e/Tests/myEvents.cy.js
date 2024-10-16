import MyEvent from "../Pages/myEventsPages";
const { readDataFromFile, writeDataToFile, clearDataInFile } = require('.././ExternalFiles/fileOperations.js');
const baseUrl = Cypress.config('baseUrl');
const filename = 'cypress/fixtures/createEventBasicInfoRead.json';

const myEventsPage = new MyEvent();

function performLogin(email, password) {
  cy.visit(baseUrl);
  cy.wait(4000);
  myEventsPage.clickLoginMenu();
  myEventsPage.inputEmail(email);
  myEventsPage.inputPassword(password);
  myEventsPage.loginClick();
}

function navigateToMyEvents() {

  myEventsPage.eventsDashboardMenuClick();
  myEventsPage.clickMyEvents();
  cy.intercept('GET', '/api/DashboardEventList/GetDashboardEventList?UserID=*').as('myEventsData');
  cy.wait('@myEventsData', { timeout: 25000 });
  cy.url().should('include', 'https://test.eventzet.com/#/events/Dashboard/Dashboardevents');

}

module.exports = {

  MyEventsTests: [
    // Test 1
    it('Test 1: Check whether my events page is visible or not', () => {

      readDataFromFile(filename).then((list) => {

        performLogin(list.email, list.password);
        navigateToMyEvents();

      });

    }),

    // Test 2
    it('Test 2: Event is visible or not', () => {

      readDataFromFile(filename).then((list) => {
        
        performLogin(list.email, list.password);
        navigateToMyEvents();
        myEventsPage.checkEvent(list.eventtitle);
      });
    }),

    // Test 3
    it('Test 3: Event Saved alert message is visible or not', () => {

      readDataFromFile(filename).then((list) => {

       
        performLogin(list.email, list.password);
        navigateToMyEvents();
        myEventsPage.checkForSavedAlert();
      });

    }),

    // Test 4
    it('Test 4: Event search is working fine or not', () => {


      readDataFromFile(filename).then((list) => {

      
        performLogin(list.email, list.password);
        navigateToMyEvents();
        myEventsPage.searchEvent(list.eventtitle);
      });
      myEventsPage.clearSearchEvent();
    }),

    // Test 5
    it('Test 5: Verify user can unpublish the event', () => {

      readDataFromFile(filename).then((list) => {

        performLogin(list.email, list.password);
        navigateToMyEvents();
        myEventsPage.searchEventName(list.eventtitle);
        cy.wait(1000);
        myEventsPage.clickUnPublishButton();
        cy.wait(2000);
      });
    }),

    // Test 6
    it('Test 6: Verify user can publish the event', () => {


      readDataFromFile(filename).then((list) => {

        performLogin(list.email, list.password);
        navigateToMyEvents();
        myEventsPage.searchEventName(list.eventtitle);
        cy.wait(1000);
        myEventsPage.clickPublishButton();
        cy.wait(2000);
      });
    }),


    it('Test 7: Verify user can delete event', () => {

      readDataFromFile(filename).then((list) => {

        performLogin(list.email, list.password);
        navigateToMyEvents();
        myEventsPage.searchEventName(list.eventtitle);
        cy.wait(1000);
        myEventsPage.deleteEvent();

      });
    })
  ]
};