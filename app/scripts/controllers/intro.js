'use strict';

/**
 * @ngdoc function
 * @name yellowFlyersApp.controller:IntroCtrl
 * @description
 * # IntroCtrl
 * Controller of the yellowFlyersApp
 */
angular.module('yellowFlyersApp')
  .controller('IntroCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
