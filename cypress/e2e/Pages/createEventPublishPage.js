class CreateEventPublish {


    customerDetailsPreviousButton = '//*[@id="maindashbrd"]/app-customerdetails/div[4]/div/div[2]/section/div/div[3]/div/button[1]';
    customerDetailsSaveButton = '//body//app-root//section//button[2]';
    addTicketContinueButton = '(//button[@class="btn md-button md-raised float-end mx-1"])[1]';
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
    title = '//p[normalize-space()="Publish Your Event"]';
    tierCloseIcon = '#ModalAddTier > .modal-dialog > .modal-content > .modal-header > .btn-close';
    eventName = '.col-md-8 > :nth-child(1) > .fw-bold';
    eventPreview = 'a > .text-primary';
    eventPreviewCloseIcon = '.btn-close';
    eventPreviewCloseButton = '.modal-footer > .btn';
    serviceChargeEnableButton = '#ServiceChargesswitch';
    refundRequestButton = '#refundrequestsswitch';
    saveEventButton = '.fixed_btm_div > :nth-child(2) > span';
    taxSettingsNoButton = '#tax0';
    taxSettingsYesButton = '#tax1';
    salesTaxId = ':nth-child(2) > .form-floating > #floatingInput';
    taxName = ':nth-child(3) > .form-floating > #floatingInput';
    taxRate = ':nth-child(4) > .form-floating > #floatingInput';
    taxState = '//*[@id="State01"]';
    saveEventPopup = "(//div[@class='card text-center p-4'])[1]";
    publishEventButton = '.fixed_btm_div > :nth-child(1) > .btn';
    publishEventPopup = '[style="display: block;"] > .cardboxalert > .card > .card-title > .text-secondary';


    loginMenuButton = ':nth-child(2) > :nth-child(8) > #EventZetHomemenuLoginmenu';
    userEmail = '#UserEmail';
    userPassword = '#UserPassword';
    login = '#EventLoginBtn';
    createEventMenu = '#EventZetCreateEventMenu';
    myEvents = ':nth-child(3) > .nav-link > .fs-4';
    eventsDashboardMenu = '//*[@id="navbar"]/ul/li[2]/a';
    eventEditButton = ':nth-child(1) > .btn > .bi';
    searchEventInputBox = '#myOwneventstab > :nth-child(1) > .col-md-4 > .input-group > .form-control';
    publishTab = ':nth-child(8) > .nav-link > .progressactive > .bi';



    checkPublishPageDetails(eventname,eventlocation,onlinetitle,ticketname1,addonname1,ticketname2,addonname2,ticketname3){

        cy.get('.row > :nth-child(1) > .mb-1').should('contain',eventname);
        cy.get(':nth-child(1) > .p-1 > .h5 > small').should('contain',eventlocation);
        cy.get(':nth-child(2) > .p-1 > .h5 > small').should('contain',onlinetitle);
        cy.get('.col-md-4 > .w-100').should('be.visible');
        cy.get(':nth-child(1) > .p-1 > :nth-child(2) > .p-2 > :nth-child(2) > :nth-child(1) > :nth-child(1) > .txt_blu').should('contain',ticketname1);
        cy.get(':nth-child(1) > :nth-child(5) > .list-inline > .mr-3 > .txt_blu').should('contain',addonname1);
        cy.get('.p-2 > :nth-child(2) > :nth-child(2) > :nth-child(1) > .txt_blu').should('contain',ticketname2);
        cy.get(':nth-child(2) > :nth-child(5) > .list-inline > .mr-3 > .txt_blu').should('contain',addonname2);
        cy.get(':nth-child(2) > .p-1 > :nth-child(2) > .p-2 > :nth-child(2) > :nth-child(1) > :nth-child(1) > .txt_blu').should('contain',ticketname3);

    }

    clickPublishProgressTab(){
        
        cy.get(this.publishTab).click({force:true});
        cy.intercept('GET', '/api/BasicInfo/GetEventLocation?EventID=*').as('publishPage');
        cy.wait('@publishPage', { timeout: 25000 });
        cy.url().should('include','https://test.eventzet.com/#/events/Dashboard/EventzetEventsCreate/Eventpublish');
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


    publishEvent() {

        cy.get(this.publishEventButton).click();

    }

    checkPublishEventPopup() {

        cy.get(this.publishEventPopup).should('be.visible').should('contain', 'Event published successfully!');
        cy.get('[style="display: block;"] > .cardboxalert > .card > .w-100 > .btn').click();

    }


    saveEvent() {

        cy.get(this.saveEventButton).click();

    }

    checkSaveEventPopup() {

        cy.xpath(this.saveEventPopup).should('be.visible').should('contain', 'Event saved successfully!');
        cy.xpath("(//button[@type='submit'][normalize-space()='Ok'])[1]").click();

    }


    clickServiceChargeButton() {
        cy.get(this.serviceChargeEnableButton).then($element => {
            // Simulate a mouse click on the element using JavaScript
            const event = new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
                view: window
            });
            $element[0].dispatchEvent(event);
        });

        cy.wait(2000);

        // Now, check the state of the button (enabled/disabled) after the click
        cy.get(this.serviceChargeEnableButton).should('be.enabled');
    }


    clickRefundRequestButton() {

        cy.get(this.refundRequestButton).click();
        cy.wait(2000);
        cy.get(this.refundRequestButton).should('be.enabled');

    }

    unCheckServiceChargeButton() {

        cy.get(this.serviceChargeEnableButton).then($element => {
            // Simulate a mouse click on the element using JavaScript
            const event = new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
                view: window
            });
            $element[0].dispatchEvent(event);
        });

        cy.wait(2000);
    }


    unCheckRefundRequestButton() {

        cy.get(this.refundRequestButton).then($element => {
            // Simulate a mouse click on the element using JavaScript
            const event = new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
                view: window
            });
            $element[0].dispatchEvent(event);
        });

        cy.wait(2000);
    }

 




    clickUnPublishButton() {

        cy.get(this.unPublishbutton).invoke('text').then(buttonText => {
            if (buttonText.includes('Un Publish')) {
                // If the button text includes 'Un Publish', click the unPublishbutton and then eventEditButton
                cy.get(this.unPublishbutton).click({ force: true });
                cy.wait(2000);
                cy.get(this.eventEditButton).click({ force: true });
            } else {
                // If the button text does not include 'Un Publish', click eventEditButton directly
                cy.get(this.eventEditButton).click({ force: true });
            }
        });
    }



 














}
export default CreateEventPublish;