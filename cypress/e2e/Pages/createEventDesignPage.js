class CreateEventDesign{


    designTab =':nth-child(6) > .nav-link > .progressactive';
    loginMenuButton = ':nth-child(2) > :nth-child(8) > #EventZetHomemenuLoginmenu';
    userEmail = '#UserEmail';
    userPassword = '#UserPassword';
    login = '#EventLoginBtn';
    createEventMenu = '#EventZetCreateEventMenu';
    myEvents = ':nth-child(3) > .nav-link > .fs-4';
    eventsDashboardMenu = '//*[@id="navbar"]/ul/li[2]/a';
    eventEditButton = ':nth-child(1) > .btn > .bi';
    searchEventInputBox = '#myOwneventstab > :nth-child(1) > .col-md-4 > .input-group > .form-control';
    subimagecloseicon =':nth-child(2) > span > .bi';
    bannerimagecloseicon = '.col-md-8 > span > .bi';
    imageLimitPopup = '[style="display: block;"] > .cardboxalert > .card';
    popupOkButton = '[style="display: block;"] > .cardboxalert > .card > .w-100 > .d-inline';
    uploadImageButton  = '//input[@id="customFileInputbanner"]';
    uploadSubImageButton = '//input[@id="customFileInput"]';
    designSaveButton = '.fixed_btm_div > .btn';
    youtubeInputBox = '#YoutubeDiv > .row > .col-md-12 > .input-group > .form-floating > #floatingInput';
    rumbleInputBox = '#rumbleDiv > .row > .col-md-12 > .input-group > .form-floating > #floatingInput';
    vimieoInputBox = '#vimeoVideoup > .row > .col-lg-8 > .input-group > .form-floating > #floatingInput';
    youtubeTab = '//*[@id="youtubeVideoup"]';
    rumbleTab = '//*[@id="OnlineEventLocation"]';
    vimieotab = '//*[@id="vimeoVideobtn"]';


    checkYouTubeSelected(){

        cy.xpath(this.youtubeTab).should('to.be.checked');
    }

    checkRumbleSelected(){

        cy.xpath(this.rumbleTab).should('to.be.checked');
    }

    checkVimeoSelected(){

        cy.xpath(this.vimieotab).should('to.be.checked');
    }


    inputYoutubeVideoUrl(videourl){

        cy.get(this.youtubeInputBox).clear().type(videourl);
    }

    inputRumbleVideoUrl(videourl){

        cy.get(this.rumbleInputBox).clear().type(videourl);
    }

    inputVimieoVideoUrl(videourl){

        cy.get(this.vimieoInputBox).clear().type(videourl);
    }

    clickYoutubeTab(){

        cy.xpath(this.youtubeTab).click({force:true});
    }

    clickRumbleTab(){

        cy.xpath(this.rumbleTab).click({force:true});
    }

    clickVimieoTab(){

        cy.xpath(this.vimieotab).click({force:true});
    }
  

    clickDesignSaveButton(){

        cy.get(this.designSaveButton).click({force:true});

    }

    deleteSubImage() {

        cy.get(this.subimagecloseicon).click({ force: true });
    
      }
    
      popupButtonClick() {
    
        cy.get(this.popupOkButton).click({ force: true });
    
      }
    
      checkPopup() {
    
        cy.get(this.imageLimitPopup).should('be.visible');
      }
    
      checkImageFileTypePopup() {
    
        cy.get(this.imageFileTypePopup).should('be.visible');
      }
    
      deleteBannerImage() {
    
        cy.get(this.bannerimagecloseicon).click({ force: true });
    
      }
    
    
    
      uploadImage(imagepath) {
    
        cy.xpath(this.uploadImageButton)
          .attachFile(imagepath);
    
      }
    
      uploadSubImage(subimagePaths) {
        // Iterate through the array of file paths and upload each file individually
        subimagePaths.forEach(subimagePath => {
          cy.xpath(this.uploadSubImageButton).attachFile(subimagePath);
          cy.wait(2000);
        });
      }
    
      uploadVideo(videopath) {
    
        cy.xpath(this.uploadSubImageButton)
          .attachFile(videopath);
    
      }
    



    clickDesignProgressTab(){
        
        cy.get(this.designTab).click({force:true});
        cy.intercept('GET', '/api/EventDetails/GetEventVideoURL?EventID=*').as('designPage');
        cy.wait('@designPage', { timeout: 25000 });
        cy.url().should('include','https://test.eventzet.com/#/events/Dashboard/EventzetEventsCreate/EventDesign');
    }


    searchEventName(eventname) {

        cy.get(this.searchEventInputBox).clear().type(eventname);

    }

    clickEventEditButton() {

        cy.get(this.eventEditButton).click({ force: true });

    }
    inputEmail(useremail) {

        cy.get(this.userEmail).click({ force: true }).type(useremail);

    }

    inputPassword(userepassword) {

        cy.get(this.userPassword).click({ force: true }).type(userepassword);

    }

    clickLoginMenu() {

        cy.get(this.loginMenuButton).click();

    }

    loginClick() {

        cy.get(this.login).click();
        cy.wait(6000);

    }


    eventsDashboardMenuClick() {

        cy.xpath(this.eventsDashboardMenu).click();
        cy.wait(4000);

    }

    clickMyEvents() {

        cy.get(this.myEvents).click({ force: true });

    }



}
export default CreateEventDesign;