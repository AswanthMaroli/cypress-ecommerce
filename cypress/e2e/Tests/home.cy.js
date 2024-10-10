import Home from '../Pages/homePages';
const baseUrl = Cypress.config('baseUrl');
const homePage = new Home();

var username = 'aswanthm385@gmail.com';
var password = '112233';

function setupPage() {
  cy.visit(baseUrl);
  cy.wait(3000);
  cy.scrollTo(0, 0);
}


module.exports = {

  HomeTests: [
    // Test 1
    it('Test 1: Clicking Create Event button - if user is not logged in, go to login page', () => {

      setupPage();
      homePage.checkLogo();
      homePage.clickCreateEvent();
      cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=LoginType').as('data');
      cy.wait('@data', { timeout: 20000 });

      // cy.wait(5000);
      cy.url().should('include', 'https://test.eventzet.com/#/Eventshell/Eventlogin');
    }),

    // Test 2
    it('Test 2: Clicking Search Event button', () => {
      setupPage();
      homePage.clickSearchEvents();
      cy.wait(1000);
      cy.url().should('include', 'https://test.eventzet.com/#/Eventshell/Eventlistsearch');
    }),


    // Test 3
    it('Test 3: Clicking Dashboard menu - if user is not logged in, go to login page', () => {
      setupPage();
      homePage.clickDashboardMenu();
      cy.wait(1000);
      cy.url().should('not.include', 'https://test.eventzet.com/#/events/Dashboard/Dashboardhomeevent', 'not logged in');
    }),

    // Test 4
    it('Test 4: Clicking Find Order Menu', () => {
      setupPage();
      homePage.clickFindOrderMenu();
      cy.wait(1000);
      cy.url().should('include', 'https://test.eventzet.com/#/eventregistration/Eventshell/Viewticketregistration');
    }),

    // Test 5
    it('Test 5: Clicking Pricing Menu', () => {
      setupPage();
      homePage.clickPricingMenu();
      cy.wait(1000);
      cy.url().should('include', 'https://test.eventzet.com/#/Eventshell/Eventpricing');
    }),

    // Test 6
    it('Test 6: Clicking Create Event button - if user is logged in, go to create event page', () => {
      setupPage();
      homePage.clickLogin(username,password);
      cy.wait(4000);
      cy.scrollTo(0, 0);

      homePage.clickCreateEvent();
      cy.wait(2000);
      cy.url().should('include', 'https://test.eventzet.com/#/events/Dashboard/EventzetEventsCreate/EventzetEventbasics');
    }),

    // Test 7
    it('Test 7: Clicking dashboard menu - if user is logged in, go to organizer dashboard page', () => {
      setupPage();
      homePage.clickLogin(username,password);
      cy.wait(4000);
      homePage.clickDashboardMenu();
      cy.wait(3000);
      cy.url().should('include', 'https://test.eventzet.com/#/events/Dashboard/Dashboardhomeevent');

    }),

    // Test 8
    it('Test 8: Clicking Help Menu - Contact event organizer', () => {
      setupPage();
      cy.wait(3000);
      homePage.clickHelpMenu();
      cy.xpath('//li[@class="dropdown"]//ul//li//a[normalize-space()="Contact Event Organizer"]').click({ force: true });
      cy.wait(2000);
      cy.url().should('include', 'https://test.eventzet.com/#/Eventshell/ContactEventOrganiser');
      cy.get('.form-control').click({ force: true }).type('EDC music festival');
      cy.scrollTo(0, 0);
      cy.wait(1000);
    }),

    // Test 9
    it('Test 9: Clicking Help Menu - FAQ', () => {
      setupPage();
      homePage.clickHelpMenu();
      cy.xpath('//li[@class="dropdown"]//ul//li//a[normalize-space()="FAQ"]').click({ force: true });
      cy.wait(1000);
      cy.url().should('include', 'https://test.eventzet.com/#/Eventshell/EventFaq');
    }),


    // Test 10
    // it('Test 19: Clicking ViewMore Button', () => {

    //   cy.visit(baseUrl);
    //   cy.wait(1000);
    //   cy.scrollTo(0, 1000);
    //   cy.wait(1000);
    //   homePage.clickViewMoreButton();
    //   cy.wait(3000);
    //   cy.url().should('include', 'https://test.eventzet.com/#/Eventshell/Eventlistsearch');
    // }),



  ]
};
