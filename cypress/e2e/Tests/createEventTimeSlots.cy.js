import CreateEventTimeSlots from '../../e2e/Pages/createEventTimeSlotsPage.js';
const { readDataFromFile, writeDataToFile, clearDataInFile } = require('../ExternalFiles/fileOperations.js');
const baseUrl = Cypress.config('baseUrl');
const filename = 'cypress/fixtures/createEventTimeSlotRead.json'
const timeslot = new CreateEventTimeSlots();

let date;

function performLogin(email, password) {
    cy.visit(baseUrl);
    cy.wait(4000);
    timeslot.clickLoginMenu();
    timeslot.inputEmail(email);
    timeslot.inputPassword(password);
    timeslot.loginClick();
}


module.exports = {

    CreateEventTimeSlotsTests: [

        it("Test 1: Verify that user can add timeslot without startdate", () => {

            readDataFromFile(filename).then((list) => {

                performLogin(list.email, list.password);
                timeslot.eventsDashboardMenuClick();
                timeslot.clickMyEvents();
                cy.intercept('GET', '/api/DashboardEventList/GetDashboardEventList?UserID=*').as('myEventsData');
                cy.wait('@myEventsData', { timeout: 25000 });
                timeslot.searchEventName(list.eventtitle);
                timeslot.clickEventEditButton();
                cy.intercept('GET', '/api/Timeslot/GetEventTimeSlots?EventID=*').as('basicInfoData');
                cy.wait('@basicInfoData', { timeout: 25000 });
                timeslot.clickTimeSlotsTab();
                cy.intercept('GET', '/api/Timeslot/GetEventDates?EventID=*').as('timeSlotPage');
                cy.wait('@timeSlotPage').then((interception) =>{
                    expect(interception.response.statusCode).to.eq(200);
                    const body = interception.response.body[0];
                    const dateTime  = body.StartDate;
                    cy.log('Date before splitting:',dateTime);
                     date = dateTime.split('T')[0];
                    cy.log('Date:',date);
                    // timeslot.inputStartDate(date);
                    timeslot.inputStartTime(list.starttime);
                    timeslot.inputEndDate(date);
                    timeslot.inputEndTime(list.endtime);
                    timeslot.selectTimeZone(list.timezone);
                    timeslot.clickAddTimeSlotButton();
                    timeslot.checkStartDateValidation();


            });


                cy.log('Test 1 is successful : Validation message is visible for start date');
            });

        }),

        it("Test 2: Verify that user can add timeslot without starttime", () => {

            readDataFromFile(filename).then((list) => {

                performLogin(list.email, list.password);
                timeslot.eventsDashboardMenuClick();
                timeslot.clickMyEvents();
                cy.intercept('GET', '/api/DashboardEventList/GetDashboardEventList?UserID=*').as('myEventsData');
                cy.wait('@myEventsData', { timeout: 25000 });
                timeslot.searchEventName(list.eventtitle);
                timeslot.clickEventEditButton();
                cy.intercept('GET', '/api/Timeslot/GetEventTimeSlots?EventID=*').as('basicInfoData');
                cy.wait('@basicInfoData', { timeout: 25000 });
                timeslot.clickTimeSlotsTab();
                cy.intercept('GET', '/api/Timeslot/GetEventDates?EventID=*').as('timeSlotPage');
                cy.wait('@timeSlotPage').then((interception) =>{
                    expect(interception.response.statusCode).to.eq(200);
                    const body = interception.response.body[0];
                    const dateTime  = body.StartDate;
                    cy.log('Date before splitting:',dateTime);
                    date = dateTime.split('T')[0];
                    cy.log('Date:',date);
                    timeslot.inputStartDate(date);
                    // timeslot.inputStartTime(list.starttime);
                    timeslot.inputEndDate(date);
                    timeslot.inputEndTime(list.endtime);
                    timeslot.selectTimeZone(list.timezone);
                    timeslot.clickAddTimeSlotButton();
                    timeslot.checkStartTimeValidation();


            });


                cy.log('Test 2 is successful : Validation message is visible for start time');
            });

        }),

        it("Test 3: Verify that user can add timeslot without end date", () => {

            readDataFromFile(filename).then((list) => {

                performLogin(list.email, list.password);
                timeslot.eventsDashboardMenuClick();
                timeslot.clickMyEvents();
                cy.intercept('GET', '/api/DashboardEventList/GetDashboardEventList?UserID=*').as('myEventsData');
                cy.wait('@myEventsData', { timeout: 25000 });
                timeslot.searchEventName(list.eventtitle);
                timeslot.clickEventEditButton();
                cy.intercept('GET', '/api/Timeslot/GetEventTimeSlots?EventID=*').as('basicInfoData');
                cy.wait('@basicInfoData', { timeout: 25000 });
                timeslot.clickTimeSlotsTab();
                cy.intercept('GET', '/api/Timeslot/GetEventDates?EventID=*').as('timeSlotPage');
                cy.wait('@timeSlotPage').then((interception) =>{
                    expect(interception.response.statusCode).to.eq(200);
                    const body = interception.response.body[0];
                    const dateTime  = body.StartDate;
                    cy.log('Date before splitting:',dateTime);
                    date = dateTime.split('T')[0];
                    cy.log('Date:',date);
                    timeslot.inputStartDate(date);
                    timeslot.inputStartTime(list.starttime);
                    // timeslot.inputEndDate(date);
                    timeslot.inputEndTime(list.endtime);
                    timeslot.selectTimeZone(list.timezone);
                    timeslot.clickAddTimeSlotButton();
                    timeslot.checkEndDateValidation();


            });


                cy.log('Test 3 is successful : Validation message is visible for end date');
            });

        }),

        it("Test 4: Verify that user can add timeslot without end time", () => {

            readDataFromFile(filename).then((list) => {

                performLogin(list.email, list.password);
                timeslot.eventsDashboardMenuClick();
                timeslot.clickMyEvents();
                cy.intercept('GET', '/api/DashboardEventList/GetDashboardEventList?UserID=*').as('myEventsData');
                cy.wait('@myEventsData', { timeout: 25000 });
                timeslot.searchEventName(list.eventtitle);
                timeslot.clickEventEditButton();
                cy.intercept('GET', '/api/Timeslot/GetEventTimeSlots?EventID=*').as('basicInfoData');
                cy.wait('@basicInfoData', { timeout: 25000 });
                timeslot.clickTimeSlotsTab();
                cy.intercept('GET', '/api/Timeslot/GetEventDates?EventID=*').as('timeSlotPage');
                cy.wait('@timeSlotPage').then((interception) =>{
                    expect(interception.response.statusCode).to.eq(200);
                    const body = interception.response.body[0];
                    const dateTime  = body.StartDate;
                    cy.log('Date before splitting:',dateTime);
                    date = dateTime.split('T')[0];
                    cy.log('Date:',date);
                    timeslot.inputStartDate(date);
                    timeslot.inputStartTime(list.starttime);
                    timeslot.inputEndDate(date);
                    // timeslot.inputEndTime(list.endtime);
                    timeslot.selectTimeZone(list.timezone);
                    timeslot.clickAddTimeSlotButton();
                    timeslot.checkEndTimeValidation();


            });


                cy.log('Test 4 is successful : Validation message is visible for end time');
            });

        }),


        it("Test 5: Verify that user can add timeslot without  time zone", () => {

            readDataFromFile(filename).then((list) => {

                performLogin(list.email, list.password);
                timeslot.eventsDashboardMenuClick();
                timeslot.clickMyEvents();
                cy.intercept('GET', '/api/DashboardEventList/GetDashboardEventList?UserID=*').as('myEventsData');
                cy.wait('@myEventsData', { timeout: 25000 });
                timeslot.searchEventName(list.eventtitle);
                timeslot.clickEventEditButton();
                cy.intercept('GET', '/api/Timeslot/GetEventTimeSlots?EventID=*').as('basicInfoData');
                cy.wait('@basicInfoData', { timeout: 25000 });
                timeslot.clickTimeSlotsTab();
                cy.intercept('GET', '/api/Timeslot/GetEventDates?EventID=*').as('timeSlotPage');
                cy.wait('@timeSlotPage').then((interception) =>{
                    expect(interception.response.statusCode).to.eq(200);
                    const body = interception.response.body[0];
                    const dateTime  = body.StartDate;
                    cy.log('Date before splitting:',dateTime);
                    date = dateTime.split('T')[0];
                    cy.log('Date:',date);
                    timeslot.inputStartDate(date);
                    timeslot.inputStartTime(list.starttime);
                    timeslot.inputEndDate(date);
                    timeslot.inputEndTime(list.endtime);
                    // timeslot.selectTimeZone(list.timezone);
                    timeslot.clickAddTimeSlotButton();
                    timeslot.checkTimeZoneValidation();


            });


                cy.log('Test 5 is successful : Validation message is visible for  time zone');
            });

        }),

        it("Test 6: Verify that user can add timeslot or not", () => {

            readDataFromFile(filename).then((list) => {

                performLogin(list.email, list.password);
                timeslot.eventsDashboardMenuClick();
                timeslot.clickMyEvents();
                cy.intercept('GET', '/api/DashboardEventList/GetDashboardEventList?UserID=*').as('myEventsData');
                cy.wait('@myEventsData', { timeout: 25000 });
                timeslot.searchEventName(list.eventtitle);
                timeslot.clickEventEditButton();
                cy.intercept('GET', '/api/Timeslot/GetEventTimeSlots?EventID=*').as('basicInfoData');
                cy.wait('@basicInfoData', { timeout: 25000 });
                timeslot.clickTimeSlotsTab();
                cy.intercept('GET', '/api/Timeslot/GetEventDates?EventID=*').as('timeSlotPage');
                cy.wait('@timeSlotPage').then((interception) =>{
                    expect(interception.response.statusCode).to.eq(200);
                    const body = interception.response.body[0];
                    const dateTime  = body.StartDate;
                    cy.log('Date before splitting:',dateTime);
                    date = dateTime.split('T')[0];
                    cy.log('Date:',date);
                    timeslot.inputStartDate(date);
                    timeslot.inputStartTime(list.starttime);
                    timeslot.inputEndDate(date);
                    timeslot.inputEndTime(list.endtime);
                    timeslot.selectTimeZone(list.timezone);
                    timeslot.clickAddTimeSlotButton();
                    cy.wait(2000);
                    timeslot.checkSavedTimeSlotData(date,date,list.checkstarttime,list.checkendtime,list.timezone);

            });
                 cy.log('Test 6 is successful : Timeslot is added successfuly');
            }); 

        }),


        it("Test 7: Verify editing an existing time slot", () => {

            readDataFromFile(filename).then((list) => {

                performLogin(list.email, list.password);
                timeslot.eventsDashboardMenuClick();
                timeslot.clickMyEvents();
                cy.intercept('GET', '/api/DashboardEventList/GetDashboardEventList?UserID=*').as('myEventsData');
                cy.wait('@myEventsData', { timeout: 25000 });
                timeslot.searchEventName(list.eventtitle);
                timeslot.clickEventEditButton();
                cy.intercept('GET', '/api/Timeslot/GetEventTimeSlots?EventID=*').as('basicInfoData');
                cy.wait('@basicInfoData', { timeout: 25000 });
                timeslot.clickTimeSlotsTab();
                cy.wait('@basicInfoData', { timeout: 25000 });
                cy.intercept('GET', '/api/Timeslot/GetEventDates?EventID=*').as('timeSlotPage');
                cy.wait('@timeSlotPage').then((interception) => {
                    expect(interception.response.statusCode).to.eq(200);
                    const body = interception.response.body[0];
                    const dateTime = body.StartDate;
                    cy.log('Date before splitting:', dateTime);
                    date = dateTime.split('T')[0];

                    timeslot.clickTimeSlotEditButton();
                    timeslot.inputStartTime(list.starttime1);
                    timeslot.inputEndTime(list.endtime1);
                    timeslot.clickAddTimeSlotButton();
                    cy.wait(2000);
                    timeslot.checkSavedTimeSlotData(date, date, list.checkstarttime1, list.checkendtime1, list.timezone);
                });

                cy.log('Test 7 is successful : Timeslot is edited successfuly');
            });

        }),

        it("Test 8:  Verify deleting a time slot", () => {

            readDataFromFile(filename).then((list) => {

                performLogin(list.email, list.password);
                timeslot.eventsDashboardMenuClick();
                timeslot.clickMyEvents();
                cy.intercept('GET', '/api/DashboardEventList/GetDashboardEventList?UserID=*').as('myEventsData');
                cy.wait('@myEventsData', { timeout: 25000 });
                timeslot.searchEventName(list.eventtitle);
                timeslot.clickEventEditButton();
                cy.intercept('GET', '/api/Timeslot/GetEventTimeSlots?EventID=*').as('basicInfoData');
                cy.wait('@basicInfoData', { timeout: 25000 });
                timeslot.clickTimeSlotsTab();
                cy.wait('@basicInfoData', { timeout: 25000 });
                timeslot.clickTimeSlotDeleteButton();
                cy.wait(3000);
                cy.log('Test 8 is successful : Timeslot is deleted successfuly');
            });

        }),

        it("Test 9: Verify adding multiple time slots", () => {

            readDataFromFile(filename).then((list) => {

                performLogin(list.email, list.password);
                timeslot.eventsDashboardMenuClick();
                timeslot.clickMyEvents();
                cy.intercept('GET', '/api/DashboardEventList/GetDashboardEventList?UserID=*').as('myEventsData');
                cy.wait('@myEventsData', { timeout: 25000 });
                timeslot.searchEventName(list.eventtitle);
                timeslot.clickEventEditButton();
                cy.intercept('GET', '/api/Timeslot/GetEventTimeSlots?EventID=*').as('basicInfoData');
                cy.wait('@basicInfoData', { timeout: 25000 });
                timeslot.clickTimeSlotsTab();
                cy.intercept('GET', '/api/Timeslot/GetEventDates?EventID=*').as('timeSlotPage');
                cy.wait('@timeSlotPage').then((interception) => {
                    expect(interception.response.statusCode).to.eq(200);
                    const body = interception.response.body[0];
                    const dateTime = body.StartDate;
                    cy.log('Date before splitting:', dateTime);
                    date = dateTime.split('T')[0];
                    cy.log('Date:', date);
                    // Add first time slot
                    timeslot.inputStartDate(date);
                    timeslot.inputStartTime(list.starttime);
                    timeslot.inputEndDate(date);
                    timeslot.inputEndTime(list.endtime);
                    timeslot.selectTimeZone(list.timezone);
                    timeslot.clickAddTimeSlotButton();
                    cy.wait(2000);
                    // Add second time slot
                    timeslot.inputStartDate(date);
                    timeslot.inputStartTime(list.starttime1);
                    timeslot.inputEndDate(date);
                    timeslot.inputEndTime(list.endtime1);
                    timeslot.selectTimeZone(list.timezone2);
                    timeslot.clickAddTimeSlotButton();
                    cy.wait(2000);
                    // Verify both time slots are added
                    cy.get('tbody tr').should('have.length', 2);

                    timeslot.clickContinueButton();
                    cy.wait(1000);

                });

                cy.log('Test 9 is successful : User can add multiple time slots');
            });

        }),

        it('Test 10: Verify time slot validation for end date before start date', function() {
            readDataFromFile(filename).then((list) => {

                performLogin(list.email, list.password);
                timeslot.eventsDashboardMenuClick();
                timeslot.clickMyEvents();
                cy.intercept('GET', '/api/DashboardEventList/GetDashboardEventList?UserID=*').as('myEventsData');
                cy.wait('@myEventsData', { timeout: 25000 });
                timeslot.searchEventName(list.eventtitle);
                timeslot.clickEventEditButton();
                cy.intercept('GET', '/api/Timeslot/GetEventTimeSlots?EventID=*').as('basicInfoData');
                cy.wait('@basicInfoData', { timeout: 25000 });
                timeslot.clickTimeSlotsTab();
                cy.intercept('GET', '/api/Timeslot/GetEventDates?EventID=*').as('timeSlotPage');
                cy.wait('@timeSlotPage').then((interception) => {
                    expect(interception.response.statusCode).to.eq(200);
                    const body = interception.response.body[0];
                    const startDateTime = body.StartDate;
                    const endDateTime =body.EndDate;
                    cy.log('Date before splitting:', startDateTime);
                    const startDate = startDateTime.split('T')[0];
                    const endDate  =endDateTime.split('T')[0];
                    cy.log('Date:', startDate);
                    timeslot.inputStartDate(endDate);
                    timeslot.inputStartTime(list.starttime);
                    timeslot.inputEndDate(startDate);
                    timeslot.inputEndTime(list.endtime);
                    timeslot.selectTimeZone(list.timezone);
                    timeslot.clickAddTimeSlotButton();
                    cy.contains('StartDate Must be Less than EndDate').should('be.visible');
                    cy.log('Test 10 is successful : Validation message is visible, StartDate Must be Less than EndDate');

                });

            });

        }),


        it("Test 11: Verify that user cannot add timeslot with start date in the past", () => {
            readDataFromFile(filename).then((list) => {
                performLogin(list.email, list.password);
                timeslot.eventsDashboardMenuClick();
                timeslot.clickMyEvents();
                cy.intercept('GET', '/api/DashboardEventList/GetDashboardEventList?UserID=*').as('myEventsData');
                cy.wait('@myEventsData', { timeout: 25000 });
                timeslot.searchEventName(list.eventtitle);
                timeslot.clickEventEditButton();
                cy.intercept('GET', '/api/Timeslot/GetEventTimeSlots?EventID=*').as('basicInfoData');
                cy.wait('@basicInfoData', { timeout: 25000 });
                timeslot.clickTimeSlotsTab();
                cy.intercept('GET', '/api/Timeslot/GetEventDates?EventID=*').as('timeSlotPage');
                cy.wait('@timeSlotPage').then((interception) => {
                    expect(interception.response.statusCode).to.eq(200);
                    const body = interception.response.body[0];
                    const dateTime = body.StartDate;
                    date = dateTime.split('T')[0];

                    // Input a past date for start date
                    const pastDate = new Date();
                    pastDate.setDate(pastDate.getDate() - 1); // Yesterday
                    timeslot.inputStartDate(pastDate.toISOString().split('T')[0]);
                    timeslot.inputStartTime(list.starttime);
                    timeslot.inputEndDate(date);
                    timeslot.inputEndTime(list.endtime);
                    timeslot.selectTimeZone(list.timezone);
                    timeslot.clickAddTimeSlotButton();
                    timeslot.checkStartDateOutOfRangeValidation(); 

                    cy.log('Test 11 is successful: Validation message is visible for start date in the past.');
                });
            });
        }),

        it("Test 12: Verify that user cannot add timeslot with end date out of range ", () => {
            readDataFromFile(filename).then((list) => {
                performLogin(list.email, list.password);
                timeslot.eventsDashboardMenuClick();
                timeslot.clickMyEvents();
                cy.intercept('GET', '/api/DashboardEventList/GetDashboardEventList?UserID=*').as('myEventsData');
                cy.wait('@myEventsData', { timeout: 25000 });
                timeslot.searchEventName(list.eventtitle);
                timeslot.clickEventEditButton();
                cy.intercept('GET', '/api/Timeslot/GetEventTimeSlots?EventID=*').as('basicInfoData');
                cy.wait('@basicInfoData', { timeout: 25000 });
                timeslot.clickTimeSlotsTab();
                cy.intercept('GET', '/api/Timeslot/GetEventDates?EventID=*').as('timeSlotPage');
                cy.wait('@timeSlotPage').then((interception) => {
                    expect(interception.response.statusCode).to.eq(200);
                    const body = interception.response.body[0];
                    const startDateTime = body.StartDate;
                    const endDateTime = body.EndDate;
                    cy.log('Date before splitting startDateTime:', startDateTime);
                    cy.log('Date before splitting endDateTime:', endDateTime);
                    const startDate = startDateTime.split('T')[0];
                    const endDate = new Date(endDateTime);

                    cy.log('endDate:', endDate);
                    // Adding a end date greater then the date range 
                    endDate.setDate(endDate.getDate() + 2);
                    const newEndDate = endDate.toISOString().split('T')[0];
                    cy.log('newEndDate:', newEndDate);
                    timeslot.inputStartDate(startDate);
                    timeslot.inputStartTime(list.starttime);
                    timeslot.inputEndDate(newEndDate);
                    timeslot.inputEndTime(list.endtime);
                    timeslot.selectTimeZone(list.timezone);
                    timeslot.clickAddTimeSlotButton();
                    timeslot.checkEndDateOutOfRangeValidation();

                    cy.log('Test 12 is successful: Validation message is visible for end date , Date is out of range.');
                });
            });
        }),














    ]




}