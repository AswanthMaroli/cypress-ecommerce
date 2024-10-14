class CreateEventSettings{


    loginMenuButton = ':nth-child(2) > :nth-child(8) > #EventZetHomemenuLoginmenu';
    userEmail = '#UserEmail';
    userPassword = '#UserPassword';
    login = '#EventLoginBtn';
    createEventMenu = '#EventZetCreateEventMenu';
    myEvents = ':nth-child(3) > .nav-link > .fs-4';
    eventsDashboardMenu = '//*[@id="navbar"]/ul/li[2]/a';
    eventEditButton = ':nth-child(1) > .btn > .bi';
    searchEventInputBox = '#myOwneventstab > :nth-child(1) > .col-md-4 > .input-group > .form-control';
    settingsTab = ':nth-child(7) > .nav-link > .d-block';
    addQuestionButton ='.col-md-12 > .btn';
    specialInstructionsField = '#txtSpecialInstructions';
    messageForEmailField = '#txtMessage';
    SettingsPageSaveButton = '.fixed_btm_div > .btn';
    questionInputBox = '.form-floating > .form-control';
    requiredCheckBox = '#requiredCheckbox0';
    questionDeleteButton = 'span > .btn';

    
    clickAddQuestionButton(){

        cy.get(this.addQuestionButton).click();

    }

    inputQustion(question) {

        cy.get(this.questionInputBox).clear().type(question);
        cy.wait(2000);
    }

    checkMarkAsRequiredCheckBox() {                    //for setting questions is mandatory 

        cy.get(this.requiredCheckBox).click();

    }

    inputSpecialInstruction(instructions) {

        cy.get(this.specialInstructionsField).clear().type(instructions);

    }

    inputMessage(message) {

        cy.get(this.messageForEmailField).clear().type(message);

    }

    deleteQuestion() {

        cy.get(this.questionDeleteButton).click();
        cy.wait(2000);
    }


    clickSettingsPageSaveButton() {

        cy.get(this.SettingsPageSaveButton).click({ force: true });
    }
    

    clickSettingsProgressTab(){
        
        cy.get(this.settingsTab).click({force:true});
        cy.intercept('GET', '/api/CustomerInfo/GetCustomerInfo?EventID=*').as('settingsPage');
        cy.wait('@settingsPage', { timeout: 25000 });
        cy.url().should('include','https://test.eventzet.com/#/events/Dashboard/EventzetEventsCreate/EventSettings');
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
export default CreateEventSettings;