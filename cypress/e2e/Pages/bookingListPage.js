class BookingList{

    loginMenuButton = ':nth-child(2) > :nth-child(8) > #EventZetHomemenuLoginmenu';
    userEmail = '#UserEmail';
    userPassword = '#UserPassword';
    login = '#EventLoginBtn';
    bookingList = ':nth-child(4) > .nav-link > .fs-4';
    eventsDashboardMenu = '//*[@id="navbar"]/ul/li[2]/a';
     


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
    
    clickBookingList() {
    
        cy.get(this.bookingList).click({ force: true });
    
    }

   cancelAllBooking(){

   cy.xpath('//*[@id="maindashbrd"]/app-dashboardbookinglist/div/div/div[2]/div[3]/div/div/div[2]/div/div/table/tbody/tr')
  .its('length')  
  .then(count => {
    cy.log(`Number of rows: ${count}`);

    for(let i=1;i<=count;i++){
        cy.wait(1000);
        cy.xpath(`//tbody/tr[${i}]/td[6]/ul[1]/li[1]/button[1]`).click();
        cy.wait(5000);
        cy.xpath('//button[normalize-space()="Cancel Order"]').then($cancelButton => {
            if ($cancelButton.is(':visible')) {
              cy.xpath('//button[normalize-space()="Cancel Order"]').click();
              cy.wait(1000);
              cy.xpath('//button[normalize-space()="Yes"]').click();
              cy.wait(3000);
              cy.xpath('//button[normalize-space()="Ok"]').click();
            } else {
              
              cy.log(`Cancel Order button not visible for row ${i}`);
              cy.xpath("(//a[normalize-space()='Booking List'])[1]").click(); //return back to booking list page 
              cy.wait(3000);
            }
          });
        }
  });

}    



}
export default BookingList;