'use strict';

describe('Controller: ParseBatchCtrl', function () {

  // load the controller's module
  beforeEach(module('batchUtilApp'));

  var ParseBatchCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ParseBatchCtrl = $controller('ParseBatchCtrl', {
      $scope: scope
    });
  }));


});
