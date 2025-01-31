import CreateEventBasicInfo from '../../e2e/Pages/createEventBasicInfoPages.js';
const { readDataFromFile, writeDataToFile, clearDataInFile } = require('../ExternalFiles/fileOperations.js');
const baseUrl = Cypress.config('baseUrl');
var dateCalculations = require('../ExternalFiles/dateCalculations.js');
const filename = 'cypress/fixtures/createEventBasicInfoRead.json';
const bi = new CreateEventBasicInfo();
const moment = require('moment');  // Import moment.js

function formatDate(dateStr) {
    return moment(dateStr).format('M/D/YY');  // Format date to MM/DD/YY
}

const startDate = dateCalculations.calculateSevenDaysLater();
const endDate = dateCalculations.calculateSevenDaysLater();


function performLogin(email, password) {
    cy.visit(baseUrl);
    cy.wait(4000);
    bi.clickLoginMenu();
    bi.inputEmail(email);
    bi.inputPassword(password);
    bi.loginClick();
  }


  

module.exports = {

    CreateEventBasicInfoTests: [

        //test 1


        it("Test1:Running Check validation is working or not ", () => {
     
            readDataFromFile(filename).then((list) => {

                performLogin(list.email,list.password);
            });

            bi.clickCreateEventMenu();
            bi.clickSaveButton();
            cy.wait(2000);
            bi.checkTitleValidation();
            bi.checkStartDateValidation();
            bi.checkEndDateValidation();
            bi.checkOrganizerEmailValidation();
            cy.url().should('include', 'https://test.eventzet.com/#/events/Dashboard/EventzetEventsCreate/EventzetEventbasics');
            cy.log('Test 1 is successful:Validation message is visible');
        }),
        // test 2


        it("Test 2:Running Save the page without inputting the event name ", () => {
            cy.visit(baseUrl);
            cy.wait(3000);
            bi.clickLoginMenu();
            cy.wait(1000);
            readDataFromFile(filename).then((list) => {
    
                performLogin(list.email,list.password);
            
            });

            bi.clickCreateEventMenu();

            bi.selectType('2: 2');
            bi.selectCategory('20: 41');
            readDataFromFile(filename).then((list) => {

                bi.inputTags(list.eventtag);
                cy.wait(2000);
                // const formattedStartDate = `${startDate.slice(4, 8)}-${startDate.slice(0, 2)}-${startDate.slice(2, 4)}`;
                // const formattedEndDate = `${endDate.slice(4, 8)}-${endDate.slice(0, 2)}-${endDate.slice(2, 4)}`;
                bi.selectEventStartDate(startDate);
                bi.selectEventEndDate(endDate);
                bi.inputOrganizerEmail(list.organizeremail);
                bi.inputOrganizerPhone(list.organizerphone);

            });

            bi.clickSaveButton();
            cy.wait(1000);
            bi.checkTitleValidation();

            cy.log('Test 2 is successful:Unable to save the basic info page without inputting eventname');

        }),
    
        // test 3


        it("Test 3:Running Save the page without inputting the event startdate and enddate ", () => {
       
            readDataFromFile(filename).then((list) => {

                performLogin(list.email,list.password);

                bi.clickCreateEventMenu();
                bi.selectType('2: 2');
                bi.selectCategory('20: 41');
                bi.inputEventTitle(list.eventtitle);
                bi.inputTags(list.eventtag);
                bi.inputOrganizerEmail(list.organizeremail);
                bi.inputOrganizerPhone(list.organizerphone);

            });

            bi.clickSaveButton();
            cy.wait(1000);
            bi.checkStartDateValidation();
            bi.checkEndDateValidation();
            cy.wait(2000);
            cy.log('Test 3 is successful:Unable to save the basic info page without inputting event startdate and enddate');

        }),
        //test 4



        it("Test 4:Running Save the page without inputting the organizer email", () => {
         
            readDataFromFile(filename).then((list) => {

                performLogin(list.email,list.password);
                bi.clickCreateEventMenu();

                bi.selectType('2: 2');
                bi.selectCategory('20: 41');
                
                bi.inputEventTitle(list.eventtitle);
                bi.inputTags(list.eventtag);
                // const formattedStartDate = `${startDate.slice(4, 8)}-${startDate.slice(0, 2)}-${startDate.slice(2, 4)}`;
                // const formattedEndDate = `${endDate.slice(4, 8)}-${endDate.slice(0, 2)}-${endDate.slice(2, 4)}`;
                bi.selectEventStartDate(startDate);
                bi.selectEventEndDate(endDate); 
                bi.inputOrganizerPhone(list.organizerphone);

            });

            bi.clickSaveButton();
            cy.wait(1000);
            bi.checkOrganizerEmailValidation();
            cy.wait(2000);
            cy.log('Test 4 is successful:Unable to save the basic info page without inputting organizer email');


        }),
        //test 5



        it("Test 5:Running Input invalid email in organizer email field", () => {
     
            readDataFromFile(filename).then((list) => {
          
                performLogin(list.email,list.password);
                bi.clickCreateEventMenu();

                bi.selectType('2: 2');
                bi.selectCategory('20: 41');
                
                bi.inputEventTitle(list.eventtitle);
                bi.inputTags(list.eventtag);
                cy.wait(2000);
                // const formattedStartDate = `${startDate.slice(4, 8)}-${startDate.slice(0, 2)}-${startDate.slice(2, 4)}`;
                // const formattedEndDate = `${endDate.slice(4, 8)}-${endDate.slice(0, 2)}-${endDate.slice(2, 4)}`;
                bi.selectEventStartDate(startDate);
                bi.selectEventEndDate(endDate);
                bi.inputOrganizerEmail('alex');
                bi.inputOrganizerPhone(list.organizerphone);

            });
            bi.clickSaveButton();
            cy.wait(3000);
            cy.xpath('//div[@class="font_s7"]').should('contain', 'Please provide a valid email');
            cy.url().should('not.include', 'https://test.eventzet.com/#/events/Dashboard/Addeventdetails');

            cy.log('Test 5 is successful:Unable save basic info page if we give invalid email in the organizer email field');

        }),
        // test 6


        it("Test 6:Running Select Organization", () => {
    
            readDataFromFile(filename).then((list) => {
              
                performLogin(list.email,list.password);

            });

            bi.clickCreateEventMenu();
            cy.xpath('//input[@id="OrganizerTypeID1"]').click({ force: true });
            cy.xpath('//input[@id="OrganizerTypeID1"]').should('be.checked');
            cy.xpath('//span[contains(text(),"View Organizer Info")]').click({ force: true });
            cy.wait(2000);
            cy.url().should('include', 'https://test.eventzet.com/#/events/Dashboard/Organizationsettings');
            cy.go(-1);
            cy.wait(2000);

            cy.log('Select Organization test is successful');

        }),
        // //test 7


        it("Test 7:Running Save the page with valid data", () => {
          
            readDataFromFile(filename).then((list) => {

                performLogin(list.email,list.password);
                bi.clickCreateEventMenu();

                bi.selectType('2: 2');
                bi.selectCategory('20: 41');
                bi.inputEventTitle(list.eventtitle);
                bi.inputTags(list.eventtag);
                bi.selectEventStartDate(startDate);
                bi.selectEventEndDate(endDate);
                bi.inputOrganizerEmail(list.email);
                bi.inputOrganizerPhone(list.organizerphone);
                const formattedStartDate = formatDate(startDate);
                const formattedEndDate = formatDate(endDate);
                const timeslotDate = `${formattedStartDate} - ${formattedEndDate}`;
                
                readDataFromFile(filename).then(existingData => {
                  
                    existingData.timeslotdate =timeslotDate;
                    writeDataToFile(filename, existingData);
                });
            });
            cy.wait(3000);
            bi.clickSaveButton();
            cy.wait(3000);
            cy.url().should('include', 'https://test.eventzet.com/#/events/Dashboard/EventzetEventsCreate/EventVenues');

            cy.log('Test 7:Save basicinfo page test is successful');

            bi.clickBasicTab(); //go back to basic page and check saved datas 
            cy.wait(2000);
            cy.url().should('include', 'https://test.eventzet.com/#/events/Dashboard/EventzetEventsCreate/EventzetEventbasics');

                
        }),


    ]
};