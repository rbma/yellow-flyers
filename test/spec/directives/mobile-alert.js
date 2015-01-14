'use strict';

describe('Directive: mobileAlert', function () {

  // load the directive's module
  beforeEach(module('yellowFlyersApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<mobile-alert></mobile-alert>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the mobileAlert directive');
  }));
});
