class SignupMessage {


    loginMenu = ':nth-child(2) > :nth-child(8) > #EventZetHomemenuLoginmenu';
    volunteerSignupMenu = '#VolunteerhomeLarge';
    createVolunteerSignupButton = '//body/app-root/app-eventshell/main/app-volunteerhome/section/div/div/div/div/div/button[1]';
    
    menuDropdown = '.collapse > :nth-child(7) > .nav-link > span';
    logout = '//*[@id="navbarSupportedContent"]/ul/li[7]/ul/li[5]/a';
    userEmail = '#UserEmail';
    userPassword = '#UserPassword';
    loginButton = '#EventLoginBtn';  
    signupListMenu = '#menu > :nth-child(1) > .nav-link';
    unPublishButton = ':nth-child(4) > .btn';
    publishButton = '.list-inline > :nth-child(3) > .btn';
    signupEditButton = '.list-inline > :nth-child(1) > .btn';
    searchBox = '.form-control';
    signupMessageMenu = ':nth-child(4) > .nav-link > .ms-1';
    signupTitleField = '#floatingSelect';
    emailField = ':nth-child(2) > .form-floating > #LocationAddDate';
    subjectField = ':nth-child(3) > .form-floating > #LocationAddDate';
    messageField = '#exampleFormControlTextarea1';
    sendButton = '#sendBtn';


    selectSignupTitle(typevalue){

      cy.get(this.signupTitleField).select(typevalue,{force:true});

    }

    inputInviteEmail(email){

      cy.get(this.emailField).type(email);

    }

    inputSubject(subject){

      cy.get(this.subjectField).type(subject);

    }

    inputMessage(message){

      cy.get(this.messageField).type(message);

    }

    clickMailSentOKButton(){

      cy.get('.card').should('be.visible');
      cy.get('.w-100 > .btn').click();

    }
  

    checkValidation(){

      cy.get('.form-floating > .small > .font_s8').should('be.visible');
      cy.get('#sendDiv > :nth-child(1) > :nth-child(1) > :nth-child(2) > .small > .font_s8').should('be.visible');
      cy.get(':nth-child(3) > .small > .font_s8').should('be.visible');
      cy.get(':nth-child(2) > .mb-3 > .small > .font_s8').should('be.visible');

    }

    clickSignupMessage() {

        cy.get(this.signupMessageMenu).click();
    
      }

     clickSendButton() {

        cy.get(this.sendButton).click();
    
      }
    

    searchSignup(signupname) {

        cy.get(this.searchBox).type(signupname);
    
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

      clickSignupListMenu(){

        cy.get(this.signupListMenu).click();
    }

    clickLogin(useremail, userpassword) {

        cy.get(this.loginMenu).click();
        cy.wait(2000);
        cy.url().should('include', 'https://test.eventzet.com/#/Eventshell/Eventlogin');
        cy.get(this.userEmail).click({ force: true }).type(useremail);
        cy.wait(1000);
        cy.get(this.userPassword).click({ force: true }).type(userpassword);
        cy.wait(1000);
        cy.get(this.loginButton).click();
        cy.wait(5000);
      }

      clickVolunteerSignup() {
    
        cy.get(this.volunteerSignupMenu).click({ force: true });
    
      }
    
      clickCreateVolunteerSignupButton() {
    
        cy.xpath(this.createVolunteerSignupButton).click();
    
      }




}
export default SignupMessage;