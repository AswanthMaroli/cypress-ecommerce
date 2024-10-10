class Signup {

    signupButton = ':nth-child(9) > #EventZetHomemenuSignupmenu';
    signupEmail = '#email';
    signupFirstName = '#SignupFirstname';
    signupLastName = '#signUpLastname';
    signupPassword = '#SignupPassword';
    signupConfirmPassword = '#SignUpconfirmPassword';
    signupCreateAccount = '#SignUpCreateAccount';
    signupSuccessButton = '#SignUpCreateAccount';
    homeurl = 'https://test.eventzet.com/#/Eventshell/Eventhome';
    
    signUpClick() {

        cy.get(this.signupButton).should('exist').should('be.visible').click();

    }


    setEmail(useremail) {

        cy.get(this.signupEmail).click({ force: true }).type(useremail);

    }

    setFirstName(firstName) {

        cy.get(this.signupFirstName).click({ force: true }).type(firstName);

    }

    setLastName(lastName) {

        cy.get(this.signupLastName).click({ force: true }).type(lastName);

    }

    setPassword(password) {

        cy.get(this.signupPassword).click({ force: true }).type(password);

    }

    setConfirmPassword(confirmPassword) {

        cy.get(this.signupConfirmPassword).click({ force: true }).type(confirmPassword);

    }

    createAccount() {

        cy.get(this.signupCreateAccount).click();
    }

    successPopUpClick() {

        cy.get(this.signupSuccessButton).should('be.visible').click();
    }







}

export default Signup;