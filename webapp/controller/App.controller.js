sap.ui.define([
	"ui5/workshop/controller/BaseController"
], function (BaseController) {
	"use strict";

	return BaseController.extend("ui5.workshop.controller.App", {

		onInit: function () {
			var oRouter = this.getRouter();
			oRouter.attachBypassed(function (oEvent) {
				var sHash = oEvent.getParameter("hash");
				// do something here, i.e. send logging data to the backend for analysis
				// telling what resource the user tried to access...
				jQuery.sap.log.info("Sorry, but the hash '" + sHash + "' is invalid.", "The resource was not found.");
			});
		}

	});

});

