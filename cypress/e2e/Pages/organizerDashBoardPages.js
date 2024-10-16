class OrganizerDashboard {

    loginMenuButton = ':nth-child(2) > :nth-child(8) > #EventZetHomemenuLoginmenu';
    userEmail = '#UserEmail';
    userPassword = '#UserPassword';
    login = '#EventLoginBtn';
    dashBoardMenu = '#navbar > :nth-child(2) > :nth-child(2) > .nav-link';
    myEventsMenu = ':nth-child(2) > .card > .card-block > .list-inline';
    bookingListMenu = ':nth-child(3) > .card > .card-block > .list-inline';
    financeMenu = ':nth-child(4) > .card > .card-block > .list-inline';
    reportsMenu = ':nth-child(5) > .card > .card-block > .list-inline';
    permissionMenu = ':nth-child(6) > .card > .card-block > .list-inline';
    accountMenu = ':nth-child(7) > .card > .card-block > .list-inline';
    organizationMenu = '.col-xl-4 > .card > .card-block > .list-inline';
    chart = '.chart';

    checkHistoricalOrderChart() {

        cy.get(this.chart).should('be.visible');
    }

    clickMyEventsMenu() {

        cy.get(this.myEventsMenu).click();

    }

    clickFinanceMenu() {

        cy.get(this.financeMenu).click();

    }

    clickReportsMenu() {

        cy.get(this.reportsMenu).click();

    }

    clickPermissionMenu() {

        cy.get(this.permissionMenu).click();

    }

    clickAccountsMenu() {

        cy.get(this.accountMenu).click();

    }

    clickOrganizationMenu() {

        cy.get(this.organizationMenu).click();

    }

    clickBookingListMenu() {

        cy.get(this.bookingListMenu).click();

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

    dashBoardMenuClick() {

        cy.get(this.dashBoardMenu).should('exist').should('be.visible').click();

    }









}
export default OrganizerDashboard;