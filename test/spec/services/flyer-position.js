'use strict';

describe('Service: flyerPosition', function () {

  // load the service's module
  beforeEach(module('yellowFlyersApp'));

  // instantiate service
  var flyerPosition;
  beforeEach(inject(function (_flyerPosition_) {
    flyerPosition = _flyerPosition_;
  }));

  it('should do something', function () {
    expect(!!flyerPosition).toBe(true);
  });

});
