class CreatedSignupList {

    loginMenu = ':nth-child(2) > :nth-child(8) > #EventZetHomemenuLoginmenu';
    volunteerSignupMenu = '#VolunteerhomeLarge';
    createVolunteerSignupButton = '//body/app-root/app-eventshell/main/app-volunteerhome/section/div/div/div/div/div/button[1]';
    
    menuDropdown = '.collapse > :nth-child(7) > .nav-link > span';
    logout = '//*[@id="navbarSupportedContent"]/ul/li[7]/ul/li[5]/a';
    emailField = '#UserEmail';
    passwordField = '#UserPassword';
    loginButton = '#EventLoginBtn';  
    signupListMenu = '#menu > :nth-child(1) > .nav-link';
    createSignupButton = '.col-lg-9 > .btn';
    searchBox = '.form-control';
    unPublishButton = ':nth-child(4) > .btn';
    publishButton = '.list-inline > :nth-child(3) > .btn';
    signupEditButton = '.list-inline > :nth-child(1) > .btn';
    signupDeleteButton = ':nth-child(2) > .btn > .bi';
    dropDownButton = '#dropdownBasic1';
    signupTitle = '.col-md-6 > .list-inline > .mb-1';
    alertBox = '.alert';
    bodySection = '.card-body';

    

    deleteSignup() {

        cy.get(this.signupDeleteButton).click();
        cy.wait(2000);
        cy.get('.btn-primary').click();
        cy.wait(2000);
        cy.get('[style="display: block;"] > .cardboxalert > .card > .w-100 > .btn').click();
    
      }


    clickUnPublishButton() {

        cy.get(this.unPublishButton).invoke('text').then((text) => {
    
          if (text.includes('Un Publish')) {
    
            cy.get(this.unPublishButton).click();
    
          } else {
    
            cy.log('The event is already unpublished');
          }
        });
    
      }


      clickPublishButton() {

        cy.get(this.publishButton).invoke('text').then((text) => {
    
          if (text.includes('Publish')) {
    
            cy.get(this.publishButton).click();
    
          } else {
    
            cy.log('The event is already published');
          }
        });
    
      }

      searchSignup(signupname) {

        cy.get(this.searchBox).type(signupname);
    
      }

      clearSearchBox() {

        cy.get(this.searchBox).clear();
    
      }


      checkForSavedAlert() {

        cy.get(this.bodySection).invoke('text').then((text) => {
          if (text.includes('Saved')) {
    
            cy.get(this.alertBox).should('exist');
            cy.get(this.alertBox).should('have.text', 'Your saved signups need to be published. ');
    
          } else {
    
            cy.get(this.alertBox).should('not.exist');
          }
        });
      }

      checkSignup(signuptitle) {

        cy.get(this.signupTitle).should('contain', signuptitle);
      }








    clickCreateSignupButton(){

        cy.get(this.createSignupButton).click();
    }

    clickSignupListMenu(){

        cy.get(this.signupListMenu).click();
    }

    clickLogin(useremail, userpassword) {

        cy.get(this.loginMenu).click();
        cy.wait(2000);
        cy.url().should('include', 'https://test.eventzet.com/#/Eventshell/Eventlogin');
        cy.get(this.emailField).click({ force: true }).type(useremail);
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
    
      clickCreateVolunteerSignupButton() {
    
        cy.xpath(this.createVolunteerSignupButton).click();
    
      }





}
export default CreatedSignupList;