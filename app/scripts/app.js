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
    'duScroll'
  ])
  .value({
    'duScrollDuration': 1000
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/page2', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/page3', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/page4', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/page5', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/page6', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/page7', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/page8', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/page9', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
