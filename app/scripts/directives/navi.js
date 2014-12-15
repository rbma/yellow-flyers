'use strict';

/**
 * @ngdoc directive
 * @name yellowFlyersApp.directive:navi
 * @description
 * # navi
 */
angular.module('yellowFlyersApp')
  .directive('navi', function () {
    return {
      templateUrl: 'views/_navi.html',
      replace: true,
      restrict: 'A'
    };
  });
