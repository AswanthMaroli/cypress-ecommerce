class CreateEventTickets{

    loginMenuButton = ':nth-child(2) > :nth-child(8) > #EventZetHomemenuLoginmenu';
    userEmail = '#UserEmail';
    userPassword = '#UserPassword';
    login = '#EventLoginBtn';
    createEventMenu = '#EventZetCreateEventMenu';
    myEvents = ':nth-child(3) > .nav-link > .fs-4';
    eventsDashboardMenu = '//*[@id="navbar"]/ul/li[2]/a';
    eventEditButton = ':nth-child(1) > .btn > .bi';
    searchEventInputBox = '#myOwneventstab > :nth-child(1) > .col-md-4 > .input-group > .form-control';
    ticketsProgressTab=':nth-child(5) > .nav-link > .progressactive > .bi';
    ticketsTab = '.features > .list-inline > :nth-child(1) > .nav-link > span';
    addonTab = '.features > .list-inline > [data-aos-delay="100"] > .nav-link > span';
    onlineToggleButton ='#flexSwitchCheckChecked';
    selectVenueDropDown = ':nth-child(1) > .col-md-3 > .form-floating > .form-select';
    selectLevelDropDown = ':nth-child(1) > .form-floating > .form-select';
    selectTimeSlotDropDown = '#contentInsideSignupTIckets > :nth-child(2) > .form-floating > .form-select';
    ticketNameField = '#Ticket_name';
    selectPricingDropDown = ':nth-child(4) > .form-floating > .form-select';
    stockQuantityField = '.form-floating > #Available_quantity';
    ticketPriceField = '.form-floating > #Add-onPrice';
    maxNoOfTicketsField ='.form-floating > #Maximum_No_tickets';
    ticketTaxField = '.form-floating > #Ticket_tax';
    salesStartDateField = '#Event_start_date';
    salesStartTimeField = ':nth-child(10) > app-marzet-tp > .form-floating > #martime_0_tp';
    salesEndDateField = '#Event_end_date';
    salesEndTimeField = ':nth-child(12) > app-marzet-tp > .form-floating > #martime_0_tp';
    saveTicketButton = '//button[normalize-space()="Save Ticket"]';
    addonNameField = '#Add-onsname';
    addonPricingDropDown = ':nth-child(2) > .form-select';
    addonStockQuantityField = ':nth-child(3) > #Available_quantity';
    addonPriceField = ':nth-child(4) > #Add-onPrice';
    maxNoOfAddonsField = ':nth-child(5) > #Maximum_No_tickets';
    addonTaxField = ':nth-child(6) > #Ticket_tax';
    selectTicketDropDown = ':nth-child(7) > .form-select';
    saveAddonButton = '#contentInsideSignupSlot0 > .col-md-12 > .btn';
    continueButton = '.fixed_btm_div > .btn';
    firstTicketEditButton = ':nth-child(2) > tr > :nth-child(9) > .list-inline > :nth-child(1) > .btn > small > .bi';
    secondTicketEditButton = ':nth-child(3) > tr > :nth-child(9) > .list-inline > :nth-child(1) > .btn';
    firstTicketDeleteButton = ':nth-child(2) > tr > :nth-child(9) > .list-inline > :nth-child(2) > .btn';
    secondTicketDeleteButton = ':nth-child(3) > tr > :nth-child(9) > .list-inline > :nth-child(2) > .btn > small > .bi'; 
    onlineDropDown = ':nth-child(1) > .col-md-3 > .form-floating > .form-select';
    firstAddonEditButton = ':nth-child(6) > .list-inline > :nth-child(1) > .btn > small > .bi';
    firstAddonDeleteButton = ':nth-child(6) > .list-inline > :nth-child(2) > .btn > small > .bi';



    checkSavedTicketData1(ticketname,levelname,tickettype,stockquantity,ticketprice,tickettax){

        cy.xpath('//tbody//tr//td[1]').invoke('text').then((text) => {
            expect(text).to.include(ticketname);
        });

        cy.xpath('//tbody//tr//td[2]').invoke('text').then((text) => {
            expect(text).to.include(levelname);
        });

        cy.xpath('//tbody//tr//td[3]').invoke('text').then((text) => {
            expect(text).to.include(tickettype);
        });

        cy.xpath('//tbody//tr//td[4]').invoke('text').then((text) => {
            expect(text).to.include(stockquantity);
        });

        cy.xpath('//tbody//tr//td[5]').invoke('text').then((text) => {
            expect(text).to.include(ticketprice);
        });

        cy.xpath('//tbody//tr//td[6]').invoke('text').then((text) => {
            expect(text).to.include(tickettax);
        });

    
    }

    checkSavedTicketData2(ticketname,levelname,tickettype,stockquantity,ticketprice,tickettax){

        cy.xpath('//tbody[2]//tr//td[1]').invoke('text').then((text) => {
            expect(text).to.include(ticketname);
        });

        cy.xpath('//tbody[2]//tr//td[2]').invoke('text').then((text) => {
            expect(text).to.include(levelname);
        });

        cy.xpath('//tbody[2]//tr//td[3]').invoke('text').then((text) => {
            expect(text).to.include(tickettype);
        });

        cy.xpath('//tbody[2]//tr//td[4]').invoke('text').then((text) => {
            expect(text).to.include(stockquantity);
        });

        cy.xpath('//tbody[2]//tr//td[5]').invoke('text').then((text) => {
            expect(text).to.include(ticketprice);
        });

        cy.xpath('//tbody[2]//tr//td[6]').invoke('text').then((text) => {
            expect(text).to.include(tickettax);
        });

    
    }

    checkSavedTicketData(ticketname,levelname,tickettype,stockquantity,ticketprice,tickettax){

        cy.xpath('//tbody//tr//td[1]').invoke('text').then((text) => {
            expect(text).to.include(ticketname);
        });

        cy.xpath('//tbody//tr//td[2]').invoke('text').then((text) => {
            expect(text).to.include(levelname);
        });

        cy.xpath('//tbody//tr//td[3]').invoke('text').then((text) => {
            expect(text).to.include(tickettype);
        });

        cy.xpath('//tbody//tr//td[4]').invoke('text').then((text) => {
            expect(text).to.include(stockquantity);
        });

        cy.xpath('//tbody//tr//td[5]').invoke('text').then((text) => {
            expect(text).to.include(ticketprice);
        });

        cy.xpath('//tbody//tr//td[6]').invoke('text').then((text) => {
            expect(text).to.include(tickettax);
        });

    
    }

    checkSavedTicketData3(ticketname,levelname,tickettype,stockquantity,ticketprice,tickettax){

        cy.xpath('//tbody[3]//tr//td[1]').invoke('text').then((text) => {
            expect(text).to.include(ticketname);
        });

        cy.xpath('//tbody[3]//tr//td[2]').invoke('text').then((text) => {
            expect(text).to.include(levelname);
        });

        cy.xpath('//tbody[3]//tr//td[3]').invoke('text').then((text) => {
            expect(text).to.include(tickettype);
        });

        cy.xpath('//tbody[3]//tr//td[4]').invoke('text').then((text) => {
            expect(text).to.include(stockquantity);
        });

        cy.xpath('//tbody[3]//tr//td[5]').invoke('text').then((text) => {
            expect(text).to.include(ticketprice);
        });

        cy.xpath('//tbody[3]//tr//td[6]').invoke('text').then((text) => {
            expect(text).to.include(tickettax);
        });

    
    }

    checkSavedAddOnData1(addonname,addonquantity,ticketname,addonprice,addontax){

        cy.xpath('//*[@id="tabAddonmaker"]/div/div[2]/div[2]/div/table/tbody/tr/td[1]').invoke('text').then((text) => {
            expect(text).to.include(addonname);
        });

        cy.xpath('//*[@id="tabAddonmaker"]/div/div[2]/div[2]/div/table/tbody/tr/td[2]').invoke('text').then((text) => {
            expect(text).to.include(addonquantity);
        });

        cy.xpath('//*[@id="tabAddonmaker"]/div/div[2]/div[2]/div/table/tbody/tr/td[3]').invoke('text').then((text) => {
            expect(text).to.include(ticketname);
        });

        cy.xpath('//*[@id="tabAddonmaker"]/div/div[2]/div[2]/div/table/tbody/tr/td[4]').invoke('text').then((text) => {
            expect(text).to.include(addonprice);
        });

        cy.xpath('//*[@id="tabAddonmaker"]/div/div[2]/div[2]/div/table/tbody/tr/td[5]').invoke('text').then((text) => {
            expect(text).to.include(addontax);
        });

    
    }


    clickFirstAddonEditButton(){

        cy.get(this.firstAddonEditButton).click({force:true});
    }

    clickSecondTicketEditButton(){

        cy.get(this.secondTicketEditButton).click({force:true});
    }


    clickFirstAddonDeleteButton(){

        cy.get(this.firstAddonDeleteButton).click({force:true});
    }

    clickSecondTicketDeleteButton(){

        cy.get(this.secondTicketDeleteButton).click({force:true});
    }





    selectVenue(venuename){
        
        cy.get(this.selectVenueDropDown).select(venuename);

    }

    selectLevel(levelname){
        
        cy.get(this.selectLevelDropDown).select(levelname);
        
    }

    selectTimeSlot(timeslot){
        
        cy.get(this.selectTimeSlotDropDown).select(timeslot);
        
    }

    inputTicketName(ticketname){
        
        cy.get(this.ticketNameField).clear().type(ticketname);
        
    }

    selectTicketPricing(ticketpricing){
        
        cy.get(this.selectPricingDropDown).select(ticketpricing);
        
    }

    
    inputTicketQuantity(quantity){
        
        cy.get(this.stockQuantityField).clear().type(quantity);
        
    }

        
    inputTicketPrice(price){
        
        cy.get(this.ticketPriceField).clear().type(price);
        
    }

    inputMaxNoOfTickets(quantity){
        
        cy.get(this.maxNoOfTicketsField).clear().type(quantity);
        
    }

    inputTicketTax(taxrate){
        
        cy.get(this.ticketTaxField).clear().type(taxrate);
        
    }

    inputSalesStartDate(startdate){
        
        cy.get(this.salesStartDateField).clear().type(startdate);
        
    }

    inputSalesEndDate(enddate){
        
        cy.get(this.salesEndDateField).clear().type(enddate);
        
    }


    inputSalesStartTime(salesstarttime){
        
        cy.get(this.salesStartTimeField).clear().type(salesstarttime);
        
    }

    
    inputSalesEndTime(salesendtime){
        
        cy.get(this.salesEndTimeField).clear().type(salesendtime);
        
    }

    SaveTicket(){

        cy.xpath(this.saveTicketButton).click({force:true});

    }

    clickFirstTicketEditButton(){

        cy.get(this.firstTicketEditButton).click({force:true});
    }

    clickSecondTicketEditButton(){

        cy.get(this.secondTicketEditButton).click({force:true});
    }


    clickFirstTicketDeleteButton(){

        cy.get(this.firstTicketDeleteButton).click({force:true});
    }

    clickSecondTicketDeleteButton(){

        cy.get(this.secondTicketDeleteButton).click({force:true});
    }


    clickTicketTab(){

        cy.get(this.ticketsTab).click({force:true});
    }

    clickAddonTab(){

        cy.get(this.addonTab).click({force:true});
    }

    clickOnlineToggleButton(){

        cy.get(this.onlineToggleButton).click({force:true});
    }

    selectOnlineURL(onlineurl){

         cy.get(this.onlineDropDown).select(onlineurl);

    }
    

    inputAddonName(addonname){
        
        cy.get(this.addonNameField).clear().type(addonname);
        
    }

    selectAddonPricing(addonpricing){
        
        cy.get(this.addonPricingDropDown).select(addonpricing);
        
    }

    
    inputAddonQuantity(quantity){
        
        cy.get(this.addonStockQuantityField).clear().type(quantity);
        
    }

        
    inputAddonPrice(price){
        
        cy.get(this.addonPriceField).clear().type(price);
        
    }

    inputMaxNoOfAddons(quantity){
        
        cy.get(this.maxNoOfAddonsField).clear().type(quantity);
        
    }

    inputAddonTax(taxrate){
        
        cy.get(this.addonTaxField).clear().type(taxrate);
        
    }


    selectTicket(ticketname){

        cy.get(this.selectTicketDropDown).select(ticketname);
    }

    saveAddon(){

        cy.get(this.saveAddonButton).click({force:true});
    }


    clickContinueButton(){

        cy.get(this.continueButton).click({force:true});
        cy.url().should('include','https://test.eventzet.com/#/events/Dashboard/EventzetEventsCreate/EventDesign');
    }


    clickTicketsProgressTab(){
        
        cy.get(this.ticketsProgressTab).click({force:true});
        cy.intercept('GET', '/api/TicketAddOn/GetTicketAddOnList?EventID=*').as('ticketData');
        cy.wait('@ticketData', { timeout: 25000 });
        cy.url().should('include','https://test.eventzet.com/#/events/Dashboard/EventzetEventsCreate/EventTicket');
    }


    searchEventName(eventname) {

        cy.get(this.searchEventInputBox).clear().type(eventname);

    }

    clickEventEditButton() {

        cy.get(this.eventEditButton).click({ force: true });

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
export default CreateEventTickets;