'use strict';

/**
 * @ngdoc function
 * @name batchUtilApp.controller:SettingsCtrl
 * @description
 * # SettingsCtrl
 * Controller of the batchUtilApp
 */
angular.module('batchUtilApp')
  .controller('SettingsCtrl',['$scope', '$firebase', 'FIREBASE_URL',
	function ($scope, $firebase, FIREBASE_URL) {

		var obj = $firebase(new Firebase(FIREBASE_URL)).$asObject();
	
		obj.$loaded().then(function(){
			//console.log("Loaded record:" + obj.$id, obj.egypt);
			console.log(obj);

			angular.forEach(obj, function(value, key){
				console.log(value);
			});
		});
	}]
  );
