'use strict';

/**
 * @ngdoc directive
 * @name yellowFlyersApp.directive:setHeight
 * @description
 * # setHeight
 */
angular.module('yellowFlyersApp').directive('setHeight', ['$window', '$timeout', '$rootScope', function ($window, $timeout, $rootScope) {

	var link = function($scope, element){

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
				$timeout.cancel(t);

				
				//send message that resize is done
				$rootScope.$broadcast('resized');

			}
			else{
				t = $timeout(checkData, 1000);
			}
		};

		//start checking
		checkData();

		//resize height on window resize
		angular.element($window).bind('resize', function(){
			winHeight = $window.innerHeight;

			element.find('li').css({
				height: winHeight
			});
		});


		
		
		

	};


	return {
		restrict: 'EA',
		link: link
	};
}]);
