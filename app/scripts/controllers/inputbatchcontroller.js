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
  .controller('InputBatchCtrl', function ($scope, $location, $firebase, firebaseUtil, BatchData) {
	$scope.data = {};
	$scope.data_values = [];
	$scope.data_type = "";
	$scope.data_attributes = BatchData.data_attributes;

	//experimental
	$scope.markets = firebaseUtil.get_options();

	//@param market_name:string, (e.g. MCSP or Egypt)
	//@desc persist the selected market for parsing
	$scope.select_market = function(market_name){
		var market = find_market(market_name);
		return BatchData.set_market(market);
	}
	
	//@param market_name:string, (e.g. MCSP or Egypt) 
	//@return market object 
	var find_market = function(market_name){
		//refactor next time to be functional 
		for(var i = 0; i < $scope.markets.length; i++){
			if($scope.markets[i].name == market_name){
				return $scope.markets[i];
			}
		}
	}
	//experimental

	$scope.parse_batchfile = function(){
		var lines = $scope.textarea_text.split("\n");
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
	

	$scope.textarea_text = "0000|1|20141015072400|1|FILE01-Initial Reg|MCW|MasterCard Worldwide|||ZENNGA01|Zenith Bank PLC|0001|2014101500101|20141115235959|C|CLNTZEN001|\n1000|2|A|234029872378|||MWA|234029872378|AUGUSTINE.ACHU@zenithbank.com|AA1234|Passport|M|Mr|AUGUSTINE|E|ACHU|1976-07-31|23412781642|Plot 87 Ajose Adeogun Street|Victoria Island|Lagos|NGA|234||||||Y|+01|MNOZEN001|006||N|||||||||||||||\n1001|3|A|234029872378|12584||5297207349302648|02|N|4912||110001||AUGUSTINE|E|ACHU|Plot 87 Ajose Adeogun Street|Victoria Island|Lagos|NGA|234|NGA|19760731|\n9999|4|4";
  });
	
