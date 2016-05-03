sap.ui.define([
    "ui5/workshop/controller/BaseController"
], function(BaseController) {
    "use strict";

    return BaseController.extend("ui5.workshop.controller.Home", {
        onDisplayNotFound: function(oEvent) {
            //display the "notFound" target without changing the hash
            this.getRouter().getTargets().display("notFound", {
            	fromTarget : "home"
            });
        }
    });

});