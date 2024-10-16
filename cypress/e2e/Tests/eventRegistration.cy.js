import EventRegistration from '../Pages/eventRegistration.js';
const { readDataFromFile } = require('../ExternalFiles/fileOperations.js');
const baseUrl = Cypress.config('baseUrl');
const filename = 'cypress/fixtures/eventRegistrationRead.json';

const eventRegistration = new EventRegistration();

var subTotal = '';
var tax = '';
var totalAmount = '';
var serviceCharge = '';
var paymentCharge = '';

function performLogin(email, password) {
    cy.visit(baseUrl);
    cy.wait(4000);
    eventRegistration.clickLoginMenu();
    eventRegistration.inputEmail(email);
    eventRegistration.inputPassword(password);
    eventRegistration.loginClick();
}



module.exports = {

    EventRegistrationTests: [



        it("Test 1:Check whether registration details page validation is working or not", () => {


            readDataFromFile(filename).then((list) => {

                performLogin(list.email, list.password);

                eventRegistration.clickEvent(list.eventtitle);
                cy.intercept('GET', '/api/EventDetails/GetEventVideoURL?EventID=*').as('eventDetails');
                cy.wait('@eventDetails', { timeout: 25000 });
                cy.url().should('include', 'https://test.eventzet.com/#/eventregistration/Eventshell/Eventdetails');
                eventRegistration.clickGetTicketsButton();
                eventRegistration.selectVenue();
                eventRegistration.selectTimeSlot();
                eventRegistration.selectFreeTicket(list.ticketquantity);
                cy.wait(1000);
                eventRegistration.clickContinueButton();
                cy.intercept('GET', '/api/EventRegistration/GetEventRegistrationData?EventRegID=*').as('contactInformationPage');
                cy.wait('@contactInformationPage', { timeout: 25000 });
                eventRegistration.clickSaveAndContinueButton();

            });

            cy.get(':nth-child(3) > .form-floating > .small > .font_s7').should('contain', 'First name is required');
            cy.get(':nth-child(1) > :nth-child(4) > .form-floating > .small > .font_s7').should('contain', 'Last name is required');
            cy.get(':nth-child(1) > :nth-child(6) > .form-floating > .small > .font_s7').should('contain', 'Email is required');
            cy.get(':nth-child(8) > .form-floating > .small > .font_s7').should('contain', 'Phone is required');
            cy.get(':nth-child(2) > .form-floating > .small > .font_s7').should('contain', 'Address1 is required');
            cy.get(':nth-child(2) > :nth-child(4) > .form-floating > .small > .font_s7').should('contain', 'City is required');
            cy.get(':nth-child(5) > .form-floating > .small > .font_s7').should('contain', 'State is required');
            cy.get(':nth-child(2) > :nth-child(6) > .form-floating > .small > .font_s7').should('contain', 'Zip code is required');
            cy.get('.invalid-feedback > .font_s7').should('contain', 'Answer is Required');

            cy.log('Registration details page validation is working');

        }),


        it("Test 2:Check whether add attendee validation is visible or not ", () => {
            readDataFromFile(filename).then((list) => {

                performLogin(list.email, list.password);

                eventRegistration.clickEvent(list.eventtitle);
                cy.intercept('GET', '/api/EventDetails/GetEventVideoURL?EventID=*').as('eventDetails');
                cy.wait('@eventDetails', { timeout: 25000 });
                cy.url().should('include', 'https://test.eventzet.com/#/eventregistration/Eventshell/Eventdetails');
                eventRegistration.clickGetTicketsButton();
                eventRegistration.selectVenue();
                eventRegistration.selectTimeSlot();
                eventRegistration.selectFreeTicket(list.ticketquantity);
                cy.wait(1000);
                eventRegistration.clickContinueButton();
                cy.intercept('GET', '/api/EventRegistration/GetEventRegistrationData?EventRegID=*').as('contactInformationPage');
                cy.wait('@contactInformationPage', { timeout: 25000 });
                eventRegistration.inputPrefix(list.prefix);
                eventRegistration.inputFirstName(list.buyerFirstName);
                eventRegistration.inputLastName(list.buyerLastName);
                eventRegistration.inputBuyerEmail(list.buyerEmail);
                eventRegistration.selectGender(list.gender);
                eventRegistration.inputBuyerPhone(list.buyerPhone);
                eventRegistration.inputAddress(list.address);
                eventRegistration.inputCity(list.city);
                eventRegistration.selectState(list.state);
                eventRegistration.inputZipCode(list.zipCode);
                eventRegistration.inputAnswer(list.answer);

            });

            eventRegistration.clickSaveAndContinueButton();
            cy.wait(1000);
            cy.get('.alert').should('contain', ' must fill attendees details ');
            cy.wait(1000);
            cy.log('Add attendee validation is visible ');
        }),



        it("Test 3:Check whether user can save registration details page", () => {



            readDataFromFile(filename).then((list) => {

                performLogin(list.email, list.password);

                eventRegistration.clickEvent(list.eventtitle);
                cy.intercept('GET', '/api/EventDetails/GetEventVideoURL?EventID=*').as('eventDetails');
                cy.wait('@eventDetails', { timeout: 25000 });
                cy.url().should('include', 'https://test.eventzet.com/#/eventregistration/Eventshell/Eventdetails');
                eventRegistration.clickGetTicketsButton();
                eventRegistration.selectVenue();
                eventRegistration.selectTimeSlot();
                eventRegistration.selectFreeTicket(list.ticketquantity);
                eventRegistration.selectFreeTicketAddon(list.addonquantity);
                eventRegistration.selectPaidTicket(list.ticketquantity);
                eventRegistration.selectPaidTicketAddon(list.addonquantity);
                cy.wait(1000);
                eventRegistration.clickContinueButton();
                cy.intercept('GET', '/api/EventRegistration/GetEventRegistrationData?EventRegID=*').as('contactInformationPage');
                cy.wait('@contactInformationPage', { timeout: 25000 });
                eventRegistration.inputPrefix(list.prefix);
                eventRegistration.inputFirstName(list.buyerFirstName);
                eventRegistration.inputLastName(list.buyerLastName);
                eventRegistration.inputBuyerEmail(list.buyerEmail);
                eventRegistration.selectGender(list.gender);
                eventRegistration.inputBuyerPhone(list.buyerPhone);
                eventRegistration.inputAddress(list.address);
                eventRegistration.inputCity(list.city);
                eventRegistration.selectState(list.state);
                eventRegistration.inputZipCode(list.zipCode);
                eventRegistration.inputAnswer(list.answer);
                cy.scrollTo(0, 0);
                cy.wait(1000);
                eventRegistration.inputAttendeeFirstName1(list.attendeeFirstName1);
                eventRegistration.inputAttendeeLastName1(list.attendeeLastName1);
                eventRegistration.inputAttendeeEmail1(list.attendeeEmail1);

                eventRegistration.inputAttendeeFirstName2(list.attendeeFirstName2);
                eventRegistration.inputAttendeeLastName2(list.attendeeLastName2);
                eventRegistration.inputAttendeeEmail2(list.attendeeEmail2);
                cy.wait(1000);
                eventRegistration.clickSaveAndContinueButton();
            });
            cy.intercept('GET', '/api/EventRegistration/GetEventRegPaymentInfo?EventRegID=*&EventID=*').as('billingInfoData');
            cy.wait('@billingInfoData', { timeout: 25000 });

            cy.url().should('include', 'https://test.eventzet.com/#/eventregistration/Eventshell/Billinginformation');


            cy.log('Registration details page saved successfuly');
        }),

        it("Test 4:Check whether billing info page validation is working or not", () => {

            readDataFromFile(filename).then((list) => {

                performLogin(list.email, list.password);

                eventRegistration.clickEvent(list.eventtitle);
                cy.intercept('GET', '/api/EventDetails/GetEventVideoURL?EventID=*').as('eventDetails');
                cy.wait('@eventDetails', { timeout: 25000 });
                cy.url().should('include', 'https://test.eventzet.com/#/eventregistration/Eventshell/Eventdetails');
                eventRegistration.clickGetTicketsButton();
                eventRegistration.selectVenue();
                eventRegistration.selectTimeSlot();
                eventRegistration.selectFreeTicket(list.ticketquantity);
                eventRegistration.selectFreeTicketAddon(list.addonquantity);
                eventRegistration.selectPaidTicket(list.ticketquantity);
                eventRegistration.selectPaidTicketAddon(list.addonquantity);
                cy.wait(1000);
                eventRegistration.clickContinueButton();
                cy.intercept('GET', '/api/EventRegistration/GetEventRegistrationData?EventRegID=*').as('contactInformationPage');
                cy.wait('@contactInformationPage', { timeout: 25000 });
                eventRegistration.inputPrefix(list.prefix);
                eventRegistration.inputFirstName(list.buyerFirstName);
                eventRegistration.inputLastName(list.buyerLastName);
                eventRegistration.inputBuyerEmail(list.buyerEmail);
                eventRegistration.selectGender(list.gender);
                eventRegistration.inputBuyerPhone(list.buyerPhone);
                eventRegistration.inputAddress(list.address);
                eventRegistration.inputCity(list.city);
                eventRegistration.selectState(list.state);
                eventRegistration.inputZipCode(list.zipCode);
                eventRegistration.inputAnswer(list.answer);
                cy.scrollTo(0, 0);
                cy.wait(1000);
                eventRegistration.inputAttendeeFirstName1(list.attendeeFirstName1);
                eventRegistration.inputAttendeeLastName1(list.attendeeLastName1);
                eventRegistration.inputAttendeeEmail1(list.attendeeEmail1);

                eventRegistration.inputAttendeeFirstName2(list.attendeeFirstName2);
                eventRegistration.inputAttendeeLastName2(list.attendeeLastName2);
                eventRegistration.inputAttendeeEmail2(list.attendeeEmail2);
                cy.wait(1000);
                eventRegistration.clickSaveAndContinueButton();
            });
            cy.intercept('GET', '/api/EventRegistration/GetEventRegPaymentInfo?EventRegID=*&EventID=*').as('billingInfoData');
            cy.wait('@billingInfoData', { timeout: 25000 });

            cy.url().should('include', 'https://test.eventzet.com/#/eventregistration/Eventshell/Billinginformation');

            eventRegistration.clickMakePaymentButton();

            cy.get('#validationServerUsernameFeedback').should('contain', 'Card number is required');
            cy.get(':nth-child(2) > .input > .small > .font_s7').should('contain', 'Name on card is required');
            cy.get('span.small > .font_s7').should('contain', 'Month required');
            cy.get('.text-right > .font_s7').should('contain', 'Year required');
            cy.get('.col-md-4 > .input > .small > .font_s7').should('contain', 'CVV is required');
            cy.get('.form-check > .mb-0').should('contain', 'You must agree to the terms.');

            cy.log('Billing info page validation is working fine');
        }),

        it("Test 5:Check whether can user make payment or not", () => {

            readDataFromFile(filename).then((list) => {

                performLogin(list.email, list.password);

                eventRegistration.clickEvent(list.eventtitle);
                cy.intercept('GET', '/api/EventDetails/GetEventVideoURL?EventID=*').as('eventDetails');
                cy.wait('@eventDetails', { timeout: 25000 });
                cy.url().should('include', 'https://test.eventzet.com/#/eventregistration/Eventshell/Eventdetails');
                eventRegistration.clickGetTicketsButton();
                eventRegistration.selectVenue();
                eventRegistration.selectTimeSlot();
                eventRegistration.selectFreeTicket(list.ticketquantity);
                eventRegistration.selectFreeTicketAddon(list.addonquantity);
                eventRegistration.selectPaidTicket(list.ticketquantity);
                eventRegistration.selectPaidTicketAddon(list.addonquantity);
                cy.wait(1000);
                eventRegistration.clickContinueButton();
                cy.intercept('GET', '/api/EventRegistration/GetEventRegistrationData?EventRegID=*').as('contactInformationPage');
                cy.wait('@contactInformationPage', { timeout: 25000 });
                eventRegistration.inputPrefix(list.prefix);
                eventRegistration.inputFirstName(list.buyerFirstName);
                eventRegistration.inputLastName(list.buyerLastName);
                eventRegistration.inputBuyerEmail(list.buyerEmail);
                eventRegistration.selectGender(list.gender);
                eventRegistration.inputBuyerPhone(list.buyerPhone);
                eventRegistration.inputAddress(list.address);
                eventRegistration.inputCity(list.city);
                eventRegistration.selectState(list.state);
                eventRegistration.inputZipCode(list.zipCode);
                eventRegistration.inputAnswer(list.answer);
                cy.scrollTo(0, 0);
                cy.wait(1000);
                eventRegistration.inputAttendeeFirstName1(list.attendeeFirstName1);
                eventRegistration.inputAttendeeLastName1(list.attendeeLastName1);
                eventRegistration.inputAttendeeEmail1(list.attendeeEmail1);

                eventRegistration.inputAttendeeFirstName2(list.attendeeFirstName2);
                eventRegistration.inputAttendeeLastName2(list.attendeeLastName2);
                eventRegistration.inputAttendeeEmail2(list.attendeeEmail2);
                cy.wait(1000);
                eventRegistration.clickSaveAndContinueButton();
                cy.intercept('GET', '/api/EventRegistration/GetEventRegPaymentInfo?EventRegID=*&EventID=*').as('billingInfoData');
                cy.wait('@billingInfoData', { timeout: 25000 });
                eventRegistration.inputCardNumber(list.cardNumber);
                eventRegistration.inputCardOwnerName(list.cardOwnerName);
                eventRegistration.inputMonth(list.month);
                eventRegistration.inputYear(list.year);
                eventRegistration.inputCvv(list.cvv);
                eventRegistration.checkTermsAndCondition();

            });

            eventRegistration.clickBookingFees();

            cy.xpath('//*[@id="servicessection"]/div/div/div/div/div[2]/div/div/div[6]/div[2]/div[2]/p')
                .invoke('text')
                .then(text => {
                    serviceCharge = text.trim();
                });

            cy.xpath('//*[@id="servicessection"]/div/div/div/div/div[2]/div/div/div[6]/div[1]/div[2]/p')
                .invoke('text')
                .then(text => {
                    paymentCharge = text.trim();
                });

            cy.xpath('//*[@id="servicessection"]/div/div/div/div/div[2]/div/div/div[7]/div[2]/p').invoke('text')
                .then(text => {
                    subTotal = text.trim();
                });

                cy.xpath('//*[@id="servicessection"]/div/div/div/div/div[2]/div/div/div[4]/div[2]/p')
                .invoke('text')
                .then(text => {
                    tax = text.trim();
                });

                cy.xpath('//*[@id="servicessection"]/div/div/div/div/div[2]/div/div/div[7]/div[2]/p')
                .invoke('text')
                .then(text => {
                    totalAmount = text.trim();
                });

            eventRegistration.clickMakePaymentButton();

            cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=CancellationType').as('orderDetailsData');
            cy.wait('@orderDetailsData', { timeout: 25000 });
            //    cy.wait(25000);
            cy.url().should('include', 'https://test.eventzet.com/#/eventregistration/Eventshell/Viewticketregistration');

            cy.log('Payment is done:Event registered successfuly');

            cy.log("Check service charge is matched or not");

            cy.xpath('//*[@id="servicessection"]/div/div[2]/div[1]/div/div/div/div[1]/div[5]/div[2]/div[1]/ul/li[2]')
                .should('exist')
                .invoke('text')
                .then(text => {

                    const orderDetailsServiceCharge = text.trim();
              

                    cy.log([...serviceCharge].map(c => c.charCodeAt(0)));
                    cy.log([...orderDetailsServiceCharge].map(c => c.charCodeAt(0))); // for checking characters count

                    const normalizedServiceCharge = serviceCharge.replace(/[^0-9.]/g, '');
                    const normalizedOrderDetailsServiceCharge = orderDetailsServiceCharge.replace(/[^0-9.]/g, '');

                    cy.log(`Service charge from UI: ${normalizedOrderDetailsServiceCharge}`);
                    cy.log(`Service charge from order summary :${normalizedServiceCharge}`);

                    if (normalizedServiceCharge === normalizedOrderDetailsServiceCharge) {
                       
                        expect(normalizedServiceCharge).to.equal(normalizedOrderDetailsServiceCharge);
                        cy.log('Service charge is matched');
                    } else {
                     
                        expect(normalizedServiceCharge).to.not.equal(normalizedOrderDetailsServiceCharge);
                        cy.log('Service charge is not equal');
                        throw new Error('Service charge mismatch');
                    }
                });

            cy.log("Check payment charge is matched or not");

            cy.xpath('//*[@id="servicessection"]/div/div[2]/div[1]/div/div/div/div[1]/div[5]/div[2]/div[2]/ul/li[2]')
                .should('exist')
                .invoke('text')
                .then(text => {

                    const orderDetailsPaymentCharge = text.trim();
                    
                    const normalizedPaymentCharge = paymentCharge.replace(/[^0-9.]/g, '');
                    const normalizedOrderDetailsPaymentCharge = orderDetailsPaymentCharge.replace(/[^0-9.]/g, '');
                    cy.log(`Payment charge from UI: ${normalizedOrderDetailsPaymentCharge}`);
                    cy.log(`Payment charge from order summary :${normalizedPaymentCharge}`);

                    if (normalizedPaymentCharge === normalizedOrderDetailsPaymentCharge) {

                        expect(normalizedPaymentCharge).to.equal(normalizedOrderDetailsPaymentCharge);
                        cy.log('Payment charge is matched');
                    } else {

                        expect(normalizedPaymentCharge).to.not.equal(normalizedOrderDetailsPaymentCharge);
                        cy.log('Payment charge is not equal');
                        throw new Error('Payment charge mismatch');
                    }
                });


            cy.log("Check tax amount is matched or not");

            cy.xpath('//*[@id="servicessection"]/div/div[2]/div[1]/div/div/div/div[1]/div[5]/div[2]/div[3]/ul/li[2]')
                .should('exist')
                .invoke('text')
                .then(text => {

                    const orderDetailsTax = text.trim();
                    const normalizedTax = tax.replace(/[^0-9.]/g, '');
                    const normalizedOrderDetailsTax = orderDetailsTax.replace(/[^0-9.]/g, '');

                    cy.log(`Tax amount from UI: ${normalizedOrderDetailsTax}`);
                    cy.log(`Tax from order summary :${normalizedTax}`);

                    if (normalizedTax === normalizedOrderDetailsTax) {

                        expect(normalizedTax).to.equal(normalizedOrderDetailsTax);
                        cy.log('Tax amount is matched');
                    } else {

                        expect(normalizedTax).to.not.equal(normalizedOrderDetailsTax);
                        cy.log('Tax amount is not equal');
                        throw new Error('Tax amount mismatch');
                    }
                });

            cy.log("Check total amount is matched or not");
            cy.xpath('//*[@id="servicessection"]/div/div[2]/div[1]/div/div/div/div[1]/div[5]/div[2]/div[5]/ul/li[2]')
                .should('exist')
                .invoke('text')
                .then(text => {

                    const orderDetailsBillingAmount = text.trim();
                    const normalizedTotalAmount = totalAmount.replace(/[^0-9.]/g, '');
                    const normalizedOrderDetailsTotalAmount = orderDetailsBillingAmount.replace(/[^0-9.]/g, '');

                    cy.log(`Payment charge from UI: ${normalizedOrderDetailsTotalAmount}`);
                    cy.log(`Total Amount from order summary :${normalizedTotalAmount}`);

                    if (normalizedTotalAmount === normalizedOrderDetailsTotalAmount) {

                        expect(normalizedTotalAmount).to.equal(normalizedOrderDetailsTotalAmount);
                        cy.log('Total amount is matched');
                    } else {

                        expect(normalizedTotalAmount).to.not.equal(normalizedOrderDetailsTotalAmount);
                        cy.log('Total amount is not equal');
                        throw new Error('Total amount mismatch');
                    }
                });

            cy.log("Check billing amount and booking amount is equal or not ");

            cy.xpath('//*[@id="servicessection"]/div/div[2]/div[1]/div/div/div/div[1]/div[5]/div[2]/div[5]/ul/li[2]')
                .invoke('text')
                .then(text => {
                    const orderDetailsBillingAmount = text.trim();

                    cy.xpath('//*[@id="servicessection"]/div/div[2]/div[1]/div/div/div/div[1]/div[5]/div[2]/div[4]/ul/li[2]')
                        .invoke('text')
                        .then(text => {
                            const orderDetailsBookingAmount = text.trim();
                            const normalizedOrderDetailsBookingAmount = orderDetailsBookingAmount.replace(/[^0-9.]/g, '');
                            const normalizedOrderDetailsBillingAmount= orderDetailsBillingAmount.replace(/[^0-9.]/g, '');

                            cy.log(`OrderDetailsBillingAmount from UI: ${normalizedOrderDetailsBillingAmount}`);
                            cy.log(`OrderDetailsBookingAmount from UI:${normalizedOrderDetailsBookingAmount}`);


                            if (normalizedOrderDetailsBillingAmount === normalizedOrderDetailsBookingAmount) {

                                expect(normalizedOrderDetailsBillingAmount).to.equal(normalizedOrderDetailsBookingAmount);
                                cy.log('Billing amount and booking amount is matched');
                            } else {

                                expect(normalizedOrderDetailsBillingAmount).to.not.equal(normalizedOrderDetailsBookingAmount);
                                cy.log('Billing amount and booking amount is not equal');
                                throw new Error('Billing amount and booking amount mismatch');
                            }
                        });
                });
        }),



        it("Test 6:Check Registration and order details page ", () => {
            readDataFromFile(filename).then((list) => {

                performLogin(list.email, list.password);

                eventRegistration.clickEvent(list.eventtitle);
                cy.intercept('GET', '/api/EventDetails/GetEventVideoURL?EventID=*').as('eventDetails');
                cy.wait('@eventDetails', { timeout: 25000 });
                cy.url().should('include', 'https://test.eventzet.com/#/eventregistration/Eventshell/Eventdetails');
                eventRegistration.clickGetTicketsButton();
                eventRegistration.selectVenue();
                eventRegistration.selectTimeSlot();
                eventRegistration.selectFreeTicket(list.ticketquantity);
                eventRegistration.selectFreeTicketAddon(list.addonquantity);
                eventRegistration.selectPaidTicket(list.ticketquantity);
                eventRegistration.selectPaidTicketAddon(list.addonquantity);
                cy.wait(1000);
                eventRegistration.clickContinueButton();
                cy.intercept('GET', '/api/EventRegistration/GetEventRegistrationData?EventRegID=*').as('contactInformationPage');
                cy.wait('@contactInformationPage', { timeout: 25000 });
                eventRegistration.inputPrefix(list.prefix);
                eventRegistration.inputFirstName(list.buyerFirstName);
                eventRegistration.inputLastName(list.buyerLastName);
                eventRegistration.inputBuyerEmail(list.buyerEmail);
                eventRegistration.selectGender(list.gender);
                eventRegistration.inputBuyerPhone(list.buyerPhone);
                eventRegistration.inputAddress(list.address);
                eventRegistration.inputCity(list.city);
                eventRegistration.selectState(list.state);
                eventRegistration.inputZipCode(list.zipCode);
                eventRegistration.inputAnswer(list.answer);
                cy.scrollTo(0, 0);
                cy.wait(1000);
                eventRegistration.inputAttendeeFirstName1(list.attendeeFirstName1);
                eventRegistration.inputAttendeeLastName1(list.attendeeLastName1);
                eventRegistration.inputAttendeeEmail1(list.attendeeEmail1);

                eventRegistration.inputAttendeeFirstName2(list.attendeeFirstName2);
                eventRegistration.inputAttendeeLastName2(list.attendeeLastName2);
                eventRegistration.inputAttendeeEmail2(list.attendeeEmail2);
                cy.wait(1000);
                eventRegistration.clickSaveAndContinueButton();
                cy.intercept('GET', '/api/EventRegistration/GetEventRegPaymentInfo?EventRegID=*&EventID=*').as('billingInfoData');
                cy.wait('@billingInfoData', { timeout: 25000 });
                eventRegistration.inputCardNumber(list.cardNumber);
                eventRegistration.inputCardOwnerName(list.cardOwnerName);
                eventRegistration.inputMonth(list.month);
                eventRegistration.inputYear(list.year);
                eventRegistration.inputCvv(list.cvv);
                eventRegistration.checkTermsAndCondition();

            });

            eventRegistration.clickMakePaymentButton();

            cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=CancellationType').as('orderDetailsData');
            cy.wait('@orderDetailsData', { timeout: 25000 });
            //    cy.wait(25000);
            cy.url().should('include', 'https://test.eventzet.com/#/eventregistration/Eventshell/Viewticketregistration');

            cy.get(':nth-child(1) > .md-raised').should('contain', ' Print Ticket');  //for checking print ticket,cancel order, contact event organizer
            cy.get('[style="display: block;"]').should('contain', 'Cancel Order');
            cy.get('[data-bs-target="#ModalContactOrganizer"]').should('contain', 'Contact Organizer');
            cy.log('Print ticket , Cancel Order and Contact organizer button is present in the page');

            eventRegistration.clickPrintTicket();
            cy.wait(2000);
            cy.log('Print ticket is working');
            eventRegistration.clickContactOrganizer();
            cy.wait(2000);
            eventRegistration.clickCancelOrder();
            cy.wait(1000);
            eventRegistration.selectCancelTicketTier();
            eventRegistration.clickCancelOrderSubmitButton();
            cy.wait(2000);
            eventRegistration.checkCancelOrderSuccessPopup();
            cy.log('Cancel Order is Successfuli:test is successful');

        }),



    ]
};