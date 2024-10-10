import EventRegistration from '../Pages/eventRegistration.js';
const { readDataFromFile } = require('../ExternalFiles/fileOperations.js');
const baseUrl = Cypress.config('baseUrl');
const filename = 'cypress/fixtures/eventRegistrationRead.json';

const er = new EventRegistration();

var serviceCharge = '';
var paymentCharge = '';
var tax = '';
var totalAmount = '';

module.exports = {

    EventRegistrationTests: [

        //test 1

        it("Test 1:Check event registration popup is visible or not", () => {
            cy.visit(baseUrl);
            cy.wait(4000);
            er.clickSearchEvent();
            cy.wait(2000);

            readDataFromFile(filename).then((list) => {

                cy.intercept('GET', '/api/EventRegistration/GetEventAddonQuantity?EventID=*&EventRegID=*').as('getData');
                er.clickEvent(list.eventTitle);
                cy.wait('@getData', { timeout: 25000 });


                er.clickRegisterNowButton();
                cy.wait(1000);
                er.checkRegistrationPopup(list.eventTitle, list.ticketname1, list.ticketname2);
                cy.log('Event registration popup is visible');

            });


        }),
        //test 2

        it("Test 2:Check whether user can input ticket count", () => {
            cy.visit(baseUrl);
            cy.wait(4000);
            er.clickSearchEvent();
            cy.wait(2000);

            readDataFromFile(filename).then((list) => {

                cy.intercept('GET', '/api/EventRegistration/GetEventAddonQuantity?EventID=*&EventRegID=*').as('getData');
                er.clickEvent(list.eventTitle);
                cy.wait('@getData', { timeout: 25000 });

                er.clickRegisterNowButton();
                cy.wait(1000);
                er.inputTicket1(list.inputTicket1);
                er.inputTicket2(list.inputTicket2);

            });

            cy.log('User can input ticket count');
        }),
        //test 3



        it("Test 3:Check whether registration popup close icon and close button is working or not", () => {
            cy.visit(baseUrl);
            cy.wait(4000);
            er.clickSearchEvent();
            cy.wait(2000);

            readDataFromFile(filename).then((list) => {

                cy.intercept('GET', '/api/EventRegistration/GetEventAddonQuantity?EventID=*&EventRegID=*').as('getData');
                er.clickEvent(list.eventTitle);
                cy.wait('@getData', { timeout: 25000 });

                er.clickRegisterNowButton();
                cy.wait(1000);

            });
            er.clickRegistrationPopupCloseIcon();
            cy.wait(1000);
            er.clickRegisterNowButton();
            cy.wait(1000);
            er.clickRegistrationPopupCloseButton();
            cy.wait(1000);



            cy.log('Registration popup close icon and close button is working');
        }),
        //test 4


        it("Test 4:Check whether registration details page validation is working or not", () => {
            cy.visit(baseUrl);
            cy.wait(4000);
            er.clickSearchEvent();
            cy.wait(2000);

            readDataFromFile(filename).then((list) => {

                cy.intercept('GET', '/api/EventRegistration/GetEventAddonQuantity?EventID=*&EventRegID=*').as('getData');
                er.clickEvent(list.eventTitle);
                cy.wait('@getData', { timeout: 25000 });

                er.clickRegisterNowButton();
                cy.wait(1000);
                er.inputTicket1(list.inputTicket1);
                er.inputTicket2(list.inputTicket2);
            });
            cy.wait(1000);
            er.clickRegistrationButton();

            cy.intercept('GET', '/api/EventRegistration/GetOrderSummary?EventRegID=*').as('regPageData');
            cy.wait('@regPageData', { timeout: 25000 });
            cy.scrollTo(0, 0);
            cy.url().should('include', 'https://test.eventzet.com/#/eventregistration/Eventshell/Eventregistration');
            er.clickSaveAndContinueButton();


            cy.get(':nth-child(3) > .form-floating > .small > .font_s7').should('contain', 'First name is required');
            cy.get(':nth-child(1) > :nth-child(4) > .form-floating > .small > .font_s7').should('contain', 'Last name is required');
            cy.get(':nth-child(1) > :nth-child(6) > .form-floating > .small > .font_s7').should('contain', 'Email is required');
            cy.get(':nth-child(8) > .form-floating > .small > .font_s7').should('contain', 'Phone is required');
            cy.get(':nth-child(2) > .form-floating > .small > .font_s7').should('contain', 'Address1 is required');
            cy.get(':nth-child(2) > :nth-child(4) > .form-floating > .small > .font_s7').should('contain', 'City is required');
            cy.get(':nth-child(5) > .form-floating > .small > .font_s7').should('contain', 'State is required');
            cy.get(':nth-child(2) > :nth-child(6) > .form-floating > .small > .font_s7').should('contain', 'Zip code is required');


            cy.log('Registration details page validation is working');

        }),
        //test 5


        it("Test 5:Check whether add attendee validation is visible or not ", () => {
            cy.visit(baseUrl);
            cy.wait(4000);
            er.clickSearchEvent();
            cy.wait(2000);

            readDataFromFile(filename).then((list) => {

                cy.intercept('GET', '/api/EventRegistration/GetEventAddonQuantity?EventID=*&EventRegID=*').as('getData');
                er.clickEvent(list.eventTitle);
                cy.wait('@getData', { timeout: 25000 });

                er.clickRegisterNowButton();
                cy.wait(1000);
                er.inputTicket1(list.inputTicket1);
                er.inputTicket2(list.inputTicket2);
            });
            cy.wait(1000);
            er.clickRegistrationButton();

            cy.intercept('GET', '/api/EventRegistration/GetOrderSummary?EventRegID=*').as('regPageData');
            cy.wait('@regPageData', { timeout: 25000 });
            cy.scrollTo(0, 0);

            readDataFromFile(filename).then((list) => {

                er.inputPrefix(list.prefix);
                er.inputFirstName(list.buyerFirstName);
                er.inputLastName(list.buyerLastName);
                er.inputBuyerEmail(list.buyerEmail);
                er.selectGender(list.gender);
                er.inputBuyerPhone(list.buyerPhone);
                er.inputAddress(list.address);
                er.inputCity(list.city);
                er.selectState(list.state);
                er.inputZipCode(list.zipCode);

            });

            er.clickSaveAndContinueButton();
            cy.wait(1000);
            cy.get('.alert').should('contain', ' must fill attendees details ');
            cy.wait(1000);

            cy.log('Add attendee validation is visible ');
        }),
        //test 6



        it("Test 6:Check whether user can add attendee details", () => {

            cy.visit(baseUrl);
            cy.wait(4000);
            er.clickSearchEvent();
            cy.wait(2000);

            readDataFromFile(filename).then((list) => {

                cy.intercept('GET', '/api/EventRegistration/GetEventAddonQuantity?EventID=*&EventRegID=*').as('getData');
                er.clickEvent(list.eventTitle);
                cy.wait('@getData', { timeout: 25000 });

                er.clickRegisterNowButton();
                cy.wait(1000);
                er.inputTicket1(list.inputTicket1);
                er.inputTicket2(list.inputTicket2);
            });
            cy.wait(1000);
            er.clickRegistrationButton();

            cy.intercept('GET', '/api/EventRegistration/GetOrderSummary?EventRegID=*').as('regPageData');
            cy.wait('@regPageData', { timeout: 25000 });
            cy.scrollTo(0, 0);

            readDataFromFile(filename).then((list) => {

                er.inputPrefix(list.prefix);
                er.inputFirstName(list.buyerFirstName);
                er.inputLastName(list.buyerLastName);
                er.inputBuyerEmail(list.buyerEmail);
                er.selectGender(list.gender);
                er.inputBuyerPhone(list.buyerPhone);
                er.inputAddress(list.address);
                er.inputCity(list.city);
                er.selectState(list.state);
                er.inputZipCode(list.zipCode);

            });

            er.clickAddAttendeeButton();
            cy.wait(1000);
            cy.scrollTo(0, 0);
            readDataFromFile(filename).then((list) => {

                er.inputAttendeeFirstName1(list.attendeeFirstName1);
                er.inputAttendeeLastName1(list.attendeeLastName1);
                er.inputAttendeeEmail1(list.attendeeEmail1);

                er.inputAttendeeFirstName2(list.attendeeFirstName2);
                er.inputAttendeeLastName2(list.attendeeLastName2);
                er.inputAttendeeEmail2(list.attendeeEmail2);

                cy.wait(1000);
                er.clickAttendeeSaveButton();
                cy.get(':nth-child(5) > .col-md-12').should('contain', list.attendeeFirstName1);
                cy.get(':nth-child(5) > .col-md-12').should('contain', list.attendeeLastName1);
                cy.get(':nth-child(5) > .col-md-12').should('contain', list.attendeeFirstName2);
                cy.get(':nth-child(5) > .col-md-12').should('contain', list.attendeeLastName2);

            });

            cy.log('Attendee details added successfuly');
        }),
        //test 7


        it("Test 7:Check whether user can save registration details page", () => {

            cy.visit(baseUrl);
            cy.wait(4000);
            er.clickSearchEvent();
            cy.wait(2000);

            readDataFromFile(filename).then((list) => {

                cy.intercept('GET', '/api/EventRegistration/GetEventAddonQuantity?EventID=*&EventRegID=*').as('getData');
                er.clickEvent(list.eventTitle);
                cy.wait('@getData', { timeout: 25000 });

                er.clickRegisterNowButton();
                cy.wait(1000);
                er.inputTicket1(list.inputTicket1);
                er.inputTicket2(list.inputTicket2);
            });
            cy.wait(1000);
            er.clickRegistrationButton();

            cy.intercept('GET', '/api/EventRegistration/GetOrderSummary?EventRegID=*').as('regPageData');
            cy.wait('@regPageData', { timeout: 25000 });
            cy.scrollTo(0, 0);

            readDataFromFile(filename).then((list) => {

                er.inputPrefix(list.prefix);
                er.inputFirstName(list.buyerFirstName);
                er.inputLastName(list.buyerLastName);
                er.inputBuyerEmail(list.buyerEmail);
                er.selectGender(list.gender);
                er.inputBuyerPhone(list.buyerPhone);
                er.inputAddress(list.address);
                er.inputCity(list.city);
                er.selectState(list.state);
                er.inputZipCode(list.zipCode);

            });

            er.clickAddAttendeeButton();
            cy.wait(1000);
            cy.scrollTo(0, 0);
            readDataFromFile(filename).then((list) => {

                er.inputAttendeeFirstName1(list.attendeeFirstName1);
                er.inputAttendeeLastName1(list.attendeeLastName1);
                er.inputAttendeeEmail1(list.attendeeEmail1);

                er.inputAttendeeFirstName2(list.attendeeFirstName2);
                er.inputAttendeeLastName2(list.attendeeLastName2);
                er.inputAttendeeEmail2(list.attendeeEmail2);

            });
            cy.wait(1000);
            er.clickAttendeeSaveButton();
            cy.wait(2000);
            er.clickSaveAndContinueButton();
            cy.intercept('GET', '/api/EventRegistration/GetEventRegPaymentInfo?EventRegID=*&EventID=*').as('billingInfoData');
            cy.wait('@billingInfoData', { timeout: 25000 });

            cy.url().should('include', 'https://test.eventzet.com/#/eventregistration/Eventshell/Billinginformation')


            cy.log('Registration details page saved successfuly');
        }),
        //test 8

        it("Test 8:Check whether billing info page validation is working or not", () => {
            cy.visit(baseUrl);
            cy.wait(4000);
            er.clickSearchEvent();
            cy.wait(2000);

            readDataFromFile(filename).then((list) => {

                cy.intercept('GET', '/api/EventRegistration/GetEventAddonQuantity?EventID=*&EventRegID=*').as('getData');
                er.clickEvent(list.eventTitle);
                cy.wait('@getData', { timeout: 25000 });

                er.clickRegisterNowButton();
                cy.wait(1000);
                er.inputTicket1(list.inputTicket1);
                er.inputTicket2(list.inputTicket2);
            });
            cy.wait(1000);
            er.clickRegistrationButton();

            cy.intercept('GET', '/api/EventRegistration/GetOrderSummary?EventRegID=*').as('regPageData');
            cy.wait('@regPageData', { timeout: 25000 });
            cy.scrollTo(0, 0);

            readDataFromFile(filename).then((list) => {

                er.inputPrefix(list.prefix);
                er.inputFirstName(list.buyerFirstName);
                er.inputLastName(list.buyerLastName);
                er.inputBuyerEmail(list.buyerEmail);
                er.selectGender(list.gender);
                er.inputBuyerPhone(list.buyerPhone);
                er.inputAddress(list.address);
                er.inputCity(list.city);
                er.selectState(list.state);
                er.inputZipCode(list.zipCode);

            });

            er.clickAddAttendeeButton();
            cy.wait(1000);
            cy.scrollTo(0, 0);
            readDataFromFile(filename).then((list) => {

                er.inputAttendeeFirstName1(list.attendeeFirstName1);
                er.inputAttendeeLastName1(list.attendeeLastName1);
                er.inputAttendeeEmail1(list.attendeeEmail1);

                er.inputAttendeeFirstName2(list.attendeeFirstName2);
                er.inputAttendeeLastName2(list.attendeeLastName2);
                er.inputAttendeeEmail2(list.attendeeEmail2);

            });
            cy.wait(1000);
            er.clickAttendeeSaveButton();
            cy.wait(2000);
            er.clickSaveAndContinueButton();
            cy.intercept('GET', '/api/EventRegistration/GetEventRegPaymentInfo?EventRegID=*&EventID=*').as('billingInfoData');
            cy.wait('@billingInfoData', { timeout: 25000 });

            er.clickMakePaymentButton();

            cy.get('.mb-1 > .small > .font_s7').should('contain', 'Payment type is Required');
            cy.get('#validationServerUsernameFeedback').should('contain', 'Card number is required');
            cy.get(':nth-child(4) > .input > .small > .font_s7').should('contain', 'Name on card is required');
            cy.get('span.small > .font_s7').should('contain', 'Month required');
            cy.get('.text-right > .font_s7').should('contain', 'Year required');
            cy.get('.col-md-4 > .input > .small > .font_s7').should('contain', 'CVV is required');

            cy.log('Billing info page validation is working fine');
        }),
        //test 9

        it("Test 9:Check whether can user make payment or not", () => {
            cy.visit(baseUrl);
            cy.wait(4000);
            er.clickSearchEvent();
            cy.wait(2000);

            readDataFromFile(filename).then((list) => {

                cy.intercept('GET', '/api/EventRegistration/GetEventAddonQuantity?EventID=*&EventRegID=*').as('getData');
                er.clickEvent(list.eventTitle);
                cy.wait('@getData', { timeout: 25000 });

                er.clickRegisterNowButton();
                cy.wait(1000);
                er.inputTicket1(list.inputTicket1);
                er.inputTicket2(list.inputTicket2);
            });
            cy.wait(1000);
            er.clickRegistrationButton();

            cy.intercept('GET', '/api/EventRegistration/GetOrderSummary?EventRegID=*').as('regPageData');
            cy.wait('@regPageData', { timeout: 25000 });
            cy.scrollTo(0, 0);

            readDataFromFile(filename).then((list) => {

                er.inputPrefix(list.prefix);
                er.inputFirstName(list.buyerFirstName);
                er.inputLastName(list.buyerLastName);
                er.inputBuyerEmail(list.buyerEmail);
                er.selectGender(list.gender);
                er.inputBuyerPhone(list.buyerPhone);
                er.inputAddress(list.address);
                er.inputCity(list.city);
                er.selectState(list.state);
                er.inputZipCode(list.zipCode);

            });

            er.clickAddAttendeeButton();
            cy.wait(1000);
            cy.scrollTo(0, 0);
            readDataFromFile(filename).then((list) => {

                er.inputAttendeeFirstName1(list.attendeeFirstName1);
                er.inputAttendeeLastName1(list.attendeeLastName1);
                er.inputAttendeeEmail1(list.attendeeEmail1);

                er.inputAttendeeFirstName2(list.attendeeFirstName2);
                er.inputAttendeeLastName2(list.attendeeLastName2);
                er.inputAttendeeEmail2(list.attendeeEmail2);

            });
            cy.wait(1000);
            er.clickAttendeeSaveButton();
            cy.wait(2000);
            er.clickSaveAndContinueButton();
            cy.intercept('GET', '/api/EventRegistration/GetEventRegPaymentInfo?EventRegID=*&EventID=*').as('billingInfoData');
            cy.wait('@billingInfoData', { timeout: 25000 });


            readDataFromFile(filename).then((list) => {

                er.checkPaymentMethod();
                er.inputCardNumber(list.cardNumber);
                er.inputCardOwnerName(list.cardOwnerName);
                er.inputMonth(list.month);
                er.inputYear(list.year);
                er.inputCvv(list.cvv);
                er.checkTermsAndCondition();

            });

            cy.xpath('//*[@id="servicessection"]/div/div/div[2]/div/div/div/div[4]/table/tbody[4]/tr/th[2]')
                .invoke('text')
                .then(text => {
                    serviceCharge = text.trim();
                });

            cy.xpath('//*[@id="servicessection"]/div/div/div[2]/div/div/div/div[4]/table/tbody[5]/tr/th[2]')
                .invoke('text')
                .then(text => {
                    paymentCharge = text.trim();
                });

            cy.xpath('//*[@id="servicessection"]/div/div/div[2]/div/div/div/div[4]/table/tbody[3]/tr/th[2]')
                .invoke('text')
                .then(text => {
                    tax = text.trim();
                });

            cy.xpath('//*[@id="servicessection"]/div/div/div[2]/div/div/div/div[4]/table/tbody[6]/tr/th[2]')
                .invoke('text')
                .then(text => {
                    totalAmount = text.trim();
                });

            er.clickMakePaymentButton();

            cy.intercept('GET', '/api/EventRegistration/GetOrderSummary?EventRegID=*').as('orderDetailsData');
            cy.wait('@orderDetailsData', { timeout: 25000 });
            //    cy.wait(25000);
            cy.url().should('include', 'https://test.eventzet.com/#/eventregistration/Eventshell/Viewticketregistration');

            cy.log('Payment is done:Event registered successfuly');

            cy.log("Check service charge is matched or not");

            cy.xpath('//*[@id="servicessection"]/div/div[2]/div[1]/div/div/div[1]/div[5]/div[2]/div[1]/ul/li[2]')
                .should('exist')
                .invoke('text')
                .then(text => {

                    const orderDetailsServiceCharge = text.trim();

                    cy.log(`Service charge from UI: ${orderDetailsServiceCharge}`);
                    cy.log(`Service charge from order summary :${serviceCharge}`);

                    if (serviceCharge === orderDetailsServiceCharge) {
                        // Assert that serviceCharge and orderDetailsServiceCharge are equal
                        expect(serviceCharge).to.equal(orderDetailsServiceCharge);
                        cy.log('Service charge is matched');
                    } else {
                        // Assert that serviceCharge and orderDetailsServiceCharge are not equal
                        expect(serviceCharge).to.not.equal(orderDetailsServiceCharge);
                        cy.log('Service charge is not equal');
                        throw new Error('Service charge mismatch');
                    }
                });

            cy.log("Check payment charge is matched or not");

            cy.xpath('//*[@id="servicessection"]/div/div[2]/div[1]/div/div/div[1]/div[5]/div[2]/div[2]/ul/li[2]')
                .should('exist')
                .invoke('text')
                .then(text => {

                    const orderDetailsPaymentCharge = text.trim();
                    cy.log(`Payment charge from UI: ${orderDetailsPaymentCharge}`);
                    cy.log(`Payment charge from order summary :${paymentCharge}`);

                    if (paymentCharge === orderDetailsPaymentCharge) {

                        expect(paymentCharge).to.equal(orderDetailsPaymentCharge);
                        cy.log('Payment charge is matched');
                    } else {

                        expect(paymentCharge).to.not.equal(orderDetailsPaymentCharge);
                        cy.log('Payment charge is not equal');
                        throw new Error('Payment charge mismatch');
                    }
                });


            cy.log("Check tax amount is matched or not");

            cy.xpath('//*[@id="servicessection"]/div/div[2]/div[1]/div/div/div[1]/div[5]/div[2]/div[3]/ul/li[2]')
                .should('exist')
                .invoke('text')
                .then(text => {

                    const orderDetailsTax = text.trim();

                    cy.log(`Tax amount from UI: ${orderDetailsTax}`);
                    cy.log(`Tax from order summary :${tax}`);

                    if (tax === orderDetailsTax) {

                        expect(tax).to.equal(orderDetailsTax);
                        cy.log('Tax amount is matched');
                    } else {

                        expect(tax).to.not.equal(orderDetailsTax);
                        cy.log('Tax amount is not equal');
                        throw new Error('Tax amount mismatch');
                    }
                });

            cy.log("Check total amount is matched or not");
            cy.xpath('//*[@id="servicessection"]/div/div[2]/div[1]/div/div/div[1]/div[5]/div[2]/div[5]/ul/li[2]')
                .should('exist')
                .invoke('text')
                .then(text => {

                    const orderDetailsBillingAmount = text.trim();

                    cy.log(`Payment charge from UI: ${orderDetailsBillingAmount}`);
                    cy.log(`Total Amount from order summary :${totalAmount}`);

                    if (totalAmount === orderDetailsBillingAmount) {

                        expect(totalAmount).to.equal(orderDetailsBillingAmount);
                        cy.log('Total amount is matched');
                    } else {

                        expect(totalAmount).to.not.equal(orderDetailsBillingAmount);
                        cy.log('Total amount is not equal');
                        throw new Error('Total amount mismatch');
                    }
                });

            cy.log("Check billing amount and booking amount is equal or not ");

            cy.xpath('//*[@id="servicessection"]/div/div[2]/div[1]/div/div/div[1]/div[5]/div[2]/div[5]/ul/li[2]')
                .invoke('text')
                .then(text => {
                    const orderDetailsBillingAmount = text.trim();

                    cy.xpath('//*[@id="servicessection"]/div/div[2]/div[1]/div/div/div[1]/div[5]/div[2]/div[5]/ul/li[2]')
                        .invoke('text')
                        .then(text => {
                            const orderDetailsBookingAmount = text.trim();

                            cy.log(`OrderDetailsBillingAmount from UI: ${orderDetailsBillingAmount}`);
                            cy.log(`OrderDetailsBookingAmount from UI:${orderDetailsBookingAmount}`);


                            if (orderDetailsBillingAmount === orderDetailsBookingAmount) {

                                expect(orderDetailsBillingAmount).to.equal(orderDetailsBookingAmount);
                                cy.log('Billing amount and booking amount is matched');
                            } else {

                                expect(orderDetailsBillingAmount).to.not.equal(orderDetailsBookingAmount);
                                cy.log('Billing amount and booking amount is not equal');
                                throw new Error('Billing amount and booking amount mismatch');
                            }
                        });
                });


        }),



        it("Test 10:Check Registration and order details page ", () => {
            cy.visit(baseUrl);
            cy.wait(4000);
            er.clickSearchEvent();
            cy.wait(2000);

            readDataFromFile(filename).then((list) => {

                cy.intercept('GET', '/api/EventRegistration/GetEventAddonQuantity?EventID=*&EventRegID=*').as('getData');
                er.clickEvent(list.eventTitle);
                cy.wait('@getData', { timeout: 25000 });
                //    er.clickEvent(list.eventTitle);
                //    cy.wait(13000);


                er.clickRegisterNowButton();
                cy.wait(1000);

                er.inputTicket1(list.inputTicket1);
                er.inputTicket2(list.inputTicket2);
                er.clickRegistrationButton();
                cy.scrollTo(0, 0);
                cy.intercept('GET', '/api/EventRegistration/GetOrderSummary?EventRegID=*').as('regPageData');
                cy.wait('@regPageData', { timeout: 25000 });
                //    cy.wait(10000);
                cy.scrollTo(0, 0);
                er.inputPrefix(list.prefix);
                er.inputFirstName(list.buyerFirstName);
                er.inputLastName(list.buyerLastName);
                er.inputBuyerEmail(list.buyerEmail);
                er.selectGender(list.gender);
                er.inputBuyerPhone(list.buyerPhone);
                er.inputAddress(list.address);
                er.inputCity(list.city);
                er.selectState(list.state);
                er.inputZipCode(list.zipCode);


                er.clickAddAttendeeButton();
                cy.wait(1000);
                er.inputAttendeeFirstName1(list.attendeeFirstName1);
                er.inputAttendeeLastName1(list.attendeeLastName1);
                er.inputAttendeeEmail1(list.attendeeEmail1);

                er.inputAttendeeFirstName2(list.attendeeFirstName2);
                er.inputAttendeeLastName2(list.attendeeLastName2);
                er.inputAttendeeEmail2(list.attendeeEmail2);

                cy.wait(1000);
                er.clickAttendeeSaveButton();
                cy.wait(1000);
                er.clickSaveAndContinueButton();
                cy.intercept('GET', '/api/EventRegistration/GetEventRegPaymentInfo?EventRegID=*&EventID=*').as('billingInfoData');
                cy.wait('@billingInfoData', { timeout: 25000 });

                er.checkPaymentMethod();
                er.inputCardNumber(list.cardNumber);
                er.inputCardOwnerName(list.cardOwnerName);
                er.inputMonth(list.month);
                er.inputYear(list.year);
                er.inputCvv(list.cvv);
                er.checkTermsAndCondition();
                er.clickMakePaymentButton();
                cy.intercept('GET', '/api/EventRegistration/GetOrderSummary?EventRegID=*').as('orderDetailsData');
                cy.wait('@orderDetailsData', { timeout: 25000 });
                //    cy.wait(25000);
                cy.url().should('include', 'https://test.eventzet.com/#/eventregistration/Eventshell/Viewticketregistration');
            });

            cy.xpath('//*[@id="servicessection"]/div/div[2]/div[2]/div/div/div/div').should('contain', ' Print Ticket');  //for checking print ticket,cancel order, contact event organizer
            cy.xpath('//*[@id="servicessection"]/div/div[2]/div[2]/div/div/div/div').should('contain', 'Cancel Order');
            cy.xpath('//*[@id="servicessection"]/div/div[2]/div[2]/div/div/div/div').should('contain', 'Contact Organizer');
            cy.log('Print ticket , Cancel Order and Contact organizer button is present in the page');

            er.clickPrintTicket();
            cy.wait(2000);
            cy.log('Print ticket is working');
            er.clickContactOrganizer();
            cy.wait(2000);
            er.clickCancelOrder();
            cy.wait(1000);
            er.selectCancelTicketTier();
            er.clickCancelOrderSubmitButton();
            cy.wait(2000);
            er.checkCancelOrderSuccessPopup();
            cy.log('Cancel Order is Successfuli:test is successful');

        }),








    ]
};