sap.ui.define([
    "ui5/workshop/controller/BaseController"
], function(BaseController) {
    "use strict";
    return BaseController.extend("ui5.workshop.controller.employees.EmployeeList", {
        onListItemPressed: function(oEvent) {
            var oItem, oCtx;
            oItem = oEvent.getSource();
            oCtx = oItem.getBindingContext();
            this.getRouter().navTo("employee", {
                employeeId: oCtx.getProperty("EmployeeID")
            });
        }
    });
});