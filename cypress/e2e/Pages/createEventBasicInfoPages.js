class CreateEventBasicInfo {

  homeurl = 'https://test.eventzet.com/#/Eventshell/Eventhome';
  loginMenuButton = ':nth-child(2) > :nth-child(8) > #EventZetHomemenuLoginmenu';
  userEmail = '#UserEmail';
  userPassword = '#UserPassword';
  login = '#EventLoginBtn';
  createEventMenu = '#EventZetCreateEventMenu';
  createEventButton = '.md-raised';
  eventTitle = '.col-md-6.form-group > .form-floating > #floatingInput';
  type = '//*[@id="floatingSelectGrid"]';
  category = ':nth-child(2) > .form-floating > #floatingSelectGridCategory';
  subCategory = ':nth-child(5) > .form-floating > #floatingSelectGridCategory';
  tags = '.input-group > .form-control';
  tagsAddButton = '#basic-addon2';
  venue = '#VenueDiv > .form-floating > #floatingInput';
  onlineEvent = ':nth-child(1) > :nth-child(2) > .btn';
  toBeAnnounced = ':nth-child(1) > :nth-child(3) > .btn';
  venueField = '#VenueDiv > .form-floating > #floatingInput';
  eventStartDate = '#txtSalesStartDate';
  eventStartTime = '//app-marzet-tp[@labeltext="Start Time *"]//input[@id="martime_0_tp"]';
  eventEndDate = '#txtSalesEndDate';
  eventEndTime = '//app-marzet-tp[@labeltext="End Time *"]//input[@id="martime_0_tp"]';
  timeZone = ':nth-child(5) > .card > .card-body > .row > .col-md-4 > .form-floating > #floatingSelectGridCategory';
  summary = '#floatingTextarea2';
  organizerEmail = '#email';
  organizerPhone = ':nth-child(2) > .form-floating > #floatingInput';
  basicInfoSaveButton = '.fixed_btm_div > .btn';
  titleValidation = '.col-md-6.form-group > .form-floating > .invalid-feedback > div';
  startDateValidation = ':nth-child(4) > .form-floating > .invalid-feedback';
  endDateValidation =':nth-child(5) > .form-floating > .invalid-feedback';
  emailvalidation = '.invalid-feedback > .font_s7';
  basictab ='.d-inline > #second_tab > .d-block';
  
  clickLoginMenu() {

    cy.get(this.loginMenuButton).click();

  }

  loginClick() {

    cy.get(this.login).click();
    cy.wait(6000);

  }

  clickBasicTab() {

    cy.get(this.basictab).click({ force: true });

  }

  inputEmail(useremail) {

    cy.get(this.userEmail).click({ force: true }).type(useremail);

  }

  inputPassword(userepassword) {

    cy.get(this.userPassword).click({ force: true }).type(userepassword);

  }
  clickCreateEventMenu() {

    cy.get(this.createEventMenu).click();
    cy.wait(10000);
    cy.url().should('include', 'https://test.eventzet.com/#/events/Dashboard/EventzetEventsCreate/EventzetEventbasics');
  }

  clickCreateEvent() {

    cy.get(this.createEventButton).click({ force: true });

  }

  inputEventTitle(eventname) {

    cy.get(this.eventTitle).click({ force: true }).type(eventname);

  }

  selectType(typevalue) {

    cy.xpath(this.type).select(typevalue, { force: true });

  }

  selectCategory(categoryvalue) {

    cy.get(this.category).select(categoryvalue, { force: true });
  }


  selectSubCategory(subcategoryvalue) {

    cy.xpath(this.category).select(subcategoryvalue, { force: true });


  }

  inputTags(tag) {

    cy.get(this.tags).click({ force: true }).type(tag);
    cy.get(this.tagsAddButton).click({ force: true });

  }

  selectEventStartDate(startdate) {

    cy.get(this.eventStartDate).click({ force: true }).type(startdate);

  }
  selectEventEndDate(enddate) {

    cy.get(this.eventEndDate).click({ force: true }).type(enddate);

  }
  selectEventStartTime(starttime) {

    cy.xpath(this.eventStartTime).click({ force: true }).type(starttime);

  }
  selectEventEndTime(endtime) {

    cy.xpath(this.eventEndTime).click({ force: true }).type(endtime);

  }

  selectTimeZone(timezone) {

    cy.get(this.timeZone).select(timezone).should('have.value', timezone);


  }

  inputSummary(eventsummary) {

    cy.get(this.summary).click({ force: true }).type(eventsummary);

  }

  inputOrganizerEmail(organizeremail) {

    cy.get(this.organizerEmail).click({ force: true }).type(organizeremail);

  }

  inputOrganizerPhone(organizerphone) {

    cy.get(this.organizerPhone).click({ force: true }).type(organizerphone);

  }

  clickSaveButton() {

    cy.get(this.basicInfoSaveButton).click({ force: true });

  }

  checkTitleValidation() {

    cy.get(this.titleValidation).should('contain', 'Title is required');

  }


  checkStartDateValidation() {

    cy.get(this.startDateValidation).should('contain', 'Start Date is required');

  }

  

  checkEndDateValidation() {

    cy.get(this.endDateValidation).should('contain', 'End Date is required');

  }

  checkOrganizerEmailValidation() {

    cy.get(this.emailvalidation).should('contain', 'Email is required');

  }

  inputVenue(eventvenue) {

    cy.get(this.venue)
      .click({ force: true })
      .type(eventvenue)
      .as('venueInput');

    cy.get('@venueInput')
      .get('.pac-container .pac-item:first-child')
      .should('be.visible')
      .click({ force: true });
    // cy.get('input[type="text"]').type('{downarrow}');
    // cy.get('input[type="text"]').type('{enter}');

  }


}
export default CreateEventBasicInfo;