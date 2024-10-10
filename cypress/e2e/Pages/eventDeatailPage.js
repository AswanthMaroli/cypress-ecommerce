class EventDetails {

    homeurl = 'https://test.eventzet.com/#/Eventshell/Eventhome';
    loginMenu = ':nth-child(2) > :nth-child(8) > #EventZetHomemenuLoginmenu';
    userEmail = '#UserEmail';
    userPassword = '#UserPassword';
    loginButton = '#EventLoginBtn';
    searchEventButton = '#SearchEventHome';
    allEvents = '#targetFilterEvent';
    eventName = '.h4';
    registerNowButton = '#EventDetailsRegisterNowBtn'



    checkRegistrationPopup() {

        cy.get('.modal-body').should('be.visible');

    }

    checkUserName(username) {

        cy.get('.text-secondary > .text-dark').should('contain', username);

    }

    checkTicketDetails(ticketdetails) {

        cy.get('.col-md-5 > .card > .card-body > .row > :nth-child(3)')
            .should('be.visible')
            .should('contain', ticketdetails);
    }

    clickCopyUrl() {

        cy.xpath('//button[normalize-space()="Copy URL"]').should('be.visible').click({ force: true });

    }

    checkEventLocation(eventlocation) {

        cy.get('.col-md-12.my-2 > .card > .card-body').should('contain', eventlocation);

    }

    checkRegisterNowButton() {

        cy.get(this.registerNowButton).should('be.visible');

    }

    clickRegisterNowButton() {

        cy.get(this.registerNowButton).click({ force: true });

    }

    checkEventName(eventname) {

        cy.get(this.eventName).should('contain', eventname);
    }

    clickEvent(eventname) {

        cy.get('#targetFilterEvent')
            .contains(eventname)
            .click({ force: true });

    }

    clickSearchEvent() {

        cy.get(this.searchEventButton).click();

    }

    inputEmail(useremail) {

        cy.get(this.userEmail).click({ force: true }).clear().type(useremail);

    }

    inputPassword(password) {

        cy.get(this.userPassword).click({ force: true }).clear().type(password);

    }

    loginClick() {

        cy.get(this.loginButton).click({ force: true });
    }

    clickLoginMenu() {

        cy.get(this.loginMenu).click({ force: true });
    }




















}
export default EventDetails;