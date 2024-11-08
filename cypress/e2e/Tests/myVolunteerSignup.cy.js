import { MyVolunteerSignup } from "../Pages/myVolunteerSignupPage";
const { readDataFromFile } = require('../ExternalFiles/fileOperations.js');
const filename = 'cypress/fixtures/volunteerSignup.json';
const baseUrl = Cypress.config('baseUrl');

const ms = new MyVolunteerSignup();

function performLogin(email, password) {
    cy.visit(baseUrl);
    cy.wait(4000);
    ms.clickLoginMenu();
    ms.inputEmail(email);
    ms.inputPassword(password);
    ms.loginClick();
  }

  module.exports = {


    MyVolunteerSignupTests : [

        it('Test 1: Check whether user can cancel all the registerd signup slots ', () => {
   
            readDataFromFile(filename).then((list) => {
          
              performLogin(list.useremail,list.userpassword);
              ms.clickMenuDropDown();
              cy.wait(1000);
              ms.clickMyVoulunteerSignupMenu();
              cy.wait(3000);
              ms.cancelAllSignupRegistration(list.searchname);
      
            });
          }),


    ]



  }
  