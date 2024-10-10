import CreateEventDeatails from '../../e2e/Pages/createEventDeatailsPage.js';
const { readDataFromFile, writeDataToFile, clearDataInFile } = require('../ExternalFiles/fileOperations.js');
const baseUrl = Cypress.config('baseUrl');
var dateCalculations = require('../ExternalFiles/dateCalculations.js');
const filename = 'cypress/fixtures/createEventDetailsRead.json'
const d = new CreateEventDeatails();
const startDate = dateCalculations.calculateSevenDaysLater();
const endDate = dateCalculations.calculateSevenDaysLater();

module.exports = {

        CreateEventDetailsTests: [

                //test 1

                        it("Running navigation is working or not if we save basic info page", () => {
                        cy.visit(baseUrl);
                        cy.wait(2000);
                        d.clickLoginMenu();
                        readDataFromFile(filename).then((list) => {

                            d.inputEmail(list.email);
                            cy.scrollTo(0,0);
                            d.inputPassword(list.password);
                         });
                        cy.wait(1000);
                        d.loginClick();
                        cy.wait(6000);
                        d.clickCreateEventMenu();
                        readDataFromFile(filename).then((list) => {

                            d.inputEventTitle(list.eventtitle);
                            d.inputVenue(list.eventlocation);
                            cy.wait(2000);
                            // const formattedStartDate = `${startDate.slice(4, 8)}-${startDate.slice(0, 2)}-${startDate.slice(2, 4)}`;
                            // const formattedEndDate = `${endDate.slice(4, 8)}-${endDate.slice(0, 2)}-${endDate.slice(2, 4)}`;
                            cy.wait(1000);
                            d.selectEventStartDate(startDate);
                            d.selectEventStartTime(list.eventstarttime);
                            d.selectEventEndDate(endDate);
                            d.selectEventEndTime(list.eventendtime);
                            d.inputOrganizerEmail(list.email);
                            d.inputOrganizerPhone(list.organizerphone);

                         });

                         d.clickSaveButton();
                         cy.wait(3000);
                         cy.url().should('include','https://test.eventzet.com/#/events/Dashboard/Addeventdetails');

                         cy.log('After saving basic info it is navigated to deatails page: test is successful');

                    }),

             //   test 2



                       it('Check Upload Banner Image', () => {
                        cy.visit(baseUrl);
                        d.clickLoginMenu();
                        readDataFromFile(filename).then((list) => {

                            d.inputEmail(list.email);
                            cy.scrollTo(0,0);
                            d.inputPassword(list.password);
                         });
                        cy.wait(1000);
                        d.loginClick();
                        cy.wait(5000);
                        d.eventsDashboardMenuClick();
                        cy.wait(3000);
                        d.myEventsMenuClick();
                        cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SaleStatus').as('myEventsData');
                        cy.wait('@myEventsData', { timeout: 25000 });

                        cy.intercept('GET', '/api/BasicInfo/GetEventLocation?EventID=*').as('basicInfoData');
                        d.clickEventEditButton();
                        cy.wait('@basicInfoData', { timeout: 25000 });
                        // cy.wait(13000);
                        d.clickSaveButton();
                        cy.wait(4000);
                        d.uploadImage('cherry.jpg');
                        cy.wait(2000);
                        cy.log('Banner image was uploaded');

                }),
                //test 3

                        it('Check Upload Sub Images', () => {

                                cy.visit(baseUrl);
                                d.clickLoginMenu();
                                readDataFromFile(filename).then((list) => {

                                    d.inputEmail(list.email);
                                    cy.scrollTo(0,0);
                                    d.inputPassword(list.password);
                                 });
                                cy.wait(1000);
                                d.loginClick();
                                cy.wait(5000);
                                d.eventsDashboardMenuClick();
                                cy.wait(3000);
                                d.myEventsMenuClick();
                                cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SaleStatus').as('myEventsData');
                                cy.wait('@myEventsData', { timeout: 25000 });

                                cy.intercept('GET', '/api/BasicInfo/GetEventLocation?EventID=*').as('basicInfoData');
                                d.clickEventEditButton();
                                cy.wait('@basicInfoData', { timeout: 25000 });
                                // cy.wait(13000);
                                d.clickSaveButton();
                                cy.wait(4000);   

                        d.uploadSubImage(['cb.jpg','Cherry-Blossom-Tree.jpg',]);

                        cy.log('Sub images were uploaded');

                }),
                //test 4


                it('Check Upload Video', () => {

                        cy.visit(baseUrl);
                        d.clickLoginMenu();
                        readDataFromFile(filename).then((list) => {

                                d.inputEmail(list.email);
                                cy.scrollTo(0, 0);
                                d.inputPassword(list.password);
                        });
                        cy.wait(1000);
                        d.loginClick();
                        cy.wait(5000);
                        d.eventsDashboardMenuClick();
                        cy.wait(3000);
                        d.myEventsMenuClick();
                        cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SaleStatus').as('myEventsData');
                        cy.wait('@myEventsData', { timeout: 25000 });
                        cy.intercept('GET', '/api/BasicInfo/GetEventLocation?EventID=*').as('basicInfoData');
                        d.clickEventEditButton();
                        cy.wait('@basicInfoData', { timeout: 25000 });
                        //cy.wait(13000);
                        d.clickSaveButton();
                        cy.wait(5000);

                        cy.scrollTo(0, 500);
                        d.uploadVideo('eventvideo.mp4');
                        cy.wait(2000);

                        cy.log('Video was uploaded');

                }),
                //test 5


                it('Checking  delete sub image functionality', () => {

                        cy.visit(baseUrl);
                        d.clickLoginMenu();
                        readDataFromFile(filename).then((list) => {

                                d.inputEmail(list.email);
                                cy.scrollTo(0, 0);
                                d.inputPassword(list.password);
                        });
                        cy.wait(1000);
                        d.loginClick();
                        cy.wait(5000);
                        d.eventsDashboardMenuClick();
                        cy.wait(3000);
                        d.myEventsMenuClick();
                        cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SaleStatus').as('myEventsData');
                        cy.wait('@myEventsData', { timeout: 25000 });

                        cy.intercept('GET', '/api/BasicInfo/GetEventLocation?EventID=*').as('basicInfoData');
                        d.clickEventEditButton();
                        cy.wait('@basicInfoData', { timeout: 25000 });;
                        // cy.wait(13000);
                        d.clickSaveButton();
                        cy.wait(4000);
                        d.uploadSubImage(['cb.jpg', 'Cherry-Blossom-Tree.jpg',]);
                        cy.wait(2000);
                        d.deleteSubImage();
                        cy.wait(2000);
                        d.uploadSubImage(['cb.jpg']);
                        cy.wait(2000);

                        cy.log('Sub image is deleted');

                }),
                //test 6


                it('Checking  image upload limit', () => {

                        cy.visit(baseUrl);
                        d.clickLoginMenu();
                        readDataFromFile(filename).then((list) => {

                                d.inputEmail(list.email);
                                cy.scrollTo(0, 0);
                                d.inputPassword(list.password);
                        });
                        cy.wait(1000);
                        d.loginClick();
                        cy.wait(5000);
                        d.eventsDashboardMenuClick();
                        cy.wait(3000);
                        d.myEventsMenuClick();
                        cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SaleStatus').as('myEventsData');
                        cy.wait('@myEventsData', { timeout: 25000 });

                        cy.intercept('GET', '/api/BasicInfo/GetEventLocation?EventID=*').as('basicInfoData');
                        d.clickEventEditButton();
                        cy.wait('@basicInfoData', { timeout: 25000 });
                        // cy.wait(13000);
                        d.clickSaveButton();
                        cy.wait(4000);

                        d.uploadSubImage(['cb.jpg', 'Cherry-Blossom-Tree.jpg', 'cherry.jpg', 'flower.jpg', 'flower2.jpg']);

                        d.checkPopup();
                        cy.wait(1000);
                        d.popupButtonClick();
                        cy.wait(1000);

                        cy.log('Image limit alert popup is visible');

                }),
                //test 7


                it('Checking  image file type', () => {
                        cy.visit(baseUrl);
                        d.clickLoginMenu();
                        readDataFromFile(filename).then((list) => {

                                d.inputEmail(list.email);
                                cy.scrollTo(0, 0);
                                d.inputPassword(list.password);
                        });
                        cy.wait(1000);
                        d.loginClick();
                        cy.wait(5000);
                        d.eventsDashboardMenuClick();
                        cy.wait(3000);
                        d.myEventsMenuClick();
                        cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SaleStatus').as('myEventsData');
                        cy.wait('@myEventsData', { timeout: 25000 });
                        cy.intercept('GET', '/api/BasicInfo/GetEventLocation?EventID=*').as('basicInfoData');
                        d.clickEventEditButton();
                        cy.wait('@basicInfoData', { timeout: 25000 });
                        // cy.wait(13000);
                        d.clickSaveButton();
                        cy.wait(4000);
                        d.uploadSubImage(['cherryblossomgif.gif']);
                        d.checkPopup();
                        cy.wait(1000);
                        d.popupButtonClick();
                        cy.wait(1000);

                        cy.log('Image file type alert popup is visible');
                }),
                //test 8


                it('Checking  Previous Button is working or not', () => {

                        cy.visit(baseUrl);
                        d.clickLoginMenu();
                        readDataFromFile(filename).then((list) => {

                                d.inputEmail(list.email);
                                cy.scrollTo(0, 0);
                                d.inputPassword(list.password);
                        });
                        cy.wait(1000);
                        d.loginClick();
                        cy.wait(5000);
                        d.eventsDashboardMenuClick();
                        cy.wait(3000);
                        d.myEventsMenuClick();
                        cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SaleStatus').as('myEventsData');
                        cy.wait('@myEventsData', { timeout: 25000 });

                        cy.intercept('GET', '/api/BasicInfo/GetEventLocation?EventID=*').as('basicInfoData');
                        d.clickEventEditButton();
                        cy.wait('@basicInfoData', { timeout: 25000 });
                        // cy.wait(13000);
                        d.clickSaveButton();
                        cy.wait(4000);

                        d.clickDetailsPreviousButton();
                        cy.wait('@basicInfoData', { timeout: 25000 });
                        // cy.wait(10000);
                        cy.url().should('include', 'https://test.eventzet.com/#/events/Dashboard/Createevent');

                        cy.log('Previous button is working');
                }),
                //test 9


                it('Checking  save details page', () => {
                        cy.visit(baseUrl);
                        d.clickLoginMenu();
                        readDataFromFile(filename).then((list) => {

                                d.inputEmail(list.email);
                                cy.scrollTo(0, 0);
                                d.inputPassword(list.password);
                        });
                        cy.wait(1000);
                        d.loginClick();
                        cy.wait(5000);
                        d.eventsDashboardMenuClick();
                        cy.wait(3000);
                        d.myEventsMenuClick();
                        cy.intercept('GET', '/api/Category/GetCategoryByTypeName?CategoryTypeName=SaleStatus').as('myEventsData');
                        cy.wait('@myEventsData', { timeout: 25000 });

                        cy.intercept('GET', '/api/BasicInfo/GetEventLocation?EventID=*').as('basicInfoData');
                        d.clickEventEditButton();
                        cy.wait('@basicInfoData', { timeout: 25000 });
                        // cy.wait(13000);
                        d.clickSaveButton();
                        cy.wait(4000);
                        d.uploadImage('cherry.jpg');
                        cy.wait(2000);
                        d.uploadSubImage(['cb.jpg', 'Cherry-Blossom-Tree.jpg',]);
                        cy.wait(2000);
                        d.uploadVideo('eventvideo.mp4');
                        cy.wait(2000);
                        d.clickDetailsSaveButton();
                        cy.wait(10000);
                        cy.url().should('include', 'https://test.eventzet.com/#/events/Dashboard/Addtickets');

                        cy.log('Details page is saved');
                })


        ]
};