import CreateEventPublish from '../../e2e/Pages/createEventPublishPages.js';
const { readDataFromFile, writeDataToFile, clearDataInFile } = require('.././ExternalFiles/fileOperations.js');
const baseUrl = Cypress.config('baseUrl');
var dateCalculations = require('.././ExternalFiles/dateCalculations.js');
const filename = 'cypress/fixtures/createEventAddTicketRead.json';
const p = new CreateEventPublish();

module.exports = {

    CreateEventPublishTests: [

        //test 1

        it("Test 1:Check Publish page title", () => {
            cy.visit(baseUrl);
            cy.wait(2000);
            p.clickLoginMenu();
            readDataFromFile(filename).then((list) => {

                p.inputEmail(list.useremail);
                cy.scrollTo(0, 0);
                p.inputPassword(list.userpassword);
            });

            p.loginClick();
            cy.wait(4000);
            p.clickMyEvents();
            cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SaleStatus').as('myEventsData');
            cy.wait('@myEventsData', { timeout: 25000 });
            // p.clickUnPublishButton();
            p.clickEventEditButton();
            cy.intercept('GET', '/api/BasicInfo/GetEventLocation?EventID=*').as('basicInfoData');
            cy.wait('@basicInfoData', { timeout: 25000 });

            p.clickSaveButton();
            cy.wait(4000);
            p.clickDetailsSaveButton()
            cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=PromoCodeEnd').as('addTicketsData');
            cy.wait('@addTicketsData', { timeout: 25000 });
            p.clickTierCloseIcon();
            p.clickAddTicketContinueButton();
            cy.wait(4000);
            p.clickCustomerDetailsSaveButton();
            cy.intercept('GET', '/api/CustomerInfo/GetCustomerInfo?EventID=*').as('publishPageData');
            cy.wait('@publishPageData', { timeout: 25000 });
            p.checkTitle();
            cy.wait(1000);

            cy.log('Publish page title is present in the page ');

            p.checkEventName();

            cy.log('Event name is present in the publish page ');

            p.clickEventPreview();
            cy.wait(2000);
            p.clickEventPreviewCloseIcon();
            cy.wait(1000);
            p.clickEventPreview();
            cy.wait(2000);
            p.clickEventPreviewCloseButton();
            cy.wait(1000);

            cy.log('Event preview is working');
        }),


        //test 4

        it("Test 2:Check user can enable service charge is given by the event creator button", () => {

            cy.visit(baseUrl);
            cy.wait(2000);
            p.clickLoginMenu();
            readDataFromFile(filename).then((list) => {

                p.inputEmail(list.useremail);
                cy.scrollTo(0, 0);
                p.inputPassword(list.userpassword);
            });

            p.loginClick();
            cy.wait(4000);
            p.clickMyEvents();
            cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SaleStatus').as('myEventsData');
            cy.wait('@myEventsData', { timeout: 25000 });
            //p.clickUnPublishButton();
            p.clickEventEditButton();

            cy.intercept('GET', '/api/BasicInfo/GetEventLocation?EventID=*').as('basicInfoData');
            cy.wait('@basicInfoData', { timeout: 25000 });
            p.clickSaveButton();
            cy.wait(4000);
            p.clickDetailsSaveButton()
            cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=PromoCodeEnd').as('addTicketsData');
            cy.wait('@addTicketsData', { timeout: 25000 });
            p.clickTierCloseIcon();

            p.clickAddTicketContinueButton();
            cy.wait(4000);
            p.clickCustomerDetailsSaveButton();
            cy.intercept('GET', '/api/CustomerInfo/GetCustomerInfo?EventID=*').as('publishPageData');
            cy.wait('@publishPageData', { timeout: 25000 });

            p.clickServiceChargeButton();
            cy.wait(2000);

            cy.log('Service charge is given by the event creator button is enabled');
        }),
        //test 5


        it("Test 3:Check user can enable accept refund requests button", () => {
            cy.visit(baseUrl);
            cy.wait(2000);
            p.clickLoginMenu();
            readDataFromFile(filename).then((list) => {

                p.inputEmail(list.useremail);
                cy.scrollTo(0, 0);
                p.inputPassword(list.userpassword);
            });

            p.loginClick();
            cy.wait(4000);
            p.clickMyEvents();
            cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SaleStatus').as('myEventsData');
            cy.wait('@myEventsData', { timeout: 25000 });
            p.clickEventEditButton();

            cy.intercept('GET', '/api/BasicInfo/GetEventLocation?EventID=*').as('basicInfoData');
            cy.wait('@basicInfoData', { timeout: 25000 });
            p.clickSaveButton();
            cy.wait(4000);
            p.clickDetailsSaveButton()
            cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=PromoCodeEnd').as('addTicketsData');
            cy.wait('@addTicketsData', { timeout: 25000 });
            p.clickTierCloseIcon();

            p.clickAddTicketContinueButton();
            cy.wait(4000);
            p.clickCustomerDetailsSaveButton();
            cy.intercept('GET', '/api/CustomerInfo/GetCustomerInfo?EventID=*').as('publishPageData');
            cy.wait('@publishPageData', { timeout: 25000 });

            p.clickRefundRequestButton();
            cy.wait(2000);

            cy.log('Accept refund request button is enabled');
        }),
        //test 6


        it("Test 4:Check user can save publish page without selecting refund policy in dropdown", () => {
            cy.visit(baseUrl);
            cy.wait(2000);
            p.clickLoginMenu();
            readDataFromFile(filename).then((list) => {

                p.inputEmail(list.useremail);
                cy.scrollTo(0, 0);
                p.inputPassword(list.userpassword);
            });

            p.loginClick();
            cy.wait(4000);
            p.clickMyEvents();
            cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SaleStatus').as('myEventsData');
            cy.wait('@myEventsData', { timeout: 25000 });
            p.clickEventEditButton();
            cy.intercept('GET', '/api/BasicInfo/GetEventLocation?EventID=*').as('basicInfoData');
            cy.wait('@basicInfoData', { timeout: 25000 });
            p.clickSaveButton();
            cy.wait(4000);
            p.clickDetailsSaveButton()
            cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=PromoCodeEnd').as('addTicketsData');
            cy.wait('@addTicketsData', { timeout: 25000 });
            p.clickTierCloseIcon();

            p.clickAddTicketContinueButton();
            cy.wait(4000);
            p.clickCustomerDetailsSaveButton();
            cy.intercept('GET', '/api/CustomerInfo/GetCustomerInfo?EventID=*').as('publishPageData');
            cy.wait('@publishPageData', { timeout: 25000 });

            p.clickRefundRequestButton();
            cy.wait(2000);
            p.saveEvent();
            cy.wait(6000);
            cy.get('.invalid-feedback').should('be.visible').should('contain', ' Please select Refund Policy');

            cy.log(' Please select Refund Policy validation is visible: Test is successful');
        }),
        //test 7


        it("Test 5:Check user can disable service charge is given by the event creator button", () => {
            cy.visit(baseUrl);
            cy.wait(2000);
            p.clickLoginMenu();
            readDataFromFile(filename).then((list) => {

                p.inputEmail(list.useremail);
                cy.scrollTo(0, 0);
                p.inputPassword(list.userpassword);
            });

            p.loginClick();
            cy.wait(4000);
            p.clickMyEvents();
            cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SaleStatus').as('myEventsData');
            cy.wait('@myEventsData', { timeout: 25000 });
            p.clickEventEditButton();

            cy.intercept('GET', '/api/BasicInfo/GetEventLocation?EventID=*').as('basicInfoData');
            cy.wait('@basicInfoData', { timeout: 25000 });
            p.clickSaveButton();
            cy.wait(6000);
            p.clickDetailsSaveButton()
            cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=PromoCodeEnd').as('addTicketsData');
            cy.wait('@addTicketsData', { timeout: 25000 });
            p.clickTierCloseIcon();

            p.clickAddTicketContinueButton();
            cy.wait(4000);
            p.clickCustomerDetailsSaveButton();
            cy.intercept('GET', '/api/CustomerInfo/GetCustomerInfo?EventID=*').as('publishPageData');
            cy.wait('@publishPageData', { timeout: 25000 });
            p.clickServiceChargeButton();
            cy.wait(3000);
            p.unCheckServiceChargeButton();

            cy.log('Service charge is given by the event creator button is disabled');
        }),
        //test 8


        it("Test 6:Check user can disable accept refund requests button", () => {
            cy.visit(baseUrl);
            cy.wait(2000);
            p.clickLoginMenu();
            readDataFromFile(filename).then((list) => {

                p.inputEmail(list.useremail);
                cy.scrollTo(0, 0);
                p.inputPassword(list.userpassword);
            });

            p.loginClick();
            cy.wait(4000);
            p.clickMyEvents();
            cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SaleStatus').as('myEventsData');
            cy.wait('@myEventsData', { timeout: 25000 });
            p.clickEventEditButton();

            cy.intercept('GET', '/api/BasicInfo/GetEventLocation?EventID=*').as('basicInfoData');
            cy.wait('@basicInfoData', { timeout: 25000 });
            p.clickSaveButton();
            cy.wait(6000);
            p.clickDetailsSaveButton()
            cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=PromoCodeEnd').as('addTicketsData');
            cy.wait('@addTicketsData', { timeout: 25000 });
            p.clickTierCloseIcon();

            p.clickAddTicketContinueButton();
            cy.wait(4000);
            p.clickCustomerDetailsSaveButton();
            cy.intercept('GET', '/api/CustomerInfo/GetCustomerInfo?EventID=*').as('publishPageData');
            cy.wait('@publishPageData', { timeout: 25000 });
            p.clickRefundRequestButton();
            cy.wait(3000);
            p.unCheckRefundRequestButton();

            cy.log('Accept refund request button is disabled');
        }),
        // test 9


        it("Test 7:Check whether user can check tax settings", () => {
            cy.visit(baseUrl);
            cy.wait(2000);
            p.clickLoginMenu();
            readDataFromFile(filename).then((list) => {

                p.inputEmail(list.useremail);
                cy.scrollTo(0, 0);
                p.inputPassword(list.userpassword);
            });

            p.loginClick();
            cy.wait(4000);
            p.clickMyEvents();
            cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SaleStatus').as('myEventsData');
            cy.wait('@myEventsData', { timeout: 25000 });
            p.clickEventEditButton();

            cy.intercept('GET', '/api/BasicInfo/GetEventLocation?EventID=*').as('basicInfoData');
            cy.wait('@basicInfoData', { timeout: 25000 });
            p.clickSaveButton();
            cy.wait(6000);
            p.clickDetailsSaveButton()
            cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=PromoCodeEnd').as('addTicketsData');
            cy.wait('@addTicketsData', { timeout: 25000 });
            p.clickTierCloseIcon();

            p.clickAddTicketContinueButton();
            cy.wait(4000);
            p.clickCustomerDetailsSaveButton();
            cy.intercept('GET', '/api/CustomerInfo/GetCustomerInfo?EventID=*').as('publishPageData');
            cy.wait('@publishPageData', { timeout: 25000 });

            cy.get('.container-fluid > .col-md-12.my-2 > .card > .card-body').should('be.visible');
            p.clickTaxSettingsNoButton();
            cy.wait(1000);
            cy.get('#tax0').should('be.checked');

            cy.log('Tax settings No check box is checked');
        }),
        //test 10


        it("Test 8:Check whether user can check tax settings Yes Checkbox ", () => {
            cy.visit(baseUrl);
            cy.wait(2000);
            p.clickLoginMenu();
            readDataFromFile(filename).then((list) => {

                p.inputEmail(list.useremail);
                cy.scrollTo(0, 0);
                p.inputPassword(list.userpassword);
            });

            p.loginClick();
            cy.wait(4000);
            p.clickMyEvents();
            cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SaleStatus').as('myEventsData');
            cy.wait('@myEventsData', { timeout: 25000 });
            p.clickEventEditButton();

            cy.intercept('GET', '/api/BasicInfo/GetEventLocation?EventID=*').as('basicInfoData');
            cy.wait('@basicInfoData', { timeout: 25000 });
            p.clickSaveButton();
            cy.wait(6000);
            p.clickDetailsSaveButton()
            cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=PromoCodeEnd').as('addTicketsData');
            cy.wait('@addTicketsData', { timeout: 25000 });
            p.clickTierCloseIcon();

            p.clickAddTicketContinueButton();
            cy.wait(4000);
            p.clickCustomerDetailsSaveButton();
            cy.intercept('GET', '/api/CustomerInfo/GetCustomerInfo?EventID=*').as('publishPageData');
            cy.wait('@publishPageData', { timeout: 25000 });

            cy.get('.container-fluid > .col-md-12.my-2 > .card > .card-body').should('be.visible');
            p.clickTaxSettingsYesButton();
            cy.get('#tax1').should('be.checked');
            cy.wait(2000);
            cy.get('.card-body > .mt-2').should('be.visible');

            cy.log('Tax settings Yes check box is checked');
        }),
        //test 11



        it("Test 9:Check whether user can input tax details", () => {
            cy.visit(baseUrl);
            cy.wait(2000);
            p.clickLoginMenu();
            readDataFromFile(filename).then((list) => {

                p.inputEmail(list.useremail);
                cy.scrollTo(0, 0);
                p.inputPassword(list.userpassword);
            });

            p.loginClick();
            cy.wait(4000);
            p.clickMyEvents();
            cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SaleStatus').as('myEventsData');
            cy.wait('@myEventsData', { timeout: 25000 });
            p.clickEventEditButton();

            cy.intercept('GET', '/api/BasicInfo/GetEventLocation?EventID=*').as('basicInfoData');
            cy.wait('@basicInfoData', { timeout: 25000 });
            p.clickSaveButton();
            cy.wait(6000);
            p.clickDetailsSaveButton()
            cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=PromoCodeEnd').as('addTicketsData');
            cy.wait('@addTicketsData', { timeout: 25000 });
            p.clickTierCloseIcon();

            p.clickAddTicketContinueButton();
            cy.wait(4000);
            p.clickCustomerDetailsSaveButton();
            cy.intercept('GET', '/api/CustomerInfo/GetCustomerInfo?EventID=*').as('publishPageData');
            cy.wait('@publishPageData', { timeout: 25000 });
            p.clickTaxSettingsYesButton();
            cy.wait(2000);
            cy.get('.card-body > .mt-2').should('be.visible');
            readDataFromFile(filename).then((list) => {

                p.selectState(list.taxState);
                cy.wait(1000);
                p.inputSalesTaxId(list.salesTaxId);
                p.inputTaxName(list.taxName);
                p.inputTaxRate(list.taxRate);

            });

            cy.log('Tax details inserted');
        }),
        //test 12


        it("Test 10:Check whether user can save publish page", () => {
            cy.visit(baseUrl);
            cy.wait(2000);
            p.clickLoginMenu();
            readDataFromFile(filename).then((list) => {

                p.inputEmail(list.useremail);
                cy.scrollTo(0, 0);
                p.inputPassword(list.userpassword);
            });

            p.loginClick();
            cy.wait(4000);
            p.clickMyEvents();
            cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SaleStatus').as('myEventsData');
            cy.wait('@myEventsData', { timeout: 25000 });
            p.clickEventEditButton();

            cy.intercept('GET', '/api/BasicInfo/GetEventLocation?EventID=*').as('basicInfoData');
            cy.wait('@basicInfoData', { timeout: 25000 });
            p.clickSaveButton();
            cy.wait(6000);
            p.clickDetailsSaveButton()
            cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=PromoCodeEnd').as('addTicketsData');
            cy.wait('@addTicketsData', { timeout: 25000 });
            p.clickTierCloseIcon();

            p.clickAddTicketContinueButton();
            cy.wait(4000);
            p.clickCustomerDetailsSaveButton();
            cy.intercept('GET', '/api/CustomerInfo/GetCustomerInfo?EventID=*').as('publishPageData');
            cy.wait('@publishPageData', { timeout: 25000 });
            p.clickTaxSettingsYesButton();
            cy.wait(2000);
            cy.get('.card-body > .mt-2').should('be.visible');
            readDataFromFile(filename).then((list) => {

                p.selectState(list.taxState);
                cy.wait(1000);
                p.inputSalesTaxId(list.salesTaxId);
                p.inputTaxName(list.taxName);
                p.inputTaxRate(list.taxRate);

            });
            cy.wait(2000);
            p.saveEvent();
            cy.wait(10000);
            p.checkSaveEventPopup();

            cy.log('Event saved successfuly');
        }),
        //test 13


        it("Test 11:Check whether user can publish the event ", () => {
            cy.visit(baseUrl);
            cy.wait(2000);
            p.clickLoginMenu();
            readDataFromFile(filename).then((list) => {

                p.inputEmail(list.useremail);
                cy.scrollTo(0, 0);
                p.inputPassword(list.userpassword);
            });

            p.loginClick();
            cy.wait(4000);
            p.clickMyEvents();
            cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SaleStatus').as('myEventsData');
            cy.wait('@myEventsData', { timeout: 25000 });
            p.clickEventEditButton();

            cy.intercept('GET', '/api/BasicInfo/GetEventLocation?EventID=*').as('basicInfoData');
            cy.wait('@basicInfoData', { timeout: 25000 });
            p.clickSaveButton();
            cy.wait(6000);
            p.clickDetailsSaveButton()
            cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=PromoCodeEnd').as('addTicketsData');
            cy.wait('@addTicketsData', { timeout: 25000 });
            p.clickTierCloseIcon();

            p.clickAddTicketContinueButton();
            cy.wait(4000);
            p.clickCustomerDetailsSaveButton();
            cy.intercept('GET', '/api/CustomerInfo/GetCustomerInfo?EventID=*').as('publishPageData');
            cy.wait('@publishPageData', { timeout: 25000 });

            cy.get('.card-body > .mt-2').should('be.visible');
            p.saveEvent();
            cy.wait(10000);
            p.checkSaveEventPopup();
            p.publishEvent();
            cy.wait(4000);
            p.checkPublishEventPopup();
            cy.wait('@myEventsData', { timeout: 25000 });
            cy.url().should('include', 'https://test.eventzet.com/#/events/Dashboard/Dashboardevents');
            cy.get(':nth-child(1) > :nth-child(6) > .list-inline > :nth-child(2) > .btn').should('contain', 'Un Publish');

            cy.log('Event published successfuly');
        }),

    ]
};