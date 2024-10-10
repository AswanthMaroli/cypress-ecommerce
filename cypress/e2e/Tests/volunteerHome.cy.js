import VolunteerHome from '../Pages/volunteerHomePages';
const { readDataFromFile } = require('../ExternalFiles/fileOperations.js');
const baseUrl = Cypress.config('baseUrl');
const v = new VolunteerHome();
const filename = 'cypress\\fixtures\\volunteerSignup.json'

var signupName = '';

module.exports = {

    VolunteerHomeTests: [


        it('Test 1: Clicking Volunteer Signup: It is redirected to the Volunteer Signup Home Page', () => {
            cy.visit(baseUrl);
            cy.wait(3000);
            cy.scrollTo(0, 0);
            v.clickVolunteerSignup();
            cy.url().should('include', 'https://test.eventzet.com/#/Eventshell/Volunteerhome');
        }),

        it('Test 2: Clicking Create VolunteerSignup button - if user is not logged in, go to login page', () => {
            cy.visit(baseUrl);
            cy.wait(4000);
            cy.scrollTo(0, 0);
            v.clickVolunteerSignup();
            cy.wait(1000);
            v.clickCreateVolunteerSignupButton();
            cy.wait(3000);
            cy.url().should('include', 'https://test.eventzet.com/#/Eventshell/Eventlogin');
        }),

        it('Test 3: Clicking Create VolunteerSignup button - if user is  logged in, go to date page(create signup)', () => {
            cy.visit(baseUrl);
            cy.wait(4000);
            cy.scrollTo(0, 0);
            readDataFromFile(filename).then((list) => {

                v.clickLogin(list.useremail, list.userpassword);

            })
            cy.wait(3000);
            v.clickVolunteerSignup();
            cy.wait(1000);
            v.clickCreateVolunteerSignupButton();
            cy.wait(2000);
            cy.url().should('include', 'https://test.eventzet.com/#/VolunteerSignup/Volunteersignup/EventzetSignup/EventzetSignupDate');
        }),



        it('Test 4: Verifying the functionality of the search feature', () => {
            cy.visit(baseUrl);
            cy.wait(3000);
            cy.scrollTo(0, 0);
            v.clickVolunteerSignup();
            readDataFromFile(filename).then((list) => {

                v.searchSignup(list.searchname);
                v.verifySearchResult(list.searchname);
                v.clearSearchBox();
            })

        }),

        it('Test 5: Verifying that after clicking signup then it is redirected to the signup details page', () => {
            cy.visit(baseUrl);
            cy.wait(2000);
            cy.scrollTo(0, 0);
            v.clickVolunteerSignup();
            readDataFromFile(filename).then((list) => {

                v.searchSignup(list.searchname);

            });
            cy.wait(2000);
            v.clickSignup();
            cy.wait(2000);
            cy.url().should('include', 'https://test.eventzet.com/#/Eventshell/Volunteersignupdetails');

        }),


        it('Test 6: Verifying that signup details page contain all the datas ', () => {
            cy.visit(baseUrl);
            cy.wait(2000);
            cy.scrollTo(0, 0);
            v.clickVolunteerSignup();
            readDataFromFile(filename).then((list) => {


                signupName = list.searchname;
                v.searchSignup(signupName);
                cy.wait(2000);
                v.clickSignup();
                cy.wait(5000);
                v.checkSignUPName(signupName);
                v.checkSignupImage();
                v.checkSignupCreatorName(list.signupcreator);
                v.checkSignupDescription();
                v.checkFirstSlot(
                    list.firstslot,
                    list.firstslotcount,
                    list.slotdate1,
                    list.signuplocation,
                    list.firstslottime);
                cy.wait(1000);
                v.checkSecondSlot(
                    list.secondslot,
                    list.secondslotcount,
                    list.slotdate2,
                    list.signuplocation2,
                    list.secondslottime);

                // cy.scrollTo('bottom');
            });
            v.clickSignupButton();
            cy.wait(1000);
            v.checkSignUpButton();


        })




    ]
};