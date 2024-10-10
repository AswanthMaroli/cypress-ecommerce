class Home {

    homeurl = 'https://test.eventzet.com/#/Eventshell/Eventhome';
    createEventButton = '#EventZetCreateEventMenu';
    searchEventsButton = '#SearchEventHome';
    logoImage = '.img-fluid';
    searchEventIcon = '.badge > .bi';
    dashBoardMenu = '#navbar > :nth-child(2) > :nth-child(2) > .nav-link';
    createEventMenu = '#EventZetCreateEventMenu';
    findOrderMenu = '#navbar > :nth-child(2) > :nth-child(5) > .nav-link';
    pricingMenu = ':nth-child(2) > :nth-child(6) > #EventZetPricingEvent';
    helpMenu = '.ptr_hand > span';
    loginButton = ':nth-child(2) > :nth-child(8) > #EventZetHomemenuLoginmenu';
    signupButton = ':nth-child(9) > #EventZetHomemenuSignupmenu';
    event = '#tab-1 > main > .container-fluid > .row > :nth-child(1) > #EventDetailsEventkist > .card-body';
    allFilter = '#populareventsAll > span';
    onlineFilter = '#populareventsOnline > span';
    todayFilter = '#populareventsToday > span';
    thisWeekFilter = '#populareventsThisweekend > span';
    freeFilter = '#populareventsFree > span';
    musicFilter = '#populareventsMusic > span';
    foodAndDrinkFilter = '#populareventFooddirink > span';
    charityFilter = '#populareventsCharity > span';
    nearbyFilter = '#populareventsNearBy > span';
    viewMoreButton = '#EventListViewMore';
    logout = '//a[normalize-space()="Log Out"]';
    menuDropdown = ':nth-child(2) > #EventZetUsermenu > .nav-link > span';
    okButton = '//*[@id="btnMessage"]';
    serviceNotAvailablePopup = '//*[contains(text()," Service not Available")]';
    home = ':nth-child(2) > :nth-child(1) > #EventZetHomemenu';


    clickHome() {

        cy.get(this.home).click({ force: true });
    }

    okButtonClick() {

        cy.xpath(this.okButton).click();

    }
    checkLogo() {

        cy.get(this.logoImage).should('be.visible');
    }

    clickCreateEvent() {

        cy.get(this.createEventButton).click({ force: true });
    }

    clickSearchEvents() {

        cy.get(this.searchEventsButton).click({ force: true });

    }

    clickSearchEventsIcon() {

        cy.get(this.searchEventIcon).click();

    }

    clickDashboardMenu() {

        cy.get(this.dashBoardMenu).click();

    }

    clickCreateEventMenu() {

        cy.get(this.createEventMenu).click();

    }

    clickFindOrderMenu() {

        cy.get(this.findOrderMenu).click();

    }

    clickFindOrderMenu() {

        cy.get(this.findOrderMenu).click();

    }

    clickPricingMenu() {

        cy.get(this.pricingMenu).click();

    }

    clickHelpMenu() {

        cy.get(this.helpMenu).click();

    }

    clickLogin(useremail,password) {

        cy.get(this.loginButton).click();
        cy.wait(2000);
        cy.url().should('include', 'https://test.eventzet.com/#/Eventshell/Eventlogin');
        cy.get('#UserEmail').click({ force: true }).type(useremail);
        cy.get('#UserPassword').click({ force: true }).type(password);
        cy.get('#EventLoginBtn').click();
    }

    logOut() {
        cy.get(this.menuDropdown).click({ force: true });
        cy.wait(1000);
        cy.xpath(this.logout).click({ force: true });
    }


    clickSignUp() {

        cy.get(this.signupButton).click();

    }

    checkAllFilter() {

        cy.get(this.allFilter).click({ force: true });
    }

    checkOnlineFilter() {

        cy.get(this.onlineFilter).click({ force: true });
    }

    checkTodayFilter() {

        cy.get(this.todayFilter).click({ force: true });
    }

    checkThisWeekFilter() {

        cy.get(this.thisWeekFilter).click({ force: true });
    }

    checkFreeFilter() {

        cy.get(this.freeFilter).click({ force: true });
    }

    checkMusicFilter() {

        cy.get(this.musicFilter).click({ force: true });
    }

    checkFoodDrinkFilter() {

        cy.get(this.foodAndDrinkFilter).click({ force: true });
    }

    checkCharityFilter() {

        cy.get(this.charityFilter).click({ force: true });
    }

    checkNearbyFilter() {

        cy.get(this.nearbyFilter).click({ force: true });
    }
    clickViewMoreButton() {

        cy.get(this.viewMoreButton).click({ force: true });
    }


}
export default Home;