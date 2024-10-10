import CreateEventTickets from '../../e2e/Pages/CreateEventTicketsPage.js';
const { readDataFromFile, writeDataToFile, clearDataInFile } = require('../ExternalFiles/fileOperations.js');
const baseUrl = Cypress.config('baseUrl');
const filename = 'cypress/fixtures/createEventTicketsRead.json';
const tickets = new CreateEventTickets();


function performLogin(email, password) {
    cy.visit(baseUrl);
    cy.wait(4000);
    tickets.clickLoginMenu();
    tickets.inputEmail(email);
    tickets.inputPassword(password);
    tickets.loginClick();
}

function navigateToTicketsPage() {
    readDataFromFile(filename).then((list) => {
    tickets.eventsDashboardMenuClick();
    tickets.clickMyEvents();
    cy.intercept('GET', '/api/DashboardEventList/GetDashboardEventList?UserID=*').as('myEventsData');
    cy.wait('@myEventsData', { timeout: 25000 });
    tickets.searchEventName(list.eventtitle);
    tickets.clickEventEditButton();
    cy.intercept('GET', '/api/Timeslot/GetEventTimeSlots?EventID=*').as('basicInfoData');
    cy.wait('@basicInfoData', { timeout: 25000 });
    tickets.clickTicketsProgressTab();
    });
}

module.exports = {

    CreateEventTicketsTests: [

        it("Test 1: Create a new ticket with valid inputs", () => {

            readDataFromFile(filename).then((list) => {
                performLogin(list.email, list.password);
                navigateToTicketsPage();
                tickets.selectVenue(list.venuename1);
                tickets.selectLevel(list.levelname1);
                tickets.selectTimeSlot(list.timeslot1);
                tickets.inputTicketName(list.ticketname1);
                tickets.selectTicketPricing(list.freeticketpricing);
                tickets.inputTicketQuantity(list.ticketstockquantity);
                // tickets.inputTicketPrice(list.price);    //it is a free ticket 
                tickets.inputMaxNoOfTickets(list.maxnooftickets);
                // tickets.inputTicketTax(list.taxrate);
                tickets.inputSalesStartDate(list.salesstartdate);
                tickets.inputSalesStartTime(list.salesstarttime);
                tickets.inputSalesEndDate(list.salesenddate);
                tickets.inputSalesEndTime(list.salesendtime);
                tickets.SaveTicket();
                cy.intercept('GET', '/api/AddTicket/GetTierList?EventID=*').as('ticketList');
                cy.wait('@ticketList', { timeout: 25000 });
                cy.get('tbody tr').should('have.length', 1);

                tickets.checkSavedTicketData(

                    list.ticketname1,
                    list.levelname1,
                    list.freetickettype,
                    list.ticketstockquantity,
                    list.freeticketprice,
                    list.freetickettax
                )
                cy.log('Test 1 is successful: New ticket created');
            });
        }),

        it("Test 2: Edit an existing ticket", () => {
            readDataFromFile(filename).then((list) => {
                performLogin(list.email, list.password);
                navigateToTicketsPage();
                cy.wait(2000);
                tickets.clickTicketEditButton();
                tickets.inputTicketName(list.editedticketname);
                tickets.inputTicketQuantity(list.editedquantity);
                tickets.SaveTicket();
                cy.intercept('GET', '/api/AddTicket/GetTierList?EventID=*').as('ticketList');
                cy.wait('@ticketList', { timeout: 25000 });
                cy.get('tbody tr').should('have.length', 1);
                tickets.checkSavedTicketData(

                    list.editedticketname,
                    list.levelname1,
                    list.freetickettype,
                    list.editedquantity,
                    list.freeticketprice,
                    list.freetickettax
                )
            
                cy.log('Test 3 is successful: Ticket edited');
            });
        }),



    ]
}