class MyEvent {

  loginMenuButton = ':nth-child(2) > :nth-child(8) > #EventZetHomemenuLoginmenu';
  userEmail = '#UserEmail';
  userPassword = '#UserPassword';
  login = '#EventLoginBtn';
  createEventMenu = '#EventZetCreateEventMenu';
  myEvents = ':nth-child(3) > .nav-link > .fs-4';
  eventsDashboardMenu = '//*[@id="navbar"]/ul/li[2]/a';
  dashBoardMenu = '#navbar > :nth-child(2) > :nth-child(2) > .nav-link';
  unpublishButton = '//button[normalize-space()="Un Publish"]';
  publishButton = '//button[normalize-space()="Publish"]';
  searchBox = '//div[@id="myOwneventstab"]//input[@placeholder="Search"]';
  eventDeleteButton = "(//button[@class='btn btn-sm btn-outline-danger'])[2]";
  eventDeletePopupButton = '//button[normalize-space()="Yes"]'; //confirmation button 'yes'
  optionButton = '(//button[@id="dropdownBasic1"])[1]';
  allFilterButton = '[for="EventsStatusoption1"]';
  publishedFilterButton = '[for="EventsStatusoption2"]';
  draftFilterButton = '[for="EventsStatusoption4"]';
  pastFilterButton = '[for="EventsStatusoption5"]';
  createEventButton = '.col-md-4 > .btn';
  bodySection = '.features > :nth-child(2)';
  searchEventInputBox = '#myOwneventstab > :nth-child(1) > .col-md-4 > .input-group > .form-control';


  searchEventName(eventname) {

    cy.get(this.searchEventInputBox).clear().type(eventname);

}


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
export default MyEvent;