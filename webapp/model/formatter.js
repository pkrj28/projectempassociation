sap.ui.define([
], 
function () {
    "use strict";
    return {
        FormatStatus: function(Status){
        if(Status==="P"){
            return "Pass(P)";
        }
        else if(Status==="N"){
            return "No(N)";
        }
         else { return Status }
        },
       FormatDes: function(Description){
        if(Description==="Vacation"){
            return "Error";
        }
        },

        formatDate: function (Begindate) {
            if (!Begindate) {
                return "";
            }
            var oDateFormat = sap.ui.core.format.DateFormat.getDateInstance({
                pattern: "dd-MM-yyyy"
            }, sap.ui.getCore().getConfiguration().getLocale());

            return oDateFormat.format(Begindate);
},
        formatDate1: function (EndDate) {
            if (!EndDate) {
                return "";
            }
            var oDateFormat = sap.ui.core.format.DateFormat.getDateInstance({
                pattern: "dd-MM-yyyy"
            }, sap.ui.getCore().getConfiguration().getLocale());

            return oDateFormat.format(EndDate);
},
     formatDate3: function (Begindate) {
    if (!Begindate) {
        return "";
    }

    var oDate = (Begindate instanceof Date) ? Begindate : new Date(Begindate);

    var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({
        pattern: "yyyy-MM-dd'T'HH:mm:ss"
    });

    return oDateFormat.format(oDate);


}
    
    };
});