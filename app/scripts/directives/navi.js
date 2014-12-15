'use strict';
/* global $:false */

/**
 * @ngdoc directive
 * @name yellowFlyersApp.directive:navi
 * @description
 * # navi
 */
angular.module('yellowFlyersApp').directive('navi', function () {

	

	var link = function($scope){
		$scope.navOpen = false;
		var naviOpen = $('.navi-open');

		$scope.openNav = function(){
			naviOpen.addClass('active');
			$scope.navOpen = true;
		};

		$scope.closeNav = function(){
			naviOpen.removeClass('active');
			$scope.navOpen = false;
		};
	};

	return {
		templateUrl: 'views/_navi.html',
		replace: true,
		restrict: 'EA',
		link: link
	};
});
