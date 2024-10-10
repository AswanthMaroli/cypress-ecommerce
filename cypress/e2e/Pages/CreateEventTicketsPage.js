class CreateEventTickets{

    loginMenuButton = ':nth-child(2) > :nth-child(8) > #EventZetHomemenuLoginmenu';
    userEmail = '#UserEmail';
    userPassword = '#UserPassword';
    login = '#EventLoginBtn';
    createEventMenu = '#EventZetCreateEventMenu';
    myEvents = ':nth-child(3) > .nav-link > .fs-4';
    eventsDashboardMenu = '//*[@id="navbar"]/ul/li[2]/a';
    eventEditButton = ':nth-child(1) > .btn > .bi';
    searchEventInputBox = '#myOwneventstab > :nth-child(1) > .col-md-4 > .input-group > .form-control';
    ticketsTab =':nth-child(5) > .nav-link > .progressactive > .bi';


    clickTicketsTab(){
        
        cy.get(this.ticketsTab).click({force:true});
        cy.intercept('GET', '/api/TicketAddOn/GetTicketAddOnList?EventID=*').as('ticketData');
        cy.wait('@ticketData', { timeout: 25000 });
        cy.url().should('include','https://test.eventzet.com/#/events/Dashboard/EventzetEventsCreate/EventTicket');
    }


    searchEventName(eventname) {

        cy.get(this.searchEventInputBox).clear().type(eventname);

    }

    clickEventEditButton() {

        cy.get(this.eventEditButton).click({ force: true });

    }
    inputEmail(useremail) {

        cy.get(this.userEmail).click({ force: true }).type(useremail);

    }

    inputPassword(userepassword) {

        cy.get(this.userPassword).click({ force: true }).type(userepassword);

    }

    clickLoginMenu() {

        cy.get(this.loginMenuButton).click();

    }

    loginClick() {

        cy.get(this.login).click();
        cy.wait(6000);

    }


    eventsDashboardMenuClick() {

        cy.xpath(this.eventsDashboardMenu).click();
        cy.wait(4000);

    }

    clickMyEvents() {

        cy.get(this.myEvents).click({ force: true });

    }




}
export default CreateEventTickets;