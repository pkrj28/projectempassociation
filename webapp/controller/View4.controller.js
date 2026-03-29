sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "com/pjnamespace/project4/model/formatter"
], 
function (Controller, formatter, Filter, FilterOperator) {
    "use strict";
    return Controller.extend("com.pjnamespace.project4.controller.View4", {
        f: formatter,
        onInit: function () {
           this.getOwnerComponent().getRouter().getRoute("RouteView4").attachPatternMatched(this.onPatternMatched, this);
        },
        onPatternMatched: function(oEvent) {
        var Empid = oEvent.getParameter("arguments").key;
           this.byId("SF1").bindElement("/EmpSet('"+Empid+"')");
        } ,
         onBack: function() {
        history.go(-1);
        } ,
        onSave: function() {
     {
    var Empid = this.byId("Empid1").getValue();
    var Empname = this.byId("Empname1").getValue();
    var City = this.byId("City1").getValue();
    var Country = this.byId("Country1").getValue();
    var Salary = this.byId("Salary1").getValue();
    var Currency = this.byId("Currency1").getValue();
    var Status = this.byId("Status1").getValue();
    var Begindate = this.byId("Begindate1").getValue();
    var Phonenumber = this.byId("Phonenumber1").getValue();
    var Mailid = this.byId("Mailid1").getValue();

   Begindate = formatter.formatDate3(Begindate);
   if (!Begindate)
   { Begindate = "2026-03-11T00:00:00"}

 
    var Payload = {
        Empid: Empid,
        Empname: Empname,
        City: City,
        Country: Country,
        Salary: Salary,
        Zcurrency: Currency,
        Status: Status,
        Begindate: Begindate,
        Phonenumber: Phonenumber,
        Mailid: Mailid
    };

    var oModel = this.getOwnerComponent().getModel();

    oModel.update("/EmpSet('"+Empid+"')", Payload, {
        success: function () {
           sap.m.MessageToast.show("Employee updated successfully-");
               oModel.refresh(true);
        },
        error: function () {
       sap.m.MessageBox.error("Error uodate employee") }
    });
}



        }     
    });
});