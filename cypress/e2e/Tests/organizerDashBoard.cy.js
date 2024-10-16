import OrganizerDashboard from '../Pages/organizerDashBoardPages';
const { readDataFromFile, writeDataToFile, clearDataInFile } = require('.././ExternalFiles/fileOperations.js');
const baseUrl = Cypress.config('baseUrl');
const filename = 'cypress/fixtures/createEventBasicInfoRead.json';

const od = new OrganizerDashboard();

function performLogin(email, password) {
  cy.visit(baseUrl);
  cy.wait(4000);
  od.clickLoginMenu();
  od.inputEmail(email);
  od.inputPassword(password);
  od.loginClick();
}


module.exports = {

  OrganizerDashboardTests: [

    //test 1

    it('Test 1:Without login user can access organizer dashboard or not ', () => {
      cy.visit(baseUrl);
      cy.wait(3000);
      od.dashBoardMenuClick();
      cy.wait(1000);
      cy.url().should('not.include', 'https://test.eventzet.com/#/events/Dashboard/Dashboardhomeevent');


      cy.log('Test 1 is successful: organizer dashboard page is not visible if user is not a logined user');
    }),
    // test 2



    it('Test 2: logined user can access organizer dashboard or not ', () => {

      readDataFromFile(filename).then((list) => {

        performLogin(list.email,list.password);

      });
  
      cy.wait(4000);
      od.dashBoardMenuClick();
      cy.wait(3000);
      cy.url().should('include', 'https://test.eventzet.com/#/events/Dashboard/Dashboardhomeevent')

      cy.log('Test 2 is successful: Logined user can access organizer dashboard page ');

    }),
    // test 3


    it('Test 3: Menu buttons in the organizer dashboard working fine or not ', () => {
      readDataFromFile(filename).then((list) => {

        performLogin(list.email,list.password);

      });
      cy.wait(6000);
      od.dashBoardMenuClick();
      cy.wait(4000);
      cy.scrollTo(0.0);
      od.clickMyEventsMenu();
      cy.wait(2000);
      cy.url().should('include', 'https://test.eventzet.com/#/events/Dashboard/Dashboardevents');
      cy.go(-1);
      cy.wait(2000);
      od.clickBookingListMenu();
      cy.wait(2000);
      cy.url().should('include', 'https://test.eventzet.com/#/events/Dashboard/Bookinglist');
      cy.go(-1);
      cy.wait(2000);
      od.clickFinanceMenu();
      cy.wait(2000);
      cy.url().should('include', 'https://test.eventzet.com/#/events/Dashboard/Finance');
      cy.go(-1);
      cy.wait(2000);
      od.clickReportsMenu();
      cy.wait(2000);
      cy.url().should('include', 'https://test.eventzet.com/#/reports/Dashboard/Reports');
      cy.go(-1);
      cy.wait(2000);
      od.clickPermissionMenu();
      cy.wait(2000);
      cy.url().should('include', 'https://test.eventzet.com/#/events/Dashboard/Permission');
      cy.go(-1);
      cy.wait(2000);
      od.clickAccountsMenu();
      cy.wait(2000);
      cy.url().should('include', 'https://test.eventzet.com/#/events/Dashboard/Accountsettings');
      cy.go(-1);
      cy.wait(2000);
      od.clickOrganizationMenu();
      cy.wait(2000);
      cy.url().should('include', 'https://test.eventzet.com/#/events/Dashboard/Organizationsettings');
      cy.go(-1);
      cy.wait(2000);


      cy.log('Test 3 is successful: Menu buttons are working fine');

    }),
    //test 4


    it('Test 4:  Historical order chart is visible or not ', () => {
      readDataFromFile(filename).then((list) => {

        performLogin(list.email,list.password);

      });
      cy.wait(4000);
      od.dashBoardMenuClick();
      cy.wait(6000);
      od.checkHistoricalOrderChart();

      cy.log('Test 4 is successful: Historical order chart is visible');

    }),




  ]
};