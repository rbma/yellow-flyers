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
    'ngTouch',
    'ngSanitize',
    'duScroll',
    'adaptive.detection'
  ])
  .config(function ($routeProvider, $anchorScrollProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    $anchorScrollProvider.disableAutoScrolling();
  });
