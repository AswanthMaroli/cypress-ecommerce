class CreateEventDeatails {

  uploadImageButton = '//input[@id="customFileInputbanner"]';
  uploadSubImageButton = '//input[@id="customFileInput"]';
  previousButton = '.float-start';
  saveAndContinueButton = '.float-md-end';
  homeurl = 'https://test.eventzet.com/#/Eventshell/Eventhome';
  loginMenu = ':nth-child(2) > :nth-child(8) > #EventZetHomemenuLoginmenu';
  userEmail = '#UserEmail';
  userPassword = '#UserPassword';
  loginButton = '#EventLoginBtn';
  createEventMenu = '#EventZetCreateEventMenu';
  eventTitle = '.col-md-6.form-group > .form-floating > #floatingInput';
  eventStartDate = ':nth-child(1) > .form-floating > #txtSalesStartDate';
  eventEndDate = '#txtSalesEndDate';
  eventStartTime = '//app-marzet-tp[@labeltext="Start Time *"]//input[@id="martime_0_tp"]';
  eventEndTime = '//app-marzet-tp[@labeltext="End Time *"]//input[@id="martime_0_tp"]';
  organizerEmail = '#email';
  organizerPhone = '.col-sm-12.col-lg-4 > .card > .card-body > .row > :nth-child(2) > .form-floating > #floatingInput';
  basicInfoSaveButton = '.col-md-8 > .btn';
  venue = '#VenueDiv > .form-floating > #floatingInput';
  subimagecloseicon = ':nth-child(2) > span > .bi';
  bannerimagecloseicon = '.col-md-8 > span > .bi';
  imageLimitPopup = '[style="display: block;"] > .cardboxalert > .card';
  popupOkButton = '[style="display: block;"] > .cardboxalert > .card > .w-100 > .d-inline';
  detailsSaveButton = '//button[@class="btn md-button md-raised float-md-end mx-1 my-1"]';
  detailsPreviousButton = '//button[@class="btn md-button md-raised float-start mx-1 my-1"]';
  myEvents = '//li[@id="EventZetUsermenu"]//li[1]//a[1]';
  unPublishbutton = ':nth-child(1) > :nth-child(7) > .list-inline > :nth-child(2) > .btn';
  eventEditButton = ':nth-child(1) > :nth-child(6) > .list-inline > :nth-child(1) > .btn';
  myEventsMenu = '.collapse > :nth-child(5) > .nav-link';
  eventsDashboardMenu = '//*[@id="navbar"]/ul/li[2]/a';

  myEventsMenuClick() {

    cy.get(this.myEventsMenu).click();

  }

  eventsDashboardMenuClick() {

    cy.xpath(this.eventsDashboardMenu).click();

  }
  clickUnPublishButton() {

    cy.get(this.unPublishbutton).click({ force: true });
  }

  clickEventEditButton() {

    cy.get(this.eventEditButton).click({ force: true });

  }


  clickMyEventMenu() {

    cy.get(this.myEventMenu).click({ force: true });

  }

  deleteSubImage() {

    cy.get(this.subimagecloseicon).click({ force: true });

  }

  popupButtonClick() {

    cy.get(this.popupOkButton).click({ force: true });

  }

  checkPopup() {

    cy.get(this.imageLimitPopup).should('be.visible');
  }

  checkImageFileTypePopup() {

    cy.get(this.imageFileTypePopup).should('be.visible');
  }

  deleteBannerImage() {

    cy.get(this.bannerimagecloseicon).click({ force: true });

  }



  uploadImage(imagepath) {

    cy.xpath(this.uploadImageButton)
      .attachFile(imagepath);

  }

  uploadSubImage(subimagePaths) {
    // Iterate through the array of file paths and upload each file individually
    subimagePaths.forEach(subimagePath => {
      cy.xpath(this.uploadSubImageButton).attachFile(subimagePath);
      cy.wait(2000);
    });
  }

  uploadVideo(videopath) {

    cy.xpath(this.uploadSubImageButton)
      .attachFile(videopath);

  }



  inputEmail(useremail) {

    cy.get(this.userEmail).click({ force: true }).type(useremail);

  }

  inputPassword(password) {

    cy.get(this.userPassword).click({ force: true }).type(password);

  }

  loginClick() {

    cy.get(this.loginButton).click({ force: true });
  }

  clickLoginMenu() {

    cy.get(this.loginMenu).click({ force: true });
  }

  clickCreateEventMenu() {

    cy.get(this.createEventMenu).click();
    cy.wait(13000);
    cy.url().should('include', 'https://test.eventzet.com/#/events/Dashboard/Createevent');
  }

  inputEventTitle(eventname) {

    cy.get(this.eventTitle).click({ force: true }).type(eventname);

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

  inputOrganizerEmail(organizeremail) {

    cy.get(this.organizerEmail).click({ force: true }).type(organizeremail);

  }

  inputOrganizerPhone(organizerphone) {

    cy.get(this.organizerPhone).click({ force: true }).type(organizerphone);

  }

  clickSaveButton() {

    cy.get(this.basicInfoSaveButton).click({ force: true });

  }

  clickDetailsSaveButton() {

    cy.xpath(this.detailsSaveButton).click({ force: true });

  }

  clickPreviousButton() {

    cy.get(this.previousButton).click({ force: true });

  }

  clickDetailsPreviousButton() {

    cy.xpath(this.detailsPreviousButton).click({ force: true });

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

  }




}
export default CreateEventDeatails;