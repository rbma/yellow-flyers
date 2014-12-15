'use strict';

describe('Directive: naviOpen', function () {

  // load the directive's module
  beforeEach(module('yellowFlyersApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<navi-open></navi-open>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the naviOpen directive');
  }));
});
