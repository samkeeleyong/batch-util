'use strict';

/**
 * @ngdoc function
 * @name batchUtilApp.controller:SettingsCtrl
 * @description
 * # SettingsCtrl
 * Controller of the batchUtilApp
 */
angular.module('batchUtilApp')
  .controller('SettingsCtrl', ["$scope", "$firebase",
	function ($scope, $firebase) {
		var ref = new Firebase("https://batch-util.firebaseio.com/MCSP-CREG");
	  
		var sync = $firebase(ref);

	    $scope.list = sync.$asObject();
	}
  ]);
