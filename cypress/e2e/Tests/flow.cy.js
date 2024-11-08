// // flowS.js
// describe('EventZet test', () => {

// var SignupTests                     = require('./signUp.cy.js'); // Require the signup tests
// var LoginTests                      = require('./login.cy.js');   // Require the login tests
// var SearchFilterTests               = require('./searchFilter.cy.js');
// var HomeTests                       = require('./home.cy.js');
// var CreateEventBasicInfoTests       = require('./createEventBasicInfo.cy.js');
// var CreateEventDetailsTests         = require('./createEventDetails.cy.js');
// var CreateEventAddTicketTests       = require('./createEventAddTickets.cy.js');
// var CreateEventCustomerDetailsTests = require('./createEventCustomerDetails.cy.js');
// var CreateEventPublishTests         = require('./createEventPublish.cy.js');
// var EventDetailsTests               = require('./eventDetails.cy.js');
// var EventRegistrationTests          = require('./eventRegistration.cy.js');
// var OrganizerDashboardTests         = require('./organizerDashBoard.cy.js');
// var MyEventsTests                   = require('./myEvents.cy.js');

//   console.log("Eventzet test");


//    it('Run HomePage Tests', () => {
//     cy.wrap(null) 
//     .then( () => {
//       for (const test of HomeTests) {
//          test();
//       }
//     });

//    });

//   it('Run Signup Tests', () => {
//     // for (const test of SignupTests) {
//     //   await test();
//     // }
//     cy.wrap(null) // Initialize a Cypress chain
//     .then( () => {
//       for (const test of SignupTests) {
//          test();
//       }
//     });
//   });


//   it('Run Login Tests', () => {
//     cy.wrap(null) 
//     .then( () => {
//       for (const test of LoginTests) {
//          test();
//       }
//     });
//   });

// it('Run SearchFilter Tests', () => {
//   cy.wrap(null) 
//   .then( () => {
//     for (const test of SearchFilterTests) {
//        test();
//     }
//   });
// });

//   it('Run CreateEventBasicInfo Tests', () => {
//     cy.wrap(null) 
//     .then( () => {
//       for (const test of CreateEventBasicInfoTests) {
//          test();
//       }
//     });
//    });

//    it('Run CreateEventDetails Tests', () => {
//     cy.wrap(null) 
//     .then( () => {
//       for (const test of CreateEventDetailsTests) {
//          test();
//       }
//     });
//    });

//   it('Run CreateEventAddTickets Tests', () => {
//     cy.wrap(null) 
//     .then( () => {
//       for (const test of CreateEventAddTicketTests) {
//          test();
//       }
//     });
//    });

//    it('Run CreateEventCustomerDetails Tests', () => {
//     cy.wrap(null) 
//     .then( () => {
//       for (const test of CreateEventCustomerDetailsTests) {
//          test();
//       }
//     });
//    });

//   it('Run CreateEventPublish Tests', () => {
//     cy.wrap(null) 
//     .then( () => {
//       for (const test of CreateEventPublishTests) {
//          test();
//       }
//     });
//    });

//    it('Run EventDeatails Tests', () => {
//     cy.wrap(null) 
//     .then( () => {
//       for (const test of EventDetailsTests) {
//          test();
//       }
//     });
//    });



// it('Run EventRegistration Tests', () => {
//   cy.wrap(null) 
//   .then( () => {
//     for (const test of EventRegistrationTests) {
//        test();
//     }
//   });
//  });

// it('Run OragnizerDashboard Tests', () => {
//   cy.wrap(null) 
//   .then( () => {
//     for (const test of OrganizerDashboardTests) {
//        test();
//     }
//   });
// });

// it('Run MyEvents Tests', () => {
//   cy.wrap(null) 
//   .then( () => {
//     for (const test of MyEventsTests) {
//        test();
//     }
//   });
// });



// });


describe('EventZet End to End Test', () => {

  const { HomeTests } = require('./home.cy');
  const { SignupTests } = require('./signUp.cy');
  const { LoginTests } = require('./login.cy');
  const { SearchFilterTests } = require('./searchFilter.cy');
  const { BookingListTests } = require('./bookingList.cy');
  const { MyEventsTests } = require('./myEvents.cy');
  const { CreateEventBasicInfoTests } = require('./createEventBasicInfo.cy');
  const { CreateEventVenueTests } = require('./createEventVenue.cy');
  const { CreateEventLevelTests } = require('./createEventLevel.cy');
  const { CreateEventTimeSlotsTests } = require('./createEventTimeSlots.cy');
  const { CreateEventTicketsTests } = require('./createEventTickets.cy');
  const { CreateEventDesignTests } = require('./createEventDesign.cy');
  const { CreateEventSettingsTests } = require('./createEventSettings.cy');
  const { CreateEventPublishTests } = require('./createEventPublish.cy');
  const { EventDetailsTests } = require('./eventDetails.cy');
  const { EventRegistrationTests } = require('./eventRegistration.cy');
  const { OrganizerDashboardTests } = require('./organizerDashBoard.cy');
   const { MyVolunteerSignupTests } = require('./myVolunteerSignup.cy');
  const { SignupListTests }  = require('./createdSignupList.cy');
  const { CreateSignupTests } = require('./createSignup.cy');
  const { VolunteerHomeTests } = require('./volunteerHome.cy');
  const { SignupRegistrationTests } =require('./signupRegistration.cy');
  const { SignupMessageTests } = require('./signupMessage.cy');
});




// describe('Your Flow Tests', () => {
//   // Your existing code

//   // Use the Search Filter tests
//   it('Run HomePage Tests', () => {
//     HomeTests.forEach((test) => {
//       test(); // Execute each test
//     });
//   });

//   it('Run Signup Tests', () => {
//     SignupTests.forEach((test) => {
//       test(); // Execute each test
//     });
//   });

//   // Your other code
// });