'use strict';

/**
 * @ngdoc directive
 * @name yellowFlyersApp.directive:setHeight
 * @description
 * # setHeight
 */
angular.module('yellowFlyersApp').directive('setHeight', ['$window', '$timeout', function ($window, $timeout) {

	var link = function($scope, element, attrs){
		//sets height to 100% of window height for each list item
		var winHeight = $window.innerHeight;

		var t;

		//make sure data is in from Tabletop before running any functions on list
		var checkData = function(){
			if ($scope.dataIn){
				element.find('li').css({
					height: winHeight
				});
				
				//cancel timeout
				t.cancel();

			}
			else{
				t = $timeout(checkData, 500);
			}
		};

		//start checking
		checkData();
		
		
		

	};


	return {
		restrict: 'EA',
		link: link
	};
}]);
