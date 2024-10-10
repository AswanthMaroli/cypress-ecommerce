class OrganizerDashboard {

    homeurl = 'https://test.eventzet.com/#/Eventshell/Eventhome';
    loginMenu =':nth-child(2) > :nth-child(8) > #EventZetHomemenuLoginmenu';
    userEmail = '#UserEmail';
    userPassword = '#UserPassword';
    loginButton = '#EventLoginBtn';
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

    clickLoginMenu() {

        cy.get(this.loginMenu).click();

    }

    loginClick() {

        cy.get(this.loginButton).should('exist').should('be.visible').click();

    }

    inputEmail(useremail) {

        cy.get(this.userEmail).click({ force: true }).clear().type(useremail);

    }

    inputPassword(password) {

        cy.get(this.userPassword).click({ force: true }).clear().type(password);

    }

    dashBoardMenuClick() {

        cy.get(this.dashBoardMenu).should('exist').should('be.visible').click();

    }









}
export default OrganizerDashboard;