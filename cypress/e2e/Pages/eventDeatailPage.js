class EventDetails {

    loginMenuButton = ':nth-child(2) > :nth-child(8) > #EventZetHomemenuLoginmenu';
    userEmail = '#UserEmail';
    userPassword = '#UserPassword';
    login = '#EventLoginBtn';
    searchEventButton = '#SearchEventHome';
    allEvents = '#targetFilterEvent';
    eventName = '.h4';
    registerNowButton = '#EventDetailsRegisterNowBtn'
    getTicketsButton = '#EventDetailsRegisterNowBtn';
    eventVenue = ':nth-child(2) > .col-md-12 > .btn > .justify-content-between';
    eventTitle =  '.section-title > .clr_base';
    onlineTitle = ':nth-child(8) > .col-md-12 > .btn > .justify-content-between';
    timeSlot ='.btn > .justify-content-between';
    continueButton ='#EventDetailsRegistrBtn';
    closeIcon ='.d-flex > :nth-child(3) > .bi';
    backIcon = '.d-flex > :nth-child(1) > .bi';

    clickCloseIcon(){

        cy.get(this.closeIcon).should('be.visible').click({force:true});

    }

    clickBackIcon(){

        cy.get(this.backIcon).should('be.visible').click({force:true});

    }


    clickContinueButton(){

        cy.get(this.continueButton).should('be.visible').click({force:true});
        cy.wait(1000);
    }

    clickGetTicketsButton(){

        cy.get(this.getTicketsButton).scrollIntoView().should('be.visible').click();
    }

    selectVenue(){

        cy.get(this.eventVenue).should('be.visible').click({force:true});
    }

    selectTimeSlot(){

        cy.get(this.timeSlot).should('be.visible').click({force:true});
    }

    checkEventTickets(ticketname1,ticketname2,addonname1,addonname2){

        cy.get(':nth-child(2) > .d-flex.bd-highlight > .fw-bold').should('contain',ticketname1);
        cy.get(':nth-child(3) > .d-flex.bd-highlight > .fw-bold').should('contain',ticketname2);
        cy.get(':nth-child(2) > .bg_lightash').should('contain',addonname1);
        cy.get(':nth-child(3) > .bg_lightash').should('contain',addonname2);
    }

    selectFreeTicket(quantity){

        cy.get(':nth-child(2) > .d-flex.bd-highlight > :nth-child(4) > .input-group > #ticket_number')
        .should('be.visible')
        .clear()
        .type(quantity);

    }

    selectFreeTicketAddon(quantity){

        cy.get(':nth-child(2) > .bg_lightash > :nth-child(3) > .input-group > #addon_number').should('be.visible')
        .clear()
        .type(quantity);

    }

    selectPaidTicket(quantity){

        cy.get(':nth-child(3) > .d-flex.bd-highlight > :nth-child(4) > .input-group > #ticket_number')
        .should('be.visible')
        .clear().type(quantity);

    }

    selectPaidTicketAddon(quantity){

        cy.get(':nth-child(3) > .bg_lightash > :nth-child(3) > .input-group > #addon_number')
        .should('be.visible')
        .clear().type(quantity);

    }

    checkEventTimeSlot(date,time,timezone){

        cy.get(this.timeSlot).should('be.visible').should('contain',date);
        cy.get(this.timeSlot).should('contain',time);
        cy.get(this.timeSlot).should('contain',timezone);


    }


    checkEventVenue(eventtitle,eventlocation,onlinetitle){

        cy.get(this.eventTitle).should('be.visible').should('contain',eventtitle);
        cy.get(this.eventVenue).should('be.visible').should('contain',eventlocation);
        cy.get(this.onlineTitle).should('be.visible').should('contain',onlinetitle);
        
    }


    checkEventDetailsDatas(eventname,organizername,organizernumber,organizeremail,specialinstructions,eventlocation,onlineticket,ticketname1,addonname1,ticketname2,addonname2){

        cy.get('.h4').should('contain',eventname);
        cy.get('.text-secondary > .text-dark').should('contain',organizername);
        cy.get(':nth-child(1) > :nth-child(2) > .d-flex > :nth-child(2)').should('contain',organizernumber);
        cy.get('.d-flex > :nth-child(3)').should('contain',organizeremail);
        cy.get('.text-dark > span').should('contain',specialinstructions);
        cy.get(':nth-child(4) > :nth-child(2) > .list-inline > :nth-child(1) > div').should('contain',eventlocation);
        cy.get('.row > :nth-child(3) > :nth-child(2) > .text-dark').should('contain',ticketname1);
        cy.get(':nth-child(5) > .list-inline > .list-inline-item.font_p').should('contain',addonname1);
        cy.get(':nth-child(3) > .text-dark').should('contain',onlineticket);
        cy.get(':nth-child(4) > .text-dark').should('contain',ticketname2);
        cy.get(':nth-child(6) > .list-inline > .list-inline-item.font_p').should('contain',addonname2);

    }





    clickCopyUrl() {

        cy.xpath('//button[normalize-space()="Copy URL"]').should('be.visible').click({ force: true });

    }


    clickEvent(eventname) {

        cy.get('#Eventssection > :nth-child(1)').scrollIntoView();
        cy.wait(2000);
        cy.get('#Eventssection > :nth-child(1)')
        .should('be.visible')
        .contains(eventname)
        .click();

    }

    clickSearchEvent() {

        cy.get(this.searchEventButton).click();

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




}
export default EventDetails;