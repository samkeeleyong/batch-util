'use strict';

describe('Controller: HeaderCtrl', function () {

  // load the controller's module
  beforeEach(module('batchUtilApp'));

  var scope, location, HeaderController;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($rootScope, $controller, $location){
    scope = $rootScope.$new();
	location = $location;
	HeaderController = $controller("HeaderCtrl",{
		$scope: scope,
		$location: location
	});

  }));


  //@test_function $scope.isActive() 
  it('Input view should be active when the path is /input', function (){
	location.path('/input');
	expect(location.path()).toBe("/input");
	expect(scope.isActive("/input")).toBe(true);
  });

  //@test_function $scope.isActive()
  it('Parse view should be active when the path is /input', function(){
	location.path('/parse');
	expect(location.path()).toBe("/parse");
	expect(scope.isActive("/parse")).toBe(true);
  });
  
});
