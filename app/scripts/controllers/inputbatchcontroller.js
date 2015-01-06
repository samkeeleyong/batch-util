'use strict';

/**
 * @ngdoc function
 * @name batchUtilApp.controller:InputBatchCtrl
 * @description
 * Parse a Batch File to be made more readable
 * Controller of the batchUtilApp
 * @author Sam Ong
 */

angular.module('batchUtilApp')
  .controller('InputBatchCtrl', function ($scope, $location, $firebase, BatchData) {
	$scope.data = {};
	$scope.data_values = [];
	$scope.data_type = "";
	$scope.data_attributes = BatchData.data_attributes;


	//experimental
	//
	var ref = new Firebase("https://batch-util.firebaseio.com/MCSP-CREG/types");  
	var sync = $firebase(ref);
    $scope.data_types = sync.$asObject();
	//
	//experimental

	$scope.parse_batchfile = function(){
		var text = $('#mytextarea').val();
		var lines = text.split("\n");

		BatchData.add_header(lines[0]);
		BatchData.add_trailer(lines[lines.length-1]);

		//clear existing details
		BatchData.clear_details();

		//details
		for(var i = 1 ; i < lines.length - 1; i++){
			BatchData.add_details(lines[i]);
		}

		$location.path('/parse');
	}
  });

	
	
