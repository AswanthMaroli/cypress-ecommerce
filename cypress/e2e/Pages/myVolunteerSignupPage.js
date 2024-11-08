export class MyVolunteerSignup{


    
    loginMenuButton = ':nth-child(2) > :nth-child(8) > #EventZetHomemenuLoginmenu';
    userEmail = '#UserEmail';
    userPassword = '#UserPassword';
    login = '#EventLoginBtn';
    menuDropdown = ':nth-child(2) > #EventZetUsermenu > .nav-link > span';
    myvolunteerSignupMenu = "(//a[@class='text-decoration-none'][normalize-space()='My Volunteer Signups'])[1]";
    searchBox = '.form-control';
    dateRangeFilterButton ='#inputGroupSelect01';
    userName = '.animate__animated';

    searchSignupName(signupname) {

        cy.get(this.searchBox).click({ force: true }).type(signupname);
    
    }

    clearSearchBox() {

        cy.get(this.searchBox).clear();
    
    }

    clickMyVoulunteerSignupMenu() {

        cy.xpath(this.myvolunteerSignupMenu).click({force:true});
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

    clickMenuDropDown() {
    
        cy.get(this.menuDropdown).click();
    
    }

    cancelAllSignupRegistration(signupName) {

        this.searchSignupName(signupName);
        cy.wait(1000);
        cy.xpath('//*[@id="pricing"]/div/div[2]/div[2]/div')
            .should('exist')
            .its('length')
            .then(count => {
                cy.log(`Number of registrations: ${count}`);
                this.clearSearchBox();
                cy.wait(1000);

                for (let i = 1; i <= count; i++) {
                    this.searchSignupName(signupName);
                    cy.wait(1000);
                    cy.xpath(`//*[@id="pricing"]/div/div[2]/div[2]/div[${i}]`)
                        .should('be.visible')
                        .click();
                        cy.wait(3000);
    
                    // Check if the Cancel button exists
                    cy.document().then(($document) => {
                        const cancelButton = $document.evaluate(
                            '//button[normalize-space()="Cancel Sign Up"]',
                            $document,
                            null,
                            XPathResult.FIRST_ORDERED_NODE_TYPE,
                            null
                        ).singleNodeValue;
    
                        if (cancelButton && cancelButton.offsetParent !== null) {  // Check existence and visibility
                            cy.xpath('//button[normalize-space()="Cancel Sign Up"]').click();
                            cy.xpath('//button[normalize-space()="Yes"]')
                                .should('be.visible')
                                .click();
                            cy.xpath('//button[normalize-space()="Ok"]')
                                .should('be.visible')
                                .click();
                        } else {
                            cy.log(`Registration ${i} is already cancelled or not cancellable`);
                            cy.xpath('//button[normalize-space()="Back"]')
                                .should('be.visible')
                                .click();
                        }
                    });
    
                    cy.wait(2000);
                }
            });
    }
}