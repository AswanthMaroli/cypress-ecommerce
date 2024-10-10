module.exports = {
    getCurrentDate: function() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; // January is 0!
        var yyyy = today.getFullYear();

        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }

        var currentDateFormatted =`${yyyy}-${mm}-${dd}`;

        return currentDateFormatted;
    },

    calculateSevenDaysLater: function() {
        var today = new Date();

       
        var sevenDaysLater = new Date(today);
        sevenDaysLater.setDate(today.getDate() + 7);
        var dd7 = sevenDaysLater.getDate();
        var mm7 = sevenDaysLater.getMonth() + 1; 
        var yyyy7 = sevenDaysLater.getFullYear();

        if (dd7 < 10) {
            dd7 = '0' + dd7;
        }

        if (mm7 < 10) {
            mm7 = '0' + mm7;
        }

        var sevenDaysLaterFormatted =`${yyyy7}-${mm7}-${dd7}`;

        return sevenDaysLaterFormatted;
    },

    calculatefourteenDaysLater: function() {
        var today = new Date();

    
        var fourteenDaysLater = new Date(today);
        fourteenDaysLater.setDate(today.getDate() + 14);
        var dd14 = fourteenDaysLater.getDate();
        var mm14 = fourteenDaysLater.getMonth() + 1; 
        var yyyy14 = fourteenDaysLater.getFullYear();

        if (dd14 < 10) {
            dd14 = '0' + dd14;
        }

        if (mm14 < 10) {
            mm14 = '0' + mm14;
        }

        var fourteenDaysLaterFormatted = `${yyyy14}-${mm14}-${dd14}`;
        return fourteenDaysLaterFormatted;
    },

    calculatethirtyDaysLater: function() {
        var today = new Date();

    
        var thirtyDaysLater = new Date(today);
        thirtyDaysLater.setDate(today.getDate() + 30);
        var dd30 = thirtyDaysLater.getDate();
        var mm30 = thirtyDaysLater.getMonth() + 1; 
        var yyyy30 = thirtyDaysLater.getFullYear();

        if (dd30 < 10) {
            dd30 = '0' + dd30;
        }

        if (mm30 < 10) {
            mm30 = '0' + mm30;
        }

        var thirtyDaysLaterFormatted =`${yyyy30}-${mm30}-${dd30}`;

        return thirtyDaysLaterFormatted;
    }
};
