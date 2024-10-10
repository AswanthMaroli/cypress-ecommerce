class SearchFilter {

    searchEventsButton = '#SearchEventHome';
    onlineEventToggleButton = '#flexSwitchCheckDefault';
    freeCheckBox = '#inlineCheckbox1';
    paidCheckBox = '#inlineCheckbox2';
    categoryFilter = '.card-body > .nav > :nth-child(1) > .nav-link';
    typeFilter = '.card-body > .nav > :nth-child(2) > .nav-link';
    startDate = ':nth-child(1) > .mb-1 > #txtSalesStartDate';
    endDate = ':nth-child(2) > .mb-1 > #txtSalesStartDate';
    applyFilterButton = '.mr-2';
    clearFilterButton = '.ml-2';
    searchField = ':nth-child(1) > .input-group > .form-control';
    locationSearchField = ':nth-child(2) > .input-group > .form-control';
    firstSearchResult = '//*[@id="targetFilterEvent"]/div/div/div[2]/div/div/div';
    secondSearchResult = ':nth-child(2) > .h-100 > .eventcrdoverlay';
    searchEventText = '.section-title > p';
    registerNowButton = "//button[@class='btn button-sm md-button md-raised eventcrdmiddle']";
    eventTitle = '.h4';
    eventLocationName = '.list-inline > :nth-child(1) > small';
    categories = '//div[@id="categoryFiltercanvas"]//ul';
    types = '//div[@id="typeFiltercanvas"]//ul';
    homeurl = 'https://test.eventzet.com/#/Eventshell/Eventhome';
    filterButton = '.card-header > .d-flex';
    periodButton = '#accordionExample > .nav-link';

    clickFilterButton() {

        cy.get(this.filterButton).click();
    }

    searchFilterClick() {

        cy.get(this.searchEventsButton).click({ force: true });
        cy.url().should('include', 'https://test.eventzet.com/#/Eventshell/Eventlistsearch');
    }

    checkSearchFilterTitle() {

        cy.get(this.searchEventText).should('exist').should('be.visible');
        cy.log('SEARCH EVENTS title is visible');
    }

    checkOnlineEvent() {


        cy.get(this.onlineEventToggleButton).click({ force: true });
    }

    checkFreeEvent() {


        cy.get(this.freeCheckBox).check({ force: true });
    }

    checkPaidEvent() {

        cy.get(this.paidCheckBox).check({ force: true });
    }

    checkCategory(category) {

        cy.get(this.categoryFilter).click();
        cy.wait(1000);
        cy.xpath(this.categories)
            .should('contain', category)
            .each(($ele, index, list) => {
                if ($ele.text() === category) {
                    cy.wrap($ele).click();
                }
            });
    }


    checkType(eventtype) {

        cy.get(this.typeFilter).click();
        cy.wait(1000);
        cy.xpath(this.types)
            .should('contain', eventtype)
            .each(($ele, index, list) => {
                if ($ele.text() === eventtype) {
                    cy.wrap($ele).click();
                }
            });
    }

    selectStartDate(startdate) {


        cy.get(this.periodButton).click();
        cy.get(this.startDate).type(startdate);
    }

    selectEndDate(enddate) {

        cy.get(this.periodButton).click();
        cy.get(this.endDate).type(enddate);
    }

    applyFilter() {

        cy.get(this.applyFilterButton).click();

    }

    clearFilter() {

        cy.get(this.clearFilterButton).click();

    }

    searchEvent(eventname) {

        cy.get(this.searchField).click({ force: true }).type(eventname);

    }

    searchLocation(location) {

        cy.get(this.locationSearchField).click({ force: true }).type(location);

    }

    checkEventName(eventname) {

        cy.xpath(this.firstSearchResult).should('contain', eventname);

    }

    checkEventLocation(eventlocation) {

        cy.xpath(this.firstSearchResult).should('contain', eventlocation);
    }


    registerNowButtonClick() {

        cy.xpath(this.registerNowButton).click({ force: true });
        cy.wait(10000);

    }

    checkEventTitle(eventname) {

        cy.get(this.eventTitle).should('contain', eventname)

    }



}
export default SearchFilter;