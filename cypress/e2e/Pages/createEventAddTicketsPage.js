class CreateEventAddTickets {

    title = '//p[normalize-space()="Add Tickets"]';
    tierContinueButton = '#ModalAddTier > .modal-dialog > .modal-content > .modal-footer > .btn';
    saveTierButton = '.col-md-6 > .btn';
    tierEditButton = ':nth-child(2) > .list-inline > :nth-child(1) > .btn > small > .bi';
    tierDeletedButton = ':nth-child(2) > .list-inline > :nth-child(2) > .btn > small > .bi';
    tierField = '#txtTierName';
    tierCloseIcon = '#ModalAddTier > .modal-dialog > .modal-content > .modal-header > .btn-close';
    addEditTierButton = '[data-bs-target="#ModalAddTier"]';
    addTicketButton = '#btnAddTicket';
    addTicketPreviousButton = '//button[@class="btn md-button md-raised float-start mx-1"]';
    addTicketContinueButton = '//button[@class="btn md-button md-raised float-end mx-1"]';
    addTicketPopup = '//div[@class="modal-dialog"]//div[@class="modal-body"]';
    addTierPopup = '//div[@id="ModalAddTier"]//div[@class="modal-body"]';
    pricing = '//*[@id="ModalAddYourTickets"]//select';
    ticketName = '#txtTicketName';
    availableQuantity = '#txtQuantity';
    price = '#txtPrice';
    maximumNumberOfTickets = '#txtMaxNumTickets';
    saleStartDate = '#txtSalesStartDate';
    salesStartTime = '//app-marzet-tp[@labeltext="Ticket Sales Start Time"]//input[@name="marTime"]';
    salesEndDate = '#txtSalesEndDate';
    salesEndTime = '//app-marzet-tp[@labeltext="Ticket Sales End Time"]//input[@name="marTime"]';
    ticketSaveButton = '#ModalAddYourTickets > .modal-dialog > .modal-content > .modal-footer > .md-button';
    ticketCloseButton = '//button[@id="btnCloseAddTicket"]';
    ticketCloseIcon = '//button[@id="btnClose"]';
    addonTab = '[data-aos-delay="100"] > .nav-link > span';
    createAddonButton = '#tab-2 > .container-fluid > :nth-child(2) > .col-md-12 > .btn';
    addonName = '#txtAddonName';
    addonQuantity = '#txtQuanity';
    addonPrice = ':nth-child(4) > .form-floating > #floatingInput';
    tiers = ':nth-child(5) > .form-floating > #floatingSelectGrid';
    addonDescription = '.modal-body > .row > .mb-3 > .form-floating > #floatingTextareadescription';
    addonSaveButton = '#ModalAddYourAddOns > .modal-dialog > .modal-content > .modal-footer > .md-button';
    addonCloseButton = '//button[@id="btnCloseAddOn"]';
    addonCloseIcon = '//div[@id="ModalAddYourAddOns"]//button[@aria-label="Close"]';
    deleteTierPopup = ':nth-child(4) > .cardboxalert > .card > .w-100 > .btn-primary';
    deleteTierSuccessPopup = ':nth-child(2) > .cardboxalert > .card > .w-100 > .btn';
    saveTierSuccessPopup = ':nth-child(2) > .cardboxalert > .card > .w-100 > .btn';
    homeurl = 'https://test.eventzet.com/#/Eventshell/Eventhome';
    loginMenu = ':nth-child(2) > :nth-child(8) > #EventZetHomemenuLoginmenu';
    userEmail = '#UserEmail';
    userPassword = '#UserPassword';
    loginButton = '#EventLoginBtn';
    myEvents = '//li[@id="EventZetUsermenu"]//li[1]//a[1]';
    unPublishbutton = ':nth-child(1) > :nth-child(7) > .list-inline > :nth-child(2) > .btn';
    eventEditButton = ':nth-child(1) > :nth-child(6) > .list-inline > :nth-child(1) > .btn';
    basicInfoSaveButton = '.col-md-8 > .btn';
    detailsSaveButton = '//button[@class="btn md-button md-raised float-md-end mx-1 my-1"]';
    myEventMenu = '.collapse > :nth-child(5) > .nav-link';
    saveTicketSuccessPopup = '[style="display: block;"] > .cardboxalert > .card';
    deleteTicketButton = ':nth-child(1) > :nth-child(8) > .list-inline > :nth-child(2) > .btn > small > .bi';
    deleteTicketPopup = '[style="display: block;"] > .cardboxalert > .card';
    deleteTicketOkButton = '[style="display: block;"] > .cardboxalert > .card > .w-100 > .btn-primary';
    deleteTicketSuccessPopup = '[style="display: block;"] > .cardboxalert > .card';
    deleteTicketSuccessOkButton = '[style="display: block;"] > .cardboxalert > .card > .w-100 > .btn';
    editTicketButton = ':nth-child(8) > .list-inline > :nth-child(1) > .btn > small > .bi';
    addonTier = '//div[@id="ModalAddYourAddOns"]//select[@id="floatingSelectGrid"]';
    addonPopup = '#ModalAddYourAddOns > .modal-dialog > .modal-content > .modal-body';
    addonSuccessPopup = '[style="display: block;"] > .cardboxalert > .card';
    addonEditButton = ':nth-child(5) > .list-inline > :nth-child(1) > .btn > small > .bi';
    addonDeleteButton = ':nth-child(5) > .list-inline > :nth-child(2) > .btn > small > .bi';
    customerDetailsPreviousButton = '//*[@id="maindashbrd"]/app-customerdetails/div[4]/div/div[2]/section/div/div[3]/div/button[1]';
    logout = '//*[@id="navbarSupportedContent"]/ul/li[7]/ul/li[5]/a';
    menuDropdown = ':nth-child(2) > #EventZetUsermenu > .nav-link > span';


    logOut() {
        cy.get(this.menuDropdown).click({ force: true });
        cy.wait(1000);
        cy.xpath(this.logout).click({ force: true });
    }

    clickCustomerDetailsPreviousButton() {

        cy.xpath(this.customerDetailsPreviousButton).click({ force: true });
    }

    editAddon() {

        cy.get(this.addonEditButton).click({ force: true });
    }

    deleteAddon() {

        cy.get(this.addonDeleteButton).click({ force: true });
        cy.wait(3000);
        cy.get('[style="display: block;"] > .cardboxalert > .card').should('be.visible').should('contain', 'Are you sure you want to delete the Add-on?');
        cy.get('[style="display: block;"] > .cardboxalert > .card > .w-100 > .btn-primary').click({ force: true });
        cy.wait(3000);
        cy.get('[style="display: block;"] > .cardboxalert > .card').should('be.visible').should('contain', 'Add-On Deleted Successfully');
        cy.get('[style="display: block;"] > .cardboxalert > .card > .w-100 > .btn').click({ force: true });

    }





    saveAddon() {

        cy.get(this.addonSaveButton).click({ force: true });
        cy.get(this.addonSuccessPopup).should('be.visible').should('contain', 'Add-On Saved Successfully');
        cy.wait(2000);
        cy.get('[style="display: block;"] > .cardboxalert > .card > .w-100 > .btn').click({ force: true });
    }

    clickCloseAddonButton() {

        cy.get(this.addonCloseIcon).click({ force: true });

    }

    clickCloseAddonIcon() {

        cy.get(this.addonCloseButton).click({ force: true });

    }




    clickAddonTab() {

        cy.get(this.addonTab).click({ force: true });

    }

    clickCreateAddonButton() {

        cy.get(this.createAddonButton).click({ force: true });

    }

    checkAddonPopup() {

        cy.get(this.addonPopup).should('be.visible');

    }

    inputAddonName(addonname) {

        cy.get(this.addonName).click({ force: true }).clear().type(addonname);

    }

    inputAddonQuantity(addonquantity) {

        cy.get(this.addonQuantity).click({ force: true }).clear().type(addonquantity);

    }

    inputAddonPrice(addonprice) {

        cy.get(this.addonPrice).click({ force: true }).clear().type(addonprice);

    }

    selectAddonTier() {
        // Get all options within the dropdown
        cy.xpath(this.addonTier).find('option').then(options => {
            // Select the second option from the list of options
            const secondOptionValue = options[1].value; // Assuming the second option value is what you want
            cy.xpath(this.addonTier).select(secondOptionValue, { force: true });
        });
    }



    inputAddonDescription(addondescription) {

        cy.get(this.addonDescription).click({ force: true }).clear().type(addondescription);

    }


    editTicket() {

        cy.get(this.editTicketButton).click({ force: true });

    }

    deleteTicket() {

        cy.get(this.deleteTicketButton).click({ force: true });
        cy.wait(1000);
        cy.get(this.deleteTicketPopup).should('be.visible').should('contain', 'Are you sure you want to delete the Ticket?');
        cy.get(this.deleteTicketOkButton).click({ force: true });
        cy.wait(3000);
        cy.get(this.deleteTicketSuccessPopup).should('be.visible').should('contain', 'Ticket Deleted Successfully');
        cy.get(this.deleteTicketSuccessOkButton).click({ force: true });


    }



    clickMyEventMenu() {

        cy.get(this.myEventMenu).click({ force: true });

    }



    clickAddEditTier() {

        cy.get(this.addEditTierButton).click();
        cy.wait(2000);

    }

    checkTitle() {

        cy.scrollTo(0, 0);
        cy.xpath(this.title).should('contain', 'Add Tickets');
    }

    clickEventEditButton() {

        cy.get(this.eventEditButton).click({ force: true });

    }


    clickMyEvents() {

        cy.xpath(this.myEvents).click({ force: true });

    }

    clickUnPublishButton() {

        cy.get(this.unPublishbutton).click({ force: true });
    }


    clickSaveButton() {

        cy.get(this.basicInfoSaveButton).click({ force: true });

    }

    clickDetailsSaveButton() {

        cy.xpath(this.detailsSaveButton).click({ force: true });

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

    clickContinueButton() {

        cy.get(this.tierContinueButton).click({ force: true });

    }

    inputTierName(tiername) {


        cy.get(this.tierField).clear().type(tiername);
    }

    saveTier() {

        cy.get(this.saveTierButton).click({ force: true });
        cy.wait(3000);
        cy.get(this.saveTierSuccessPopup).should('be.visible').click({ force: true });

    }

    clickEditTier() {

        cy.get(this.tierEditButton).click({ force: true });

    }

    clickDeleteTier() {

        cy.get(this.tierDeletedButton).click({ force: true });
        cy.wait(2000);
        cy.get(this.deleteTierPopup).click({ force: true });
        cy.wait(2000);
        cy.get(this.deleteTierSuccessPopup).should('be.visible').click({ force: true })

    }

    clickTierCloseIcon() {

        cy.get(this.tierCloseIcon).click({ force: true });
    }

    clickAddTicket() {

        cy.get(this.addTicketButton).click({ force: true });

    }

    selectPricing(eventpricing) {

        cy.xpath(this.pricing).select(eventpricing, { force: true });

    }

    selectTier(targetTierIndex) {

        cy.xpath(`//*[@id="ModalAddYourTickets"]/div/div/div[2]/div/div[3]/div/input[@id="rdoTicketTier+${targetTierIndex}"]`).
            click({ force: true });

    }

    inputTicketName(ticketname) {

        cy.get(this.ticketName).click({ force: true }).clear().type(ticketname);

    }

    inputAvailableQuantity(quantity) {

        cy.get(this.availableQuantity).click({ force: true }).clear().type(quantity);

    }

    inputTicketPrice(ticketprice) {

        cy.get(this.price).click({ force: true }).clear().type(ticketprice);

    }

    inputMaximunNumberOfTicket(maxnumber) {

        cy.get(this.maximumNumberOfTickets).click({ force: true }).clear().type(maxnumber);

    }

    inputSalesStartDate(salesstartdate) {

        cy.get(this.saleStartDate).click({ force: true }).type(salesstartdate);

    }

    inputSalesEndDate(salesenddate) {

        cy.get(this.salesEndDate).click({ force: true }).type(salesenddate);

    }

    inputSalesStartTime(salesstarttime) {

        cy.xpath(this.salesStartTime).click({ force: true }).clear().type(salesstarttime);

    }

    inputSalesEndTime(salesendtime) {

        cy.xpath(this.salesEndTime).click({ force: true }).clear().type(salesendtime);

    }

    saveTicket() {

        cy.get(this.ticketSaveButton).click({ force: true });
        cy.wait(3000);
        cy.get(this.saveTicketSuccessPopup).should('be.visible');
        cy.get('[style="display: block;"] > .cardboxalert > .card > .card-title').should('contain', 'Ticket Saved Successfully');
        cy.wait(1000);
        cy.get('[style="display: block;"] > .cardboxalert > .card > .w-100 > .btn').click({ force: true });
    }

    clickCloseTicketButton() {

        cy.xpath(this.ticketCloseButton).click({ force: true });

    }

    clickCloseTicketIcon() {

        cy.xpath(this.ticketCloseIcon).click({ force: true });

    }

    clickAddTicketPreviousButton() {

        cy.xpath(this.addTicketPreviousButton).click({ force: true });

    }

    clickAddTicketContinueButton() {

        cy.xpath(this.addTicketContinueButton).click({ force: true });

    }

    checkAddTierPopup() {

        cy.xpath(this.addTierPopup).should('be.visible');

    }

    checkAddTicketPopup() {

        cy.xpath(this.addTicketPopup).should('be.visible');

    }

    checkDeleteTierPopup() {

        cy.xpath(this.clickDeleteTierPopup).should('be.visible');

    }

    checkDeleteTierSuccessPopup() {

        cy.xpath(this.clickDeleteTierSuccessPopup).should('be.visible');

    }



}
export default CreateEventAddTickets;