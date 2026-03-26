sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "com/pjnamespace/project4/model/formatter"
], 
function (Controller, formatter, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("com.pjnamespace.project4.controller.View1", {

        f: formatter,

        onInit: function () {

        },
        onBack: function() {
        history.go(-1);
        },
    onSave: function () {
    var Empid = this.byId("Empid").getValue();
    var Empname = this.byId("Empname").getValue();
    var City = this.byId("City").getValue();
    var Country = this.byId("Country").getValue();
    var Salary = this.byId("Salary").getValue();
    var Currency = this.byId("Currency").getValue();
    var Status = this.byId("Status").getValue();
    var Begindate = this.byId("Begindate").getValue();
    var Phonenumber = this.byId("Phonenumber").getValue();
    var Mailid = this.byId("Mailid").getValue();

   Begindate = formatter.formatDate3(Begindate);

    if (!Empid || !Empname) {
        sap.m.MessageToast.show("Employee ID and Name are required");
        return;
    }

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

    oModel.create("/EmpSet", Payload, {
        success: function (req,res) {
            sap.m.MessageToast.show("Employee created successfully");
        },
        error: function () {
            sap.m.MessageBox.error("Error creating employee");
        }
    });
}


       
    });
});