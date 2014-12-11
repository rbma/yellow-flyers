'use strict';

/**
 * @ngdoc overview
 * @name yellowFlyersApp
 * @description
 * # yellowFlyersApp
 *
 * Main module of the application.
 */
angular
  .module('yellowFlyersApp', [
    'ngAnimate',
    'ngRoute',
    'ngSanitize',
    'infinite-scroll'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
