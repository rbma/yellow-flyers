'use strict';

describe('Service: mobileService', function () {

  // load the service's module
  beforeEach(module('yellowFlyersApp'));

  // instantiate service
  var mobileService;
  beforeEach(inject(function (_mobileService_) {
    mobileService = _mobileService_;
  }));

  it('should do something', function () {
    expect(!!mobileService).toBe(true);
  });

});
