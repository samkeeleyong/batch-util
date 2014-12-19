'use strict';

describe('Controller: InputBatchCtrl', function () {

  // load the controller's module
  beforeEach(module('batchUtilApp'));

  var InputBatchCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InputBatchCtrl = $controller('InputBatchCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
