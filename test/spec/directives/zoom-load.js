'use strict';

describe('Directive: zoomLoad', function () {

  // load the directive's module
  beforeEach(module('yellowFlyersApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<zoom-load></zoom-load>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the zoomLoad directive');
  }));
});
