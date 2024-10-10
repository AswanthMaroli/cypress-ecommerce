class MyEvent {

  homeurl = 'https://test.eventzet.com/#/Eventshell/Eventhome';
  loginMenu = ':nth-child(2) > :nth-child(8) > #EventZetHomemenuLoginmenu';
  userEmail = '#UserEmail';
  userPassword = '#UserPassword';
  loginButton = '#EventLoginBtn';
  dashBoardMenu = '#navbar > :nth-child(2) > :nth-child(2) > .nav-link';
  myEventsMenu = '.collapse > :nth-child(5) > .nav-link';
  eventsDashboardMenu = '#menu > :nth-child(3) > .nav-link';
  unpublishButton = '(//button[@class="btn btn-sm btn-outline-danger"][normalize-space()="Un Publish"])[1]';
  publishButton = '//button[normalize-space()="Publish"]';
  searchBox = '//div[@id="myOwneventstab"]//input[@placeholder="Search"]';
  eventDeleteButton = '//*[@id="myOwneventstab"]/div[2]/div/div/table/tbody/tr[1]/td[7]/ul/li[3]/button';
  eventDeletePopupButton = '//button[normalize-space()="Yes"]'; //confirmation button 'yes'
  optionButton = '(//button[@id="dropdownBasic1"])[1]';
  allFilterButton = '[for="EventsStatusoption1"]';
  publishedFilterButton = '[for="EventsStatusoption2"]';
  draftFilterButton = '[for="EventsStatusoption4"]';
  pastFilterButton = '[for="EventsStatusoption5"]';
  createEventButton = '.col-md-4 > .btn';
  bodySection = '.features > :nth-child(2)';


  deleteEvent() {

    cy.xpath(this.eventDeleteButton).should('be.visible').click();
    cy.wait(2000);
    cy.xpath(this.eventDeletePopupButton).should('be.visible').click();
    cy.wait(2000);
    cy.xpath('//*[@id="maindashbrd"]/app-dashboardevents/div[2]/div/div').should('be.visible').should('contain', ' Deleted successfully!');
    cy.xpath('//button[normalize-space()="Ok"]').click();

  }

  clickUnPublishButton() {

    cy.xpath(this.unpublishButton).invoke('text').then((text) => {

      if (text.includes(' Un Publish')) {

        cy.xpath(this.unpublishButton).should('be.visible').click();

      } else {

        cy.log('The event is already unpublished');
      }
    });

  }

  clickPublishButton() {

    cy.xpath(this.publishButton).invoke('text').then((text) => {

      if (text.includes(' Publish')) {

        cy.xpath(this.publishButton).should('be.visible').click();

      } else {

        cy.log('The event is already published');
      }
    });

  }

  searchEvent(eventname) {

    cy.xpath(this.searchBox).type(eventname);

  }
  clearSearchEvent() {

    cy.xpath(this.searchBox).should('be.visible').clear();

  }

  checkForSavedAlert() {

    cy.get(this.bodySection).invoke('text').then((text) => {
      if (text.includes('Saved')) {

        cy.xpath('//div[@role="alert"]').should('exist');
        cy.xpath('//div[@role="alert"]').should('have.text', 'Your saved events need to be published. ');

      } else {

        cy.xpath('//div[@role="alert"]').should('not.exist');
      }
    });
  }

  checkEvent(eventtitle) {

    cy.get(this.bodySection).should('be.visible').should('contain', eventtitle);
  }

  myEventsMenuClick() {

    cy.get(this.myEventsMenu).click();

  }

  eventsDashboardMenuClick() {

    cy.get(this.eventsDashboardMenu).click();

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

    cy.scrollTo(0, 0);
    cy.get(this.dashBoardMenu).should('be.visible').click();

  }



}
export default MyEvent;