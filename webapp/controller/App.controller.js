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
				jQuery.sap.log.error("Sorry, but the hash '" + sHash + "' is invalid.", "The resource was not found.");
			});
			oRouter.attachRouteMatched(function (oEvent){
				var sRouteName = oEvent.getParameter("name");
				// do something, i.e. send usage statistics to backend
				// in order to improve our app and the user experience (Build-Measure-Learn cycle)
				jQuery.sap.log.warning("User accessed route " + sRouteName + ", timestamp = " + new Date().getTime());
			});
		}

	});

});

