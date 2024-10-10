class CreateEventCustomerDetails {


    title = '//p[normalize-space()="Customer Details Form"]';
    questionButton = '.my-2 > .btn';
    questionBoxPopup = '#ModalAddYourQuestionLbl';
    questionField = '#txtQuestion';
    qustionBoxCloseIcon = '#btnCloseQuestionModal';
    qustionCloseButton = '.btn-outline-secondary';
    questionSaveButton = '.modal-footer > .md-button';
    specialInstructionTitle = ':nth-child(5) > .card-title';
    specialInstructionField = '#txtSpecialInstructions';
    messageForEmailTitle = '.mt-2 > :nth-child(1) > .card-title';
    messageForEmailField = '#txtMessage';
    customerDetailsPreviousButton = '//*[@id="maindashbrd"]/app-customerdetails/div[4]/div/div[2]/section/div/div[3]/div/button[1]';
    customerDetailsSaveButton = '//*[@id="maindashbrd"]/app-customerdetails/div[4]/div/div[2]/section/div/div[3]/div/button[2]';
    tierCloseIcon = '#ModalAddTier > .modal-dialog > .modal-content > .modal-header > .btn-close';
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
    deleteQuestionButtton = '.bi-x-circle-fill';




    clickCustomerDetailsPreviousButton() {

        cy.xpath(this.customerDetailsPreviousButton).click({ force: true });
    }


    clickCustomerDetailsSaveButton() {

        cy.xpath(this.customerDetailsSaveButton).click({ force: true });
    }

    clickMyEventMenu() {

        cy.get(this.myEventMenu).click({ force: true });

    }

    checkTitle() {

        cy.scrollTo(0, 0);
        cy.wait(1000);
        cy.xpath(this.title).should('contain', 'Customer Details Form ');
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

    clickTierCloseIcon() {

        cy.get(this.tierCloseIcon).click();
    }

    clickAddTicketPreviousButton() {

        cy.xpath(this.addTicketPreviousButton).click({ force: true });

    }

    clickAddTicketContinueButton() {

        cy.xpath(this.addTicketContinueButton).click({ force: true });

    }

    clickAddQuestionButton() {

        cy.get(this.questionButton).click({ force: true });

    }

    checkQustionBoxPopup() {

        cy.get(this.questionBoxPopup).should('be.visible').should('contain', 'Add Your Questions');

    }

    inputQustion(question) {

        cy.get(this.questionField).clear().type(question);
        cy.wait(2000);
    }

    saveQuestion() {

        cy.get(this.questionSaveButton).click();

    }

    clickQuestionBoxCloseIcon() {

        cy.get(this.qustionBoxCloseIcon).click();

    }

    clickQuestionBoxCloseButton() {

        cy.get(this.qustionCloseButton).click();

    }

    inputSpecialInstruction(question) {

        cy.get(this.specialInstructionField).clear().type(question);

    }

    inputMessage(message) {

        cy.get(this.messageForEmailField).clear().type(message);

    }
    deleteQuestionIcon() {

        cy.get(this.deleteQuestionButtton).click();
        cy.wait(2000);
        cy.get('[style="display: block;"] > .cardboxalert > .card').should('be.visible').should('contain', 'Question Deleted Successfully');
        cy.wait(2000);

    }

    deleteQuestion() {

        cy.get(this.deleteQuestionButtton).click();
        cy.wait(2000);
        cy.get('[style="display: block;"] > .cardboxalert > .card').should('be.visible').should('contain', 'Are you sure you want to delete the question?');
        cy.get('.btn-primary').click();
        cy.wait(2000);
        cy.get('[style="display: block;"] > .cardboxalert > .card').should('be.visible').should('contain', 'Question Deleted Successfully');
        cy.wait(2000);
        cy.get('[style="display: block;"] > .cardboxalert > .card > .w-100 > .btn').click();
    }



}
export default CreateEventCustomerDetails;