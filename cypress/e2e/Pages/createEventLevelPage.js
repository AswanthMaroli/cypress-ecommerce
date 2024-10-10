class CreateEventLevel{

    homeurl = 'https://test.eventzet.com/#/Eventshell/Eventhome';
    loginMenuButton = ':nth-child(2) > :nth-child(8) > #EventZetHomemenuLoginmenu';
    userEmail = '#UserEmail';
    userPassword = '#UserPassword';
    login = '#EventLoginBtn';
    createEventMenu = '#EventZetCreateEventMenu';
    basicTab = '.d-inline > #second_tab > .d-block';
    myEvents = ':nth-child(3) > .nav-link > .fs-4';
    eventsDashboardMenu = '//*[@id="navbar"]/ul/li[2]/a';
    eventEditButton = ':nth-child(1) > .btn > .bi';
    levelTab = ':nth-child(3) > .nav-link > .progressactive > .bi';
    firstLevelInputBox ='#tier';
    addLevelButton = '.md-btn-lg-line';
    saveAndContinueButton = '.md-raised';
    secondLevelInputoBox = ':nth-child(2) > .col-md-8 > .form-floating > #tier';
    levelDeleteButton = 'span > .btn > .bi';
    searchEventInputBox ='#myOwneventstab > :nth-child(1) > .col-md-4 > .input-group > .form-control';
    


    searchEventName(eventname){

        cy.get(this.searchEventInputBox).clear().type(eventname);
    }




    clickLevelDeleteButton() {

        cy.get(this.levelDeleteButton).click({ force: true });

    }

    clickSaveAndContinueButton() {

        cy.get(this.saveAndContinueButton).click({ force: true });
        cy.intercept('GET', '/api/Timeslot/GetEventDates?EventID=*').as('timeSlotData');
        cy.wait('@timeSlotData', { timeout: 25000 });
        cy.url().should('include', 'https://test.eventzet.com/#/events/Dashboard/EventzetEventsCreate/EventSlot');

    }


    clickAddLevelButton() {

        cy.get(this.addLevelButton).click({ force: true });

    }

    InputFirstLevel(levelname){

        cy.get(this.firstLevelInputBox).clear().type(levelname);

    }

    InputSecondLevel(levelname){

        cy.get(this.secondLevelInputoBox).clear().type(levelname);

    }

    clickLevelTab() {

        cy.get(this.levelTab).click({ force: true });
        cy.intercept('GET', '/api/Levels/GetEventLevels?EventID=*').as('levelPage');
        cy.wait('@levelPage', { timeout: 10000 });

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

export default CreateEventLevel;