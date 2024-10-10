import CreateEventCustomerDetails from '../../e2e/Pages/createEventCustomerDetailsPages.js';
const { readDataFromFile, writeDataToFile, clearDataInFile } = require('../ExternalFiles/fileOperations.js');
const baseUrl = Cypress.config('baseUrl');
var dateCalculations = require('../ExternalFiles/dateCalculations.js');
const filename = 'cypress/fixtures/createEventAddTicketRead.json';
const cd = new CreateEventCustomerDetails();

module.exports = {

   CreateEventCustomerDetailsTests: [

      //test 1

      it("Test 1:Check customer details page title", () => {
         cy.visit(baseUrl);
         cy.wait(2000);
         cd.clickLoginMenu();
         readDataFromFile(filename).then((list) => {

            cd.inputEmail(list.useremail);
            cy.scrollTo(0, 0);
            cd.inputPassword(list.userpassword);
         });

         cd.loginClick();
         cy.wait(6000);
         cd.clickMyEvents();
         cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SaleStatus').as('myEventsData');
         cy.wait('@myEventsData', { timeout: 25000 });
         //   cy.wait(25000);

         cd.clickEventEditButton();
         cy.intercept('GET', '/api/BasicInfo/GetEventLocation?EventID=*').as('basicInfoData');
         cy.wait('@basicInfoData', { timeout: 25000 });
         //   cy.wait(13000);
         cd.clickSaveButton();
         cy.wait(4000);
         cd.clickDetailsSaveButton();
         cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=PromoCodeEnd').as('addTicketsData');
         cy.wait('@addTicketsData', { timeout: 25000 });
         cd.clickTierCloseIcon();
         cd.clickAddTicketContinueButton();
         cy.wait(4000);
         cd.checkTitle();
         cy.wait(1000);

         cy.log('Customer details title is present in the page ');
      }),
      //test 2


      it("Test 2:Check whether user can add qustions", () => {
         cy.visit(baseUrl);
         cy.wait(2000);
         cd.clickLoginMenu();
         readDataFromFile(filename).then((list) => {

            cd.inputEmail(list.useremail);
            cy.scrollTo(0, 0);
            cd.inputPassword(list.userpassword);
         });

         cd.loginClick();
         cy.wait(6000);
         cd.clickMyEvents();
         cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SaleStatus').as('myEventsData');
         cy.wait('@myEventsData', { timeout: 25000 });
         //   cy.wait(25000);

         cd.clickEventEditButton();
         cy.intercept('GET', '/api/BasicInfo/GetEventLocation?EventID=*').as('basicInfoData');
         cy.wait('@basicInfoData', { timeout: 25000 });
         //   cy.wait(13000);
         cd.clickSaveButton();
         cy.wait(4000);
         cd.clickDetailsSaveButton()
         cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=PromoCodeEnd').as('addTicketsData');
         cy.wait('@addTicketsData', { timeout: 25000 });
         cd.clickTierCloseIcon();
         cd.clickAddTicketContinueButton();
         cy.wait(4000);

         cd.clickAddQuestionButton();
         cy.wait(2000);
         cd.checkQustionBoxPopup();
         cy.wait(1000);
         readDataFromFile(filename).then((list) => {

            cd.inputQustion(list.question);
            cy.wait(1000);
            cd.saveQuestion();
            cy.wait(1000);
            cy.contains(list.question).should('exist');

         });

         cy.log('Question added successfully');
      }),
      //test 3

      it("Test 3:Check whether user can save customer details page", () => {
         cy.visit(baseUrl);
         cy.wait(2000);
         cd.clickLoginMenu();
         readDataFromFile(filename).then((list) => {

            cd.inputEmail(list.useremail);
            cy.scrollTo(0, 0);
            cd.inputPassword(list.userpassword);
         });

         cd.loginClick();
         cy.wait(6000);
         cd.clickMyEvents();
         cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SaleStatus').as('myEventsData');
         cy.wait('@myEventsData', { timeout: 25000 });
         //   cy.wait(25000);

         cd.clickEventEditButton();
         cy.intercept('GET', '/api/BasicInfo/GetEventLocation?EventID=*').as('basicInfoData');
         cy.wait('@basicInfoData', { timeout: 25000 });
         //   cy.wait(13000);
         cd.clickSaveButton();
         cy.wait(4000);
         cd.clickDetailsSaveButton()
         cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=PromoCodeEnd').as('addTicketsData');
         cy.wait('@addTicketsData', { timeout: 25000 });
         cd.clickTierCloseIcon();
         cd.clickAddTicketContinueButton();
         cy.wait(4000);
         cd.clickCustomerDetailsSaveButton();
         cy.wait(3000);
         cy.scrollTo(0, 0);
         cy.wait(3000);
         cy.url().should('include', 'https://test.eventzet.com/#/events/Dashboard/Publishevent');

         cy.log('Customer details page saved successfully');
      }),


      it("Test 4:Check whether user can delete qustions", () => {

         cy.visit(baseUrl);
         cy.wait(2000);
         cd.clickLoginMenu();
         readDataFromFile(filename).then((list) => {

            cd.inputEmail(list.useremail);
            cy.scrollTo(0, 0);
            cd.inputPassword(list.userpassword);
         });

         cd.loginClick();
         cy.wait(6000);
         cd.clickMyEvents();
         cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SaleStatus').as('myEventsData');
         cy.wait('@myEventsData', { timeout: 25000 });
         //   cy.wait(25000);

         cd.clickEventEditButton();
         cy.intercept('GET', '/api/BasicInfo/GetEventLocation?EventID=*').as('basicInfoData');
         cy.wait('@basicInfoData', { timeout: 25000 });
         //   cy.wait(13000);
         cd.clickSaveButton();
         cy.wait(4000);
         cd.clickDetailsSaveButton()
         cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=PromoCodeEnd').as('addTicketsData');
         cy.wait('@addTicketsData', { timeout: 25000 });
         cd.clickTierCloseIcon();

         cd.clickAddTicketContinueButton();
         cy.wait(4000);
         readDataFromFile(filename).then((list) => {

            cd.clickAddQuestionButton();
            cd.inputQustion(list.question);
            cy.wait(1000);
            cd.saveQuestion();

         });
         cy.wait(2000);
         cd.deleteQuestionIcon();


         cy.log('Question deleted successfully');
      }),
      //test 4



      it("Test 5:Check whether user can add special instruction", () => {

         cy.visit(baseUrl);
         cy.wait(2000);
         cd.clickLoginMenu();
         readDataFromFile(filename).then((list) => {

            cd.inputEmail(list.useremail);
            cy.scrollTo(0, 0);
            cd.inputPassword(list.userpassword);
         });

         cd.loginClick();
         cy.wait(6000);
         cd.clickMyEvents();
         cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SaleStatus').as('myEventsData');
         cy.wait('@myEventsData', { timeout: 25000 });
         //   cy.wait(25000);

         cd.clickEventEditButton();
         cy.intercept('GET', '/api/BasicInfo/GetEventLocation?EventID=*').as('basicInfoData');
         cy.wait('@basicInfoData', { timeout: 25000 });
         //   cy.wait(13000);
         cd.clickSaveButton();
         cy.wait(4000);
         cd.clickDetailsSaveButton()
         cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=PromoCodeEnd').as('addTicketsData');
         cy.wait('@addTicketsData', { timeout: 25000 });
         cd.clickTierCloseIcon();

         cd.clickAddTicketContinueButton();
         cy.wait(6000);
         readDataFromFile(filename).then((list) => {

            cd.inputSpecialInstruction(list.instruction);

            cy.log('Special instruction added successfully');
         });

      }),
      //test 5


      it("Test 6:Check whether user can edit special instruction", () => {

         cy.visit(baseUrl);
         cy.wait(3000);
         cd.clickLoginMenu();
         readDataFromFile(filename).then((list) => {

            cd.inputEmail(list.useremail);
            cy.scrollTo(0, 0);
            cd.inputPassword(list.userpassword);
         });

         cd.loginClick();
         cy.wait(6000);
         cd.clickMyEvents();
         cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SaleStatus').as('myEventsData');
         cy.wait('@myEventsData', { timeout: 25000 });
         //   cy.wait(25000);

         cd.clickEventEditButton();
         cy.intercept('GET', '/api/BasicInfo/GetEventLocation?EventID=*').as('basicInfoData');
         cy.wait('@basicInfoData', { timeout: 25000 });
         //   cy.wait(13000);
         cd.clickSaveButton();
         cy.wait(4000);
         cd.clickDetailsSaveButton()
         cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=PromoCodeEnd').as('addTicketsData');
         cy.wait('@addTicketsData', { timeout: 25000 });
         cd.clickTierCloseIcon();

         cd.clickAddTicketContinueButton();
         cy.wait(6000);

         readDataFromFile(filename).then((list) => {

            cd.inputSpecialInstruction(list.instruction);
            cy.wait(1000);
            cd.inputSpecialInstruction(list.instruction1);

         });
         cy.log('Special instruction edited successfully');
      }),
      //test 6


      it("Test 7:Check whether user can add message for email", () => {

         cy.visit(baseUrl);
         cy.wait(2000);
         cd.clickLoginMenu();
         readDataFromFile(filename).then((list) => {

            cd.inputEmail(list.useremail);
            cy.scrollTo(0, 0);
            cd.inputPassword(list.userpassword);
         });

         cd.loginClick();
         cy.wait(6000);
         cd.clickMyEvents();
         cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SaleStatus').as('myEventsData');
         cy.wait('@myEventsData', { timeout: 25000 });
         //   cy.wait(25000);

         cd.clickEventEditButton();
         cy.intercept('GET', '/api/BasicInfo/GetEventLocation?EventID=*').as('basicInfoData');
         cy.wait('@basicInfoData', { timeout: 25000 });
         //   cy.wait(13000);
         cd.clickSaveButton();
         cy.wait(4000);
         cd.clickDetailsSaveButton()
         cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=PromoCodeEnd').as('addTicketsData');
         cy.wait('@addTicketsData', { timeout: 25000 });
         cd.clickTierCloseIcon();
         cd.clickAddTicketContinueButton();
         cy.wait(6000);
         readDataFromFile(filename).then((list) => {

            cd.inputMessage(list.message);

         });
         cy.wait(2000);

         cy.log('Messages added successfully');
      }),
      //test 7

      it("Test 8:Check whether user can edit message for email", () => {

         cy.visit(baseUrl);
         cy.wait(2000);
         cd.clickLoginMenu();
         readDataFromFile(filename).then((list) => {

            cd.inputEmail(list.useremail);
            cy.scrollTo(0, 0);
            cd.inputPassword(list.userpassword);
         });

         cd.loginClick();
         cy.wait(6000);
         cd.clickMyEvents();
         cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SaleStatus').as('myEventsData');
         cy.wait('@myEventsData', { timeout: 25000 });
         //   cy.wait(25000);

         cd.clickEventEditButton();
         cy.intercept('GET', '/api/BasicInfo/GetEventLocation?EventID=*').as('basicInfoData');
         cy.wait('@basicInfoData', { timeout: 25000 });
         //   cy.wait(13000);
         cd.clickSaveButton();
         cy.wait(4000);
         cd.clickDetailsSaveButton()
         cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=PromoCodeEnd').as('addTicketsData');
         cy.wait('@addTicketsData', { timeout: 25000 });
         cd.clickTierCloseIcon();

         cd.clickAddTicketContinueButton();
         cy.wait(6000);

         readDataFromFile(filename).then((list) => {

            cd.inputMessage(list.message);
            cy.wait(1000);
            cd.inputMessage(list.message1);

         });

         cy.log('Message edited successfully');
      }),


   ]
};