sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "com/pjnamespace/project4/model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], 
function (Controller, formatter, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("com.pjnamespace.project4.controller.View1", {

        f: formatter,

        onInit: function () {

           this.getOwnerComponent().getRouter().getRoute("RouteView2").attachPatternMatched(this.onPatternMatched, this);

        },
        onPatternMatched: function(oEvent) {

        var Traid = oEvent.getParameter("arguments").key;
           this.byId("SF").bindElement("/Travel('"+Traid+"')");
             this.byId("objhead").bindElement("/Travel('"+Traid+"')");

        }
 

    });
});