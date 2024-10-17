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
        cy.wait('@myEventsData', { timeout: 40000 });
        tickets.searchEventName(list.eventtitle);
        tickets.clickEventEditButton();
        cy.intercept('GET', '/api/Timeslot/GetEventTimeSlots?EventID=*').as('basicInfoData');
        cy.wait('@basicInfoData', { timeout: 40000 });
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
                cy.wait('@ticketList', { timeout: 40000 });
                cy.get('tbody').should('have.length', 1);

                tickets.checkSavedTicketData1(

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
                tickets.clickFirstTicketEditButton();
                tickets.inputTicketName(list.editedticketname);
                tickets.inputTicketQuantity(list.editedquantity);
                tickets.SaveTicket();
                cy.intercept('GET', '/api/AddTicket/GetTierList?EventID=*').as('ticketList');
                cy.wait('@ticketList', { timeout: 40000 });
                cy.get('tbody').should('have.length', 1);
                tickets.checkSavedTicketData1(

                    list.editedticketname,
                    list.levelname1,
                    list.freetickettype,
                    list.editedquantity,
                    list.freeticketprice,
                    list.freetickettax
                )

                cy.log('Test 2 is successful: Ticket edited');
            });
        }),

        it("Test 3: Create a new paid ticket with valid inputs", () => {
            readDataFromFile(filename).then((list) => {
                performLogin(list.email, list.password);
                navigateToTicketsPage();
                tickets.selectVenue(list.venuename1);
                tickets.selectLevel(list.levelname2);
                tickets.selectTimeSlot(list.timeslot1);
                tickets.inputTicketName(list.ticketname2);
                tickets.selectTicketPricing(list.paidticketpricing);
                tickets.inputTicketQuantity(list.ticketstockquantity);
                tickets.inputTicketPrice(list.paidticketprice);
                tickets.inputMaxNoOfTickets(list.maxnooftickets);
                tickets.inputTicketTax(list.tickettax);
                tickets.inputSalesStartDate(list.salesstartdate);
                tickets.inputSalesStartTime(list.salesstarttime);
                tickets.inputSalesEndDate(list.salesenddate);
                tickets.inputSalesEndTime(list.salesendtime);
                tickets.SaveTicket();
                cy.intercept('GET', '/api/AddTicket/GetTierList?EventID=*').as('ticketList');
                cy.wait('@ticketList', { timeout: 40000 });
                cy.get('tbody').should('have.length', 2);  

                tickets.checkSavedTicketData2(
                    list.ticketname2,
                    list.levelname2,
                    list.paidtickettype,
                    list.ticketstockquantity,
                    list.paidticketprice,
                    list.tickettax
                );
                cy.log('Test 3 is successful: New paid ticket created');
            });
        }),

        it("Test 4: Attempt to create a ticket with invalid inputs", () => {
            readDataFromFile(filename).then((list) => {
                performLogin(list.email, list.password);
                navigateToTicketsPage();
                tickets.selectVenue(list.venuename1);
                tickets.selectLevel(list.levelname1);
                tickets.selectTimeSlot(list.timeslot1);
                // tickets.inputTicketName();
                tickets.selectTicketPricing(list.paidticketpricing);
                tickets.inputTicketQuantity(list.ticketstockquantity);
                tickets.inputTicketPrice(list.paidticketprice);
                tickets.inputMaxNoOfTickets('0'); 
                tickets.inputTicketTax(list.tickettax);  
                tickets.SaveTicket();

                cy.get('tbody').should('have.length', 2);  // Length should not increase
                cy.contains('Ticket Name is Required').should('be.visible');
                cy.contains('Maximum Tickets is Required').should('be.visible');
                cy.contains('Sales Start Date is Required').should('be.visible');
                cy.contains('Start Time is Required').should('be.visible');
                cy.contains('Sales End Date is Required').should('be.visible');
                cy.contains('Start Time is Required').should('be.visible');
                cy.log('Test 4 is successful: Invalid inputs prevented ticket creation');
            });
        }),

        it("Test 5: Edit a paid ticket to become a free ticket", () => {
            readDataFromFile(filename).then((list) => {
                performLogin(list.email, list.password);
                navigateToTicketsPage();
                cy.wait(2000);
                tickets.clickSecondTicketEditButton();
                tickets.inputTicketName(list.editedticketname1)
                tickets.selectTicketPricing(list.freeticketpricing);
                // tickets.inputTicketPrice(list.freeticketprice);  
                tickets.SaveTicket();
                cy.intercept('GET', '/api/AddTicket/GetTierList?EventID=*').as('ticketList');
                cy.wait('@ticketList', { timeout: 40000 });

                tickets.checkSavedTicketData2(
                    list.editedticketname1,
                    list.levelname2,
                    list.freetickettype,
                    list.ticketstockquantity,
                    list.freeticketprice,'0'  //tax is set to zero after changing paid to free
                );
                cy.log('Test 5 is successful: Paid ticket converted to free ticket');
            });
        }),

        it("Test 6: Create an online ticket", () => {
            readDataFromFile(filename).then((list) => {
                performLogin(list.email, list.password);
                navigateToTicketsPage();
                tickets.clickOnlineToggleButton();
                tickets.selectOnlineURL(list.onlineurl);
                tickets.selectLevel(list.levelname1);
                tickets.selectTimeSlot(list.timeslot1);
                tickets.inputTicketName(list.onlineticketname);
                tickets.selectTicketPricing(list.paidticketpricing);
                tickets.inputTicketQuantity(list.ticketstockquantity);
                tickets.inputTicketPrice(list.paidticketprice);
                tickets.inputMaxNoOfTickets(list.maxnooftickets);
                tickets.inputTicketTax(list.tickettax);
                tickets.inputSalesStartDate(list.salesstartdate);
                tickets.inputSalesStartTime(list.salesstarttime);
                tickets.inputSalesEndDate(list.salesenddate);
                tickets.inputSalesEndTime(list.salesendtime);
                tickets.SaveTicket();
                cy.intercept('GET', '/api/AddTicket/GetTierList?EventID=*').as('ticketList');
                cy.wait('@ticketList', { timeout: 40000 });
                cy.get('tbody').should('have.length', 3);

                tickets.checkSavedTicketData3(
                    list.onlineticketname,
                    list.levelname1,
                    list.paidtickettype,
                    list.ticketstockquantity,
                    list.paidticketprice,
                    list.tickettax
                );
                cy.log('Test 6 is successful: Online ticket created');
            });
        }),


        it("Test 7: Delete an existing ticket", () => {
            readDataFromFile(filename).then((list) => {
          
                performLogin(list.email, list.password);
                navigateToTicketsPage();
                tickets.clickSecondTicketDeleteButton();
                cy.get('tbody').should('have.length', 2);
                cy.log('Test 7 is successful: Ticket deleted');

                tickets.selectVenue(list.venuename1);
                tickets.selectLevel(list.levelname2);
                tickets.selectTimeSlot(list.timeslot1);
                tickets.inputTicketName(list.ticketname2);
                tickets.selectTicketPricing(list.paidticketpricing);
                tickets.inputTicketQuantity(list.ticketstockquantity);
                tickets.inputTicketPrice(list.paidticketprice);
                tickets.inputMaxNoOfTickets(list.maxnooftickets);
                tickets.inputTicketTax(list.tickettax);
                tickets.inputSalesStartDate(list.salesstartdate);
                tickets.inputSalesStartTime(list.salesstarttime);
                tickets.inputSalesEndDate(list.salesenddate);
                tickets.inputSalesEndTime(list.salesendtime);
                tickets.SaveTicket();
                cy.intercept('GET', '/api/AddTicket/GetTierList?EventID=*').as('ticketList');
                cy.wait('@ticketList', { timeout: 40000 });
                cy.get('tbody').should('have.length', 3);

                tickets.checkSavedTicketData3(
                    list.ticketname2,
                    list.levelname2,
                    list.paidtickettype,
                    list.ticketstockquantity,
                    list.paidticketprice,
                    list.tickettax
                );
                cy.log('Test 7 is successful: Ticket is deleted and new paid ticket is added ');

            });
        }),

        it("Test 8: Create an add-on for a free ticket", () => {
            readDataFromFile(filename).then((list) => {
                performLogin(list.email, list.password);
                navigateToTicketsPage();
                cy.wait(1000);
                tickets.clickAddonTab();
                tickets.inputAddonName(list.addonname1);
                tickets.selectAddonPricing(list.freeaddonpricing);
                tickets.inputAddonQuantity(list.addonstockquantity);
                // tickets.inputAddonPrice(list.addonprice);
                tickets.inputMaxNoOfAddons(list.maxnoofaddons);
                // tickets.inputAddonTax(list.addontaxrate);
                tickets.selectTicket(list.freeaddonticket);
                tickets.saveAddon();
                cy.wait(3000);
                cy.contains(list.addonname1).should('be.visible');
                cy.xpath('//*[@id="tabAddonmaker"]/div/div[2]/div[2]/div/table/tbody').should('have.length', 1);
                tickets.checkSavedAddOnData1(
                    list.addonname1,
                    list.addonstockquantity,
                    list.freeaddonticket,
                    '0', // price is zero
                    '0 %' // tax is zero %
                )
                cy.log('Test 8 is successful: Add-on created for a free ticket');
            });
        }),

        it("Test 9: Edit an existing add-on", () => {
            readDataFromFile(filename).then((list) => {
                performLogin(list.email, list.password);
                navigateToTicketsPage();
                cy.wait(1000);
                tickets.clickAddonTab();
                tickets.clickFirstAddonEditButton();
                cy.wait(1000);
                tickets.inputAddonName(list.editedaddonname);
                tickets.inputAddonQuantity(list.editedaddonquantity);
                tickets.saveAddon();
                cy.wait(3000);
                cy.xpath('//*[@id="tabAddonmaker"]/div/div[2]/div[2]/div/table/tbody').should('have.length', 1);
                tickets.checkSavedAddOnData1(
                    list.editedaddonname,
                    list.editedaddonquantity,
                    list.freeaddonticket,
                    '0', // price is zero
                    '0 %' // tax is zero %
                )
                cy.log('Test 9 is successful: Add-on edited');
            });
        }),


        it("Test 10: Delete an existing add-on", () => {
            readDataFromFile(filename).then((list) => {
                performLogin(list.email, list.password);
                navigateToTicketsPage();
                tickets.clickAddonTab();
                tickets.clickFirstAddonDeleteButton();
                cy.wait(1000);
                cy.xpath('//*[@id="tabAddonmaker"]/div/div[2]/div[2]/div/table/tbody').should('have.length', 0);
                cy.log('Test 10 is successful: Add-on deleted');
            });
        }),


        it("Test 11: Attempt to create an add-on with invalid inputs", () => {
            readDataFromFile(filename).then((list) => {
                performLogin(list.email, list.password);
                navigateToTicketsPage();
                cy.wait(1000);
                tickets.clickAddonTab();
                // tickets.inputAddonName(''); // Empty name
                tickets.selectAddonPricing(list.paidaddonpricing);
                // tickets.inputAddonQuantity(''); // empty quantity
                // tickets.inputAddonPrice(''); // empty price
                tickets.inputMaxNoOfAddons('0'); // Zero max add-ons
                tickets.selectTicket(list.paidaddonticket);
                tickets.saveAddon();
                cy.wait(3000);

                // Assert that the add-on was not created due to invalid inputs
                cy.contains('AddOn Name is Required').should('be.visible');
                cy.contains('Stock quantity is Required').should('be.visible');
                cy.contains('Price is Required').should('be.visible');
                cy.contains('Maximum No of add-on is Required').should('be.visible');
                cy.log('Test 11 is successful: Invalid inputs prevented add-on creation');
            });
        }),

        it("Test 12: Create multiple add-ons for a single ticket", () => {
            readDataFromFile(filename).then((list) => {
                performLogin(list.email, list.password);
                navigateToTicketsPage();
                cy.wait(1000);
                tickets.clickAddonTab();

                // Create first add-on
                tickets.inputAddonName(list.addonname1);
                tickets.selectAddonPricing(list.freeaddonpricing);
                tickets.inputAddonQuantity(list.addonstockquantity);
                tickets.inputMaxNoOfAddons(list.maxnoofaddons);
                // tickets.inputAddonPrice(list.paidaddonprice);
                tickets.selectTicket(list.freeaddonticket);
                tickets.saveAddon();
                cy.wait(2000);

                // Create second add-on
                tickets.inputAddonName(list.addonname2);
                tickets.selectAddonPricing(list.paidaddonpricing);
                tickets.inputAddonQuantity(list.addonstockquantity);
                tickets.inputAddonPrice(list.paidaddonprice);
                tickets.inputMaxNoOfAddons(list.maxnoofaddons);
                tickets.inputAddonTax(list.addontax)
                tickets.selectTicket(list.paidaddonticket);
                tickets.saveAddon();
                cy.wait(2000);
                cy.contains(list.addonname1).should('be.visible');
                cy.contains(list.addonname2).should('be.visible');
                cy.xpath('//*[@id="tabAddonmaker"]/div/div[2]/div[2]/div/table/tbody').should('have.length', 2);
                cy.log('Test 12 is successful: Multiple add-ons created for a single ticket');
            });
        }),




    ]
};