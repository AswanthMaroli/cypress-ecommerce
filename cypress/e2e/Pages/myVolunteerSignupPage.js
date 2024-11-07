export class MyVolunteerSignup{


    
    loginMenuButton = ':nth-child(2) > :nth-child(8) > #EventZetHomemenuLoginmenu';
    userEmail = '#UserEmail';
    userPassword = '#UserPassword';
    login = '#EventLoginBtn';
    menuDropdown = ':nth-child(2) > #EventZetUsermenu > .nav-link > span';
    myvolunteerSignupMenu = "(//a[@class='text-decoration-none'][normalize-space()='My Volunteer Signups'])[1]";
    searchBox = '.form-control';
    dateRangeFilterButton ='#inputGroupSelect01';
    userName = '.animate__animated';

    searchSignupName(signupname) {

        cy.get(this.searchBox).click({ force: true }).type(signupname);
    
    }

    clearSearchBox() {

        cy.get(this.searchBox).clear();
    
    }

    clickMyVoulunteerSignupMenu() {

        cy.xpath(this.myvolunteerSignupMenu).click({force:true});
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

    clickMenuDropDown() {
    
        cy.get(this.menuDropdown).click();
    
    }

    cancelAllSignupRegistration(signupName){

        cy.xpath('//*[@id="pricing"]/div/div[2]/div[2]/div')
       .its('length')  
       .then(count => {
         cy.log(`Number of registration: ${count}`);
     
         for(let i=1;i<=count;i++){
             cy.wait(1000);
             this.searchSignupName(signupName);
             cy.wait(1000);
             cy.xpath(`//*[@id="pricing"]/div/div[2]/div[2]/div[${i}]`).click();
             cy.wait(3000);
             cy.xpath('//button[normalize-space()="Cancel Sign Up"]').then($cancelButton => {
                 if ($cancelButton.is(':visible')) {
                   cy.xpath('//button[normalize-space()="Cancel Sign Up"]').click();
                   cy.wait(1000);
                   cy.xpath('//button[normalize-space()="Yes"]').click();
                   cy.wait(3000);
                   cy.xpath('//button[normalize-space()="Ok"]').click();
                 } else {
                   
                   cy.log(`Cancel Order button not visible for row ${i}`);
                   cy.xpath("(//button[normalize-space()='Back']").click(); 
                   cy.wait(3000);
                 }
               });
             }
       });
   }

}