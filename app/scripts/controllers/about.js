'use strict';

/**
 * @ngdoc function
 * @name yellowFlyersApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yellowFlyersApp
 */
angular.module('yellowFlyersApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
