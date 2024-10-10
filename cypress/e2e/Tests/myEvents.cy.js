import MyEvent from "../Pages/myEventsPages";
const { readDataFromFile, writeDataToFile, clearDataInFile } = require('.././ExternalFiles/fileOperations.js');
const baseUrl = Cypress.config('baseUrl');
const filename = 'cypress/fixtures/createEventBasicInfoRead.json';

const myEventsPage = new MyEvent();


function performLogin(useremail,userpassword){

      cy.visit(baseUrl);
      cy.wait(4000);
      cy.scrollTo(0, 0);
      myEventsPage.clickLoginMenu();
      cy.url().should('include', 'https://test.eventzet.com/#/Eventshell/Eventlogin');
      myEventsPage.inputEmail(useremail);
      myEventsPage.inputPassword(userpassword);
      cy.wait(1000);
      myEventsPage.loginClick();
      cy.wait(4000);

}

function navigateToMyEvents(){

      myEventsPage.dashBoardMenuClick();
      cy.wait(2000);
      myEventsPage.myEventsMenuClick();
      cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SaleStatus').as('myEventsData');
      cy.wait('@myEventsData', { timeout: 15000 });
      cy.url().should('include', 'https://test.eventzet.com/#/events/Dashboard/Dashboardevents');

}

module.exports = {

  MyEventsTests: [
    // Test 1
    it('Test 1: Check whether my events page is visible or not', () => {
      
      readDataFromFile(filename).then((list) => {
        const userEmail = list.email;
        const userPassword = list.password;
        performLogin(userEmail,userPassword);
        navigateToMyEvents();
       
      });
     
    }),

    // Test 2
    it('Test 2: Event is visible or not', () => {
     
      myEventsPage.clickLoginMenu();
      readDataFromFile(filename).then((list) => {
        const userEmail = list.email;
        const userPassword = list.password;
        performLogin(userEmail,userPassword);
        navigateToMyEvents();
        myEventsPage.checkEvent(list.eventtitle);
      });
    }),

    // Test 3
    it('Test 3: Event Saved alert message is visible or not', () => {
     
      readDataFromFile(filename).then((list) => {

        const userPassword = list.password;
        performLogin(userEmail,userPassword);
        navigateToMyEvents();
        myEventsPage.checkForSavedAlert();
      });

    }),

    // Test 4
    it('Test 4: Event search is working fine or not', () => {


      readDataFromFile(filename).then((list) => {

        const userPassword = list.password;
        performLogin(userEmail,userPassword);
        navigateToMyEvents();
        myEventsPage.searchEvent(list.eventtitle);
      });
        myEventsPage.clearSearchEvent();
    }),

    // Test 5
    it('Test 5: Verify user can unpublish the event', () => {
   
      readDataFromFile(filename).then((list) => {

        const userPassword = list.password;
        performLogin(userEmail,userPassword);
        navigateToMyEvents();
        myEventsPage.clickUnPublishButton();
        cy.wait(2000);
      });
    }),

    // Test 6
    it('Test 6: Verify user can publish the event', () => {

   
      readDataFromFile(filename).then((list) => {

        const userPassword = list.password;
        performLogin(userEmail,userPassword);
        navigateToMyEvents();
        myEventsPage.clickPublishButton();
        cy.wait(2000);
      });
    }),

    // Test 7
    // it('Test 7: Verify user can delete event', () => {

    //   readDataFromFile(filename).then((list) => {

    //     const userPassword = list.password;
    //     performLogin(userEmail,userPassword);
    //     navigateToMyEvents();
    //     myEventsPage.deleteEvent();

    //   });
    // });
  ]
};