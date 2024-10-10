
class CreateEventTimeSlots {


    loginMenuButton = ':nth-child(2) > :nth-child(8) > #EventZetHomemenuLoginmenu';
    userEmail = '#UserEmail';
    userPassword = '#UserPassword';
    login = '#EventLoginBtn';
    createEventMenu = '#EventZetCreateEventMenu';
    myEvents = ':nth-child(3) > .nav-link > .fs-4';
    eventsDashboardMenu = '//*[@id="navbar"]/ul/li[2]/a';
    eventEditButton = ':nth-child(1) > .btn > .bi';
    searchEventInputBox = '#myOwneventstab > :nth-child(1) > .col-md-4 > .input-group > .form-control';
    timeSlotsTab = ':nth-child(4) > .nav-link > .progressactive > .bi';
    startDateField = '#StartDate';
    startTimeField = ':nth-child(2) > app-marzet-tp > .form-floating > #martime_0_tp';
    endDateField = '#EndDate';
    endTimeField = ':nth-child(4) > app-marzet-tp > .form-floating > #martime_0_tp';
    timeZoneDropdown = '#floatingSelectGridCategory';
    addTimeSlotButton = '.col-md-12.my-1 > .btn';
    continueButton = '.fixed_btm_div > .btn';
    timeSlotEditButton = ':nth-child(1) > .btn > small > .bi';
    timeSlotDeleteButton = ':nth-child(2) > .btn > small > .bi';


    checkStartDateOutOfRangeValidation(){

        cy.get(':nth-child(1) > .invalid-feedback').should('be.visible').should('contain','Date is out of range');
    }
  
    checkEndDateOutOfRangeValidation(){

        cy.get(':nth-child(3) > .invalid-feedback').should('be.visible').should('contain','Date is out of range');
    }
  



    clickTimeSlotEditButton() {

        cy.get(this.timeSlotEditButton).click();

    }

    clickTimeSlotDeleteButton() {

        cy.get(this.timeSlotDeleteButton).click();

    }


    checkStartDateValidation() {

        cy.get('#contentInsideSignupSlot0 > :nth-child(1) > :nth-child(2)').
            should('be.visible').
            should('contain', 'Start Date is required');
    }

    checkEndDateValidation() {

        cy.get(':nth-child(3) > :nth-child(2)').
            should('be.visible').
            should('contain', 'End Date is required');
    }


    checkStartTimeValidation() {

        cy.get('.invalid-feedback > div').
            should('be.visible').
            should('contain', 'Start Time is required');
    }

    checkEndTimeValidation() {

        cy.get('.invalid-feedback > div').
            should('be.visible').
            should('contain', 'End Time is required');
    }


    checkTimeZoneValidation() {

        cy.get(':nth-child(5) > .text-danger').
            should('be.visible').
            should('contain', 'Time Zone is required.');
    }

    checkSavedTimeSlotData(startdate, enddate,starttime, endtime, timezone) {


        const formatStartDate = (date) => {
            const [year, month, day] = date.split('-');
            return `Start date : ${month}-${day}-${year}`;
        };

        const formatEndDate = (date) => {
            const [year, month, day] = date.split('-');
            return `End date : ${month}-${day}-${year}`;
        };

        const formattedStartDate = formatStartDate(startdate);
        const formattedEndDate = formatEndDate(enddate);
        cy.log('formattedStartDate:', formattedStartDate);
        cy.log('formattedEndDate:', formattedEndDate);

        cy.xpath('//tbody//tr//td[1]').invoke('text').then((text) => {

            expect(text.replace(/\s+/g, ' ')).to.include(formattedStartDate);
          
        });


        cy.xpath('//tbody//tr//td[2]').invoke('text').then((text) => {

            cy.log('Extracted Text:', text);
            const normalizedText = text.trim();
            cy.log('normalizedText:', normalizedText);
            // cy.log('Character codes:', Array.from(normalizedText).map(char => char.charCodeAt(0)));
            const expectedText = starttime;
            cy.log('Expected:', expectedText);
            // cy.log('Expected character codes:', Array.from(expectedText).map(char => char.charCodeAt(0)));
            
      
            cy.log('Strict equality:', normalizedText === expectedText);
            cy.log('Includes check:', normalizedText.includes(expectedText));
            
       
            expect(normalizedText.replace(/\s+/g, ' ')).to.include(expectedText.replace(/\s+/g, ' '));
            
          
            // if (!normalizedText.includes(expectedText)) {
            //     for (let i = 0; i < Math.max(normalizedText.length, expectedText.length); i++) {
            //         if (normalizedText[i] !== expectedText[i]) {
            //             cy.log(`Mismatch at index ${i}: '${normalizedText[i]}' vs '${expectedText[i]}'`);
            //             break;
            //         }
            //     }
            // }
        });



        cy.xpath('//tbody//tr//td[3]').invoke('text').then((text) => {
            expect(text.replace(/\s+/g, ' ')).to.include(formattedEndDate);
        });

        cy.xpath('//tbody//tr//td[4]').invoke('text').then((text) => {
            
            const expectedText = endtime;
            expect(text.replace(/\s+/g, ' ')).to.include(expectedText.replace(/\s+/g, ' '));
          
        });

        cy.xpath('//tbody//tr//td[5]').invoke('text').then((text) => {
            expect(text).to.include(timezone);
        });


    }



    selectTimeZone(timezone) {

        cy.get(this.timeZoneDropdown).select(timezone, { force: true });
    }


    inputStartDate(startdate) {

        cy.get(this.startDateField).clear().type(startdate);
    }

    inputStartTime(starttime) {

        cy.get(this.startTimeField).clear().type(starttime);
    }


    inputEndDate(enddate) {

        cy.get(this.endDateField).clear().type(enddate);
    }

    inputEndTime(endtime) {

        cy.get(this.endTimeField).clear().type(endtime);
    }


    clickTimeSlotsTab() {

        cy.get(this.timeSlotsTab).click();

    }

    clickAddTimeSlotButton() {

        cy.get(this.addTimeSlotButton).click();

    }

    clickContinueButton() {

        cy.get(this.continueButton).click();
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
export default CreateEventTimeSlots;