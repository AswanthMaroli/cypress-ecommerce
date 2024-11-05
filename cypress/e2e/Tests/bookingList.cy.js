import BookingList from '../Pages/bookingListPage.js'
const { readDataFromFile } = require('../ExternalFiles/fileOperations.js');
const filename = 'cypress/fixtures/volunteerSignup.json';
const baseUrl = Cypress.config('baseUrl');

const bl = new BookingList();

function performLogin(email, password) {
    cy.visit(baseUrl);
    cy.wait(4000);
    bl.clickLoginMenu();
    bl.inputEmail(email);
    bl.inputPassword(password);
    bl.loginClick();
  }
  

module.exports = {

  BookingListTests: [
    // Test 1
    it('Test 1: Check whether event creator can cancel all the bookings ', () => {
   
      readDataFromFile(filename).then((list) => {
    
        performLogin(list.useremail,list.userpassword);

      });

      bl.eventsDashboardMenuClick();
      cy.wait(4000);
      bl.clickBookingList();
      cy.wait(3000);
      bl.cancelAllBooking();
    
     
    }),

 ]
}