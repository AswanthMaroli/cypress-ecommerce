import SignupRegistration from '../Pages/signupRegistrationPage.js';
const { readDataFromFile } = require('../ExternalFiles/fileOperations.js');
const filename = 'cypress/fixtures/volunteerSignup.json';
const baseUrl = Cypress.config('baseUrl');

const sr = new SignupRegistration();

module.exports = {
    SignupRegistrationTests: [

        it('Test 1: Check whether all the details are present in the signup registration details page', () => {
            cy.visit(baseUrl);
            cy.wait(4000);
            cy.scrollTo(0, 0);
            cy.viewport(1400, 860);
            
            readDataFromFile(filename).then((list) => {
                sr.clickLogin(list.useremail, list.userpassword);
                sr.clickVolunteerSignup();
                cy.wait(4000);

                sr.searchSignupName(list.signuptitle);
                sr.clickSignup();
                cy.wait(2000);
                
                // Check signup details
                sr.checkSignupCreatorName(list.signupcreator);
                sr.checkSignUPName(list.signuptitle);
                sr.checkSignupDescription(list.signupdescription);
                sr.checkFirstSlot(
                    list.firstslot,
                    list.firstslotcount,
                    list.slotdate1,
                    list.signuplocation,
                    list.firstslottime
                );
                cy.wait(1000);
                sr.checkSecondSlot(
                    list.secondslot,
                    list.secondslotcount,
                    list.slotdate2,
                    list.signuplocation2,
                    list.secondslottime
                );
            });
        }),

        it('Test 2: Check whether user can register first slot', () => {
            cy.visit(baseUrl);
            cy.wait(4000);
            cy.scrollTo(0, 0);
            cy.viewport(1400, 860);
            
            readDataFromFile(filename).then((list) => {
                sr.clickLogin(list.useremail, list.userpassword);
                sr.clickVolunteerSignup();
                cy.wait(4000);

                sr.searchSignupName(list.signuptitle);
                sr.clickSignup();
                cy.wait(4000);

                // Register for the first slot
                sr.clickFirstSignupButton();
                sr.clickRegDetailsSave();
                cy.wait(6000);
                
                // Check slot details and input user information
                sr.checkFirstSlotDetails(
                    list.slotname1,
                    list.firstslottime,
                    list.regslotdate1,
                    ' ' + list.signuplocation + ' '
                );

                sr.inputQuantity1(list.quantity1);
                sr.inputComment1(list.comment1);
                sr.inputFirstName(list.firstname);
                sr.inputLastName(list.lastname);
                sr.inputEmail(list.email);
                sr.selectGender(list.gender);
                sr.inputAddress(list.address);
                sr.inputCity(list.city);
                sr.selectState(list.state);
                sr.inputPostalCode(list.postalcode);
                sr.clickSignUpNowButton();

                cy.wait(5000);
                cy.url().should('include', 'https://test.eventzet.com/#/Eventshell/VolunteerRegistrationConfirm');
                
                // Check registration confirmation
                sr.checkRegConfirmBuyerName(list.signupcreator);
                sr.checkRegConfirmSignupTitle(list.signuptitle);
                sr.checkRegistrationConfirm(
                    list.firstslot,
                    list.regcount1,
                    list.datetime1,
                    list.reglocation1,
                    list.secondslot,
                    list.regcount2,
                    list.datetime2,
                    list.reglocation2
                );
            });
        }),

        it('Test 3: Check whether user can register both slots', () => {
            cy.visit(baseUrl);
            cy.wait(4000);
            cy.scrollTo(0, 0);
            cy.viewport(1400, 860);
            
            readDataFromFile(filename).then((list) => {
                sr.clickLogin(list.useremail, list.userpassword);
                sr.clickVolunteerSignup();
                cy.wait(4000);

                sr.searchSignupName(list.signuptitle);
                sr.clickSignup();
                cy.wait(4000);

                // Register for both slots
                sr.clickFirstSignupButton();
                sr.clickSecondSignupButton();
                sr.clickRegDetailsSave();
                cy.wait(8000);
                
                // Check slot details 
                sr.checkFirstSlotDetails(
                    list.slotname1,
                    list.firstslottime,
                    list.regslotdate1,
                    ' ' + list.signuplocation + ' '
                );

                sr.checkSecondSlotDetails(
                    list.slotname2,
                    list.secondslottime,
                    list.regslotdate2,
                    ' ' + list.signuplocation2 + ' '
                );

                sr.inputQuantity1(list.quantity1);
                sr.inputComment1(list.comment1);
                sr.inputQuantity2(list.quantity2);
                sr.inputComment2(list.comment2);
                sr.inputFirstName(list.firstname);
                sr.inputLastName(list.lastname);
                sr.inputEmail(list.email);
                sr.selectGender(list.gender);
                sr.inputAddress(list.address);
                sr.inputCity(list.city);
                sr.selectState(list.state);
                sr.inputPostalCode(list.postalcode);
                sr.clickSignUpNowButton();

                cy.wait(5000);
                cy.url().should('include', 'https://test.eventzet.com/#/Eventshell/VolunteerRegistrationConfirm');
                
                // Check registration confirmation page
                sr.checkRegistrationConfirm(
                    list.slotname1,
                    list.regcount1,
                    list.datetime1,
                    list.reglocation1,
                    list.slotname2,
                    list.regcount2,
                    list.datetime2,
                    list.reglocation2
                );
            });
        }),
    ]
}
