import CreatedSignupList from '../Pages/createdSignupListPage.js'
const { readDataFromFile } = require('../ExternalFiles/fileOperations.js');
const filename = 'cypress/fixtures/volunteerSignup.json';
const baseUrl = Cypress.config('baseUrl');

const cs = new CreatedSignupList();

module.exports = {

  SignupListTests: [
    // Test 1
    it('Test 1: Check whether signup list page is visible or not', () => {
      cy.visit(baseUrl);
      cy.wait(4000);
      cy.scrollTo(0, 0);
      readDataFromFile(filename).then((list) => {
    
        cs.clickLogin(list.useremail,list.userpassword);

      });

      cs.clickVolunteerSignup();
      cy.wait(4000);
      cs.clickCreateVolunteerSignupButton(); 
      cy.intercept('GET', '/api/SignupPublishWrapper/GetSignupPublishWrapper?SignUpID=0&SignUpStatus=SignUpStatus&SignUpPrivacyStatus=SignUpPrivacyStatus').as('signupDateData');
      cy.wait('@signupDateData', { timeout: 15000 });
      cs.clickSignupListMenu();
      cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SignUpStatus').as('signupListData');
      cy.wait('@signupListData', { timeout: 15000 });
      cy.url().should('include', 'https://test.eventzet.com/#/VolunteerSignup/Volunteersignup/Volunteersignuplist');
     
    }),

    // Test 2
    it('Test 2: Signup is visible or not', () => {
      cy.visit(baseUrl);
      cy.wait(4000);
      readDataFromFile(filename).then((list) => {
    
        cs.clickLogin(list.useremail,list.userpassword);
        cs.clickVolunteerSignup();
        cy.wait(4000);
        cs.clickCreateVolunteerSignupButton(); 
        cy.intercept('GET', '/api/SignupPublishWrapper/GetSignupPublishWrapper?SignUpID=0&SignUpStatus=SignUpStatus&SignUpPrivacyStatus=SignUpPrivacyStatus').as('signupDateData');
        cy.wait('@signupDateData', { timeout: 15000 });
        cs.clickSignupListMenu();
        cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SignUpStatus').as('signupListData');
        cy.wait('@signupListData', { timeout: 15000 });
        cs.checkSignup(list.signuptitle); 
      });
    }),

    // // Test 3
    it('Test 3: Signup Saved alert message is visible or not', () => {
      cy.visit(baseUrl);
      cy.wait(4000);
      readDataFromFile(filename).then((list) => {
    
        cs.clickLogin(list.useremail,list.userpassword);
        cs.clickVolunteerSignup();
        cy.wait(4000);
        cs.clickCreateVolunteerSignupButton(); 
        cy.intercept('GET', '/api/SignupPublishWrapper/GetSignupPublishWrapper?SignUpID=0&SignUpStatus=SignUpStatus&SignUpPrivacyStatus=SignUpPrivacyStatus').as('signupDateData');
        cy.wait('@signupDateData', { timeout: 15000 });
        cs.clickSignupListMenu();
        cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SignUpStatus').as('signupListData');
        cy.wait('@signupListData', { timeout: 15000 });
        cs.checkForSavedAlert();
      });
    }),

    // Test 4
    it('Test 4: Signup search is working fine or not', () => {
      cy.visit(baseUrl);
      cy.wait(4000);
      readDataFromFile(filename).then((list) => {
    
        cs.clickLogin(list.useremail,list.userpassword);
        cs.clickVolunteerSignup();
        cy.wait(4000);
        cs.clickCreateVolunteerSignupButton(); 
        cy.intercept('GET', '/api/SignupPublishWrapper/GetSignupPublishWrapper?SignUpID=0&SignUpStatus=SignUpStatus&SignUpPrivacyStatus=SignUpPrivacyStatus').as('signupDateData');
        cy.wait('@signupDateData', { timeout: 15000 });
        cs.clickSignupListMenu();
        cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SignUpStatus').as('signupListData');
        cy.wait('@signupListData', { timeout: 15000 });
        cs.searchSignup(list.signuptitle);
        cs.checkSignup(list.signuptitle);
      });
      cs.clearSearchBox(); 
    }),

    // Test 5
    it('Test 5: Verify user can unpublish the signup', () => {
      cy.visit(baseUrl);
      cy.wait(4000);
      readDataFromFile(filename).then((list) => {
    
        cs.clickLogin(list.useremail,list.userpassword);
        cs.clickVolunteerSignup();
        cy.wait(4000);
        cs.clickCreateVolunteerSignupButton(); 
        cy.intercept('GET', '/api/SignupPublishWrapper/GetSignupPublishWrapper?SignUpID=0&SignUpStatus=SignUpStatus&SignUpPrivacyStatus=SignUpPrivacyStatus').as('signupDateData');
        cy.wait('@signupDateData', { timeout: 15000 });
        cs.clickSignupListMenu();
        cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SignUpStatus').as('signupListData');
        cy.wait('@signupListData', { timeout: 15000 });
        cs.clickUnPublishButton();
        cy.wait(3000);
      });
    }),

    // Test 6
    it('Test 6: Verify user can publish the signup', () => {
      cy.visit(baseUrl);
      cy.wait(4000);
      readDataFromFile(filename).then((list) => {
    
        cs.clickLogin(list.useremail,list.userpassword);
        cs.clickVolunteerSignup();
        cy.wait(4000);
        cs.clickCreateVolunteerSignupButton(); 
        cy.intercept('GET', '/api/SignupPublishWrapper/GetSignupPublishWrapper?SignUpID=0&SignUpStatus=SignUpStatus&SignUpPrivacyStatus=SignUpPrivacyStatus').as('signupDateData');
        cy.wait('@signupDateData', { timeout: 15000 });
        cs.clickSignupListMenu();
        cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SignUpStatus').as('signupListData');
        cy.wait('@signupListData', { timeout: 15000 });
        cs.clickPublishButton();
        cy.wait(3000);
      });
    }),

    // Test 7
    // it('Test 7: Verify user can delete signup', () => {
    //   cy.visit(baseUrl);
    //   cy.wait(4000);
    //   readDataFromFile(filename).then((list) => {
    
    //     cs.clickLogin(list.useremail,list.userpassword);
    //     cs.clickVolunteerSignup();
    //     cy.wait(4000);
    //     cs.clickCreateVolunteerSignupButton(); 
    //     cy.intercept('GET', '/api/SignupPublishWrapper/GetSignupPublishWrapper?SignUpID=0&SignUpStatus=SignUpStatus&SignUpPrivacyStatus=SignUpPrivacyStatus').as('signupDateData');
    //     cy.wait('@signupDateData', { timeout: 15000 });
    //     cs.clickSignupListMenu();
    //     cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SignUpStatus').as('signupListData');
    //     cy.wait('@signupListData', { timeout: 15000 });
    //     cs.deleteSignup();
    //   });
    // })
  ]
};
