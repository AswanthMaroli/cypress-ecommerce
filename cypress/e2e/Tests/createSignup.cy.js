import CreateSignup from "../Pages/createSignupPage.js";
const { readDataFromFile } = require('../ExternalFiles/fileOperations.js');
const baseUrl = Cypress.config('baseUrl');
const cs = new CreateSignup();
const filename = 'cypress\\fixtures\\volunteerSignup.json'
var dateCalculations = require('../ExternalFiles/dateCalculations.js');
const signupDate = dateCalculations.calculateSevenDaysLater();
const signupDate2 = dateCalculations.getCurrentDate();


module.exports = {

    CreateSignupTests: [


        // Date page tests


        it('Test 1: Clicking Create VolunteerSignup button - it is redirected to the date page(create signup)', () => {

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
            cy.wait(4000);
            cy.url().should('include', 'https://test.eventzet.com/#/VolunteerSignup/Volunteersignup/EventzetSignup/EventzetSignupDate');

            //check whether user can go to slot tab without saving the date page 
            cs.clickSlotTab();
            cy.url().should('not.include', 'https://test.eventzet.com/#/VolunteerSignup/Volunteersignup/EventzetSignup/EventzetSignupSlot');

        }),


        it('Test 2: Check date page validation is working or not ', () => {
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

                //after deleting the slot then we can navigate to the time page by clicking time tab
                cs.clickTimeTab();
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


       // Settings page  tests

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
                cs.clickSignupEditButton();
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
