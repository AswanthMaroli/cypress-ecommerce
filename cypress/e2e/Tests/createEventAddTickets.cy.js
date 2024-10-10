import CreateEventAddTickets from '../../e2e/Pages/createEventAddTicketsPages.js';
const { readDataFromFile, writeDataToFile, clearDataInFile } = require('../ExternalFiles/fileOperations.js');
const baseUrl = Cypress.config('baseUrl');
var dateCalculations = require('../ExternalFiles/dateCalculations.js');
const filename = 'cypress/fixtures/createEventAddTicketRead.json';
const filename2 = 'cypress/fixtures/createEventAddTicketWrite.json';
const at = new CreateEventAddTickets();
const startDate = dateCalculations.calculateSevenDaysLater();
const endDate = dateCalculations.calculateSevenDaysLater();
const saleStartDate = dateCalculations.getCurrentDate();

module.exports = {

  CreateEventAddTicketTests: [

    //test 1


    it("Test 1:Check Add tier popup is visible or not", () => {
      cy.visit(baseUrl);
      cy.wait(2000);
      at.clickLoginMenu();
      readDataFromFile(filename).then((list) => {

        at.inputEmail(list.useremail);
        cy.scrollTo(0, 0);
        at.inputPassword(list.userpassword);
      });

      at.loginClick();
      cy.wait(6000);
      at.clickMyEvents();
      cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SaleStatus').as('myEventsData');
      cy.wait('@myEventsData', { timeout: 25000 });
      //   cy.wait(25000);

      at.clickEventEditButton();
      cy.intercept('GET', '/api/BasicInfo/GetEventLocation?EventID=*').as('basicInfoData');
      cy.wait('@basicInfoData', { timeout: 25000 });
      //   cy.wait(13000);
      at.clickSaveButton();
      cy.wait(4000);
      at.clickDetailsSaveButton()
      cy.wait(3000);
      at.checkAddTierPopup();
      cy.log('Add tier popup is visible in the add tickets page');

      at.clickTierCloseIcon();
      cy.log(" Add tier close icon is working ");
      cy.wait(2000);
      at.checkTitle();

      cy.log('ADD TICKETS Title is present in the page');


    }),

    // test 2


    it('Test 2:Check whether default  tier is visible or not', () => {
      cy.visit(baseUrl);
      cy.wait(2000);
      at.clickLoginMenu();
      readDataFromFile(filename).then((list) => {

        at.inputEmail(list.useremail);
        cy.scrollTo(0, 0);
        at.inputPassword(list.userpassword);
      });

      at.loginClick();
      cy.wait(6000);
      at.clickMyEvents();
      cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SaleStatus').as('myEventsData');
      cy.wait('@myEventsData', { timeout: 25000 });
      //   cy.wait(25000);

      at.clickEventEditButton();
      cy.intercept('GET', '/api/BasicInfo/GetEventLocation?EventID=*').as('basicInfoData');
      cy.wait('@basicInfoData', { timeout: 25000 });
      //   cy.wait(13000);
      at.clickSaveButton();
      cy.wait(4000);
      at.clickDetailsSaveButton();
      cy.wait(3000);
      at.clickContinueButton();
      cy.wait(1000);
      readDataFromFile(filename2).then((list) => {
        let defaultTier = list.defaultTier;
        at.clickAddEditTier();
        cy.xpath(`//td[normalize-space()='${defaultTier}']`).should('contain', defaultTier);
      });
      cy.wait(2000);

      cy.log('Default  tier is present in tier list');
    }),
    //test 3


    it('Test 3:Check whether user can edit default tier', () => {
      cy.visit(baseUrl);
      cy.wait(2000);
      at.clickLoginMenu();
      readDataFromFile(filename).then((list) => {

        at.inputEmail(list.useremail);
        cy.scrollTo(0, 0);
        at.inputPassword(list.userpassword);
      });

      at.loginClick();
      cy.wait(6000);
      at.clickMyEvents();
      cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SaleStatus').as('myEventsData');
      cy.wait('@myEventsData', { timeout: 25000 });
      //   cy.wait(25000);

      at.clickEventEditButton();
      cy.intercept('GET', '/api/BasicInfo/GetEventLocation?EventID=*').as('basicInfoData');
      cy.wait('@basicInfoData', { timeout: 25000 });
      //   cy.wait(13000);
      at.clickSaveButton();
      cy.wait(4000);
      at.clickDetailsSaveButton();
      cy.wait(3000);
      at.clickEditTier();
      cy.wait(1000);
      readDataFromFile(filename).then((list) => {

        at.inputTierName(list.tiername);
        cy.wait(2000);
        at.saveTier();
        cy.wait(2000);
        let defaultTier = list.tiername;
        cy.xpath(`//td[normalize-space()='${defaultTier}']`).should('contain', defaultTier);

        writeDataToFile(filename2, { defaultTier: list.tiername });
      });
      cy.wait(2000);

      cy.log('Edit default tier test is successful');
    }),
    //test 4


    it('Test 4:Check whether user can delete default tier', () => {
      cy.visit(baseUrl);
      cy.wait(2000);
      at.clickLoginMenu();
      readDataFromFile(filename).then((list) => {

        at.inputEmail(list.useremail);
        cy.scrollTo(0, 0);
        at.inputPassword(list.userpassword);
      });

      at.loginClick();
      cy.wait(6000);
      at.clickMyEvents();
      cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SaleStatus').as('myEventsData');
      cy.wait('@myEventsData', { timeout: 25000 });
      //   cy.wait(25000);

      at.clickEventEditButton();
      cy.intercept('GET', '/api/BasicInfo/GetEventLocation?EventID=*').as('basicInfoData');
      cy.wait('@basicInfoData', { timeout: 25000 });
      //   cy.wait(13000);
      at.clickSaveButton();
      cy.wait(4000);
      at.clickDetailsSaveButton()
      cy.wait(4000);
      at.clickDeleteTier();
      cy.wait(4000);
      cy.log('Default tier deleted test is successful');

    }),
    // test 5


    it('Test 5:Check whether user can add multiple tiers', () => {
      cy.visit(baseUrl);
      cy.wait(2000);
      at.clickLoginMenu();
      readDataFromFile(filename).then((list) => {

        at.inputEmail(list.useremail);
        cy.scrollTo(0, 0);
        at.inputPassword(list.userpassword);
      });

      at.loginClick();
      cy.wait(6000);
      at.clickMyEvents();
      cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SaleStatus').as('myEventsData');
      cy.wait('@myEventsData', { timeout: 25000 });
      //   cy.wait(25000);

      at.clickEventEditButton();
      cy.intercept('GET', '/api/BasicInfo/GetEventLocation?EventID=*').as('basicInfoData');
      cy.wait('@basicInfoData', { timeout: 25000 });
      //   cy.wait(13000);
      at.clickSaveButton();
      cy.wait(4000);
      at.clickDetailsSaveButton()
      cy.wait(4000);

      readDataFromFile(filename).then((list) => {

        at.inputTierName(list.tiername);
        cy.wait(2000);
        at.saveTier();
        cy.wait(2000);
        at.inputTierName(list.tiername2);
        cy.wait(2000);
        at.saveTier();
        cy.log('Added two tiers ');
      });

      cy.log('Multiple tier creation test is successful');

    }),
    //test 6


    it("Test 6:Check  tier name field validation", () => {
      cy.visit(baseUrl);
      cy.wait(2000);
      at.clickLoginMenu();
      readDataFromFile(filename).then((list) => {

        at.inputEmail(list.useremail);
        cy.scrollTo(0, 0);
        at.inputPassword(list.userpassword);
      });

      at.loginClick();
      cy.wait(6000);
      at.clickMyEvents();
      cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SaleStatus').as('myEventsData');
      cy.wait('@myEventsData', { timeout: 25000 });
      //   cy.wait(25000);

      at.clickEventEditButton();
      cy.intercept('GET', '/api/BasicInfo/GetEventLocation?EventID=*').as('basicInfoData');
      cy.wait('@basicInfoData', { timeout: 25000 });
      //   cy.wait(13000);
      at.clickSaveButton();
      cy.wait(4000);
      at.clickDetailsSaveButton()
      cy.wait(3000);
      cy.get('.col-md-6 > .btn').click({ force: true });
      cy.wait(1000);
      cy.get('.invalid-feedback > .font_s7').should('contain', 'Tier Name is Required');
      cy.wait(2000);

      cy.log('Tier name validation is working');
    }),
    // test 7


    it("Test 7:Check whether user can create a ticket or not", () => {
      cy.visit(baseUrl);
      cy.wait(2000);
      at.clickLoginMenu();
      readDataFromFile(filename).then((list) => {

        at.inputEmail(list.useremail);
        cy.scrollTo(0, 0);
        at.inputPassword(list.userpassword);
      });

      at.loginClick();
      cy.wait(6000);
      at.clickMyEvents();
      cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SaleStatus').as('myEventsData');
      cy.wait('@myEventsData', { timeout: 25000 });
      //   cy.wait(25000);

      at.clickEventEditButton();
      cy.intercept('GET', '/api/BasicInfo/GetEventLocation?EventID=*').as('basicInfoData');
      cy.wait('@basicInfoData', { timeout: 25000 });
      //   cy.wait(13000);tButton();
      // cy.wait(13000);
      at.clickSaveButton();
      cy.wait(4000);
      at.clickDetailsSaveButton()
      cy.wait(3000);
      at.clickTierCloseIcon();
      cy.wait(2000);
      at.clickAddTicket();
      at.checkAddTicketPopup();
      cy.log('Add ticket popup is visible');
      readDataFromFile(filename).then((list) => {

        at.selectPricing(list.freeevents);
        cy.wait(1000);
        at.selectTier(list.firstTier);
        at.inputTicketName(list.ticketname2);
        at.inputAvailableQuantity(list.availablequantity);
        cy.wait(1000);
        at.inputMaximunNumberOfTicket(list.maxnumber);
        cy.wait(1000);
        at.inputSalesStartDate(startDate);
        at.inputSalesStartTime(list.salesstarttime);
        cy.wait(1000);
        at.inputSalesEndDate(endDate);
        at.inputSalesEndTime(list.salesendtime);
        cy.wait(1000);
        at.saveTicket();
        cy.wait(4000);

      });
      at.clickAddTicketContinueButton();
      cy.wait(3000);
      cy.log('Free ticket is created:Create ticket test is successful');
    }),
    //test 8



    it("Test 8:Check  whether user can edit ticket", () => {
      cy.visit(baseUrl);
      cy.wait(2000);
      at.clickLoginMenu();
      readDataFromFile(filename).then((list) => {

        at.inputEmail(list.useremail);
        cy.scrollTo(0, 0);
        at.inputPassword(list.userpassword);
      });

      at.loginClick();
      cy.wait(6000);
      at.clickMyEvents();
      cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SaleStatus').as('myEventsData');
      cy.wait('@myEventsData', { timeout: 25000 });
      //   cy.wait(25000);

      at.clickEventEditButton();
      cy.intercept('GET', '/api/BasicInfo/GetEventLocation?EventID=*').as('basicInfoData');
      cy.wait('@basicInfoData', { timeout: 25000 });
      //   cy.wait(13000);
      at.clickSaveButton();
      cy.wait(4000);
      at.clickDetailsSaveButton()
      cy.wait(3000);
      at.clickTierCloseIcon();
      cy.wait(2000);
      at.editTicket();
      at.checkAddTicketPopup();
      readDataFromFile(filename).then((list) => {

        at.inputTicketName(list.ticketname);
        cy.wait(1000);
        at.inputMaximunNumberOfTicket('10');
        cy.wait(1000);

      });
      at.saveTicket();

      cy.log('Edit ticket test is successful');
    }),
    //test 9


    it("Test 9:Check  whether user can delete ticket", () => {
      cy.visit(baseUrl);
      cy.wait(2000);
      at.clickLoginMenu();
      readDataFromFile(filename).then((list) => {

        at.inputEmail(list.useremail);
        cy.scrollTo(0, 0);
        at.inputPassword(list.userpassword);
      });

      at.loginClick();
      cy.wait(6000);
      at.clickMyEvents();
      cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SaleStatus').as('myEventsData');
      cy.wait('@myEventsData', { timeout: 25000 });
      //   cy.wait(25000);

      at.clickEventEditButton();
      cy.intercept('GET', '/api/BasicInfo/GetEventLocation?EventID=*').as('basicInfoData');
      cy.wait('@basicInfoData', { timeout: 25000 });
      //   cy.wait(13000);
      at.clickSaveButton();
      cy.wait(4000);
      at.clickDetailsSaveButton()
      cy.wait(3000);
      at.clickTierCloseIcon();
      cy.wait(2000);
      at.deleteTicket();

      cy.log('Delete ticket test is successful');
    }),
    //test 10


    it("Test 10:Check whether user can create Free and Paid ticket", () => {
      cy.visit(baseUrl);
      cy.wait(2000);
      at.clickLoginMenu();
      readDataFromFile(filename).then((list) => {

        at.inputEmail(list.useremail);
        cy.scrollTo(0, 0);
        at.inputPassword(list.userpassword);
      });

      at.loginClick();
      cy.wait(6000);
      at.clickMyEvents();
      cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SaleStatus').as('myEventsData');
      cy.wait('@myEventsData', { timeout: 25000 });
      //   cy.wait(25000);

      at.clickEventEditButton();
      cy.intercept('GET', '/api/BasicInfo/GetEventLocation?EventID=*').as('basicInfoData');
      cy.wait('@basicInfoData', { timeout: 25000 });
      //   cy.wait(13000);
      at.clickSaveButton();
      cy.wait(4000);
      at.clickDetailsSaveButton()
      cy.wait(3000);
      at.clickTierCloseIcon();
      cy.wait(2000);
      at.clickAddTicket();
      at.checkAddTicketPopup();
      cy.wait(3000);
      cy.log('Add ticket popup is visible');
      readDataFromFile(filename).then((list) => {

        at.selectPricing(list.freeevents);  //adding free ticket
        cy.wait(1000);
        at.selectTier(list.firstTier);
        at.inputTicketName(list.ticketname);
        at.inputAvailableQuantity(list.availablequantity);
        cy.wait(1000);
        at.inputMaximunNumberOfTicket(list.maxnumber);
        cy.wait(1000);
        at.inputSalesStartDate(saleStartDate);
        at.inputSalesStartTime(list.salesstarttime);
        cy.wait(1000);
        at.inputSalesEndDate(endDate);
        at.inputSalesEndTime(list.salesendtime);
        cy.wait(1000);
        at.saveTicket();
        cy.wait(2000);

        at.clickAddTicket();        //adding Paid ticket
        at.checkAddTicketPopup();
        cy.wait(3000);
        at.selectPricing(list.paidevents);
        cy.wait(1000);
        at.selectTier(list.firstTier);
        at.inputTicketName(list.ticketname1);
        at.inputAvailableQuantity(list.availablequantity);
        cy.wait(1000);
        at.inputTicketPrice(list.price1);
        cy.wait(1000);
        at.inputMaximunNumberOfTicket(list.maxnumber);
        cy.wait(1000);
        at.inputSalesStartDate(saleStartDate);
        at.inputSalesStartTime(list.salesstarttime);
        cy.wait(1000);
        at.inputSalesEndDate(endDate);
        at.inputSalesEndTime(list.salesendtime);
        cy.wait(1000);
        at.saveTicket();
        cy.wait(3000);

      });

      at.clickAddTicketContinueButton();
      cy.wait(3000);

      cy.log('Free ticket and Paid ticket is created ');
    }),
    //test 11



    it("Test 11:Check whether user can create addon", () => {
      cy.visit(baseUrl);
      cy.wait(2000);
      at.clickLoginMenu();
      readDataFromFile(filename).then((list) => {

        at.inputEmail(list.useremail);
        cy.scrollTo(0, 0);
        at.inputPassword(list.userpassword);
      });

      at.loginClick();
      cy.wait(6000);
      at.clickMyEvents();
      cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SaleStatus').as('myEventsData');
      cy.wait('@myEventsData', { timeout: 25000 });
      //   cy.wait(25000);

      at.clickEventEditButton();
      cy.intercept('GET', '/api/BasicInfo/GetEventLocation?EventID=*').as('basicInfoData');
      cy.wait('@basicInfoData', { timeout: 25000 });
      //   cy.wait(13000);
      at.clickSaveButton();
      cy.wait(4000);
      at.clickDetailsSaveButton()
      cy.wait(3000);
      at.clickTierCloseIcon();
      cy.wait(2000);
      at.clickAddonTab();
      cy.wait(4000);
      at.clickCreateAddonButton();
      cy.wait(1000);
      at.checkAddonPopup();
      readDataFromFile(filename).then((list) => {

        at.inputAddonName(list.addonName1);
        at.inputAddonQuantity(list.addonQuantity1);
        cy.wait(1000);
        at.inputAddonPrice(list.addonPrice1);
        at.selectAddonTier();
        cy.wait(1000);
      });
      at.saveAddon();
      cy.wait(2000);
      at.clickAddTicketContinueButton();
      cy.wait(3000);
      cy.log('Addon creation test is successful');
    }),
    //test 12


    it("Test 12:Check whether user can edit addon", () => {

      cy.visit(baseUrl);
      cy.wait(2000);
      at.clickLoginMenu();
      readDataFromFile(filename).then((list) => {

        at.inputEmail(list.useremail);
        cy.scrollTo(0, 0);
        at.inputPassword(list.userpassword);
      });

      at.loginClick();
      cy.wait(6000);
      at.clickMyEvents();
      cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SaleStatus').as('myEventsData');
      cy.wait('@myEventsData', { timeout: 25000 });
      //   cy.wait(25000);

      at.clickEventEditButton();
      cy.intercept('GET', '/api/BasicInfo/GetEventLocation?EventID=*').as('basicInfoData');
      cy.wait('@basicInfoData', { timeout: 25000 });
      //   cy.wait(13000);
      at.clickSaveButton();
      cy.wait(4000);
      at.clickDetailsSaveButton()
      cy.wait(3000);
      at.clickTierCloseIcon();
      cy.wait(2000);
      at.clickAddonTab();
      cy.wait(2000);
      at.editAddon();
      at.checkAddonPopup();
      cy.wait(2000);
      readDataFromFile(filename).then((list) => {

        at.inputAddonName(list.addonName2);
        at.inputAddonQuantity(list.addonQuantity2);
        cy.wait(1000);
        at.inputAddonPrice(list.addonPrice2);
        cy.wait(2000);
        at.selectAddonTier();
        cy.wait(1000);
      });
      at.saveAddon();

      cy.log('Addon edit test is successful');
    }),
    //test 13


    it("Test 13:Check whether user can delete addon", () => {
      cy.visit(baseUrl);
      cy.wait(2000);
      at.clickLoginMenu();
      readDataFromFile(filename).then((list) => {

        at.inputEmail(list.useremail);
        cy.scrollTo(0, 0);
        at.inputPassword(list.userpassword);
      });

      at.loginClick();
      cy.wait(6000);
      at.clickMyEvents();
      cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SaleStatus').as('myEventsData');
      cy.wait('@myEventsData', { timeout: 25000 });
      //   cy.wait(25000);

      at.clickEventEditButton();
      cy.intercept('GET', '/api/BasicInfo/GetEventLocation?EventID=*').as('basicInfoData');
      cy.wait('@basicInfoData', { timeout: 25000 });
      //   cy.wait(13000);
      at.clickSaveButton();
      cy.wait(4000);
      at.clickDetailsSaveButton()
      cy.wait(3000);
      at.clickTierCloseIcon();
      cy.wait(2000);
      at.clickAddonTab();

      cy.wait(3000);
      at.deleteAddon();
      cy.wait(2000);

      cy.log('Addon delete test is successful');
    }),
    //test 14


    it("Test 14:Check whether user can create multiple addon", () => {
      cy.visit(baseUrl);
      cy.wait(2000);
      at.clickLoginMenu();
      readDataFromFile(filename).then((list) => {

        at.inputEmail(list.useremail);
        cy.scrollTo(0, 0);
        at.inputPassword(list.userpassword);
      });

      at.loginClick();
      cy.wait(6000);
      at.clickMyEvents();
      cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SaleStatus').as('myEventsData');
      cy.wait('@myEventsData', { timeout: 25000 });
      //   cy.wait(25000);

      at.clickEventEditButton();
      cy.intercept('GET', '/api/BasicInfo/GetEventLocation?EventID=*').as('basicInfoData');
      cy.wait('@basicInfoData', { timeout: 25000 });
      //   cy.wait(13000);
      at.clickSaveButton();
      cy.wait(4000);
      at.clickDetailsSaveButton()
      cy.wait(3000);
      at.clickTierCloseIcon();
      cy.wait(2000);
      at.clickAddonTab();
      cy.wait(2000);
      at.clickCreateAddonButton();
      cy.wait(2000);
      at.checkAddonPopup();
      readDataFromFile(filename).then((list) => {

        at.inputAddonName(list.addonName1);
        at.inputAddonQuantity(list.addonQuantity1);
        cy.wait(1000);
        at.inputAddonPrice(list.addonPrice1);
        at.selectAddonTier();
        cy.wait(1000);
        at.saveAddon();
        cy.wait(2000);
        at.clickCreateAddonButton();
        cy.wait(1000);
        at.inputAddonName(list.addonName2);
        at.inputAddonQuantity(list.addonQuantity2);
        cy.wait(1000);
        at.inputAddonPrice(list.addonPrice2);
        at.selectAddonTier();
        cy.wait(1000);
        at.saveAddon();
        cy.wait(2000);
      });
      at.clickAddTicketContinueButton();
      cy.wait(3000);
      cy.log('Multiple addon creation test is successful');
    }),
    //test 15


    it("Test 15:Check whether user can save the tickets page", () => {
      cy.visit(baseUrl);
      cy.wait(2000);
      at.clickLoginMenu();
      readDataFromFile(filename).then((list) => {

        at.inputEmail(list.useremail);
        cy.scrollTo(0, 0);
        at.inputPassword(list.userpassword);
      });

      at.loginClick();
      cy.wait(6000);
      at.clickMyEvents();
      cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SaleStatus').as('myEventsData');
      cy.wait('@myEventsData', { timeout: 25000 });
      //   cy.wait(25000);

      at.clickEventEditButton();
      cy.intercept('GET', '/api/BasicInfo/GetEventLocation?EventID=*').as('basicInfoData');
      cy.wait('@basicInfoData', { timeout: 25000 });
      //   cy.wait(13000);
      at.clickSaveButton();
      cy.wait(4000);
      at.clickDetailsSaveButton()
      cy.wait(6000);
      at.clickTierCloseIcon();
      cy.wait(2000);
      at.clickAddTicketContinueButton();
      cy.wait(6000);
      cy.url().should('include', 'https://test.eventzet.com/#/events/Dashboard/Customerdetails');

      cy.log('Tickets page saved successfully');

      cy.log("Check whether user can go to previous pages ");

      at.clickCustomerDetailsPreviousButton();
      cy.wait(5000);
      cy.url().should('include', 'https://test.eventzet.com/#/events/Dashboard/Addtickets');

    }),



  ]
};