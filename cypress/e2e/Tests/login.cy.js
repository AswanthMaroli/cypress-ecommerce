import Login from '../Pages/loginPages';
const { readDataFromFile, writeDataToFile, clearDataInFile } = require('../ExternalFiles/fileOperations.js');
const baseUrl = Cypress.config('baseUrl');
// const baseUrl='https://test.eventzet.com/#/Eventshell/Eventhome';
const filename = 'cypress/fixtures/loginRead.json';
const filename1 = 'cypress/fixtures/loginWrite.json';

var userEmail = '';
var userPassword = '';
var incorrectEmail = '';
var incorrectPassword = '';
var suspendedEmail = '';
var suspendedPassword = '';
var expiredPassword = '';


const loginPage = new Login();

function performLogin(email, password) {
  cy.visit(baseUrl);
  cy.wait(4000);
  loginPage.loginClick();
  loginPage.inputEmail(email);
  loginPage.inputPassword(password);
  loginPage.login();
}


function verifyLoginSuccess(expectedUrl, successMessage, failureMessage) {
  cy.url().then((url) => {
    if (url === expectedUrl) {
      cy.log(successMessage); 
    } else {
      cy.log(`${failureMessage} Expected URL: ${expectedUrl}, but got: ${url}`);
    }
  });
}

function handleFileOperations(testname, useremail, userpassword) {
  readDataFromFile(filename1).then((list) => {
    list.push({ 
      Testname: testname ,
      Useremail: useremail,
      Userpassword: userpassword
    });
    writeDataToFile(filename1, list);
  });
}


module.exports = {

  LoginTests: [
    //test 1


    it("Test 1:Running loginSuccess", () => {
      clearDataInFile(filename1);
      readDataFromFile(filename).then((list) => {
        userEmail = list.useremail;
        userPassword = list.userpassword;
        performLogin(userEmail,userPassword);
        const successMessage = 'Test 1:Running loginSuccess test is successful';
        const failureMessage = 'Test 1:Login test failed';
        verifyLoginSuccess(baseUrl, successMessage, failureMessage);
        loginPage.logOut();
        handleFileOperations('Test 1:Running loginSuccess', userEmail, userPassword);
      });
    }),

   // test 2


    it("Test 2:Running loginWithIncorrectPassword", () => {

      readDataFromFile(filename).then((list) => {
        userEmail = list.useremail;
        incorrectPassword = list.incorrectpassword;
        performLogin(userEmail,incorrectPassword);
        cy.wait(2000);
        loginPage.checkErrorMessage();
        handleFileOperations('Test 2:Running loginWithIncorrectPassword', userEmail, incorrectPassword);
        const successMessage = 'Test 2:Running loginWithIncorrectPassword is successful';
        const failureMessage = 'Test 2:Running loginWithIncorrectPassword test failed';
        verifyLoginSuccess('https://test.eventzet.com/#/Eventshell/Eventlogin', successMessage, failureMessage);
      });
    }),
    //test 3

    it("Test 3:Running loginWithIncorrectEmail", () => {

      readDataFromFile(filename).then((list) => {
        incorrectEmail = list.incorrectemail;
        userPassword = list.userpassword;
        performLogin(incorrectEmail,userPassword);
        cy.wait(2000);
        loginPage.checkErrorMessage();
        handleFileOperations('Test 3:Running loginWithIncorrectEmail', incorrectEmail, userPassword);
        const successMessage = 'Test 3:Running loginWithIncorrectEmail test is successful';
        const failureMessage = 'Test 3:Running loginWithIncorrectEmail test failed';
        verifyLoginSuccess('https://test.eventzet.com/#/Eventshell/Eventlogin', successMessage, failureMessage);
      });
    }),
    //test 4

    it("Test 4:Running loginWithoutCredentials", () => {
      cy.visit(baseUrl);
      cy.wait(4000);
      loginPage.loginClick();

      cy.get('#UserEmail').should('have.value', '');
      cy.get('#UserPassword').should('have.value', '');
      cy.wait(1000);
      loginPage.login();
      cy.wait(2000);
      cy.get(':nth-child(1) > .form-floating > .invalid-feedback > .font_s7').should('contain', 'Email is Required');
      cy.get(':nth-child(2) > .form-floating > .invalid-feedback > .font_s7').should('contain', 'Password is Required');
      handleFileOperations('Test 4:Running loginWithoutCredentials', '', '');
      cy.log('Running loginWithoutCredentials test is successful');

    }),
    //test 5

    it("Test 5:Running loginWithSuspendedAccount", () => {
  
      readDataFromFile(filename).then((list) => {
        suspendedEmail = list.suspendedemail;
        suspendedPassword = list.suspendedpassword;
        performLogin(suspendedEmail,suspendedPassword);
        cy.wait(3000);
        handleFileOperations('Test 5:Running loginWithSuspendedAccount', suspendedEmail, suspendedPassword);
        loginPage.checkAccountSuspended();
        const successMessage = 'Test 5:Running loginWithSuspendedAccount test is successful';
        const failureMessage = 'Test 5:Running loginWithSuspendedAccount test failed';
        verifyLoginSuccess('https://test.eventzet.com/#/Eventshell/Eventlogin', successMessage, failureMessage);
      });

    }),
    //test 6

    it("Test 6:Running loginWithExpiredPassword", () => {
    
      readDataFromFile(filename).then((list) => {
        expiredPassword = list.expiredpassword;
        userEmail = list.useremail;
        performLogin(userEmail,expiredPassword);
        cy.wait(3000);
        loginPage.checkErrorMessage();
        handleFileOperations('Test 6:Running loginWithExpiredPassword', userEmail, expiredPassword);
        const successMessage = 'Test 6:Running loginWithExpiredPassword test is successful';
        const failureMessage = 'Test 6:Running loginWithExpiredPassword test failed';
        verifyLoginSuccess('https://test.eventzet.com/#/Eventshell/Eventlogin', successMessage, failureMessage);
      });
    }),
    // //test 7

    it("Test 7:Running loginWithIncorrectCredentials", () => {
  
      readDataFromFile(filename).then((list) => {
        incorrectEmail = list.incorrectemail;
        incorrectPassword = list.incorrectpassword;
        performLogin(incorrectEmail,incorrectPassword);
        cy.wait(2000);
        loginPage.checkErrorMessage();
        handleFileOperations('Test 7:Running loginWithIncorrectCredentials', incorrectEmail, incorrectPassword);
        const successMessage = 'Test 7:Running loginWithIncorrectCredentials test is successful';
        const failureMessage = 'Test 7:Running loginWithIncorrectCredentials test failed';
        verifyLoginSuccess('https://test.eventzet.com/#/Eventshell/Eventlogin', successMessage, failureMessage);
      }); 

    }),
    //test 8


    it("Test 8:Running loginWithSpecialCharactersInPassword", () => {
   
      readDataFromFile(filename).then((list) => {
        userEmail = list.useremail;
        userPassword = list.userpassword;
        performLogin(userEmail,userPassword);
        cy.url().should('include', baseUrl);
        handleFileOperations('Test 8:Running loginWithSpecialCharactersInPassword', userEmail, userPassword);
        const successMessage = 'Test 8:Running loginWithSpecialCharactersInPassword test is successful';
        const failureMessage = 'Test 8:Running loginWithSpecialCharactersInPassword test failed';
        verifyLoginSuccess(baseUrl, successMessage, failureMessage);
      });

    }),
    //test 9


    it("Test 9:Running loginWithSpacesInEmail", () => {
      
      readDataFromFile(filename).then((list) => {
        userEmail = '  ' + list.useremail + '  ';
        userPassword = list.userpassword;
        performLogin(userEmail,userPassword);
        handleFileOperations('Test 9:Running loginWithSpacesInEmail', userEmail, userPassword);
        const successMessage = 'Test 9:Running loginWithSpacesInEmail test is successful';
        const failureMessage = 'Test 9:Running loginWithSpacesInEmail test failed';
        verifyLoginSuccess(baseUrl, successMessage, failureMessage);
      });

    }),
    //test 10


    it("Test 10:Running loginWithWhitespaceInPassword", () => {
      
      readDataFromFile(filename).then((list) => {
        userEmail = list.useremail;
        userPassword = '  ' + list.userpassword;
        performLogin(userEmail,userPassword);
        cy.wait(3000);
        loginPage.checkErrorMessage();
        handleFileOperations('Test 10:Running loginWithWhitespaceInPassword', userEmail, userPassword);
        const successMessage = 'Test 10:Running loginWithWhitespaceInPassword test is successful';
        const failureMessage = 'Test 10:Running loginWithWhitespaceInPassword test failed';
        verifyLoginSuccess('https://test.eventzet.com/#/Eventshell/Eventlogin', successMessage, failureMessage);
      });
    
    }),
    //test 11

    it("Test 11:Running loginWithNumericPassword", () => {
    
      readDataFromFile(filename).then((list) => {
        userEmail = list.useremail2;
        userPassword = list.userpassword2;
        performLogin(userEmail,userPassword);
        handleFileOperations('Test 11:Running loginWithNumericPassword', userEmail, userPassword);
        const successMessage = 'Test 11:Running loginWithNumericPassword test is successful';
        const failureMessage = 'Test 11:Running loginWithNumericPassword test failed';
        verifyLoginSuccess(baseUrl, successMessage, failureMessage);
      });

    }),
    //test 12


    it("Test 12:Running loginWithLowerCasePassword", () => {
    
      readDataFromFile(filename).then((list) => {
        userEmail = 'test1@gmail.com';
        userPassword = list.lowercasepassword;
        performLogin(userEmail,userPassword);
        handleFileOperations('Test 12:Running loginWithLowerCasePassword', userEmail, userPassword);
        const successMessage = 'Test 12:Running loginWithLowerCasePassword test is successful';
        const failureMessage = 'Test 12:Running loginWithLowerCasePassword test failed';
        verifyLoginSuccess(baseUrl, successMessage, failureMessage);
      });
    
    }),
    //test 13

    it("Test 13:Running loginWithUpperCasePassword", () => {
   
      readDataFromFile(filename).then((list) => {
        userEmail = 'test2@gmail.com';
        userPassword = list.uppercasepassword;
        performLogin(userEmail,userPassword);
        handleFileOperations('Test 13:Running loginWithUpperCasePassword', userEmail, userPassword);
        const successMessage = 'Test 13:Running loginWithUpperCasePassword test is successful';
        const failureMessage = 'Test 13:Running loginWithUpperCasePassword test failed';
        verifyLoginSuccess(baseUrl, successMessage, failureMessage);
      });
    
    }),
    //test 14


    it("Test 14:Running loginWithCaseSensitivePassword", () => {
   
      readDataFromFile(filename).then((list) => {
        userEmail = 'savio@gmail.com';
        userPassword = list.casesensitivepassword;
        performLogin(userEmail,userPassword);
        handleFileOperations('Test 14:Running loginWithCaseSensitivePassword', userEmail, userPassword);
        const successMessage = 'Test 14:Running loginWithCaseSensitivePassword test is successful';
        const failureMessage = 'Test 14:Running loginWithCaseSensitivePassword test failed';
        verifyLoginSuccess(baseUrl, successMessage, failureMessage);
      });
    }),


  ]
};