// signup.js
import Signup from '../Pages/signUpPages.js';
const testData = require('../ExternalFiles/chance.js');
const { readDataFromFile, writeDataToFile, clearDataInFile } = require('../ExternalFiles/fileOperations.js');
const baseUrl = Cypress.config('baseUrl');

// const baseUrl='https://test.eventzet.com/#/Eventshell/Eventhome';
const filename = 'cypress/fixtures/SignupWrite.json';
const filename1 = 'cypress/fixtures/SignupRead.json'
const signupPage = new Signup();
var invalidemail = '';
var existuser = '';
var userEmail = '';
var userPassword = '';

function setupPage() {
  cy.visit(baseUrl);
  cy.viewport('macbook-15'); // Adjust the viewport to match desired window size
  cy.wait(4000);
}

function handleFileOperations(testname,name, useremail, userpassword,confirmpassword) {
  readDataFromFile(filename).then((list) => {
    list.push({ 
      Testname: testname ,
      Name: name,
      Useremail: useremail,
      Userpassword: userpassword,
      Confirmpassword :confirmpassword
    });
    writeDataToFile(filename, list);
  });
}

function checkUrlAndLog(expectedUrl, successMessage) {
  cy.url().then((url) => {
    cy.log('Current URL: ' + url);
    if (url === expectedUrl) {
      cy.log(successMessage);
    } else {
      cy.log( `Test Failed ,Expected URL: ${expectedUrl}, but got: ${url}`);
    }
  });
}



module.exports = {

  SignupTests: [
    //test 1

    it("Test 1:Running signupSuccess", () => {

      setupPage();
      const userData = testData.generateRandomUserData();
      const email = userData.email;
      const password = userData.password;

      signupPage.signUpClick();
      cy.wait(1000);
      signupPage.setEmail(email);
      signupPage.setFirstName(userData.firstname);
      signupPage.setLastName(userData.lastname);
      signupPage.setPassword(password);
      signupPage.setConfirmPassword(password);
      signupPage.createAccount();

      clearDataInFile(filename);
      handleFileOperations('Test 1:Running signupSuccess',userData.lastname + ' ' + userData.firstname,email,email,password,password);
      cy.wait(7000);
      signupPage.successPopUpClick();
      checkUrlAndLog('https://test.eventzet.com/#/Eventshell/Eventlogin','Test 1 is successful: User Registered Successfuly');
    
    }),

    //test 2


    it("Test 2:Running signup With InvalidEmail", () => {

      const userData = testData.generateRandomUserData();
      const password = userData.password;
      setupPage();
      signupPage.signUpClick();
      cy.wait(1000);
      readDataFromFile(filename1).then((list) => {
        invalidemail = list.invalidEmail;
        signupPage.setEmail(invalidemail);
        signupPage.setFirstName(userData.firstname);
      signupPage.setLastName(userData.lastname);
      signupPage.setPassword(password);
      signupPage.setConfirmPassword(password);
      signupPage.createAccount();
      cy.wait(3000);
      handleFileOperations('Test 2:Running signup With InvalidEmail',userData.lastname + ' ' + userData.firstname,invalidemail,invalidemail,password,password);
      });
      cy.get('.font_s7').should('contain', 'Please provide a valid email');
      checkUrlAndLog('https://test.eventzet.com/#/Eventshell/Signup','Test 2 is successful:Please provide a valid email validation is visible');

    }),
    // test 3


    it("Test 3:Running signup With Existing Username", () => {

      const userData = testData.generateRandomUserData();
      const password = userData.password;
      setupPage();
      signupPage.signUpClick();
      cy.wait(1000);
      readDataFromFile(filename1).then((list) => {
        existuser = list.existingUser;
        signupPage.setEmail(existuser);
        signupPage.setFirstName(userData.firstname);
        signupPage.setLastName(userData.lastname);
        signupPage.setPassword(password);
        signupPage.setConfirmPassword(password);
        signupPage.createAccount();
        cy.wait(3000);
        handleFileOperations('Test 3:Running signup With Existing Username',userData.lastname + ' ' + userData.firstname,existuser,existuser,password,password);
      });
      cy.get('.font_s7').should('contain', 'Email already exists');
      checkUrlAndLog('https://test.eventzet.com/#/Eventshell/Signup','Test 3 is successful:Email Already Exists validation is visible');
    }),
    // test 4

    it("Test 4:Running signup With Missing Firstname", () => {
      const userData = testData.generateRandomUserData();
      const email = userData.email;
      const password = userData.password;
      setupPage();
      signupPage.signUpClick();
      cy.wait(1000);
      signupPage.setEmail(email);
      cy.get('#SignupFirstname').clear().should('have.value', '');
      signupPage.setLastName(userData.lastname);
      signupPage.setPassword(password);
      signupPage.setConfirmPassword(password);
      signupPage.createAccount();
      cy.wait(3000);
      handleFileOperations('Test 4:Running signup With Missing Firstname',userData.lastname + ' ' ,email,email,password,password);
      cy.get('.font_s7').should('contain', 'First Name is required');
      checkUrlAndLog('https://test.eventzet.com/#/Eventshell/Signup','Test 4 is successful:First Name is required validation is visible');
    }),
  //  test 5


    it("Test 5:Running signup With Missing Lastname", () => {
      const userData = testData.generateRandomUserData();
      const email = userData.email;
      const password = userData.password;
      setupPage();
      signupPage.signUpClick();
      cy.wait(1000);
      signupPage.setEmail(email);
      signupPage.setFirstName(userData.firstname);
      cy.get('#signUpLastname').clear().should('have.value', '');
      signupPage.setPassword(password);
      signupPage.setConfirmPassword(password);
      signupPage.createAccount();
      cy.wait(3000);
      handleFileOperations('Test 5:Running signup With  Missing Lastname', ' ' + userData.firstname,email,email,password,password);
      cy.get('.font_s7').should('contain', 'Last Name is required');
      checkUrlAndLog('https://test.eventzet.com/#/Eventshell/Signup','Test 5 is successful:Last Name is required validation is visible');
    }),
    //test 6


    it("Test 6:Running signup With Missing Password", () => {
      const userData = testData.generateRandomUserData();
      const email = userData.email;
      const password = userData.password;
       setupPage();
      signupPage.signUpClick();
      cy.wait(1000);
      signupPage.setEmail(email);
      signupPage.setFirstName(userData.firstname);
      signupPage.setLastName(userData.lastname);
      cy.get('#SignupPassword').clear().should('have.value', '');
      signupPage.setConfirmPassword(password);
      signupPage.createAccount();
      cy.wait(3000);
      handleFileOperations('Test 6:Running signup With  Missing Password',userData.lastname + ' ' + userData.firstname,email,email,' ',password);
      cy.get('.font_s7').should('contain', 'Password is required');
      checkUrlAndLog('https://test.eventzet.com/#/Eventshell/Signup','Test 6 is successful: Password is required validation is visible');

    }),
    //test 7

    it("Test 7:Running signup With Missing ConfirmPassword", () => {
      const userData = testData.generateRandomUserData();
      const email = userData.email;
      const password = userData.password;
      setupPage();
      signupPage.signUpClick();
      cy.wait(1000);
      signupPage.setEmail(email);
      signupPage.setFirstName(userData.firstname);
      signupPage.setLastName(userData.lastname);
      signupPage.setPassword(password);
      cy.get('#SignUpconfirmPassword').clear().should('have.value', '');
      signupPage.createAccount();
      cy.wait(3000);
      handleFileOperations('Test 6:Running signup With  Missing Password',userData.lastname + ' ' + userData.firstname,email,email,password,' ');
      cy.get('.invalid-feedback > .font_s7').should('contain', 'Confirm Password is required');
      checkUrlAndLog('https://test.eventzet.com/#/Eventshell/Signup','Test 7 is successful: Password does not match validation is visible');
    }),
    //test 8


    it("Test 8:Running signupWithNullValues", () => {

      setupPage();
      signupPage.signUpClick();
      cy.wait(1000);
      cy.get('#email').should('have.value', '');
      cy.get('#SignupFirstname').should('have.value', '');
      cy.get('#signUpLastname').should('have.value', '');
      cy.get('#SignupPassword').should('have.value', '');
      cy.get('#SignUpconfirmPassword').should('have.value', '');
      cy.get('#SignUpCreateAccount').click();
      cy.wait(2000);

      cy.get(':nth-child(3) > .text-danger > .font_s7').should('contain', 'Email is required');
      cy.get('.position-relative > .text-danger > .font_s7').should('contain', 'First Name is required');
      cy.get(':nth-child(2) > .position-relative > .invalid-feedback > .font_s7').should('contain', 'Last Name is required');
      cy.get(':nth-child(4) > .position-relative > .invalid-feedback > .font_s7').should('contain', 'Password is required');
      cy.get(':nth-child(5) > .position-relative > .invalid-feedback > .font_s7').should('contain', 'Confirm Password is required');
      cy.log('Running signupWithNullValues test is successful');

    }),
    //test 9


    it("Test 9:Running signup With Password And ConfirmPassword Mismatch", () => {
      setupPage();
      const userData = testData.generateRandomUserData();
      const email = userData.email;
      const password = userData.password;
      signupPage.signUpClick();
      cy.wait(1000);
      signupPage.setEmail(email);
      signupPage.setFirstName(userData.firstname);
      signupPage.setLastName(userData.lastname);
      signupPage.setPassword(password);
      signupPage.setConfirmPassword(userData.firstname);
      signupPage.createAccount();
      cy.wait(3000);
      handleFileOperations('Test 9:Running signup With  Password And ConfirmPassword Mismatch',userData.lastname + ' ' + userData.firstname,email,email,password,userData.firstname);
      cy.get('.font_s7').should('contain', 'Password does not match');
      checkUrlAndLog('https://test.eventzet.com/#/Eventshell/Signup','Test 9 is successful: Password does not match validation is visible');
      
    }),
    // //test 10


    it("Test 10:Running signup With Missing Email", () => {

      const userData = testData.generateRandomUserData();
      const email = userData.email;
      const password = userData.password;
      setupPage();
      signupPage.signUpClick();
      cy.wait(1000);
      cy.get('#email').should('have.value', '');
      signupPage.setFirstName(userData.firstname);
      signupPage.setLastName(userData.lastname);
      signupPage.setPassword(password);
      signupPage.setConfirmPassword(password);
      signupPage.createAccount();
      cy.wait(3000);
      handleFileOperations('Test 10:Running signup With Missing Email',userData.lastname + ' ' + userData.firstname,' ',email,password,password);
      cy.get('.font_s7').should('contain', 'Email is required');
      checkUrlAndLog('https://test.eventzet.com/#/Eventshell/Signup','Test 10 is successful: Email is required validation is visible');

    }),




    // //test 11

    it("Test 11:Running signup with n no of users", () => {

      for (let i = 1; i <= 2; i++) {
        const userData = testData.generateRandomUserData();
        const email = userData.email;
        const password = userData.password;
        setupPage();
        signupPage.signUpClick();
        cy.wait(1000);
        signupPage.setEmail(email);
        signupPage.setFirstName(userData.firstname);
        signupPage.setLastName(userData.lastname);
        signupPage.setPassword(password);
        signupPage.setConfirmPassword(password);
        signupPage.createAccount();
        cy.wait(7000);
        handleFileOperations('Test 13:Running signup With  n no of users',userData.lastname + ' ' + userData.firstname,email,email,password,password);
        signupPage.successPopUpClick();
      }
      checkUrlAndLog('https://test.eventzet.com/#/Eventshell/Eventlogin','Test 13 is successful: User Registered Successfuly');

    }),
    // //test 12



    it("Test 12:Running Signup With LowerCase Password ", () => {
      const userData = testData.generateRandomUserData();
      const email = userData.email;
      userPassword = 'password'
      setupPage();
      signupPage.signUpClick();
      cy.wait(1000);
      signupPage.setEmail(email);
      signupPage.setFirstName(userData.firstname);
      signupPage.setLastName(userData.lastname);
      signupPage.setPassword(userPassword);
      signupPage.setConfirmPassword(userPassword);
      signupPage.createAccount();
      cy.wait(7000);
      handleFileOperations('Test 14:Running signup With  With LowerCase Password ',userData.lastname + ' ' + userData.firstname,email,email,userPassword,userPassword);
      signupPage.successPopUpClick();
      checkUrlAndLog('https://test.eventzet.com/#/Eventshell/Eventlogin','Test 13 is successful: User Registered Successfuly');

    }),
    // //test 13


    it("Test 13:Running Signup With UpperCase Password ", () => {
      const userData = testData.generateRandomUserData();
      const email = userData.email;
      userPassword = 'PASSWORD'
      setupPage();
      signupPage.signUpClick();
      cy.wait(1000);
      signupPage.setEmail(email);
      signupPage.setFirstName(userData.firstname);
      signupPage.setLastName(userData.lastname);
      signupPage.setPassword(userPassword);
      signupPage.setConfirmPassword(userPassword);
      signupPage.createAccount();
      cy.wait(7000);
      handleFileOperations('Test 15:Running signup With  With UpperCase Password ',userData.lastname + ' ' + userData.firstname,email,email,userPassword,userPassword);
      signupPage.successPopUpClick();
      checkUrlAndLog('https://test.eventzet.com/#/Eventshell/Eventlogin','Test 13 is successful: User Registered Successfuly');
    })

  ]

};
