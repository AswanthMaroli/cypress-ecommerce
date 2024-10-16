import EventDetails from '../../e2e/Pages/eventDeatailPage.js';
const { readDataFromFile } = require('../ExternalFiles/fileOperations.js');
const baseUrl = Cypress.config('baseUrl');

const filename = 'cypress/fixtures/createEventBasicInfoRead.json';

const eventDetails = new EventDetails();

function performLogin(email, password) {
    cy.visit(baseUrl);
    cy.wait(4000);
    eventDetails.clickLoginMenu();
    eventDetails.inputEmail(email);
    eventDetails.inputPassword(password);
    eventDetails.loginClick();
}




module.exports = {


    EventDetailsTests: [

        it("Test 1:Check event details page is visible or not", () => {

            readDataFromFile(filename).then((list) => {

                performLogin(list.email, list.password);

                eventDetails.clickEvent(list.eventtitle);
                cy.intercept('GET', '/api/EventDetails/GetEventVideoURL?EventID=*').as('eventDetails');
                cy.wait('@eventDetails', { timeout: 25000 });
                cy.url().should('include', 'https://test.eventzet.com/#/eventregistration/Eventshell/Eventdetails');
            });
            cy.log('Event details page is visible');
        }),

        it("Test 2:Check details on the eventdetails page", () => {
            readDataFromFile(filename).then((list) => {

                performLogin(list.email, list.password);
              
                eventDetails.clickEvent(list.eventtitle);
                cy.intercept('GET', '/api/EventDetails/GetEventVideoURL?EventID=*').as('eventDetails');
                cy.wait('@eventDetails', { timeout: 25000 });
                cy.url().should('include', 'https://test.eventzet.com/#/eventregistration/Eventshell/Eventdetails');
                eventDetails.checkEventDetailsDatas(

                    list.eventtitle,
                    list.eventcreator,
                    list.organizerphone,
                    list.organizeremail,
                    list.instructions1,
                    list.eventlocation1,
                    list.onlineticket,
                    list.ticketname1,
                    list.addonname1,
                    list.ticketname2,
                    list.addonname2

                );

                eventDetails.clickCopyUrl();
                cy.wait(2000);

            });
            cy.log('All the details where present on the eventdetails page ');
        }),


        it("Test 3:Check event ticket details is present in the event details page", () => {

           
            readDataFromFile(filename).then((list) => {

                performLogin(list.email, list.password);
                eventDetails.clickEvent(list.eventtitle);
                cy.intercept('GET', '/api/EventDetails/GetEventVideoURL?EventID=*').as('eventDetails');
                cy.wait('@eventDetails', { timeout: 25000 });
                cy.url().should('include', 'https://test.eventzet.com/#/eventregistration/Eventshell/Eventdetails');
                eventDetails.clickGetTicketsButton();
                cy.wait(1000);
                eventDetails.checkEventVenue(
                
                    list.eventtitle,
                    list.eventlocation1,
                    list.onlinetitle
                );
                eventDetails.selectVenue();
                eventDetails.checkEventTimeSlot(
                    list.timeslotdate,
                    list.timeslottime,
                    list.timezone
                );

                eventDetails.selectTimeSlot();
                eventDetails.selectFreeTicket(list.ticketquantity);
                eventDetails.selectPaidTicket(list.ticketquantity);
                eventDetails.checkEventTickets(
                    
                    list.ticketname1,
                    list.ticketname2,
                    list.addonname1,
                    list.addonname2
                );
            });

            cy.log('Event ticket details is present in the event details page');
        }),


        it("Test 4:Verify that user can select ticket and continue to the registration page ", () => {

            readDataFromFile(filename).then((list) => {

                performLogin(list.email, list.password);
                eventDetails.clickEvent(list.eventtitle);
                cy.intercept('GET', '/api/EventDetails/GetEventVideoURL?EventID=*').as('eventDetails');
                cy.wait('@eventDetails', { timeout: 25000 });
                cy.url().should('include', 'https://test.eventzet.com/#/eventregistration/Eventshell/Eventdetails');
                eventDetails.clickGetTicketsButton();
                cy.wait(1000);
                eventDetails.selectVenue();
                eventDetails.selectTimeSlot();
                eventDetails.selectFreeTicket(list.ticketquantity);
                eventDetails.selectFreeTicketAddon(list.addonquantity);
                eventDetails.selectPaidTicket(list.ticketquantity);
                eventDetails.selectPaidTicketAddon(list.addonquantity);
                eventDetails.clickContinueButton();
                cy.url().should('include','https://test.eventzet.com/#/eventregistration/Eventshell/Eventregistration');
            });

            cy.log('Test 4 is successful and user is navigated to the contact information page');
        }),

        it("Test 5:Verify that  select ticket validation is visible or not ", () => {

            readDataFromFile(filename).then((list) => {

                performLogin(list.email, list.password);
                eventDetails.clickEvent(list.eventtitle);
                cy.intercept('GET', '/api/EventDetails/GetEventVideoURL?EventID=*').as('eventDetails');
                cy.wait('@eventDetails', { timeout: 25000 });
                cy.url().should('include', 'https://test.eventzet.com/#/eventregistration/Eventshell/Eventdetails');
                eventDetails.clickGetTicketsButton();
                cy.wait(1000);
                eventDetails.selectVenue();
                eventDetails.selectTimeSlot();
                eventDetails.clickContinueButton();
                cy.get(':nth-child(4) > .row > .col-md-12 > .text-danger').should('be.visible').should('contain','Select Atleast One Ticket!');
                cy.url().should('include','https://test.eventzet.com/#/eventregistration/Eventshell/Eventdetails');
            });

            cy.log('Test 5 is successful andvalidation message is visible for selecting the ticket');
        }),



    ]
};