class EventRegistration {

    homeurl = 'https://test.eventzet.com/#/Eventshell/Eventhome';
    loginMenu = ':nth-child(2) > :nth-child(8) > #EventZetHomemenuLoginmenu';
    userEmail = '#UserEmail';
    userPassword = '#UserPassword';
    loginButton = '#EventLoginBtn';
    searchEventButton = '#SearchEventHome';
    allEvents = '#targetFilterEvent';
    eventName = '.h4';
    inputTicketField = ':nth-child(4) > .col-md-9 > .input-group > #txtTicketQuantity';
    inputTicket2Field = '//div[5]//div[2]//div[1]//input[1]';
    registrationPopUpCloseButton = '#btncloseModal';
    registrationPopUpCloseIcon ='#ModalRegisterEvent > .modal-dialog > .modal-content > .modal-header > .btn-close';
    registrationButton = '#EventDetailsRegistrationPopup';
    prefixField = '#txtPrefix';
    firstNameField = '#txtFirstName';
    lastNameField = '#txtLastName';
    suffixField = '#txtSuffix';
    buyerEmailField = '#txtEmail';
    gender = '#ddGender';
    buyerPhoneField = '#txtPhone';
    addressField = '#txtAddress1';
    cityField = '#txtCity';
    state = '#ddState';
    zipCode = '#txtZipCode';
    addAttendeesButton = '[data-bs-toggle="modal"]';
    saveAndContinueButton = '.col-md-12 > .d-none';
    attendeeFirstName1 = ':nth-child(2) > :nth-child(1) > .form-floating > #txtAttndFirstName';
    attendeeLastName1 = ':nth-child(2) > :nth-child(2) > .form-floating > #txtAttndLastName';
    attendeeEmail1 = ':nth-child(2) > :nth-child(3) > .form-floating > #txtAttndEmail';
    attendeeFirstName2 = ':nth-child(3) > :nth-child(1) > .form-floating > #txtAttndFirstName';
    attendeeLastName2 = ':nth-child(3) > :nth-child(2) > .form-floating > #txtAttndLastName';
    attendeeEmail2 = ':nth-child(3) > :nth-child(3) > .form-floating > #txtAttndEmail';
    ticketTier1 = ':nth-child(2) > :nth-child(4) > .form-floating > #txtAttndEmail'
    ticketTier2 = ':nth-child(3) > :nth-child(4) > .form-floating > #txtAttndEmail';
    attendeeCloseButton = '#btnCloseAttendeefooter';
    attendeeSaveButton = '#AddAttendeesInformationPopup';
    registrationPageBackButton = '[tabindex="0"] > .text-primary';
    paymentMethod = '//*[@id="rdoPaymentType+0"]';
    cardNumberField = '#txtCardNumber';
    cardOwnerName = '#txtNameOnCard';
    monthField = '//input[@placeholder="Month"]';
    yearField = '[max="2080"]';
    cvvField = '#txtCVV';
    termsAndCondition = '#flexCheckDefault';
    makePaymentButton = '#BillingInfoMakePaymentId';
    printTicketButton = '.col-md-12 > .md-raised';
    cancelOrderButton = '[style="display: block;"]';
    contactOrganizerButton = '[data-bs-target="#ModalContactOrganizer"]';
    cancelOrderCloseButton = '#EvenViewRegCloseCancelOrder';
    cancelOrderSubmitButton = '#EvenViewRegCancelOrderSubmit';


    checkCancelOrderSuccessPopup() {

        cy.get('div[style="display: block;"] > .cardboxalert > .card')
            .should('be.visible')
            .should('contain', ' Successfully Cancelled ');
        cy.get('#EventViewRegOkSuccess').click();
    }


    selectCancelTicketTier() {

        cy.get(':nth-child(1) > [scope="row"] > .form-check-input').check();


    }


    clickCancelOrderSubmitButton() {

        cy.get(this.cancelOrderSubmitButton).click();

    }


    clickPrintTicket() {

        cy.get(this.printTicketButton).should('be.visible').click();
        cy.wait(1000);
        cy.get('#ModalTicketPrintEvent > .modal-dialog > .modal-content > .modal-body').should('be.visible');
        cy.wait(1000);
        cy.xpath('//button[normalize-space()="Download"]').click();


    }

    clickCancelOrder() {

        cy.get(this.cancelOrderButton).click();

        cy.get('#ViewRegCancelOrderYes').should('be.visible').click();
        cy.get('#ModalTicketCancelOrder > .modal-dialog > .modal-content > .modal-body').should('be.visible');

    }

    clickContactOrganizer() {

        cy.get(this.contactOrganizerButton).click();
        cy.get('#ModalContactOrganizer > .modal-dialog > .modal-content > .modal-body').should('be.visible');
        cy.wait(2000);
        cy.xpath('//*[@id="ModalContactOrganizer"]/div/div/div[3]/button').click();

    }








    clickMakePaymentButton() {

        cy.get(this.makePaymentButton).click();

    }

    inputCardNumber(cardnumber) {

        cy.get(this.cardNumberField).clear().type(cardnumber);

    }

    inputCardOwnerName(buyername) {

        cy.get(this.cardOwnerName).clear().type(buyername);

    }

    inputMonth(month) {

        cy.xpath(this.monthField).clear().type(month);

    }

    inputYear(year) {

        cy.get(this.yearField).clear().type(year);

    }

    inputCvv(cvv) {

        cy.get(this.cvvField).clear().type(cvv);

    }


    checkTermsAndCondition() {

        cy.get(this.termsAndCondition).check();
    }

    checkPaymentMethod() {

        cy.xpath(this.paymentMethod).check();
    }

    clickRegistrationPageBackButton() {

        cy.get(this.registrationPageBackButton).click();

    }

    // checkTicketTier1(tier1){

    //     cy.get(this.ticketTier1).should('contain',tier1);
    // }

    // checkTicketTier2(tier2){

    //     cy.get(this.ticketTier2).should('contain',tier2);
    // }


    inputAttendeeFirstName1(attendeefirstname) {

        cy.get(this.attendeeFirstName1).clear().type(attendeefirstname);

    }

    inputAttendeeLastName1(attendeelastname) {

        cy.get(this.attendeeLastName1).clear().type(attendeelastname);

    }

    inputAttendeeEmail1(attendeeemail) {

        cy.get(this.attendeeEmail1).clear().type(attendeeemail);

    }

    inputAttendeeFirstName2(attendeefirstname) {

        cy.get(this.attendeeFirstName2).clear().type(attendeefirstname);

    }

    inputAttendeeLastName2(attendeelastname) {

        cy.get(this.attendeeLastName2).clear().type(attendeelastname);

    }

    inputAttendeeEmail2(attendeeemail) {

        cy.get(this.attendeeEmail2).clear().type(attendeeemail);

    }






    clickSaveAndContinueButton() {

        cy.get(this.saveAndContinueButton).click({ force: true });

    }

    clickAttendeeSaveButton() {

        cy.get(this.attendeeSaveButton).click({ force: true });

    }

    clickAddAttendeeButton() {

        cy.get(this.addAttendeesButton).click({ force: true });

    }

    clickAddAttendeesButton() {

        cy.get(this.saveAndContinueButton).click({ force: true });
    }


    inputPrefix(prefix) {

        cy.get(this.prefixField).clear().type(prefix);

    }

    inputFirstName(firstname) {

        cy.get(this.firstNameField).clear().type(firstname);

    }

    inputLastName(lastname) {

        cy.get(this.lastNameField).clear().type(lastname);

    }

    inputSuffix(suffix) {

        cy.get(this.suffixField).clear().type(suffix);

    }

    inputBuyerEmail(buyeremail) {

        cy.get(this.buyerEmailField).clear().type(buyeremail);

    }

    inputBuyerPhone(buyerphone) {

        cy.get(this.buyerPhoneField).clear().type(buyerphone);

    }

    inputAddress(address) {

        cy.get(this.addressField).clear().type(address);

    }

    inputCity(city) {

        cy.get(this.cityField).clear().type(city);

    }

    inputZipCode(zipcode) {

        cy.get(this.zipCode).clear().type(zipcode);

    }

    selectGender(gender) {

        cy.get(this.gender).select(gender, { force: true });

    }

    selectState(state) {

        cy.get(this.state).select(state, { force: true });

    }


    inputTicket1(ticketquantity) {

        cy.get(this.inputTicketField).clear().type(ticketquantity);

    }

    inputTicket2(ticketquantity) {

        cy.xpath(this.inputTicket2Field).clear().type(ticketquantity);

    }




    clickRegistrationPopupCloseButton() {

        cy.get(this.registrationPopUpCloseButton).click();

    }

    clickRegistrationPopupCloseIcon() {

        cy.get(this.registrationPopUpCloseIcon).click();

    }

    clickRegistrationButton() {

        cy.get(this.registrationButton).click();

    }

    checkRegisterNowButton() {

        cy.get('#EventDetailsRegisterNowBtn').should('be.visible');

    }

    clickRegisterNowButton() {

        cy.get('#EventDetailsRegisterNowBtn').click();

    }

    checkRegistrationPopup(eventname, ticketname1, ticketname2) {

        cy.get('.modal-body').should('be.visible');
        cy.get('.modal-body').should('contain', eventname);
        cy.get('.modal-body').should('contain', ticketname1);
        cy.get('.modal-body').should('contain', ticketname2);
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
export default EventRegistration;