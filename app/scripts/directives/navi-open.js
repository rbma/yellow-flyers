'use strict';

/* global $:false */

/**
 * @ngdoc directive
 * @name yellowFlyersApp.directive:naviOpen
 * @description
 * # naviOpen
 */
angular.module('yellowFlyersApp').directive('naviOpen', ['$location', 'mobileService', function ($location, mobileService) {

	var link = function($scope){

		//return promise from mobile check 
		mobileService.isMobile().then(function(data){
			$scope.mobile = data;
		});

		var naviOpen = $('.navi-open');


		$scope.go = function(path){
			$location.path(path);
			naviOpen.removeClass('active');

		};
	};


	return {
		templateUrl: 'views/_navi-open.html',
		restrict: 'EA',
		replace: true,
		link: link
	};
}]);
