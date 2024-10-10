class CreateSignup {

  loginMenu = ':nth-child(2) > :nth-child(8) > #EventZetHomemenuLoginmenu';
  volunteerSignupMenu = '#VolunteerhomeLarge';
  createVolunteerSignupButton = '//body/app-root/app-eventshell/main/app-volunteerhome/section/div/div/div/div/div/button[1]';
  
  menuDropdown = '.collapse > :nth-child(7) > .nav-link > span';
  logout = '//*[@id="navbarSupportedContent"]/ul/li[7]/ul/li[5]/a';
  emailField = '#UserEmail';
  passwordField = '#UserPassword';
  loginButton = '#EventLoginBtn';
  dateSaveButton = ':nth-child(3) > app-eventzetsignupdate > :nth-child(1) > .col-lg-9 > .card > .card-body > :nth-child(1) > :nth-child(1) > :nth-child(2) > .pt-3 > .md-raised';
  addMultipleDateButton = ':nth-child(3) > app-eventzetsignupdate > :nth-child(1) > .col-lg-9 > .card > .card-body > :nth-child(1) > :nth-child(1) > :nth-child(2) > .pt-3 > .md-btn-lg-line';
  signupTitleField = ':nth-child(3) > app-eventzetsignupdate > :nth-child(1) > .col-lg-9 > .card > .card-body > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .row > .col-lg-12 > .form-floating > #floatingInput';
  signupDescriptionField = ':nth-child(3) > app-eventzetsignupdate > :nth-child(1) > .col-lg-9 > .card > .card-body > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(2) > .form-floating > #floatingTextarea';
  locationField = ':nth-child(3) > app-eventzetsignupdate > :nth-child(1) > .col-lg-9 > .card > .card-body > :nth-child(1) > :nth-child(1) > :nth-child(2) > .col-lg-12 > #content > .content-inside > .col-md-6 > .form-floating > #LocationAddDate';
  dateField = ':nth-child(3) > app-eventzetsignupdate > :nth-child(1) > .col-lg-9 > .card > .card-body > :nth-child(1) > :nth-child(1) > :nth-child(2) > .col-lg-12 > #content > .content-inside > .col-md-4 > .form-floating > #floatingInput';
  dateDeleteButton = ':nth-child(3) > app-eventzetsignupdate > :nth-child(1) > .col-lg-9 > .card > .card-body > :nth-child(1) > :nth-child(1) > :nth-child(2) > .col-lg-12 > #content > .content-inside > .col-md-2 > span > .btn';
  slotTab = '//a[@href="#SlotTabSignup"]';
  timeTab = '//a[@href="#SignupTimeTabSignup"]';
  settingsTab = '//a[@href="#SettingsTabSignup"]';
  designTab = '//a[@href="#DesignTabSignup"]';
  publishTab = '//a[@href="#PublishTabSignup"]';
  dateTab = '(//a[@data-bs-toggle="tab"])[1]';
  deleteDateButton = ':nth-child(3) > app-eventzetsignupdate > :nth-child(1) > .col-lg-9 > .card > .card-body > :nth-child(1) > :nth-child(1) > :nth-child(2) > .col-lg-12 > #content > .content-inside > .col-md-2 > span > .btn';
  signupListMenu = '#menu > :nth-child(1) > .nav-link';
  searchBox = '.form-control';
  signupEditButton = ':nth-child(1) > td > .card > .card-body > .row > :nth-child(3) > .list-inline > :nth-child(1) > .btn > .bi';
  dateField2 = ':nth-child(2) > .content-inside > .col-md-4 > .form-floating > #floatingInput';
  locationField2 = ':nth-child(2) > .content-inside > .col-md-6 > .form-floating > #LocationAddDate';
  slotSaveButton = ':nth-child(3) > app-eventzetsignupslot > :nth-child(1) > .col-lg-9 > .card > .card-body > :nth-child(1) > .mt-3 > .md-raised';
  addMultipleSlotButton = ':nth-child(3) > app-eventzetsignupslot > :nth-child(1) > .col-lg-9 > .card > .card-body > :nth-child(1) > .mt-3 > .md-btn-lg-line';
  slotDeleteButton1 = ':nth-child(3) > app-eventzetsignupslot > :nth-child(1) > .col-lg-9 > .card > .card-body > :nth-child(1) > :nth-child(2) > .content-inside > .col-md-2 > span > .btn';
  slotCountField1 = ':nth-child(3) > app-eventzetsignupslot > :nth-child(1) > .col-lg-9 > .card > .card-body > :nth-child(1) > :nth-child(2) > .content-inside > .col-md-3 > #Number_Wanted';
  slotNameField1 = ':nth-child(3) > app-eventzetsignupslot > :nth-child(1) > .col-lg-9 > .card > .card-body > :nth-child(1) > :nth-child(2) > .content-inside > .col-md-6 > #Slot_Title';
  slotCountValidation = '.col-md-3 > .invalid-feedback > .font_s7';
  slotTitleValidation = '.col-md-6 > .invalid-feedback > .font_s7';
  slotDeleteButton2 = ':nth-child(3) > app-eventzetsignupslot > :nth-child(1) > .col-lg-9 > .card > .card-body > :nth-child(1) > :nth-child(3) > .content-inside > .col-md-2 > span > .btn';
  slotCountField2 = ':nth-child(3) > app-eventzetsignupslot > :nth-child(1) > .col-lg-9 > .card > .card-body > :nth-child(1) > :nth-child(3) > .content-inside > .col-md-3 > #Number_Wanted';
  slotNameField2 = ':nth-child(3) > app-eventzetsignupslot > :nth-child(1) > .col-lg-9 > .card > .card-body > :nth-child(1) > :nth-child(3) > .content-inside > .col-md-6 > #Slot_Title';
  slotDeleteButton2 = ':nth-child(3) > app-eventzetsignupslot > :nth-child(1) > .col-lg-9 > .card > .card-body > :nth-child(1) > :nth-child(3) > .content-inside > .col-md-2 > span > .btn';
  startTime1 = '//body/app-root/app-volunteersignup/div/div/div/main/app-eventzetsignup/div/div/div/section/div/div/div/div/app-eventzetsignuptime/div/div/div/div/div/div/div/div[1]/app-marzet-tp[1]/div[1]/input[1]';
  endTime1 = ':nth-child(3) > app-eventzetsignuptime > :nth-child(2) > :nth-child(1) > .card > .card-body > :nth-child(1) > :nth-child(2) > .content-inside > :nth-child(2) > app-marzet-tp > .form-floating > #martime_0_tp';
  selectSlotDropdown1 = '(//select[@aria-label="Default select example"])[2]';
  selectDateCheckBox1 = '//body/app-root/app-volunteersignup/div/div/div/main/app-eventzetsignup/div/div/div/section/div/div/div/div/app-eventzetsignuptime/div/div/div/div/div/div/div/div/app-multiselect/div/div/button[1]';
  timeDeleteButton1 = ':nth-child(3) > app-eventzetsignuptime > :nth-child(2) > :nth-child(1) > .card > .card-body > :nth-child(1) > :nth-child(2) > .content-inside > .col-md-2 > span > .btn > .bi';
  timeSaveButton = ':nth-child(3) > app-eventzetsignuptime > :nth-child(2) > :nth-child(1) > .card > .card-body > :nth-child(1) > .mt-3 > .md-raised';
  addMultipleTimeButton = '(//button[@class="btn md-button md-btn-lg-line d-inline mx-1 my-1"][normalize-space()="Add multiple Time"])[2]';
  startTimeValidation = ':nth-child(1) > app-marzet-tp > .form-floating > .invalid-feedback > div';
  endTimeValidation = ':nth-child(2) > app-marzet-tp > .form-floating > .invalid-feedback > div';
  slotValidation = '.col-lg-3 > .small > .font_s8';
  dateValidation = '.col-md-6 > .small > .font_s8';
  startTime2 = '//app-eventzetsignuptime//div//div//div//div//div//div//div[2]//div[1]//app-marzet-tp[1]//div[1]//input[1]';
  endTime2 = ':nth-child(2) > :nth-child(2) > app-marzet-tp > .form-floating > #martime_0_tp';
  selectSlotDropDown2 = '(//select[@aria-label="Default select example"])[3]';
  selectDateCheckBox2 = '//body[1]/app-root[1]/app-volunteersignup[1]/div[2]/div[1]/div[2]/main[1]/app-eventzetsignup[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[2]/div[1]/div[3]/app-eventzetsignuptime[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[4]/app-multiselect[1]/div[1]/div[1]/button[1]';
  questionBox1 = '#floatingInputQuestion';
  settingsCheckBox = '#flexCheckDefault';
  questionDeleteButton1 = '#contentInsideSignupSettings0 > .col-md-2 > span > .btn';
  addMultipleQuestionButton = '.my-2 > .col-md-12 > .md-btn-lg-line';
  settingsSaveButton = '.my-2 > .col-md-12 > .md-raised';
  questionBox2 = '#contentInsideSignupSettings1 > .col-md-6 > .form-floating > #floatingInputQuestion';
  designSaveButton = '.col-md-12 > span > .btn';
  uploadImageButton = '#formFileTemplateimg';
  blackColorPellet = '.col-lg-7 > .card > .card-body > .g-3 > :nth-child(2)';
  imageDeleteButton = '.position-absolute > .bi';
  copyURLButton = ':nth-child(3) > app-eventzetsignuppublish > :nth-child(2) > :nth-child(1) > :nth-child(1) > .card > .card-body > .my-1 > :nth-child(2) > .list-inline > .list-inline-item > .btn';
  publishButton = ':nth-child(3) > app-eventzetsignuppublish > :nth-child(3) > :nth-child(1) > :nth-child(1) > .card > .card-body > .my-2 > .col-md-6 > :nth-child(1)';
  saveDraftButton = ':nth-child(3) > app-eventzetsignuppublish > :nth-child(3) > :nth-child(1) > :nth-child(1) > .card > .card-body > .my-2 > .col-md-6 > .d-inline';
  privateSignupButton = ':nth-child(3) > app-eventzetsignuppublish > :nth-child(2) > :nth-child(1) > :nth-child(1) > .card > .card-body > .g-3 > :nth-child(2) > .form-check > #flexSwitchCheckDefault';
  unPublishButton = ':nth-child(1) > td > .card > .card-body > .row > :nth-child(3) > .list-inline > :nth-child(4) > .btn > .px-1';
  inviteButton = ':nth-child(3) > app-eventzetsignuppublish > :nth-child(3) > :nth-child(1) > :nth-child(1) > .card > .card-body > .my-2 > .col-md-6 > [tabindex="0"]';

  clickSignupInviteButton() {

    //Make it as a private signup toggle button
    cy.get(':nth-child(3) > app-eventzetsignuppublish > :nth-child(3) > :nth-child(1) > :nth-child(1) > .card > .card-body > .g-3 > :nth-child(2) > .form-check > #flexSwitchCheckDefault')
      .click({ force: true });
    cy.wait(1000);
    cy.get(this.inviteButton).click();
  }


  clickUnPublishButton() {

    cy.get(this.unPublishButton).click();

  }

  clickSignupSaveButton() {

    cy.get(this.saveDraftButton).click();
    cy.wait(3000);
    cy.get('[style="display: block;"] > .cardboxalert > .card > .w-100 > .btn').click({ force: true });

  }

  clickSignupPublishButton() {

    cy.get(this.publishButton).click();
    cy.wait(3000);
    cy.get('[style="display: block;"] > .cardboxalert > .card > .w-100 > .btn').click({ force: true });

  }


  checkSignupCreatorName(username) {

    cy.get(':nth-child(3) > app-eventzetsignuppublish > :nth-child(3) > :nth-child(2) > .col-lg-12 > .border-0 > :nth-child(1) > .container-fluid > .py-1 > .text-left > :nth-child(2)')
      .should('be.visible').should('contain', username);
  }

  checkSignupDescription() {

    cy.get(':nth-child(3) > app-eventzetsignuppublish > :nth-child(3) > :nth-child(2) > .col-lg-12 > .border-0 > :nth-child(1) > .container-fluid > .py-1 > .text-left > :nth-child(3)')
      .should('be.visible').should('exist');

  }

  checkSignUPName(signupname) {

    cy.get(':nth-child(3) > app-eventzetsignuppublish > :nth-child(3) > :nth-child(2) > .col-lg-12 > .border-0 > :nth-child(1) > .container-fluid > .py-1 > .text-left > .h3')
      .should('contain', signupname);

  }

  checkSecondSlot(slotname, slotcount, date, location, timedata) {

    cy.get(':nth-child(3) > app-eventzetsignuppublish > :nth-child(3) > :nth-child(2) > .col-lg-12 > .border-0 > :nth-child(1) > .container-fluid > :nth-child(2) > .p-3 > :nth-child(2) > :nth-child(1) > .card > .card-header > .row > .col-12 > :nth-child(1) > .h5')
      .should('be.visible').
      should('contain', slotname).
      should('contain', slotcount);

    cy.get(':nth-child(3) > app-eventzetsignuppublish > :nth-child(3) > :nth-child(2) > .col-lg-12 > .border-0 > :nth-child(1) > .container-fluid > :nth-child(2) > .p-3 > :nth-child(2) > :nth-child(1) > .card > .card-body > .list-group > .list-group-item > :nth-child(1) > .col-md-12 > .d-flex > .flex-fill > .h6')
      .should('be.visible').
      should('contain', date);

    cy.get(':nth-child(3) > app-eventzetsignuppublish > :nth-child(3) > :nth-child(2) > .col-lg-12 > .border-0 > :nth-child(1) > .container-fluid > :nth-child(2) > .p-3 > :nth-child(2) > :nth-child(1) > .card > .card-body > .list-group > .list-group-item > :nth-child(2) > .col-md-12 > .d-flex > :nth-child(1)')
      .should('be.visible').
      should('contain', location);

    cy.get(':nth-child(3) > app-eventzetsignuppublish > :nth-child(3) > :nth-child(2) > .col-lg-12 > .border-0 > :nth-child(1) > .container-fluid > :nth-child(2) > .p-3 > :nth-child(2) > :nth-child(1) > .card > .card-body > .list-group > .list-group-item > :nth-child(2) > .col-md-12 > .d-flex > :nth-child(2)')
      .should('be.visible').
      should('contain', timedata);

  }

  checkFirstSlot(slotname, slotcount, date, location, timedata) {

    cy.get(':nth-child(3) > app-eventzetsignuppublish > :nth-child(3) > :nth-child(2) > .col-lg-12 > .border-0 > :nth-child(1) > .container-fluid > :nth-child(2) > .p-3 > :nth-child(1) > :nth-child(1) > .card > .card-header > .row > .col-12 > :nth-child(1) > .h5')
      .should('be.visible').
      should('contain', slotname).
      should('contain', slotcount);

    cy.get(':nth-child(3) > app-eventzetsignuppublish > :nth-child(3) > :nth-child(2) > .col-lg-12 > .border-0 > :nth-child(1) > .container-fluid > :nth-child(2) > .p-3 > :nth-child(1) > :nth-child(1) > .card > .card-body > .list-group > .list-group-item > :nth-child(1) > .col-md-12 > .d-flex > .flex-fill > .h6')
      .should('be.visible').
      should('contain', date);

    cy.get(':nth-child(3) > app-eventzetsignuppublish > :nth-child(3) > :nth-child(2) > .col-lg-12 > .border-0 > :nth-child(1) > .container-fluid > :nth-child(2) > .p-3 > :nth-child(1) > :nth-child(1) > .card > .card-body > .list-group > .list-group-item > :nth-child(2) > .col-md-12 > .d-flex > :nth-child(1)')
      .should('be.visible').
      should('contain', location);

    cy.get(':nth-child(3) > app-eventzetsignuppublish > :nth-child(3) > :nth-child(2) > .col-lg-12 > .border-0 > :nth-child(1) > .container-fluid > :nth-child(2) > .p-3 > :nth-child(1) > :nth-child(1) > .card > .card-body > .list-group > .list-group-item > :nth-child(2) > .col-md-12 > .d-flex > :nth-child(2)')
      .should('be.visible').
      should('contain', timedata);

  }

  clickImageDeleteButton() {

    cy.get(this.imageDeleteButton).click();
    cy.wait(1000);
    cy.get('[style="display: block;"] > .cardboxalert > .card > .w-100 > .btn-primary').click();

  }

  clickDesignSaveButton() {

    cy.get(this.designSaveButton).click();

  }

  uploadSignupImage(signupimagepath) {

    cy.get(this.uploadImageButton).attachFile(signupimagepath);

  }

  selectColorPellet() {

    cy.get(this.blackColorPellet).click();

  }




  clickSettingsSaveButton() {

    cy.get(this.settingsSaveButton).click();

  }

  clickAddMultipleQuestionButton() {

    cy.get(this.addMultipleQuestionButton).click();

  }

  clickSettingsCheckBox() {

    cy.get(this.settingsCheckBox).click();

  }

  clickQuestionDeleteButton1() {

    cy.get(this.questionDeleteButton1).click();

  }

  inputQuestion1(question) {

    cy.get(this.questionBox1).type(question);

  }

  inputQuestion2(question) {

    cy.get(this.questionBox2).type(question);

  }

  checkTimeDeleteValue(starttime, endtime, slot, date) {

    cy.xpath(this.startTime1).should('not.have.value', starttime);
    cy.get(this.endTime1).should('not.have.value', endtime);
    cy.xpath(this.selectSlotDropdown1).should('not.have.value', slot);
    cy.xpath(this.selectDateCheckBox1).should('not.have.value', date);

  }

  checkSavedTimeData(starttime1, endtime1, slot1, date1, starttime2, endtime2, slot2, date2) {

    cy.xpath(this.startTime1).should('have.value', starttime1);
    cy.get(this.endTime1).should('have.value', endtime1);
    cy.xpath('(//select[@aria-label="Default select example"])[2]/option[2]').should('contain', slot1);
    cy.xpath('(//div[@class="items-container"])[3]').should('have.text', date1);
    cy.xpath(this.startTime2).should('have.value', starttime2);
    cy.get(this.endTime2).should('have.value', endtime2);
    cy.xpath('(//select[@aria-label="Default select example"])[2]/option[3]').should('contain', slot2);
    cy.xpath('(//div[@class="items-container"])[4]').should('have.text', date2);

  }


  clickTimeSaveButton() {

    cy.get(this.timeSaveButton).click();

  }

  clickAddMultipleTimeButton() {

    cy.xpath(this.addMultipleTimeButton).click();

  }

  clickTimeDeleteButton1() {

    cy.get(this.timeDeleteButton1).click();

  }

  inputStartTime1(starttime) {

    cy.xpath(this.startTime1).type(starttime)
  }

  inputEndTime1(endtime) {

    cy.get(this.endTime1).type(endtime)
  }

  selectSlot1(slot) {

    cy.xpath(this.selectSlotDropdown1).select(slot);

  }

  checkDate1(date) {

    cy.xpath(this.selectDateCheckBox1).click();
    cy.wait(1000);
    cy.xpath(`//label[normalize-space()="${date}"]/input`).click();

  }


  inputStartTime2(starttime) {

    cy.xpath(this.startTime2).type(starttime)
  }

  inputEndTime2(endtime) {

    cy.get(this.endTime2).type(endtime)
  }

  selectSlot2(slot) {

    cy.xpath(this.selectSlotDropDown2).select(slot);

  }

  checkDate2(date) {

    cy.xpath(this.selectDateCheckBox2).click();
    cy.wait(1000);
    cy.xpath(`//label[normalize-space()="${date}"]/input`).click();
    //cy.xpath(`(//label[normalize-space()="${date}")[1]/input`).click();


  }

  checkStartTimeValidation() {

    cy.get(this.startTimeValidation).
      should('be.visible').
      should('contain', 'Start Time is required');

  }

  checkEndTimeValidation() {

    cy.get(this.endTimeValidation).
      should('be.visible').
      should('contain', 'End Time is required');

  }

  checkSlotValidation() {

    cy.get(this.slotValidation).
      should('be.visible').
      should('contain', 'Slot is Required');

  }

  checkDateValidation() {

    cy.get(this.dateValidation).
      should('be.visible').
      should('contain', 'Date is Required');

  }

  checkTimePageValidation() {

    this.checkStartTimeValidation();
    this.checkEndTimeValidation();
    this.checkSlotValidation();
    this.checkDateValidation();

  }



  inputSlotCount1(count) {

    cy.get(this.slotCountField1).type(count);

  }

  inputSlotName1(slotname) {

    cy.get(this.slotNameField1).type(slotname);

  }

  inputSlotCount2(count) {

    cy.get(this.slotCountField2).type(count);

  }

  inputSlotName2(slotname) {

    cy.get(this.slotNameField2).type(slotname);

  }

  deleteSlot1() {

    cy.get(this.slotDeleteButton1).click();

  }
  deleteSlot2() {

    cy.get(this.slotDeleteButton2).click();

  }

  checkSlotDeleteValue(count, slotname) {

    cy.get(this.slotCountField1).should('not.have.value', count);
    cy.get(this.slotNameField1).should('not.have.value', slotname);

  }

  checkSlotCountValidation() {

    cy.get(this.slotCountValidation).should('be.visible').should('contain', 'Number is Required');

  }

  checkSlotTitleValidation() {

    cy.get(this.slotTitleValidation).should('be.visible').should('contain', 'Slot Title is Required');

  }

  checkSlotPageValidation() {

    this.checkSlotCountValidation();
    this.checkSlotTitleValidation();

  }


  clickSlotSaveButton() {

    cy.get(this.slotSaveButton).click();

  }

  clickSignupListMenu() {

    cy.get(this.signupListMenu).click();

  }

  searchSignupName(signupname) {

    cy.get(this.searchBox).type(signupname);

  }

  clickSignupEditButton() {

    cy.get(this.signupEditButton).click();

  }

  clickAddMultipleSlotButton() {

    cy.get(this.addMultipleSlotButton).click();

  }

  clickDateTab() {

    cy.xpath(this.dateTab).click();

  }

  clickSlotTab() {

    cy.xpath(this.slotTab).click({ force: true });

  }

  clickTimeTab() {

    cy.xpath(this.timeTab).click({ force: true });

  }

  clickSettingsTab() {

    cy.xpath(this.settingsTab).click();

  }

  clickDesignTab() {

    cy.xpath(this.designTab).click();

  }

  clickPublishTab() {

    cy.xpath(this.publishTab).click();

  }


  checkSignupTitleValidation() {

    cy.get('.col-lg-12 > .form-floating > .invalid-feedback > .font_s7').
      should('be.visible').
      should('contain', ' Title is Required');

  }

  checkSignupDescriptionValidation() {

    cy.get('.card-body > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(2) > .form-floating > .invalid-feedback > .font_s7').
      should('be.visible').
      should('contain', ' Description is Required');

  }

  checkSignupDateValidation() {

    cy.get('.col-md-4 > .form-floating > .invalid-feedback > .font_s7').
      should('be.visible').
      should('contain', ' Date is Required');

  }

  checkSignupLocationValidation() {

    cy.get('.content-inside > .col-md-6 > .form-floating > .invalid-feedback > .font_s7').
      should('be.visible').
      should('contain', ' Location is Required');

  }

  checkDatePageValidation() {

    this.checkSignupTitleValidation();
    this.checkSignupDescriptionValidation();
    this.checkSignupDateValidation();
    this.checkSignupLocationValidation();

  }


  inputSignupTitle(signuptitle) {

    cy.get(this.signupTitleField).type(signuptitle)

  }

  inputSignupDescription(signupdescription) {

    cy.get(this.signupDescriptionField).type(signupdescription)

  }

  inputSignupLocation(signuplocation) {

    cy.get(this.locationField).type(signuplocation);

  }
  inputSignupLocation2(signuplocation) {

    cy.get(this.locationField2).type(signuplocation)

  }

  checkDeleteValue(location, date) {

    cy.get(this.locationField).should('not.have.value', location);
    cy.get(this.dateField).should('not.have.value', date);

  }

  checkMultipleDates(location1, date1, location2, date2) {

    cy.get(this.locationField).should('have.value', location1);
    cy.get(this.dateField).should('have.value', date1);
    cy.get(this.locationField2).should('have.value', location2);
    cy.get(this.dateField2).should('have.value', date2);

  }

  inputSignupDate(signupdate) {

    cy.get(this.dateField).type(signupdate)

  }

  inputSignupDate2(signupdate) {

    cy.get(this.dateField2).type(signupdate)

  }

  clickDateSaveButton() {

    cy.get(this.dateSaveButton).click({ force: true });

  }

  clickDateDeleteButton() {

    cy.get(this.dateDeleteButton).click();

  }


  clickAddMultipleDateButton() {

    cy.get(this.addMultipleDateButton).click();

  }

  clickLogin(useremail, userpassword) {

    cy.get(this.loginMenu).click();
    cy.wait(2000);
    cy.url().should('include', 'https://test.eventzet.com/#/Eventshell/Eventlogin');
    cy.get(this.emailField).click({ force: true }).type(useremail);
    cy.wait(1000);
    cy.get(this.passwordField).click({ force: true }).type(userpassword);
    cy.wait(1000);
    cy.get(this.loginButton).click();
    cy.wait(5000);
  }

  logOut() {

    cy.get(this.menuDropdown).click({ force: true });
    cy.wait(1000);
    cy.xpath(this.logout).click({ force: true });
  }

  clickVolunteerSignup() {

    cy.get(this.volunteerSignupMenu).click({ force: true });

  }

  clickCreateVolunteerSignupButton() {

    cy.xpath(this.createVolunteerSignupButton).click();

  }



}
export default CreateSignup;