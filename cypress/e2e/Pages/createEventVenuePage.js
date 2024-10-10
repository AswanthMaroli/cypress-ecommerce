class CreateEventVenue {



    homeurl = 'https://test.eventzet.com/#/Eventshell/Eventhome';
    loginMenuButton = ':nth-child(2) > :nth-child(8) > #EventZetHomemenuLoginmenu';
    userEmail = '#UserEmail';
    userPassword = '#UserPassword';
    login = '#EventLoginBtn';
    createEventMenu = '#EventZetCreateEventMenu';
    basicTab = '.d-inline > #second_tab > .d-block';
    myEvents = ':nth-child(3) > .nav-link > .fs-4';
    eventsDashboardMenu = '//*[@id="navbar"]/ul/li[2]/a';
    eventEditButton = ':nth-child(1) > :nth-child(6) > .list-inline > :nth-child(1) > .btn > .bi';
    venueTab = ':nth-child(2) > #second_tab > .progressactive > .bi';
    onlineButton = '.col-md-12 > :nth-child(2) > .btn';
    venueButton = ':nth-child(3) > .col-md-12 > :nth-child(1) > .btn';
    tobeAnnouncedButton = '#TobeannouncedCheckswitch';
    venueInputBox = '#floatingInput';
    addressInputBox = '#AddressEvent';
    addVenueButton = '.mt-3 > .ptr_hand';
    cancelButton = ':nth-child(4) > :nth-child(1) > :nth-child(1) > .mt-3 > :nth-child(2)';
    onlineTitleInputBox = ':nth-child(1) > .form-floating > #floatingInputOnlineMeeting';
    onlineMeetingUrlInputBox = ':nth-child(2) > .form-floating > #floatingInputOnlineMeeting';
    onlineInstructionsInputBox = '#OnineDivChild > :nth-child(1) > :nth-child(3) > .form-floating > .form-control';
    onlineSaveButton = '#OnineDivChild > :nth-child(1) > .mt-3 > :nth-child(1)';
    onlineCancelButton = '#OnineDivChild > :nth-child(1) > .mt-3 > :nth-child(2)';
    venueEditButton = ':nth-child(3) > .list-inline > :nth-child(1) > .btn > small > .bi';
    venueDeleteButton = ':nth-child(3) > .list-inline > :nth-child(2) > .btn > small > .bi';
    onlineEditButton = '//*[@id="OnineDivChild"]/div[2]/div/table/tbody/tr/td[4]/ul/li[1]/button';
    onlineDeleteButton = '//*[@id="OnineDivChild"]/div[2]/div/table/tbody/tr/td[4]/ul/li[2]/button';
    continueButton = '.fixed_btm_div > .btn';
    cityInputBox = '#CityEvent';
    cityEditButton = ':nth-child(1) > :nth-child(3) > .list-inline > :nth-child(1) > .btn > small > .bi';
    cityDeleteButton = ':nth-child(1) > :nth-child(3) > .list-inline > :nth-child(2) > .btn > small > .bi';
    venueCancelButton = ':nth-child(5) > :nth-child(1) > :nth-child(1) > .mt-3 > :nth-child(2)';
    searchEventInputBox ='#myOwneventstab > :nth-child(1) > .col-md-4 > .input-group > .form-control';


    searchEventName(eventname) {

        cy.get(this.searchEventInputBox).clear().type(eventname);
    }



    checkToBeAnnouncedEnabled() {

        cy.get(this.tobeAnnouncedButton).should('to.be.checked');

    }

    checkToBeAnnouncedDisabled() {

        cy.get(this.tobeAnnouncedButton).should('not.be.checked');

    }

    checkOnlineTitleValidation() {

        cy.get(':nth-child(1) > .form-floating > .invalid-feedback > .font_s7').
            should('be.visible').
            should('contain', 'Title is Required');
    }

    checkOnlineUrlValidation() {

        cy.get('#OnineDivChild > :nth-child(1) > :nth-child(2) > .form-floating > .invalid-feedback > .font_s7').
            should('be.visible').
            should('contain', 'Online meeting URL is Required');
    }

    checkVenueListEmpty() {

        cy.wait(1000);
        cy.xpath('//*[@id="VenueDiv"]/div/div[2]/div[1]/table/tbody').then($tbody => {
            if ($tbody.length > 0) {

                cy.xpath('//*[@id="VenueDiv"]/div/div[2]/div[1]/table/tbody/tr').should('not.exist').then(() => {
                    cy.log('The venue has been deleted successfully.');
                    console.log('The venue has been deleted successfully.');
                });
            } else {

                cy.log('Venue list is empty (table body not found)');
                console.log('Venue list is empty (table body not found)');
            }
        });
    }

    checkOnlineListEmpty() {

        cy.wait(1000);
        cy.xpath('//*[@id="OnineDivChild"]/div[2]/div/table/tbody').then($tbody => {
            if ($tbody.length > 0) {

                cy.xpath('//*[@id="OnineDivChild"]/div[2]/div/table/tbody/tr').should('not.exist').then(() => {
                    cy.log('The online has been deleted successfully.');
                    console.log('The online has been deleted successfully.');
                });
            } else {

                cy.log('Online list is empty (table body not found)');
                console.log('Online list is empty (table body not found)');
            }
        });
    }



    checkVenueValidation() {

        cy.get('#contentInsidevenueSlot > :nth-child(2) > .form-floating > .invalid-feedback > .font_s7').
            should('be.visible').
            should('contain', 'Venue is Required');
    }

    checkAddressValidation() {

        cy.get(':nth-child(3) > .form-floating > .invalid-feedback > .font_s7').
            should('be.visible').
            should('contain', 'Address is Required');
    }

    checkCityValidation() {

        cy.get('.col-md-4 > .form-floating > .invalid-feedback > .font_s7').
            should('be.visible').
            should('contain', 'City is Required');
    }

    checkOnlineTitleValidation() {

        cy.get(':nth-child(1) > .form-floating > .invalid-feedback > .font_s7').
            should('be.visible').
            should('contain', 'Title is Required');
    }

    checkOnlineURLValidation() {

        cy.get(':nth-child(2) > .form-floating > .invalid-feedback > .font_s7').
            should('be.visible').
            should('contain', 'Online meeting URL is Required');
    }

    checkSavedVenueData(venuename, address) {

        cy.xpath('(//tr)[2]/td[1]').invoke('text').then((text) => {
            expect(text).to.include(venuename);
        });

        cy.xpath('(//tr)[2]/td[2]').invoke('text').then((text) => {
            expect(text).to.include(address);
        });

    }

    checkSavedOnlineVenueData(expectedTitle, expectedUrl, expectedInstructions) {

        cy.wait(1000);
        cy.get('#OnineDivChild').within(() => {

            cy.xpath('//tbody/tr/td[1]').invoke('text').then((text) => {
                expect(text).to.include(expectedTitle);
            });


            cy.xpath('//tbody/tr/td[2]').invoke('text').then((text) => {
                expect(text).to.include(expectedUrl);
            });


            cy.xpath('//tbody/tr/td[3]').invoke('text').then((text) => {
                expect(text).to.include(expectedInstructions);
            });

        });

        cy.log('Online venue data verified successfully');
    }



    inputCity(cityname) {

        cy.get(this.cityInputBox).clear().type(cityname);

    }

    clickVenueButton() {

        cy.get(this.venueButton).click({ force: true });
    }

    clickOnlineButton() {

        cy.get(this.onlineButton).click({ force: true });
    }

    clickToBeAnnouncedButton() {

        cy.get(this.tobeAnnouncedButton).click({ force: true });
    }

    clickAddVenueButton() {

        cy.get(this.addVenueButton).click({ force: true });
    }

    clickCancelButton() {

        cy.get(this.cancelButton).click({ force: true });
    }

    inputVenue(venue) {

        cy.get(this.venueInputBox)
            .click({ force: true })
            .clear()
            .type(venue)
            .as('venueInput');
        cy.wait(2000);

        cy.get('@venueInput')
            .get('.pac-container .pac-item:first-child')
            .should('be.visible', { timeout: 3000 })
            .click({ force: true });

    }


    inputAddress(address) {

        cy.get(this.addressInputBox).clear().type(address);

    }

    inputOnlineTitle(onlinetitle) {

        cy.get(this.onlineTitleInputBox).clear().type(onlinetitle);

    }

    inputOnlineUrl(onlineurl) {

        cy.get(this.onlineMeetingUrlInputBox).clear().type(onlineurl);

    }


    inputOnlineInstructions(instructions) {

        cy.get(this.onlineInstructionsInputBox).clear().type(instructions);

    }

    clickOnlineSaveButton() {

        cy.get(this.onlineSaveButton).click({ force: true });

    }


    clickOnlneCancelButton() {

        cy.get(this.onlineCancelButton).click({ force: true });

    }

    clickOnlineEditButton() {

        cy.xpath(this.onlineEditButton).click({ force: true });

    }

    clickOnlineDeleteButton() {

        cy.xpath(this.onlineDeleteButton).click({ force: true });

    }

    clickVenueEditButton() {

        cy.get(this.venueEditButton).click({ force: true });

    }

    clickVenueDeleteButton() {

        cy.get(this.venueDeleteButton).click({ force: true });

    }


    clickCityEditButton() {

        cy.get(this.cityEditButton).click({ force: true });

    }

    clickCityDeleteButton() {

        cy.get(this.cityDeleteButton).click({ force: true });

    }


    clickVenueCancelButton() {

        cy.get(this.venueCancelButton).click({ force: true });

    }


    clickContinueButton() {

        cy.get(this.continueButton).click();
        cy.wait(2000);
        cy.url().should('include', 'https://test.eventzet.com/#/events/Dashboard/EventzetEventsCreate/EventTiers');

    }

    clickVenueTab() {

        cy.get(this.venueTab).click({ force: true });
        cy.intercept('GET', ' /api/Venues/GetEventVenues?EventID=*').as('venuePage');
        cy.wait('@venuePage', { timeout: 10000 });

    }

    clickEventEditButton() {

        cy.get(this.eventEditButton).click({ force: true });

    }


    eventsDashboardMenuClick() {

        cy.xpath(this.eventsDashboardMenu).click();
        cy.wait(4000);

    }

    clickMyEvents() {

        cy.get(this.myEvents).click({ force: true });

    }

    clickLoginMenu() {

        cy.get(this.loginMenuButton).click();

    }

    loginClick() {

        cy.get(this.login).click();
        cy.wait(6000);

    }

    clickBasicTab() {

        cy.get(this.basicTab).click({ force: true });

    }


    clickLoginMenu() {

        cy.get(this.loginMenuButton).click();

    }

    loginClick() {

        cy.get(this.login).click();
        cy.wait(6000);

    }

    clickBasicTab() {

        cy.get(this.basictab).click({ force: true });

    }

    inputEmail(useremail) {

        cy.get(this.userEmail).click({ force: true }).type(useremail);

    }

    inputPassword(userepassword) {

        cy.get(this.userPassword).click({ force: true }).type(userepassword);

    }










}
export default CreateEventVenue;