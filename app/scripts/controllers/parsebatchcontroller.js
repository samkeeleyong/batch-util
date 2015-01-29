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

	// @param record (e.g. a whole 1000 record line)
	// @description - show the record on the view table 
	$scope.show_record = function(record){
		//clears existing record in the table
		$scope.record = [];

		//record[0], Denotes the record type, (e.g. 0000 or 100A)
		var record_attributes = BatchData.find_type(record[0]).attributes;

		//record[1], Denotes the record index,  (e.g. 1, 2 or 9). 
		var record_values = $scope.searchRecordsByRecordNumber(record[1]);

		record_values.forEach(function(element, index, array){
			$scope.record.push({
				'attribute': record_attributes[index],
				'value': element
			});
		});

	}

	// @param record_number
	// @description - search for the record by record number
	// @return a record line 
	$scope.searchRecordsByRecordNumber = function(record_number){
		
		if (record_number == 1){
			return $scope.header;
		}

		// add 2 for the header and the trailer(i.e. For 5 Detail records, Trailer record number will be 7)
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
