'use strict';

describe('Controller: InputBatchCtrl', function () {

  // load the controller's module
  beforeEach(module('batchUtilApp'));

  var InputBatchCtrl,
    $scope,
	location;

  // Initialize the controller and a mock scope
  beforeEach(
	  
	inject(function ($controller, $rootScope, BatchData, $location) {
		$scope = $rootScope.$new();
		location = $location;
	    InputBatchCtrl = $controller('InputBatchCtrl', {
	      $scope: $scope,
		  $location: location,
		  BatchData: BatchData 
	    });

		$scope.market = [
			{
				name: "Dummy 2",
				types: []
			},
			{
				name: "Dummy 1",
				types: []
			}  
		];
  })
  );
 /* it("Should parse the batchfile correctly", function(){
	  $scope.parse_batchfile();
	  expect(location.path()).toBe("/parse");
  }); */
});
