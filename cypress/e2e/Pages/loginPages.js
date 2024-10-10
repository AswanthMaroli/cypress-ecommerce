class Login {

    loginButton = '//nav[@id="navbar"]//a[@id="EventZetHomemenuLoginmenu"]';
    loginEmail = '#UserEmail';
    loginPassword = '#UserPassword';
    loginButton2 = '#EventLoginBtn';
    forgotPasswordButton = ':nth-child(4) > .col-md-12 > .mb-0 > .text-decoration-none';
    signUpButton = ':nth-child(5) > .col-md-12 > .mb-0 > .text-decoration-none';
    errorMessage = '.alert';
    accountSuspended = '.alert > .w-100';
    menuDropdown = ':nth-child(2) > #EventZetUsermenu > .nav-link > span';
    logout = "//a[normalize-space()='Log Out']";
    homeurl = 'https://test.eventzet.com/#/Eventshell/Eventhome';

    loginClick() {

        cy.xpath(this.loginButton).should('exist').should('be.visible').click();

    }

    inputEmail(useremail) {

        cy.get(this.loginEmail).click({ force: true }).type(useremail);

    }

    inputPassword(userpassword) {

        cy.get(this.loginPassword).click({ force: true }).type(userpassword);

    }

    login() {

        cy.get(this.loginButton2).click();

    }

    forgotPasswordClick() {

        cy.get(this.forgotPasswordButton).click();

    }

    signUpClick() {

        cy.get(this.signUpButton).click();
    }

    checkErrorMessage() {

        cy.get(this.errorMessage).should('contain', 'Invalid Username or Password !');

    }

    checkAccountSuspended() {

        cy.get(this.accountSuspended).should('contain', 'This account is suspended !');

    }

    logOut() {
        cy.get(this.menuDropdown).click({ force: true });
        cy.wait(1000);
        cy.xpath(this.logout).click({ force: true });
    }


}
export default Login;
