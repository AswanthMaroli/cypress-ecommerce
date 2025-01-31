import CreateSignup from "../Pages/createSignupPage.js";
const { readDataFromFile,writeDataToFile } = require('../ExternalFiles/fileOperations.js');
const baseUrl = Cypress.config('baseUrl');
const cs = new CreateSignup();
const filename = 'cypress\\fixtures\\volunteerSignup.json'
var dateCalculations = require('../ExternalFiles/dateCalculations.js');
const signupDate = dateCalculations.calculateSevenDaysLater();
const signupDate2 = dateCalculations.getCurrentDate();

function formatDate(dateString) {
    const date = new Date(dateString);

    // Array of weekday names
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // const months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

    // Extract the weekday, day, month, and year components
    const weekday = weekdays[date.getDay()];  // Get the day of the week (0 - 6)
    const month = date.getMonth() + 1;  // Get the month (0 - 11)
    const day = String(date.getDate()); // Get the day of the month (01 - 31)
    const year = String(date.getFullYear()).slice(2); // Get last 2 digits of the year

    return `${weekday},${month}/${day}/${year}`;
}

function formatDateWithDateZero(dateString) {
    const date = new Date(dateString);

    // Extract the month, day, and year
    const month = String(date.getMonth() + 1).padStart(2, '0');  // Months are 0-indexed, so we add 1
    const day = String(date.getDate()).padStart(2,'0');  // Ensure day is 2 digits
    const year = String(date.getFullYear()); // Get the last 2 digits of the year

   
    return `${month}/${day}/${year}`;
}


function dateFormat(dateString) {
    const date = new Date(dateString);

    // Extract the month, day, and year
    const month = date.getMonth() + 1; 
    // const month = String(date.getMonth() + 1).padStart(2, '0');  // Months are 0-indexed, so we add 1
    const day = String(date.getDate());  // Ensure day is 2 digits
    const year = String(date.getFullYear()).slice(2); // Get the last 2 digits of the year

   
    return `${month}/${day}/${year}`;
}


function formatDateWithWeekday(dateString) {
    const date = new Date(dateString);

    // Array of weekday names
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    // Extract the month, day, and year
    const month = String(date.getMonth() + 1).padStart(2, '0');  // Months are 0-indexed, so we add 1
    const day = String(date.getDate());  // Ensure day is 2 digits
    const year = String(date.getFullYear()).slice(2); // Get the last 2 digits of the year

    // Get the weekday name
    const weekday = weekdays[date.getDay()];

    // Return in "mm/dd/yy, Weekday - location" format
    return `${month}/${day}/${year},${weekday}`;
}

function signupDetailsPageDateFormat(dateString) {
    const date = new Date(dateString);

    // Array of weekday names
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    // Extract the month, day, and year
    const month = String(date.getMonth() + 1).padStart(2, '0');  // Months are 0-indexed, so we add 1
    const day = String(date.getDate());  // Ensure day is 2 digits
    const year = String(date.getFullYear()).slice(2); // Get the last 2 digits of the year

    // Get the weekday name
    const weekday = weekdays[date.getDay()];

    // Return in "mm/dd/yy, Weekday - location" format
    return `${month}/${day}/${year}, ${weekday}`;
}


function formatDatetime(startDateString, startTime, endTime) {
    const startDate = new Date(startDateString);

    // Format the date as "Month dd, yyyy"
    const month = startDate.toLocaleString('default', { month: 'long' }); // Full month name
    const day = String(startDate.getDate()); // Ensure day is 2 digits
    const year = startDate.getFullYear(); // Full year (yyyy)

    // Helper function to convert time to 12-hour format with AM/PM
    function formatTime(timeString) {
        // Trim any existing am/pm or AM/PM from the string
        timeString = timeString.trim().toLowerCase().replace(/(am|pm)$/, '').trim();
        
        const timeParts = timeString.split(':'); // Assuming time is in HH:mm format (24-hour)
        let hour = parseInt(timeParts[0], 10);  // Convert to integer
        const minute = timeParts[1].padStart(2, '0'); // Ensure minute is 2 digits
        let suffix = hour >= 12 ? 'PM' : 'AM'; // Determine AM/PM
    
        // Convert hour to 12-hour format
        hour = hour % 12 || 12; // Convert hour to 12-hour format (handles 12:00 PM and 12:00 AM)
    
        // Return the hour without leading zero (by directly converting it to a string)
        const formattedHour = String(hour);
    
        return `${formattedHour}:${minute} ${suffix}`;
    }

    // Format the start and end times to 12-hour AM/PM format
    const formattedStartTime = formatTime(startTime);
    const formattedEndTime = formatTime(endTime);

    // Format the datetime as "Month dd, yyyy & starttime - endtime"
    const formattedDate = `${month} ${day}, ${year} & ${formattedStartTime} - ${formattedEndTime}`;

    return formattedDate;
}




module.exports = {

    CreateSignupTests: [


        // Date page tests


        it('Test 1: Clicking Create VolunteerSignup button - it is redirected to the date page(create signup)', () => {

            cy.visit(baseUrl);
            readDataFromFile(filename).then((list) => {
                cs.clickLogin(list.useremail, list.userpassword);
            });

            cs.clickVolunteerSignup();
            cy.wait(4000);


            cs.clickCreateVolunteerSignupButton();
            cy.wait(4000);
            cy.url().should('include', 'https://test.eventzet.com/#/VolunteerSignup/Volunteersignup/EventzetSignup/EventzetSignupDate');

            //check whether user can go to slot tab without saving the date page 
            cs.clickSlotTab();
            cy.url().should('not.include', 'https://test.eventzet.com/#/VolunteerSignup/Volunteersignup/EventzetSignup/EventzetSignupSlot');

        }),


        it('Test 2: Check date page validation is working or not ', () => {
            cy.visit(baseUrl);
            cy.wait(4000);
            readDataFromFile(filename).then((list) => {
                cs.clickLogin(list.useremail, list.userpassword);
            });

            cs.clickVolunteerSignup();
            cy.wait(4000);

            cs.clickCreateVolunteerSignupButton();
            cy.wait(5000);
            cs.clickDateSaveButton();
            cy.wait(1000);
            cs.checkDatePageValidation();

        }),


        it('Test 3: Check whether user can save the date page without inputting the date ', () => {

            cy.visit(baseUrl);
            cy.wait(4000);
            cy.scrollTo(0, 0);
            cy.viewport(1400, 860);
            readDataFromFile(filename).then((list) => {
                cs.clickLogin(list.useremail, list.userpassword);
            });

            cs.clickVolunteerSignup();
            cy.wait(4000);

            cs.clickCreateVolunteerSignupButton();
            cy.wait(5000);

            readDataFromFile(filename).then((list) => {

                cs.inputSignupTitle(list.signuptitle);
                cs.inputSignupDescription(list.signupdescription);
                cs.inputSignupLocation(list.signuplocation);

            });
            cs.clickDateSaveButton();
            cy.wait(1000);
            cy.url().should('include', 'https://test.eventzet.com/#/VolunteerSignup/Volunteersignup/EventzetSignup/EventzetSignupDate');
            cs.checkSignupDateValidation();


        }),

        it('Test 4: Check whether user can save the date page without inputting the signup title and description ', () => {

            cy.visit(baseUrl);
            cy.wait(4000);
            cy.scrollTo(0, 0);
            cy.viewport(1400, 860);
            readDataFromFile(filename).then((list) => {
                cs.clickLogin(list.useremail, list.userpassword);
            });

            cs.clickVolunteerSignup();
            cy.wait(4000);

            cs.clickCreateVolunteerSignupButton();
            cy.wait(5000);

            readDataFromFile(filename).then((list) => {

                cs.inputSignupDate(signupDate);
                cs.inputSignupLocation(list.signuplocation);

            });
            cs.clickDateSaveButton();
            cy.wait(1000);
            cy.url().should('include', 'https://test.eventzet.com/#/VolunteerSignup/Volunteersignup/EventzetSignup/EventzetSignupDate');
            cs.checkSignupTitleValidation();
            cs.checkSignupDescriptionValidation();


        }),

        it('Test 5: Check whether user can save the date page without inputting the location ', () => {

            cy.visit(baseUrl);
            cy.wait(4000);
            cy.scrollTo(0, 0);
            cy.viewport(1400, 860);
            readDataFromFile(filename).then((list) => {
                cs.clickLogin(list.useremail, list.userpassword);
            });

            cs.clickVolunteerSignup();
            cy.wait(4000);

            cs.clickCreateVolunteerSignupButton();
            cy.wait(5000);

            readDataFromFile(filename).then((list) => {

                cs.inputSignupTitle(list.signuptitle);
                cs.inputSignupDescription(list.signupdescription);
                cs.inputSignupDate(signupDate);

            });
            cs.clickDateSaveButton();
            cy.wait(1000);
            cy.url().should('include', 'https://test.eventzet.com/#/VolunteerSignup/Volunteersignup/EventzetSignup/EventzetSignupDate');
            cs.checkSignupLocationValidation();


        }),

        it('Test 6: Check whether user can save the date page ', () => {

            cy.visit(baseUrl);
            cy.wait(4000);
            cy.scrollTo(0, 0);
            cy.viewport(1400, 860);
            readDataFromFile(filename).then((list) => {
                cs.clickLogin(list.useremail, list.userpassword);
            });

            cs.clickVolunteerSignup();
            cy.wait(4000);

            cs.clickCreateVolunteerSignupButton();
            cy.intercept('GET', ' /api/SignupPublishWrapper/GetSignupPublishWrapper?SignUpID=*&SignUpStatus=SignUpStatus&SignUpPrivacyStatus=SignUpPrivacyStatus').as('signupDate');
            cy.wait('@signupDate', { timeout: 25000 });
        

            readDataFromFile(filename).then((list) => {

                cs.inputSignupTitle(list.signuptitle);
                cs.inputSignupDescription(list.signupdescription);
                cs.inputSignupDate(signupDate);
                cs.inputSignupLocation(list.signuplocation);


            });
            cs.clickDateSaveButton();
            cy.wait(5000);
            cy.url().should('include', 'https://test.eventzet.com/#/VolunteerSignup/Volunteersignup/EventzetSignup/EventzetSignupSlot');

            // check whether user can go back to the date page by clicking date tab 
            cs.clickDateTab();
            cy.wait(3000);
            cy.url().should('include', 'https://test.eventzet.com/#/VolunteerSignup/Volunteersignup/EventzetSignup/EventzetSignupDate');

        }),


        it('Test 7: Check whether user can delete the date  ', () => {

            cy.visit(baseUrl);
            cy.wait(4000);
            cy.scrollTo(0, 0);
            cy.viewport(1400, 860);
            readDataFromFile(filename).then((list) => {
                cs.clickLogin(list.useremail, list.userpassword);
            });

            cs.clickVolunteerSignup();
            cy.wait(4000);

            cs.clickCreateVolunteerSignupButton();
            cy.intercept('GET', ' /api/SignupPublishWrapper/GetSignupPublishWrapper?SignUpID=*&SignUpStatus=SignUpStatus&SignUpPrivacyStatus=SignUpPrivacyStatus').as('signupDate');
            cy.wait('@signupDate', { timeout: 25000 });

            cs.clickSignupListMenu();
            cy.intercept('GET', ' /api/Category/GetCategoryByTypeName?CategoryTypeName=SignUpStatus').as('signupListPage');
            cy.wait('@signupListPage', { timeout: 25000 });
            readDataFromFile(filename).then((list) => {

                cs.searchSignupName(list.signuptitle);
                cs.clickSignupEditButton();
            });

            cy.wait(5000);
            cy.url().should('include', 'https://test.eventzet.com/#/VolunteerSignup/Volunteersignup/EventzetSignup/EventzetSignupDate');
            cs.clickDateDeleteButton();
            cy.wait(5000);
            readDataFromFile(filename).then((list) => {

                cs.checkDeleteValue(list.signuplocation, signupDate);
            });


        }),

        it('Test 8: Check whether user can save multiple date in the date page ', () => {

            cy.visit(baseUrl);
            cy.wait(4000);
            cy.scrollTo(0, 0);
            cy.viewport(1400, 860);
            readDataFromFile(filename).then((list) => {
                cs.clickLogin(list.useremail, list.userpassword);
            });

            cs.clickVolunteerSignup();
            cy.wait(4000);

            cs.clickCreateVolunteerSignupButton();
            cy.intercept('GET', ' /api/SignupPublishWrapper/GetSignupPublishWrapper?SignUpID=*&SignUpStatus=SignUpStatus&SignUpPrivacyStatus=SignUpPrivacyStatus').as('signupDate');
            cy.wait('@signupDate', { timeout: 25000 });

            cs.clickSignupListMenu();
            cy.intercept('GET', ' /api/Category/GetCategoryByTypeName?CategoryTypeName=SignUpStatus').as('signupListPage');
            cy.wait('@signupListPage', { timeout: 25000 });

            readDataFromFile(filename).then((list) => {

                cs.searchSignupName(list.signuptitle);
                cs.clickSignupEditButton();
                cy.wait(5000);
                cs.inputSignupDate(signupDate);
                cs.inputSignupLocation(list.signuplocation);

            });

            cs.clickDateSaveButton();
            cy.wait(5000);
            cs.clickDateTab();
            cy.wait(5000);
            cs.clickAddMultipleDateButton();
            cy.wait(1000);

            readDataFromFile(filename).then((list) => {

                cs.inputSignupDate2(signupDate2);
                cs.inputSignupLocation2(list.signuplocation2);
                cs.clickDateSaveButton();
                cy.wait(5000);
                cs.clickDateTab();
                cy.wait(5000);
                const signupDateFormatted = formatDate(signupDate);
                const signupDate2Formatted = formatDate(signupDate2);
                list.firstslotdate =`${signupDateFormatted} - ${list.signuplocation}`;
                list.secondslotdate =`${signupDate2Formatted} - ${list.signuplocation2}`;
                const formatDate1= dateFormat(signupDate); 
                const formatDate2 = dateFormat(signupDate2); 
                list.date1 =`${formatDate1} - ${list.signuplocation}`;
                list.date2 =`${formatDate2} - ${list.signuplocation2}`;
                const publishDate1 =formatDateWithDateZero(signupDate);
                const publishdate2 =formatDateWithDateZero(signupDate2);
                list.publishdate1 = publishDate1;
                list.publishdate2 = publishdate2;
                const slotDateFormat1 = signupDetailsPageDateFormat(signupDate);
                const slotDateFormat2 = signupDetailsPageDateFormat(signupDate2);
                const regSlorDate1 = formatDateWithWeekday(signupDate);
                const regSlorDate2 = formatDateWithWeekday(signupDate2);
                list.slotdate1 = `  ${slotDateFormat1} `;
                list.slotdate2 = `  ${slotDateFormat2} `;
                list.regslotdate1 = `  ${regSlorDate1} `;
                list.regslotdate2 = `  ${regSlorDate2} `;

                writeDataToFile(filename,list);

                cs.checkMultipleDates(

                    list.signuplocation,
                    signupDate,
                    list.signuplocation2,
                    signupDate2
                );
            });

        }),

        // Slots page tests

        it('Test 9: Check whether slot page validation is working or not ', () => {

            cy.visit(baseUrl);
            cy.wait(4000);
            cy.scrollTo(0, 0);
            cy.viewport(1400, 860);
            readDataFromFile(filename).then((list) => {
                cs.clickLogin(list.useremail, list.userpassword);
            });

            cs.clickVolunteerSignup();
            cy.wait(4000);

            cs.clickCreateVolunteerSignupButton();
            cy.intercept('GET', ' /api/SignupPublishWrapper/GetSignupPublishWrapper?SignUpID=*&SignUpStatus=SignUpStatus&SignUpPrivacyStatus=SignUpPrivacyStatus').as('signupDate');
            cy.wait('@signupDate', { timeout: 25000 });

            cs.clickSignupListMenu();
            cy.intercept('GET', ' /api/Category/GetCategoryByTypeName?CategoryTypeName=SignUpStatus').as('signupListPage');
            cy.wait('@signupListPage', { timeout: 25000 });

            readDataFromFile(filename).then((list) => {

                cs.searchSignupName(list.signuptitle);
                cs.clickSignupEditButton();
                cy.wait(5000);
                cs.clickSlotTab();
                cy.wait(2000);
                cs.clickSlotSaveButton();
                cs.checkSlotPageValidation();
            });
        }),

        it('Test 10: Check whether user can save the page without inputting the slot count or not', () => {

            cy.visit(baseUrl);
            cy.wait(4000);
            cy.scrollTo(0, 0);
            cy.viewport(1400, 860);
            readDataFromFile(filename).then((list) => {
                cs.clickLogin(list.useremail, list.userpassword);
            });

            cs.clickVolunteerSignup();
            cy.wait(4000);

            cs.clickCreateVolunteerSignupButton();
            cy.intercept('GET', ' /api/SignupPublishWrapper/GetSignupPublishWrapper?SignUpID=*&SignUpStatus=SignUpStatus&SignUpPrivacyStatus=SignUpPrivacyStatus').as('signupDate');
            cy.wait('@signupDate', { timeout: 25000 });

            cs.clickSignupListMenu();
            cy.intercept('GET', ' /api/Category/GetCategoryByTypeName?CategoryTypeName=SignUpStatus').as('signupListPage');
            cy.wait('@signupListPage', { timeout: 25000 });

            readDataFromFile(filename).then((list) => {

                cs.searchSignupName(list.signuptitle);
                cs.clickSignupEditButton();
                cy.wait(5000);
                cs.clickSlotTab();
                cy.wait(2000);
                cs.inputSlotName1(list.slotname1);
                cs.clickSlotSaveButton();
                cy.wait(1000);
                cs.checkSlotCountValidation();
            });
        }),


        it('Test 11: Check whether user can save the page without inputting the slot name or not', () => {

            cy.visit(baseUrl);
            cy.wait(4000);
            cy.scrollTo(0, 0);
            cy.viewport(1400, 860);
            readDataFromFile(filename).then((list) => {
                cs.clickLogin(list.useremail, list.userpassword);
            });

            cs.clickVolunteerSignup();
            cy.wait(4000);

            cs.clickCreateVolunteerSignupButton();
            cy.intercept('GET', ' /api/SignupPublishWrapper/GetSignupPublishWrapper?SignUpID=*&SignUpStatus=SignUpStatus&SignUpPrivacyStatus=SignUpPrivacyStatus').as('signupDate');
            cy.wait('@signupDate', { timeout: 25000 });

            cs.clickSignupListMenu();
            cy.intercept('GET', ' /api/Category/GetCategoryByTypeName?CategoryTypeName=SignUpStatus').as('signupListPage');
            cy.wait('@signupListPage', { timeout: 25000 });

            readDataFromFile(filename).then((list) => {

                cs.searchSignupName(list.signuptitle);
                cs.clickSignupEditButton();
                cy.wait(5000);
                cs.clickSlotTab();
                cy.wait(2000);
                cs.inputSlotCount1(list.slotcount1);
                cs.clickSlotSaveButton();
                cy.wait(1000);
                cs.checkSlotTitleValidation();
            });
        }),

        it('Test 12: Check whether user can save the slot page', () => {

            cy.visit(baseUrl);
            cy.wait(4000);
            cy.scrollTo(0, 0);
            cy.viewport(1400, 860);
            readDataFromFile(filename).then((list) => {
                cs.clickLogin(list.useremail, list.userpassword);
            });

            cs.clickVolunteerSignup();
            cy.wait(4000);

            cs.clickCreateVolunteerSignupButton();
            cy.intercept('GET', ' /api/SignupPublishWrapper/GetSignupPublishWrapper?SignUpID=*&SignUpStatus=SignUpStatus&SignUpPrivacyStatus=SignUpPrivacyStatus').as('signupDate');
            cy.wait('@signupDate', { timeout: 25000 });

            cs.clickSignupListMenu();
            cy.intercept('GET', ' /api/Category/GetCategoryByTypeName?CategoryTypeName=SignUpStatus').as('signupListPage');
            cy.wait('@signupListPage', { timeout: 25000 });

            readDataFromFile(filename).then((list) => {

                cs.searchSignupName(list.signuptitle);
                cs.clickSignupEditButton();
                cy.wait(5000);
                cs.clickSlotTab();
                cy.wait(2000);
                cs.inputSlotCount1(list.slotcount1);
                cs.inputSlotName1(list.slotname1);
                cs.clickSlotSaveButton();
                cy.wait(5000);
                cy.url().should('include', 'https://test.eventzet.com/#/VolunteerSignup/Volunteersignup/EventzetSignup/EventzetSignupTime');

            });
        }),

        it('Test 13: Check whether user can delete the slots or not', () => {

            cy.visit(baseUrl);
            cy.wait(4000);
            cy.scrollTo(0, 0);
            cy.viewport(1400, 860);
            readDataFromFile(filename).then((list) => {
                cs.clickLogin(list.useremail, list.userpassword);
            });

            cs.clickVolunteerSignup();
            cy.wait(4000);

            cs.clickCreateVolunteerSignupButton();
            cy.intercept('GET', ' /api/SignupPublishWrapper/GetSignupPublishWrapper?SignUpID=*&SignUpStatus=SignUpStatus&SignUpPrivacyStatus=SignUpPrivacyStatus').as('signupDate');
            cy.wait('@signupDate', { timeout: 25000 });

            cs.clickSignupListMenu();
            cy.intercept('GET', ' /api/Category/GetCategoryByTypeName?CategoryTypeName=SignUpStatus').as('signupListPage');
            cy.wait('@signupListPage', { timeout: 25000 });

            readDataFromFile(filename).then((list) => {

                cs.searchSignupName(list.signuptitle);
                cs.clickSignupEditButton();
                cy.wait(5000);
                cs.clickSlotTab();
                cy.wait(2000);
                cs.deleteSlot1()
                cy.wait(5000);
                cs.checkSlotDeleteValue(list.slotcount1, list.slotname1);

                //after deleting the slot then we can navigate to the time page by clicking save and continue button
                cs.clickSlotSaveButton();
                cy.url().should('include', 'https://test.eventzet.com/#/VolunteerSignup/Volunteersignup/EventzetSignup/EventzetSignupSlot');

            });
        }),

        it('Test 14: Check whether user can save the multiple slots in the slots page or not', () => {

            cy.visit(baseUrl);
            cy.wait(4000);
            cy.scrollTo(0, 0);
            cy.viewport(1400, 860);
            readDataFromFile(filename).then((list) => {
                cs.clickLogin(list.useremail, list.userpassword);
            });

            cs.clickVolunteerSignup();
            cy.wait(4000);

            cs.clickCreateVolunteerSignupButton();
            cy.intercept('GET', ' /api/SignupPublishWrapper/GetSignupPublishWrapper?SignUpID=*&SignUpStatus=SignUpStatus&SignUpPrivacyStatus=SignUpPrivacyStatus').as('signupDate');
            cy.wait('@signupDate', { timeout: 25000 });

            cs.clickSignupListMenu();
            cy.intercept('GET', ' /api/Category/GetCategoryByTypeName?CategoryTypeName=SignUpStatus').as('signupListPage');
            cy.wait('@signupListPage', { timeout: 25000 });

            readDataFromFile(filename).then((list) => {

                cs.searchSignupName(list.signuptitle);
                cs.clickSignupEditButton();
                cy.wait(5000);
                cs.clickSlotTab();
                cy.wait(2000);
                cs.inputSlotCount1(list.slotcount1);
                cs.inputSlotName1(list.slotname1);
                cs.clickAddMultipleSlotButton();
                cy.wait(1000);
                cs.inputSlotCount2(list.slotcount2);
                cs.inputSlotName2(list.slotname2);
                cs.clickSlotSaveButton();
                cy.wait(5000);
                cy.url().should('include', 'https://test.eventzet.com/#/VolunteerSignup/Volunteersignup/EventzetSignup/EventzetSignupTime');

            });
        }),

        // time page tests

        it('Test 15: Check whether time page validation is working or not', () => {

            cy.visit(baseUrl);
            cy.wait(4000);
            cy.scrollTo(0, 0);
            cy.viewport(1400, 860);
            readDataFromFile(filename).then((list) => {
                cs.clickLogin(list.useremail, list.userpassword);
            });

            cs.clickVolunteerSignup();
            cy.wait(4000);

            cs.clickCreateVolunteerSignupButton();
            cy.intercept('GET', '/api/SignupPublishWrapper/GetSignupPublishWrapper?SignUpID=*&SignUpStatus=SignUpStatus&SignUpPrivacyStatus=SignUpPrivacyStatus').as('signupDateData');
            cy.wait('@signupDateData', { timeout: 25000 });

            cs.clickSignupListMenu();
            cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SignUpStatus').as('signupListData');
            cy.wait('@signupListData', { timeout: 25000 });


            readDataFromFile(filename).then((list) => {

                cs.searchSignupName(list.signuptitle);
                cs.clickSignupEditButton();
                cy.wait(5000);
                cs.clickTimeTab();
                cy.wait(5000);
                cy.url().should('include', 'https://test.eventzet.com/#/VolunteerSignup/Volunteersignup/EventzetSignup/EventzetSignupTime');
                cs.clickTimeSaveButton();
                cs.checkTimePageValidation();

            });
        }),


        it('Test 16: Check whether user can save the time page without inputting the start time ', () => {

            cy.visit(baseUrl);
            cy.wait(4000);
            cy.scrollTo(0, 0);
            cy.viewport(1400, 860);
            readDataFromFile(filename).then((list) => {
                cs.clickLogin(list.useremail, list.userpassword);
            });

            cs.clickVolunteerSignup();
            cy.wait(4000);

            cs.clickCreateVolunteerSignupButton();
            cy.intercept('GET', '/api/SignupPublishWrapper/GetSignupPublishWrapper?SignUpID=*&SignUpStatus=SignUpStatus&SignUpPrivacyStatus=SignUpPrivacyStatus').as('signupDateData');
            cy.wait('@signupDateData', { timeout: 25000 });

            cs.clickSignupListMenu();
            cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SignUpStatus').as('signupListData');
            cy.wait('@signupListData', { timeout: 25000 });

            readDataFromFile(filename).then((list) => {

                cs.searchSignupName(list.signuptitle);
                cs.clickSignupEditButton();
                cy.wait(5000);
                cs.clickTimeTab();
                cy.wait(5000);
                cs.inputEndTime1(list.endtime1);
                cs.selectSlot1(list.slottext1);
                cs.checkDate1(list.firstslotdate);
                cs.clickTimeSaveButton();
                cs.checkStartTimeValidation();

            });
        }),

        it('Test 17: Check whether user can save the time page without inputting the end time ', () => {

            cy.visit(baseUrl);
            cy.wait(4000);
            cy.scrollTo(0, 0);
            cy.viewport(1400, 860);
            readDataFromFile(filename).then((list) => {
                cs.clickLogin(list.useremail, list.userpassword);
            });

            cs.clickVolunteerSignup();
            cy.wait(4000);

            cs.clickCreateVolunteerSignupButton();
            cy.intercept('GET', '/api/SignupPublishWrapper/GetSignupPublishWrapper?SignUpID=*&SignUpStatus=SignUpStatus&SignUpPrivacyStatus=SignUpPrivacyStatus').as('signupDateData');
            cy.wait('@signupDateData', { timeout: 25000 });

            cs.clickSignupListMenu();
            cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SignUpStatus').as('signupListData');
            cy.wait('@signupListData', { timeout: 25000 });

            readDataFromFile(filename).then((list) => {

                cs.searchSignupName(list.signuptitle);
                cs.clickSignupEditButton();
                cy.wait(5000);
                cs.clickTimeTab();
                cy.wait(6000);
                cs.inputStartTime1(list.starttime1);
                cs.selectSlot1(list.slottext1);
                cs.checkDate1(list.firstslotdate);
                cs.clickTimeSaveButton();
                cs.checkEndTimeValidation();

            });
        }),

        it('Test 18: Check whether user can save the time page without selecting the slot', () => {

            cy.visit(baseUrl);
            cy.wait(4000);
            cy.scrollTo(0, 0);
            cy.viewport(1400, 860);
            readDataFromFile(filename).then((list) => {
                cs.clickLogin(list.useremail, list.userpassword);
            });

            cs.clickVolunteerSignup();
            cy.wait(4000);

            cs.clickCreateVolunteerSignupButton();
            cy.intercept('GET', '/api/SignupPublishWrapper/GetSignupPublishWrapper?SignUpID=*&SignUpStatus=SignUpStatus&SignUpPrivacyStatus=SignUpPrivacyStatus').as('signupDateData');
            cy.wait('@signupDateData', { timeout: 25000 });

            cs.clickSignupListMenu();
            cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SignUpStatus').as('signupListData');
            cy.wait('@signupListData', { timeout: 25000 });

            readDataFromFile(filename).then((list) => {

                cs.searchSignupName(list.signuptitle);
                cs.clickSignupEditButton();
                cy.wait(5000);
                cs.clickTimeTab();
                cy.wait(6000);
                cs.inputStartTime1(list.starttime1);
                cs.inputEndTime1(list.endtime1);

                cs.checkDate1(list.firstslotdate);
                cs.clickTimeSaveButton();
                cs.checkSlotValidation();

            });
        }),

        it('Test 19: Check whether user can save the time page without selecting the date', () => {

            cy.visit(baseUrl);
            cy.wait(4000);
            cy.scrollTo(0, 0);
            cy.viewport(1400, 860);
            readDataFromFile(filename).then((list) => {
                cs.clickLogin(list.useremail, list.userpassword);
            });

            cs.clickVolunteerSignup();
            cy.wait(4000);

            cs.clickCreateVolunteerSignupButton();
            cy.intercept('GET', '/api/SignupPublishWrapper/GetSignupPublishWrapper?SignUpID=*&SignUpStatus=SignUpStatus&SignUpPrivacyStatus=SignUpPrivacyStatus').as('signupDateData');
            cy.wait('@signupDateData', { timeout: 25000 });

            cs.clickSignupListMenu();
            cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SignUpStatus').as('signupListData');
            cy.wait('@signupListData', { timeout: 25000 });

            readDataFromFile(filename).then((list) => {

                cs.searchSignupName(list.signuptitle);
                cs.clickSignupEditButton();
                cy.wait(5000);
                cs.clickTimeTab();
                cy.wait(6000);
                cs.inputStartTime1(list.starttime1);
                cs.inputEndTime1(list.endtime1);
                cs.selectSlot1(list.slottext1);
                cs.clickTimeSaveButton();
                cs.checkDateValidation();

            });
        }),


        it('Test 20: Check whether user can save the time page or not', () => {

            cy.visit(baseUrl);
            cy.wait(4000);
            cy.scrollTo(0, 0);
            cy.viewport(1400, 860);
            readDataFromFile(filename).then((list) => {
                cs.clickLogin(list.useremail, list.userpassword);
            });

            cs.clickVolunteerSignup();
            cy.wait(4000);

            cs.clickCreateVolunteerSignupButton();
            cy.intercept('GET', '/api/SignupPublishWrapper/GetSignupPublishWrapper?SignUpID=*&SignUpStatus=SignUpStatus&SignUpPrivacyStatus=SignUpPrivacyStatus').as('signupDateData');
            cy.wait('@signupDateData', { timeout: 25000 });

            cs.clickSignupListMenu();
            cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SignUpStatus').as('signupListData');
            cy.wait('@signupListData', { timeout: 25000 });

            readDataFromFile(filename).then((list) => {

                cs.searchSignupName(list.signuptitle);
                cs.clickSignupEditButton();
                cy.wait(5000);
                cs.clickTimeTab();
                cy.wait(6000);
                cs.inputStartTime1(list.starttime1);
                cs.inputEndTime1(list.endtime1);
                cs.selectSlot1(list.slottext1);
                cs.checkDate1(list.firstslotdate);
                cs.clickTimeSaveButton();
                cy.wait(4000);
                cy.url().should('include', 'https://test.eventzet.com/#/VolunteerSignup/Volunteersignup/EventzetSignup/EventzetSignupSetting');

            });
        }),

        it('Test 21: Check whether user can delete the timeslot or not', () => {

            cy.visit(baseUrl);
            cy.wait(4000);
            cy.scrollTo(0, 0);
            cy.viewport(1400, 860);
            readDataFromFile(filename).then((list) => {
                cs.clickLogin(list.useremail, list.userpassword);
            });

            cs.clickVolunteerSignup();
            cy.wait(4000);

            cs.clickCreateVolunteerSignupButton();
            cy.intercept('GET', '/api/SignupPublishWrapper/GetSignupPublishWrapper?SignUpID=*&SignUpStatus=SignUpStatus&SignUpPrivacyStatus=SignUpPrivacyStatus').as('signupDateData');
            cy.wait('@signupDateData', { timeout: 25000 });

            cs.clickSignupListMenu();
            cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SignUpStatus').as('signupListData');
            cy.wait('@signupListData', { timeout: 25000 });

            readDataFromFile(filename).then((list) => {

                cs.searchSignupName(list.signuptitle);
                cs.clickSignupEditButton();
                cy.wait(5000);
                cs.clickTimeTab();
                cy.wait(6000);
                cs.clickTimeDeleteButton1();
                cy.wait(4000);
                cs.checkTimeDeleteValue(

                    list.starttime1,
                    list.endtime1,
                    list.slotname1,
                    list.firstslotdate
                );

            });
        }),

        it('Test 22: Check whether user can save the multiple timeslots or not', () => {

            cy.visit(baseUrl);
            cy.wait(4000);
            cy.scrollTo(0, 0);
            cy.viewport(1400, 860);
            readDataFromFile(filename).then((list) => {
                cs.clickLogin(list.useremail, list.userpassword);
            });

            cs.clickVolunteerSignup();
            cy.wait(4000);

            cs.clickCreateVolunteerSignupButton();
            cy.intercept('GET', '/api/SignupPublishWrapper/GetSignupPublishWrapper?SignUpID=*&SignUpStatus=SignUpStatus&SignUpPrivacyStatus=SignUpPrivacyStatus').as('signupDateData');
            cy.wait('@signupDateData', { timeout: 25000 });

            cs.clickSignupListMenu();
            cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SignUpStatus').as('signupListData');
            cy.wait('@signupListData', { timeout: 25000 });

            readDataFromFile(filename).then((list) => {

                cs.searchSignupName(list.signuptitle);
                cs.clickSignupEditButton();
                cy.wait(5000);
                cs.clickTimeTab();
                cy.wait(6000);
                cs.inputStartTime1(list.starttime1);
                cs.inputEndTime1(list.endtime1);
                cs.selectSlot1(list.slottext1);
                cs.checkDate1(list.firstslotdate);
                cy.wait(1000);
                cs.clickAddMultipleTimeButton();
                cy.wait(1000);
                cs.inputStartTime2(list.starttime2);
                cs.inputEndTime2(list.endtime2);
                cs.selectSlot2(list.slottext2);
                cs.checkDate2(list.secondslotdate);
                const datetime1 = formatDatetime(signupDate, list.starttime1, list.endtime1); // e.g., "October 24, 2024 & 9:00 AM - 10:00 AM"
                const datetime2 = formatDatetime(signupDate2, list.starttime2, list.endtime2); // e.g., "October 17, 2024 & 10:00 AM - 11:00 AM"
                list.datetime1 =datetime1;
                list.datetime2 =datetime2;
                writeDataToFile(filename,list);
                cy.wait(1000);
                cs.clickTimeSaveButton();
                cy.wait(6000);
                cy.url().should('include', 'https://test.eventzet.com/#/VolunteerSignup/Volunteersignup/EventzetSignup/EventzetSignupSetting');
                cs.clickTimeTab();
                cy.wait(6000);
                cs.checkSavedTimeData(

                    list.starttime1,
                    list.endtime1,
                    list.firstslot,
                    list.date1,
                    list.starttime2,
                    list.endtime2,
                    list.secondslot,
                    list.date2
                );

            });
        }),


     //  Settings page  tests

        it('Test 23: Check whether user can save the settings page', () => {

            cy.visit(baseUrl);
            cy.wait(4000);
            cy.scrollTo(0, 0);
            cy.viewport(1400, 860);
            readDataFromFile(filename).then((list) => {
                cs.clickLogin(list.useremail, list.userpassword);
            });

            cs.clickVolunteerSignup();
            cy.wait(4000);

            cs.clickCreateVolunteerSignupButton();
            cy.intercept('GET', '/api/SignupPublishWrapper/GetSignupPublishWrapper?SignUpID=*&SignUpStatus=SignUpStatus&SignUpPrivacyStatus=SignUpPrivacyStatus').as('signupDateData');
            cy.wait('@signupDateData', { timeout: 25000 });

            cs.clickSignupListMenu();
            cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SignUpStatus').as('signupListData');
            cy.wait('@signupListData', { timeout: 25000 });

            readDataFromFile(filename).then((list) => {

                cs.searchSignupName(list.signuptitle);
                cs.clickSignupEditButton();
                cy.wait(5000);
                cs.clickSettingsTab();
                cy.wait(4000);
                cs.clickSettingsCheckBox();
                cs.clickSettingsSaveButton();
                cy.wait(6000);
                cy.url().should('include', 'https://test.eventzet.com/#/VolunteerSignup/Volunteersignup/EventzetSignup/EventzetSignupDesign');

            });

        }),

        it('Test 24: Check whether user can input question', () => {

            cy.visit(baseUrl);
            cy.wait(4000);
            cy.scrollTo(0, 0);
            cy.viewport(1400, 860);
            readDataFromFile(filename).then((list) => {
                cs.clickLogin(list.useremail, list.userpassword);
            });

            cs.clickVolunteerSignup();
            cy.wait(4000);

            cs.clickCreateVolunteerSignupButton();
            cy.intercept('GET', '/api/SignupPublishWrapper/GetSignupPublishWrapper?SignUpID=0&SignUpStatus=SignUpStatus&SignUpPrivacyStatus=SignUpPrivacyStatus').as('signupDateData');
            cy.wait('@signupDateData', { timeout: 25000 });

            cs.clickSignupListMenu();
            cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SignUpStatus').as('signupListData');
            cy.wait('@signupListData', { timeout: 25000 });

            readDataFromFile(filename).then((list) => {

                cs.searchSignupName(list.signuptitle);
                cs.clickSignupEditButton();
                cy.wait(5000);
                cs.clickSettingsTab();
                cy.wait(4000);
                cs.inputQuestion1(list.question1);
                cs.clickSettingsSaveButton();
                cy.wait(6000);
                cy.url().should('include', 'https://test.eventzet.com/#/VolunteerSignup/Volunteersignup/EventzetSignup/EventzetSignupDesign');

            });

        }),

        it('Test 25: Check whether user can delete the question', () => {
            cy.visit(baseUrl);
            cy.wait(4000);
            cy.scrollTo(0, 0);
            cy.viewport(1400, 860);
            readDataFromFile(filename).then((list) => {
                cs.clickLogin(list.useremail, list.userpassword);
            });

            cs.clickVolunteerSignup();
            cy.wait(4000);


            cs.clickCreateVolunteerSignupButton();
            cy.intercept('GET', '/api/SignupPublishWrapper/GetSignupPublishWrapper?SignUpID=0&SignUpStatus=SignUpStatus&SignUpPrivacyStatus=SignUpPrivacyStatus').as('signupDateData');
            cy.wait('@signupDateData', { timeout: 25000 });

            cs.clickSignupListMenu();
            cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SignUpStatus').as('signupListData');
            cy.wait('@signupListData', { timeout: 25000 });

            readDataFromFile(filename).then((list) => {

                cs.searchSignupName(list.signuptitle);
                cs.clickSignupEditButton();
                cy.wait(5000);
                cs.clickSettingsTab();
                cy.wait(4000);
                cs.clickQuestionDeleteButton1();
                cy.wait(4000);

            });

        }),

        it('Test 26: Check whether user can input multiple questions', () => {

            cy.visit(baseUrl);
            cy.wait(4000);
            cy.scrollTo(0, 0);
            cy.viewport(1400, 860);
            readDataFromFile(filename).then((list) => {
                cs.clickLogin(list.useremail, list.userpassword);
            });

            cs.clickVolunteerSignup();
            cy.wait(4000);

            cs.clickCreateVolunteerSignupButton();
            cy.intercept('GET', '/api/SignupPublishWrapper/GetSignupPublishWrapper?SignUpID=0&SignUpStatus=SignUpStatus&SignUpPrivacyStatus=SignUpPrivacyStatus').as('signupDateData');
            cy.wait('@signupDateData', { timeout: 25000 });

            cs.clickSignupListMenu();
            cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SignUpStatus').as('signupListData');
            cy.wait('@signupListData', { timeout: 25000 });

            readDataFromFile(filename).then((list) => {

                cs.searchSignupName(list.signuptitle);
                cs.clickSignupEditButton();
                cy.wait(5000);
                cs.clickSettingsTab();
                cy.wait(4000);
                cs.clickSettingsCheckBox();
                cs.inputQuestion1(list.question1);
                cy.wait(1000);
                cs.clickAddMultipleQuestionButton();
                cy.wait(1000);
                cs.inputQuestion2(list.question2);
                cs.clickSettingsSaveButton();
                cy.wait(6000);
                cy.url().should('include', 'https://test.eventzet.com/#/VolunteerSignup/Volunteersignup/EventzetSignup/EventzetSignupDesign');

            });

        }),

      //  design page tests

        it('Test 27: Check whether user can save the design page ', () => {

            cy.visit(baseUrl);
            cy.wait(4000);
            cy.scrollTo(0, 0);
            cy.viewport(1400, 860);
            readDataFromFile(filename).then((list) => {
                cs.clickLogin(list.useremail, list.userpassword);
            });

            cs.clickVolunteerSignup();
            cy.wait(4000);

            cs.clickCreateVolunteerSignupButton();
            cy.intercept('GET', '/api/SignupPublishWrapper/GetSignupPublishWrapper?SignUpID=0&SignUpStatus=SignUpStatus&SignUpPrivacyStatus=SignUpPrivacyStatus').as('signupDateData');
            cy.wait('@signupDateData', { timeout: 25000 });

            cs.clickSignupListMenu();
            cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SignUpStatus').as('signupListData');
            cy.wait('@signupListData', { timeout: 25000 });

            readDataFromFile(filename).then((list) => {

                cs.searchSignupName(list.signuptitle);
                cs.clickSignupEditButton();
                cy.wait(5000);
                cs.clickDesignTab();
                cy.wait(6000);
                cs.selectColorPellet();
                cs.clickDesignSaveButton();
                cy.wait(6000);
                cy.url().should('include', 'https://test.eventzet.com/#/VolunteerSignup/Volunteersignup/EventzetSignup/EventzetSignupPublish');

            });

        }),

        it('Test 28: Check whether user can upload signup image', () => {

            cy.visit(baseUrl);
            cy.wait(4000);
            cy.scrollTo(0, 0);
            cy.viewport(1400, 860);
            readDataFromFile(filename).then((list) => {
                cs.clickLogin(list.useremail, list.userpassword);
            });

            cs.clickVolunteerSignup();
            cy.wait(4000);

            cs.clickCreateVolunteerSignupButton();
            cy.intercept('GET', '/api/SignupPublishWrapper/GetSignupPublishWrapper?SignUpID=0&SignUpStatus=SignUpStatus&SignUpPrivacyStatus=SignUpPrivacyStatus').as('signupDateData');
            cy.wait('@signupDateData', { timeout: 25000 });

            cs.clickSignupListMenu();
            cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SignUpStatus').as('signupListData');
            cy.wait('@signupListData', { timeout: 25000 });

            readDataFromFile(filename).then((list) => {

                cs.searchSignupName(list.signuptitle);
                cs.clickSignupEditButton();
                cy.wait(5000);
                cs.clickDesignTab();
                cy.wait(6000);
                cs.uploadSignupImage('charity.jpg');
                cs.clickDesignSaveButton();
                cy.wait(6000);
                cy.url().should('include', 'https://test.eventzet.com/#/VolunteerSignup/Volunteersignup/EventzetSignup/EventzetSignupPublish');

            });

        }),

        it('Test 29: Check whether user can delete signup image', () => {

            cy.visit(baseUrl);
            cy.wait(4000);
            cy.scrollTo(0, 0);
            cy.viewport(1400, 860);
            readDataFromFile(filename).then((list) => {
                cs.clickLogin(list.useremail, list.userpassword);
            });

            cs.clickVolunteerSignup();
            cy.wait(4000);

            cs.clickCreateVolunteerSignupButton();
            cy.intercept('GET', '/api/SignupPublishWrapper/GetSignupPublishWrapper?SignUpID=0&SignUpStatus=SignUpStatus&SignUpPrivacyStatus=SignUpPrivacyStatus').as('signupDateData');
            cy.wait('@signupDateData', { timeout: 25000 });

            cs.clickSignupListMenu();
            cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SignUpStatus').as('signupListData');
            cy.wait('@signupListData', { timeout: 25000 });

            readDataFromFile(filename).then((list) => {

                cs.searchSignupName(list.signuptitle);
                cs.clickSignupEditButton();
                cy.wait(5000);
                cs.clickDesignTab();
                cy.wait(6000);
                cs.clickImageDeleteButton();
                cy.wait(4000);
                cs.uploadSignupImage('charity.jpg')
                cs.clickDesignSaveButton();
                cy.intercept('GET', '/api/SignupPublishWrapper/GetSignupPublishWrapper?SignUpID=*&SignUpStatus=SignUpStatus&SignUpPrivacyStatus=SignUpPrivacyStatus').as('signupPublishData');
                cy.wait('@signupPublishData', { timeout: 25000 });
                cy.url().should('include', 'https://test.eventzet.com/#/VolunteerSignup/Volunteersignup/EventzetSignup/EventzetSignupPublish');

            });

        }),

      //  publish page tests

        it('Test 30: Check whether publish page contain all the details', () => {

            cy.visit(baseUrl);
            cy.wait(4000);
            cy.scrollTo(0, 0);
            cy.viewport(1400, 860);
            readDataFromFile(filename).then((list) => {
                cs.clickLogin(list.useremail, list.userpassword);
            });

            cs.clickVolunteerSignup();
            cy.wait(4000);

            cs.clickCreateVolunteerSignupButton();
            cy.intercept('GET', '/api/SignupPublishWrapper/GetSignupPublishWrapper?SignUpID=0&SignUpStatus=SignUpStatus&SignUpPrivacyStatus=SignUpPrivacyStatus').as('signupDateData');
            cy.wait('@signupDateData', { timeout: 25000 });

            cs.clickSignupListMenu();
            cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SignUpStatus').as('signupListData');
            cy.wait('@signupListData', { timeout: 25000 });

            readDataFromFile(filename).then((list) => {

                cs.searchSignupName(list.signuptitle);
                cs.clickSignupEditButton();
                cy.wait(5000);
                cs.clickPublishTab();
                cy.intercept('GET', '/api/SignupPublishWrapper/GetSignupPublishWrapper?SignUpID=*&SignUpStatus=SignUpStatus&SignUpPrivacyStatus=SignUpPrivacyStatus').as('signupPublishData');
                cy.wait('@signupPublishData', { timeout: 25000 });
                // cy.wait(6000);
                cs.checkSignupCreatorName(list.signupcreator);
                cs.checkSignUPName(list.signuptitle);
                cs.checkSignupDescription(list.signupdescription);

                cs.checkFirstSlot(

                    list.firstslot,
                    list.slotcount1,
                    list.publishdate1,
                    list.signuplocation,
                    list.timeslot1
                );

                cs.checkSecondSlot(

                    list.secondslot,
                    list.slotcount2,
                    list.publishdate2,
                    list.signuplocation2,
                    list.timeslot2);

            });

        }),

        it('Test 31: Check whether user can make the signup private', () => {

            cy.visit(baseUrl);
            cy.wait(4000);
            cy.scrollTo(0, 0);
            cy.viewport(1400, 860);
            readDataFromFile(filename).then((list) => {
                cs.clickLogin(list.useremail, list.userpassword);
            });

            cs.clickVolunteerSignup();
            cy.wait(4000);

            cs.clickCreateVolunteerSignupButton();
            cy.intercept('GET', '/api/SignupPublishWrapper/GetSignupPublishWrapper?SignUpID=0&SignUpStatus=SignUpStatus&SignUpPrivacyStatus=SignUpPrivacyStatus').as('signupDateData');
            cy.wait('@signupDateData', { timeout: 25000 });

            cs.clickSignupListMenu();
            cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SignUpStatus').as('signupListData');
            cy.wait('@signupListData', { timeout: 25000 });

            readDataFromFile(filename).then((list) => {

                cs.searchSignupName(list.signuptitle);
                cs.clickSignupEditButton();
                cy.wait(5000);
                cs.clickPublishTab();
                cy.intercept('GET', '/api/SignupPublishWrapper/GetSignupPublishWrapper?SignUpID=*&SignUpStatus=SignUpStatus&SignUpPrivacyStatus=SignUpPrivacyStatus').as('signupPublishData');
                cy.wait('@signupPublishData', { timeout: 25000 });
                cy.wait(6000);
                cs.clickSignupInviteButton();
                cy.wait(2000);
                cy.url().should('include', 'https://test.eventzet.com/#/VolunteerSignup/Volunteersignup/VolunteerMessage');
                cy.get(':nth-child(1) > .form-floating > .form-control').should('be.visible');
            });

        }),



        it('Test 32: Check whether user can publish the signup', () => {

            cy.visit(baseUrl);
            cy.wait(4000);
            cy.scrollTo(0, 0);
            cy.viewport(1400, 860);
            readDataFromFile(filename).then((list) => {
                cs.clickLogin(list.useremail, list.userpassword);
            });

            cs.clickVolunteerSignup();
            cy.wait(4000);

            cs.clickCreateVolunteerSignupButton();
            cy.intercept('GET', '/api/SignupPublishWrapper/GetSignupPublishWrapper?SignUpID=0&SignUpStatus=SignUpStatus&SignUpPrivacyStatus=SignUpPrivacyStatus').as('signupDateData');
            cy.wait('@signupDateData', { timeout: 25000 });

            cs.clickSignupListMenu();
            cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SignUpStatus').as('signupListData');
            cy.wait('@signupListData', { timeout: 25000 });

            readDataFromFile(filename).then((list) => {

                cs.searchSignupName(list.signuptitle);
                cs.clickEditButton();
                cy.wait(5000);
                cs.clickPublishTab();
                cy.intercept('GET', '/api/SignupPublishWrapper/GetSignupPublishWrapper?SignUpID=*&SignUpStatus=SignUpStatus&SignUpPrivacyStatus=SignUpPrivacyStatus').as('signupPublishData');
                cy.wait('@signupPublishData', { timeout: 25000 });
                cy.wait(6000);
                cy.xpath("(//input[@id='flexSwitchCheckDefault'])[2]")
                .click({ force: true });
                cy.wait(3000);
                cs.clickSignupSaveButton();
                cy.wait(1000);
                cs.clickSignupPublishButton();
                cy.wait(2000);
                cy.url().should('include', 'https://test.eventzet.com/#/VolunteerSignup/Volunteersignup/Volunteersignuplist');
            });

        }),


    ]
}
