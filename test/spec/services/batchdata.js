'use strict';

describe('Service: BatchData', function () {

  // load the service's module
  beforeEach(module('batchUtilApp'));

  // instantiate service
  var BatchData;
  beforeEach(inject(function (_BatchData_) {
    BatchData = _BatchData_;
  }));

  it('should do something', function () {
    expect(!!BatchData).toBe(true);
  });

});
