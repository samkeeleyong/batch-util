'use strict';

describe('Controller: RecordDetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('batchUtilApp'));

  var RecorddetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RecorddetailsCtrl = $controller('RecordDetailsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
