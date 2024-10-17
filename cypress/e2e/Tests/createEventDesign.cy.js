import CreateEventDesign from '../../e2e/Pages/createEventDesignPage.js';
const { readDataFromFile, writeDataToFile, clearDataInFile } = require('../ExternalFiles/fileOperations.js');
const baseUrl = Cypress.config('baseUrl');
const filename = 'cypress/fixtures/createEventDesignRead.json';
const design = new CreateEventDesign();


function performLogin(email, password) {
    cy.visit(baseUrl);
    cy.wait(4000);
    design.clickLoginMenu();
    design.inputEmail(email);
    design.inputPassword(password);
    design.loginClick();
}

function navigateToDesignPage() {
    readDataFromFile(filename).then((list) => {
        design.eventsDashboardMenuClick();
        design.clickMyEvents();
        cy.intercept('GET', '/api/DashboardEventList/GetDashboardEventList?UserID=*').as('myEventsData');
        cy.wait('@myEventsData', { timeout: 40000 });
        design.searchEventName(list.eventtitle);
        design.clickEventEditButton();
        cy.intercept('GET', '/api/Timeslot/GetEventTimeSlots?EventID=*').as('basicInfoData');
        cy.wait('@basicInfoData', { timeout: 40000 });
        design.clickDesignProgressTab();
    });
}

module.exports = {

    CreateEventDesignTests: [


        it("Test 1: Upload Banner Image", () => {
            readDataFromFile(filename).then((list) => {
                performLogin(list.email, list.password);
                navigateToDesignPage();
                design.uploadImage('cherry.jpg');
                cy.wait(2000);
                cy.log('Banner image was uploaded');
            });
        }),


        it("Test 2: Upload Sub Images", () => {
            readDataFromFile(filename).then((list) => {
                performLogin(list.email, list.password);
                navigateToDesignPage();
                design.uploadSubImage(['cb.jpg', 'Cherry-Blossom-Tree.jpg']);
                cy.log('Sub images were uploaded');
            });
        }),


        // it("Test 4: Upload Video", () => {
        //     readDataFromFile(filename).then((list) => {
        //         performLogin(list.email, list.password);
        //         navigateToDesignPage();
        //         cy.scrollTo(0, 500);
        //         design.uploadVideo('eventvideo.mp4');
        //         cy.wait(2000);
        //         cy.log('Video was uploaded');
        //     });
        // }),


        it("Test 3: Delete Sub Image", () => {
            readDataFromFile(filename).then((list) => {
                performLogin(list.email, list.password);
                navigateToDesignPage();
                design.uploadSubImage(['cb.jpg', 'Cherry-Blossom-Tree.jpg']);
                cy.wait(2000);
                design.deleteSubImage();
                cy.wait(2000);
                cy.log('Sub image is deleted');
            });
        }),

        it("Test 4: Image Upload Limit", () => {
            readDataFromFile(filename).then((list) => {
                performLogin(list.email, list.password);
                navigateToDesignPage();
                design.uploadSubImage(['cb.jpg', 'Cherry-Blossom-Tree.jpg', 'cherry.jpg', 'flower.jpg', 'flower2.jpg']);
                design.checkPopup();
                cy.wait(1000);
                design.popupButtonClick();
                cy.wait(1000);
                cy.log('Image limit alert popup is visible');
            });
        }),


        
        it("Test 5: Image File Type Validation", () => {
            readDataFromFile(filename).then((list) => {
                performLogin(list.email, list.password);
                navigateToDesignPage();
                design.uploadSubImage(['Design.docx']);
                design.checkPopup();
                cy.wait(1000);
                design.popupButtonClick();
                cy.wait(1000);
                cy.log('Image file type alert popup is visible');
            });
        }),

        it("Test 6: Upload YouTube video", () => {
            readDataFromFile(filename).then((list) => {
                performLogin(list.email, list.password);
                navigateToDesignPage();
                cy.wait(1000);
                // design.checkYouTubeSelected();
                design.inputYoutubeVideoUrl(list.youtubeurl);
                cy.wait(2000);
                cy.log('YouTube video was uploaded');
            });
        }),

        it("Test 7: Upload Rumble video", () => {
            readDataFromFile(filename).then((list) => {
                performLogin(list.email, list.password);
                navigateToDesignPage();
                design.clickRumbleTab();
                design.checkRumbleSelected();
                design.inputRumbleVideoUrl(list.rumbleurl);
                cy.wait(3000);
                cy.log('Rumble video was uploaded');
            });
        }),

        it("Test 8: Upload Vimeo video", () => {
            readDataFromFile(filename).then((list) => {
                performLogin(list.email, list.password);
                navigateToDesignPage();
                design.clickVimieoTab();
                design.checkVimeoSelected();
                design.inputVimieoVideoUrl(list.vimieourl);
                cy.wait(3000);
                cy.log('Vimeo video was uploaded');
            });
        }),

        it("Test 9: Invalid video URL", () => {
            readDataFromFile(filename).then((list) => {
                performLogin(list.email, list.password);
                navigateToDesignPage();
                const invalidUrl = 'https://www.example.com/video';
                design.clickYoutubeTab();
                design.inputYoutubeVideoUrl(invalidUrl);
                cy.log('Invalid URL error was displayed');
            });
        }),

        
        it("Test 10: Switch between video platforms", () => {
            readDataFromFile(filename).then((list) => {
                performLogin(list.email, list.password);
                navigateToDesignPage();
                // design.checkYouTubeSelected();
                design.clickRumbleTab();
                design.checkRumbleSelected();
                design.clickVimieoTab();
                design.checkVimeoSelected();
                design.clickYoutubeTab();
                design.checkYouTubeSelected();
                cy.log('Successfully switched between video platforms');
            });
        }),

        it("Test 11: Save Design Page", () => {
            readDataFromFile(filename).then((list) => {
                performLogin(list.email, list.password);
                navigateToDesignPage();
                design.uploadImage('cherry.jpg');
                cy.wait(2000);
                design.uploadSubImage(['cb.jpg', 'Cherry-Blossom-Tree.jpg']);
                cy.wait(2000);
                // design.checkYouTubeSelected();
                design.inputYoutubeVideoUrl(list.youtubeurl);
                cy.wait(1000);
                design.clickRumbleTab();
                design.checkRumbleSelected();
                design.inputRumbleVideoUrl(list.rumbleurl);
                cy.wait(3000);
                design.clickVimieoTab();
                design.checkVimeoSelected();
                design.inputVimieoVideoUrl(list.vimieourl);
                cy.wait(3000);
                design.clickDesignSaveButton();
                cy.wait(7000);
                cy.url().should('include', 'https://test.eventzet.com/#/events/Dashboard/EventzetEventsCreate/EventSettings');
                cy.log('Design page is saved');
            });
        })

    ]
};
