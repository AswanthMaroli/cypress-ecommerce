class VolunteerHome {


  loginMenu = ':nth-child(2) > :nth-child(8) > #EventZetHomemenuLoginmenu';
  volunteerSignupMenu = '#VolunteerhomeLarge';
  createVolunteerSignupButton = '[style="display: flex; align-items: center; min-height: 100%;"] > div > .btn';
  searchBox = '.form-control';
  homeSignup = ':nth-child(1) > .card > .card-img-top';
  menuDropdown = '.collapse > :nth-child(7) > .nav-link > span';
  logout = '//*[@id="navbarSupportedContent"]/ul/li[7]/ul/li[5]/a';
  emailField = '#UserEmail';
  passwordField = '#UserPassword';
  loginButton = '#EventLoginBtn';
  resultSignupTitle = '.card-title';
  signup = '//*[@id="tab-1"]/main/div/div[1]/div[1]';
  firstSlot = ':nth-child(1) > .card > .card-header > .row > .col-12 > .d-inline > .h5';
  secondSlot = ':nth-child(2) > .card > .card-header > .row > .col-12 > .d-inline > .h5';
  signupImage = '.col-md-12 > .w-100';
  signupTitle = '.h3';
  firstSlotDate = ':nth-child(1) > .card > .card-body > .list-group > .list-group-item > :nth-child(1) > .col-md-12 > .d-flex > .flex-fill > .signupcrdTittlebody';
  firstSlotLocation = ':nth-child(1) > .card > .card-body > .list-group > .list-group-item > :nth-child(2) > :nth-child(1) > .row > .col-md-12 > .p-0';
  firstSlotTime = ':nth-child(1) > .card > .card-body > .list-group > .list-group-item > :nth-child(2) > :nth-child(1) > .row > .col-lg-3 > :nth-child(1) > .p-0';
  secondSlotDate = ':nth-child(2) > .card > .card-body > .list-group > .list-group-item > :nth-child(1) > .col-md-12 > .d-flex > .flex-fill > .signupcrdTittlebody';
  secondSlotLocation = ':nth-child(2) > .card > .card-body > .list-group > .list-group-item > :nth-child(2) > :nth-child(1) > .row > .col-md-12 > .p-0';
  secondSlotTimeData = ':nth-child(2) > .card > .card-body > .list-group > .list-group-item > :nth-child(2) > :nth-child(1) > .row > .col-lg-3 > :nth-child(1) > .p-0';
  signuUpButton2 = '(//input[@type="checkbox"])[2]';
  signuUpButton1 = '(//input[@type="checkbox"])[1]';
  signupName = '.h3';
  userName = '.col-md-8 > :nth-child(2)';
  signupDescription = '.col-md-8 > :nth-child(3)';


  checkSignupCreatorName(username) {

    cy.get(this.userName).should('be.visible').should('contain', username);
  }

  checkSignupDescription() {

    cy.get(this.signupDescription).should('be.visible').should('exist');

  }

  checkSignUPName(signupname) {

    cy.get(this.signupName).should('contain', signupname);

  }

  checkSignUpButton() {

    cy.xpath(this.signuUpButton1).should('be.checked');
    cy.xpath(this.signuUpButton2).should('be.checked');

  }

  clickSignupButton() {

    cy.xpath(this.signuUpButton1).should('be.visible').click({ force: true });
    cy.xpath(this.signuUpButton2).should('be.visible').click({ force: true });

  }

  checkSecondSlot(slotname, slotcount, date, location, timedata) {

    cy.get(this.secondSlot).should('be.visible').should('contain', slotname).should('contain', slotcount)
    cy.get(this.secondSlotDate).should('be.visible').should('contain', date);
    cy.get(this.secondSlotLocation).should('be.visible').should('contain', location);
    cy.get(this.secondSlotTimeData).should('be.visible').should('contain', timedata);

  }

  checkFirstSlot(slotname, slotcount, date, location, timedata) {

    cy.get(this.firstSlot).should('be.visible').should('contain', slotname).should('contain', slotcount)
    cy.get(this.firstSlotDate).should('be.visible').should('contain', date);
    cy.get(this.firstSlotLocation).should('be.visible').should('contain', location);
    cy.get(this.firstSlotTime).should('be.visible').should('contain', timedata);

  }

  checkSignupImage() {

    cy.get(this.signupImage).should('be.visible');

  }

  checkSignupTitle(signupname) {

    cy.get(this.signupTitle).should('be.visible').should('contain', signupname)
  }


  clickLogin(useremail, userpassword) {

    cy.get(this.loginMenu).click();
    cy.wait(2000);
    cy.url().should('include', 'https://test.eventzet.com/#/Eventshell/Eventlogin');
    cy.get(this.emailField).click({ force: true }).type(useremail);
    cy.get(this.passwordField).click({ force: true }).type(userpassword);
    cy.get(this.loginButton).click();
  }


  logOut() {

    cy.get(this.menuDropdown).click({ force: true });
    cy.wait(1000);
    cy.xpath(this.logout).click({ force: true });
  }

  clickVolunteerSignup() {

    cy.get(this.volunteerSignupMenu).click({ force: true });

  }

  clickCreateVolunteerSignupButton() {

    cy.get(this.createVolunteerSignupButton).click();

  }

  searchSignup(signupname) {

    cy.get(this.searchBox).click({ force: true }).type(signupname);

  }

  verifySearchResult(signupname) {

    cy.get(this.resultSignupTitle).should('contain', signupname)
  }

  clearSearchBox() {

    cy.get(this.searchBox).clear();
  }


  clickSignup() {

    cy.xpath(this.signup).click();
  }







}
export default VolunteerHome;