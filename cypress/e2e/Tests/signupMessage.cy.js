import CreatedSignupList from '../Pages/signupMessage.js'
const { readDataFromFile } = require('../ExternalFiles/fileOperations.js');
const filename = 'cypress/fixtures/volunteerSignup.json';
const baseUrl = Cypress.config('baseUrl');

const sm = new CreatedSignupList();

module.exports = {

     SignupMessageTests:[


        it('Test 1: Check whether signup message page validations', () => {

            cy.visit(baseUrl);
            cy.wait(4000);
            cy.scrollTo(0, 0);
            readDataFromFile(filename).then((list) => {
          
              sm.clickLogin(list.useremail,list.userpassword);
      
            });
      
            sm.clickVolunteerSignup();
            cy.wait(4000);
            sm.clickCreateVolunteerSignupButton(); 
            cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SignUpPrivacyStatus').as('signupDateData');
            cy.wait('@signupDateData', { timeout: 15000 });
            sm.clickSignupMessage();
            cy.intercept('GET', '/api/MySignUps/GetSignUpList?UserID=*').as('signupMessageData');
            cy.wait('@signupMessageData', {timeout: 15000});
            sm.clickSendButton();
            cy.wait(2000);
            sm.checkValidation();


        }),

        it('Test 2: Check whether user cam send invitation or not ', () => {

          cy.visit(baseUrl);
          cy.wait(4000);
          cy.scrollTo(0, 0);
          readDataFromFile(filename).then((list) => {
        
            sm.clickLogin(list.useremail,list.userpassword);
            sm.clickVolunteerSignup();
            cy.wait(4000);
            sm.clickCreateVolunteerSignupButton(); 
            cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SignUpPrivacyStatus').as('signupDateData');
            cy.wait('@signupDateData', { timeout: 15000 });
            sm.clickSignupMessage();
            cy.intercept('GET', '/api/MySignUps/GetSignUpList?UserID=*').as('signupMessageData');
            cy.wait('@signupMessageData', {timeout: 15000});
            sm.selectSignupTitle(list.signuptitle);
            sm.inputInviteEmail(list.email);
            cy.wait(1000);
            sm.inputSubject('Invitation For My Signup'+list.signuptitle);
            sm.inputMessage('Please register this signup ');
            sm.clickSendButton();
            cy.wait(3000);
            sm.clickMailSentOKButton();
    
          });


      }),

 
    ]
}