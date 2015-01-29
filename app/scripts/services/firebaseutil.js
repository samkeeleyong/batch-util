'use strict';

/**
 * @ngdoc service
 * @name batchUtilApp.firebaseUtil
 * @description
 * # firebaseUtil
 * Factory in the batchUtilApp.
 * @author Sam Ong
 */
angular.module('batchUtilApp')
  .factory('firebaseUtil',['$firebase', 'FIREBASE_URL', function ($firebase, FIREBASE_URL) {
    // Service logic
    // ...
		
	  var firebase_ref = $firebase(new Firebase("https://batch-util.firebaseio.com/")).$asObject();
	  var markets = [];

	  firebase_ref.$loaded().then(function(){
		console.log("Firebase Reference created and loaded!");
		firebase_ref.forEach(function(value, key){
			var market = {};
			var temp_list = [];

			angular.forEach(value, function(value, key){
				temp_list.push({
					name: key, 
					attributes: value
				});
			});
			
			market.types = temp_list;
			market.name = key;
			markets.push(market);
		});
	  });
	
    // Public API here
    return {
		get_options: function () {
			return markets;
		}
    };
  }]
  );
