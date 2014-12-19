'use strict';

/**
 * @ngdoc function
 * @name batchUtilApp.controller:ParseBatchCtrl
 * @description
 * # ParseBatchCtrll
 * Controller of the batchUtilApp
 * @author Sam Ong
 */
angular.module('batchUtilApp').controller('ParseBatchCtrl', function ($scope, BatchData) {
	$scope.accordion_status = {
		header_open:true, 
		details_open:true,
		trailer_open:true
	}
	// toggle active record (accordion)
	$scope.toggle = {
		header: false,
		detail: {},
		trailer: false
	};

	$scope.header = BatchData.data.header;
	$scope.trailer = BatchData.data.trailer;

	$scope.details = BatchData.data.details;
	$scope.record_attributes = BatchData.record_attributes;

	// @param record (i.e. 1000 record line)
	// @description - show the record on the table 
	$scope.show_record = function(record){

		//clears existing record in the table
		$scope.record = [];

		//refactor this in the future -- bad design
		$scope.record_type = BatchData.get_record_type(record[0]);
		console.log($scope.record_type);
		//refactor this in the future

		$scope.record_values = $scope.searchRecordsByRecordNumber(record[1]);		

		$scope.record_values.forEach(function(element, index, array){
			$scope.record.push({
				'attribute': $scope.record_attributes[$scope.record_type][index],
				'value': element
			});
		});
	}

	// @param record_number
	// @description - search for the record
	$scope.searchRecordsByRecordNumber = function(record_number){
		
		if (record_number == 1){
			return $scope.header;
		}	

		// add 2 for the header and the trailer	(i.e. For 5 Detail records, Trailer record number will be 7)
		if(record_number == $scope.details.length + 2){
			return $scope.trailer;
		}		

		// loop through the details (array of arrays)
		for(var i = 0; i < $scope.details.length; i++){
			// Check the Record Number
			if($scope.details[i][1] == record_number){
				return $scope.details[i];
			}
		}
	}

	//initial state of the view
	$scope.init = function(){
		$scope.show_record($scope.header);
	}
});
