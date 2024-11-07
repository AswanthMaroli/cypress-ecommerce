class SignupRegistration {

  loginMenu = ':nth-child(2) > :nth-child(8) > #EventZetHomemenuLoginmenu';
  volunteerSignupMenu = '#VolunteerhomeLarge';
  loginButton = ':nth-child(8) > #EventZetHomemenuLoginmenu';
  menuDropdown = '.collapse > :nth-child(7) > .nav-link > span';
  logout = '//*[@id="navbarSupportedContent"]/ul/li[7]/ul/li[5]/a';
  userEmailField = '#UserEmail';
  passwordField = '#UserPassword';
  loginButton = '#EventLoginBtn';
  searchBox = '.form-control';
  signup = '//*[@id="tab-1"]/main/div/div[1]/div[1]';
  signupName = '.h3';
  userName = '.col-md-8 > :nth-child(2)';
  signupDescription = '.col-md-8 > div > :nth-child(2)';
  firstSlotDate = ':nth-child(1) > .card > .card-body > .list-group > .list-group-item > :nth-child(1) > .col-md-12 > .d-flex > .flex-fill > .signupcrdTittlebody';
  firstSlotLocation = ':nth-child(1) > .card > .card-body > .list-group > .list-group-item > :nth-child(2) > :nth-child(1) > .row > .col-md-12 > .p-0';
  firstSlotTime = ':nth-child(1) > .card > .card-body > .list-group > .list-group-item > :nth-child(2) > :nth-child(1) > .row > .col-lg-3 > :nth-child(1) > .p-0';
  secondSlotDate = ':nth-child(2) > .card > .card-body > .list-group > .list-group-item > :nth-child(1) > .col-md-12 > .d-flex > .flex-fill > .signupcrdTittlebody';
  secondSlotLocation = ':nth-child(2) > .card > .card-body > .list-group > .list-group-item > :nth-child(2) > :nth-child(1) > .row > .col-md-12 > .p-0';
  secondSlotTimeData = ':nth-child(2) > .card > .card-body > .list-group > .list-group-item > :nth-child(2) > :nth-child(1) > .row > .col-lg-3 > :nth-child(1) > .p-0';
  firstSlot = ':nth-child(1) > .card > .card-header > .row > .col-12 > .d-inline > .h5';
  secondSlot = ':nth-child(2) > .card > .card-header > .row > .col-12 > .d-inline > .h5';
  firstSignupButton = ':nth-child(1) > .checkbox > .checkbox-wrapper > .checkbox-tile > .checkbox-label';
  secondSignupButton = ':nth-child(2) > .checkbox > .checkbox-wrapper > .checkbox-tile';
  saveButton = '.col-md-12 > .float-end';
  regDetailsSlotTitle1 = '//*[@id="servicessection"]/div/div[2]/div[1]/div/div[1]/div/div';
  regDetailsTime1 = '//*[@id="servicessection"]/div/div[2]/div[1]/div/div[2]/ul/li/div/div[1]/div/div[1]';
  regDetailsDate1 = '//*[@id="servicessection"]/div/div[2]/div[1]/div/div[2]/ul/li/div/div[1]/div/div[2]';
  regDetailsLocation1 = '//*[@id="servicessection"]/div/div[2]/div[1]/div/div[2]/ul/li/div/div[1]/div/div[3]';
  quantityField1 = '//*[@id="servicessection"]/div/div[2]/div[1]/div/div[2]/ul/li/div/div[2]/div/input';
  commentsField1 = '//body[1]/app-root[1]/app-eventshell[1]/main[1]/app-volunteersignmeupregistration[1]/section[1]/div[1]/div[2]/div[1]/div[1]/div[2]/ul[1]/li[1]/div[1]/div[3]/div[1]/input[1]';
  regDetailsSlotTitle2 = ':nth-child(2) > .card > .card-header > .row > .col-12 > .d-inline > .h5';
  regDetailsTime2 = ':nth-child(2) > .card > .card-body > .list-group > .list-group-item > .row > :nth-child(1) > .d-flex > :nth-child(1)';
  regDetailsDate2 = ':nth-child(2) > .card > .card-body > .list-group > .list-group-item > .row > :nth-child(1) > .d-flex > :nth-child(2)';
  regDetailsLocation2 = ':nth-child(2) > .card > .card-body > .list-group > .list-group-item > .row > :nth-child(1) > .d-flex > :nth-child(3)';
  quantityField2 = ':nth-child(2) > .card > .card-body > .list-group > .list-group-item > .row > :nth-child(2) > .form-floating > .form-control';
  commentsField2 = ':nth-child(2) > .card > .card-body > .list-group > .list-group-item > .row > :nth-child(3) > .form-floating > #comment';
  firstNameField = '#FirstName';
  lastNameField = '#LastName';
  emailField = '#Email';
  genderField = '#Gender';
  addressField = '#Address1';
  cityField = '#City';
  stateField = '#ddState';
  postalCodeField = '#PostalCode';
  signUPNowButton = '.col-md-12 > .btn';
  regConfirmSignupTitle = '.h2';
  regConfirmBuyerName = '.card-title';
  backToHomeButton = '.pr-3 > .btn';
  contactOrganizerButton = '.pl-3 > .btn';



  checkRegConfirmSignupTitle(signuptitle) {

    cy.get(this.regConfirmSignupTitle).should('contain', signuptitle);

  }

  checkRegConfirmBuyerName(buyername) {

    cy.get(this.regConfirmBuyerName).should('contain', buyername);

  }

  clickBackToHomeButton() {

    cy.get(this.backToHomeButton).click();

  }

  clickContactOrganizerButton() {

    cy.get(this.contactOrganizerButton).click();

  }


  checkRegistrationConfirm(firstslot, quantity1, datetime1, location1, secondslot, quantity2, datetime2, location2) {

    cy.xpath('(//div[@class="row"])[2]/div').then(($rows) => {
      if ($rows.length === 1) {

        cy.xpath('//*[@id="servicessection"]/div/div[2]/div[1]/div/div[1]/div/div/div/span').should('contain', firstslot);
        cy.xpath('//*[@id="servicessection"]/div/div[2]/div[1]/div/div[2]/ul/li/div/div/label/p').should('contain', quantity1);
        cy.xpath('//*[@id="servicessection"]/div/div[2]/div/div/div[2]/ul/li/div/div/div[1]/p').should('contain', datetime1);
        cy.xpath('//*[@id="servicessection"]/div/div[2]/div[1]/div/div[2]/ul/li/div/div/div[2]/p').should('contain', location1);
      } else if ($rows.length === 2) {

        cy.xpath('//*[@id="servicessection"]/div/div[2]/div[1]/div/div[1]/div/div/div/span').should('contain', firstslot);
        cy.xpath('//*[@id="servicessection"]/div/div[2]/div[1]/div/div[2]/ul/li/div/div/label/p').should('contain', quantity1);
        cy.xpath('//*[@id="servicessection"]/div/div[2]/div[1]/div/div[2]/ul/li/div/div/div[1]').should('contain', datetime1);
        cy.xpath('//*[@id="servicessection"]/div/div[2]/div[1]/div/div[2]/ul/li/div/div/div[2]/p').should('contain', location1);


        cy.get(':nth-child(2) > .card > .card-header > .row > .col-12 > .d-inline > .h5').should('contain', secondslot);
        cy.get(':nth-child(2) > .card > .card-body > .list-group > .list-group-item > .row > .col-md-12 > .h6 > p').should('contain', quantity2);
        cy.get(':nth-child(2) > .card > .card-body > .list-group > .list-group-item > .row > .col-md-12 > :nth-child(2) > p').should('contain', datetime2);
        cy.get(':nth-child(2) > .card > .card-body > .list-group > .list-group-item > .row > .col-md-12 > :nth-child(3) > p').should('contain', location2);
      }
    });
  }





  clickFirstSignupButton() {

    cy.get(this.firstSignupButton).click();

  }

  clickSecondSignupButton() {

    cy.get(this.secondSignupButton).click();

  }

  clickRegDetailsSave() {

    cy.get(this.saveButton).click();

  }

  clickSignUpNowButton() {

    cy.get(this.signUPNowButton).click();

  }

  checkFirstSlotDetails(firstslotname, time1, date1, location1) {

    cy.xpath(this.regDetailsSlotTitle1).should('contain', firstslotname);
    cy.xpath(this.regDetailsTime1).should('contain', time1);
    cy.xpath(this.regDetailsDate1).should('contain', date1);
    cy.xpath(this.regDetailsLocation1).should('contain', location1);

  }

  checkSecondSlotDetails(secondslotname, time2, date2, location2) {

    cy.get(this.regDetailsSlotTitle2).should('contain', secondslotname);
    cy.get(this.regDetailsTime2).should('contain', time2);
    cy.get(this.regDetailsDate2).should('contain', date2);
    cy.get(this.regDetailsLocation2).should('contain', location2);

  }

  inputQuantity1(quantity) {

    cy.xpath(this.quantityField1).type(quantity);

  }

  inputQuantity2(quantity) {

    cy.get(this.quantityField2).type(quantity);

  }

  inputComment1(comment) {

    cy.xpath(this.commentsField1).type(comment);

  }

  inputComment2(comment) {

    cy.get(this.commentsField2).type(comment);

  }

  inputFirstName(firstname) {

    cy.get(this.firstNameField).type(firstname);

  }

  inputLastName(lastname) {

    cy.get(this.lastNameField).type(lastname);

  }

  inputEmail(email) {

    cy.get(this.emailField).type(email);

  }

  selectGender(gender) {

    cy.get(this.genderField).select(gender);

  }

  inputAddress(address) {

    cy.get(this.addressField).type(address);

  }

  inputCity(city) {

    cy.get(this.cityField).type(city);

  }

  selectState(state) {

    cy.get(this.stateField).select(state);

  }

  inputPostalCode(postalcode) {

    cy.get(this.postalCodeField).type(postalcode);

  }

  clickLogin(useremail, userpassword) {

    cy.get(this.loginMenu).click();
    cy.wait(2000);
    cy.url().should('include', 'https://test.eventzet.com/#/Eventshell/Eventlogin');
    cy.get(this.userEmailField).click({ force: true }).type(useremail);
    cy.wait(1000);
    cy.get(this.passwordField).click({ force: true }).type(userpassword);
    cy.wait(1000);
    cy.get(this.loginButton).click();
    cy.wait(5000);
  }

  logOut() {

    cy.get(this.menuDropdown).click({ force: true });
    cy.wait(1000);
    cy.xpath(this.logout).click({ force: true });
  }

  clickVolunteerSignup() {

    cy.get(this.volunteerSignupMenu).click({ force: true });

  }

  searchSignupName(signupname) {

    cy.get(this.searchBox).type(signupname);

  }

  clickSignup() {

    cy.xpath(this.signup).click();
    cy.wait(2000);
    cy.url().should('include', 'https://test.eventzet.com/#/Eventshell/Volunteersignupdetails');

  }

  checkSignupCreatorName(username) {

    cy.get(this.userName).should('be.visible').should('contain', username);
  }

  checkSignupDescription() {

    cy.get(this.signupDescription).should('be.visible').should('exist');

  }

  checkSignUPName(signupname) {

    cy.get(this.signupName).should('contain', signupname);

  }


  checkSecondSlot(slotname, slotcount, date, location, timedata) {

    cy.get(this.secondSlot).should('be.visible').should('contain', slotname).should('contain', slotcount)
    cy.get(this.secondSlotDate).should('be.visible').should('have.text', date);
    cy.get(this.secondSlotLocation).should('be.visible').should('contain', location);
    cy.get(this.secondSlotTimeData).should('be.visible').should('contain', timedata);

  }

  checkFirstSlot(slotname, slotcount, date, location, timedata) {

    cy.get(this.firstSlot).should('be.visible').should('contain', slotname).should('contain', slotcount)
    cy.get(this.firstSlotDate).should('be.visible').should('have.text', date);
    cy.get(this.firstSlotLocation).should('be.visible').should('contain', location);
    cy.get(this.firstSlotTime).should('be.visible').should('contain', timedata);

  }










}
export default SignupRegistration;