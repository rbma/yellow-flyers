'use strict';

/**
 * @ngdoc directive
 * @name yellowFlyersApp.directive:zoomLoad
 * @description
 * # zoomLoad
 */
angular.module('yellowFlyersApp').directive('zoomLoad', ['$rootScope', function ($rootScope) {
	return {
		restrict: 'A',
		link: function($scope, element){
			$rootScope.$on('bindZoom', function(){
				element.bind('load', function(){
					element.okzoom({
						width: 300,
						height: 300,
						round: true
					});
				});
			});
			

			$rootScope.$on('unbindZoom', function(){
				element.unbind();
			});
		}
	};
}]);
