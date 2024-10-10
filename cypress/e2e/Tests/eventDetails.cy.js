import EventDetails from '../../e2e/Pages/eventDeatailPage.js';
const { readDataFromFile } = require('../ExternalFiles/fileOperations.js');
const baseUrl = Cypress.config('baseUrl');
const filename = 'cypress/fixtures/createEventBasicInfoRead.json';
const filename1 = 'cypress/fixtures/createEventAddTicketRead.json';

const ed = new EventDetails();

module.exports = {


    EventDetailsTests: [
        //test 1



        it("Test 1:Check event details page is visible or not", () => {
            cy.visit(baseUrl);
            cy.wait(2000);
            ed.clickSearchEvent();
            cy.wait(4000);
            readDataFromFile(filename).then((list) => {

                ed.clickEvent(list.eventtitle);

            });
            cy.intercept('GET', '/api/EventRegistration/GetEventAddonQuantity?EventID=*&EventRegID=*').as('eventDetails');
            cy.wait('@eventDetails', { timeout: 25000 });


            cy.url().should('include', 'https://test.eventzet.com/#/eventregistration/Eventshell/Eventdetails');

            cy.log('Event details page is visible');
        }),
        //test 2

        it("Test 2:Check event name is present in the event details page", () => {

            cy.visit(baseUrl);
            cy.wait(2000);
            ed.clickSearchEvent();
            cy.wait(4000);
            readDataFromFile(filename).then((list) => {

                ed.clickEvent(list.eventtitle);

                cy.intercept('GET', '/api/EventRegistration/GetEventAddonQuantity?EventID=*&EventRegID=*').as('eventDetails');
                cy.wait('@eventDetails', { timeout: 25000 });
                ed.checkEventName(list.eventtitle);
                cy.wait(2000);

            });

            cy.log('Event name is present in the event details page');
        }),

        //test 3

        it("Test 3:Check event ticket details is present in the event details page", () => {

            cy.visit(baseUrl);
            cy.wait(2000);
            ed.clickSearchEvent();
            cy.wait(4000);
            readDataFromFile(filename).then((list) => {

                ed.clickEvent(list.eventtitle);


            });

            cy.intercept('GET', '/api/EventRegistration/GetEventAddonQuantity?EventID=*&EventRegID=*').as('eventDetails');
            cy.wait('@eventDetails', { timeout: 25000 });

            readDataFromFile(filename1).then((list) => {

                ed.checkTicketDetails(list.tiername);
                ed.checkTicketDetails(list.tiername2);
                ed.checkTicketDetails(list.addonName1);
                ed.checkTicketDetails(list.addonName2);
                cy.wait(2000);

            });

            cy.log('Event ticket details is present in the event details page');
        }),
        //test 4

        it("Test 4:Check username is present in the event details page", () => {

            cy.visit(baseUrl);
            cy.wait(2000);
            ed.clickSearchEvent();
            cy.wait(4000);
            readDataFromFile(filename).then((list) => {

                ed.clickEvent(list.eventtitle);


            });
            cy.intercept('GET', '/api/EventRegistration/GetEventAddonQuantity?EventID=*&EventRegID=*').as('eventDetails');
            cy.wait('@eventDetails', { timeout: 25000 });
            ed.checkUserName(' jr James ');
            cy.wait(2000);

            cy.log('Username is present in the event details page');
        }),
        //test 5


        it("Test 5:Check event location is present in the event details page", () => {

            cy.visit(baseUrl);
            cy.wait(2000);
            ed.clickSearchEvent();
            cy.wait(4000);
            readDataFromFile(filename).then((list) => {

                ed.clickEvent(list.eventtitle);
                cy.intercept('GET', '/api/EventRegistration/GetEventAddonQuantity?EventID=*&EventRegID=*').as('eventDetails');
                cy.wait('@eventDetails', { timeout: 25000 });

                ed.checkEventLocation(list.eventlocation);
                cy.wait(2000);

            });


            cy.log('Event location is present in the event details page');
        }),
        //test 6


        it("Test 6:Check RegisterNow button is present in the event details page", () => {

            cy.visit(baseUrl);
            cy.wait(2000);
            ed.clickSearchEvent();
            cy.wait(4000);
            readDataFromFile(filename).then((list) => {

                ed.clickEvent(list.eventtitle);

            });
            cy.intercept('GET', '/api/EventRegistration/GetEventAddonQuantity?EventID=*&EventRegID=*').as('eventDetails');
            cy.wait('@eventDetails', { timeout: 25000 });
            ed.checkRegisterNowButton();
            cy.wait(2000);

            cy.log('RegisterNow button is present in the event details page');
        }),
        //test 7

        it("Test 7:Check Copy url button is clickable or not", () => {
            cy.visit(baseUrl);
            cy.wait(2000);
            ed.clickSearchEvent();
            cy.wait(4000);
            readDataFromFile(filename).then((list) => {

                ed.clickEvent(list.eventtitle);

            });
            cy.intercept('GET', '/api/EventRegistration/GetEventAddonQuantity?EventID=*&EventRegID=*').as('eventDetails');
            cy.wait('@eventDetails', { timeout: 25000 });
            ed.clickCopyUrl();
            cy.wait(2000);

            cy.log('CopyUrl button is clickable');
        }),
        //test 8

        it("Test 8:Check RegisterNow button is clickable or not", () => {
            cy.visit(baseUrl);
            cy.wait(2000);
            ed.clickSearchEvent();
            cy.wait(4000);
            readDataFromFile(filename).then((list) => {

                ed.clickEvent(list.eventtitle);

            });
            cy.intercept('GET', '/api/EventRegistration/GetEventAddonQuantity?EventID=*&EventRegID=*').as('eventDetails');
            cy.wait('@eventDetails', { timeout: 25000 });
            ed.clickRegisterNowButton();
            cy.wait(2000);
            ed.checkRegistrationPopup();

            cy.log('RegisterNow button is clickable');
        }),





    ]
};