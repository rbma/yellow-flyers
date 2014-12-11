'use strict';

/**
 * @ngdoc directive
 * @name yellowFlyersApp.directive:whenScrolled
 * @description
 * # whenScrolled
 */
angular.module('yellowFlyersApp').directive('whenScrolled', ['$timeout', 'flyerPosition', function ($timeout, flyerPosition) {


	var link = function($scope, element){



		element.waypoint(function(direction){
			//advance which one we are on if direction is down
			if (direction === 'down'){
				flyerPosition.advance();

				//for every third element, load more
				var pos = flyerPosition.getCount();

				if (pos % 3 === 0){
					//make sure we don't cross digests
					$timeout(function(){
						$scope.$apply(function(){
							$scope.loadMore();
						});
					});
				}
			}
			else{
				// flyerPosition.decrement();
			}
		});
	};



	return {
		restrict: 'A',
		link: link
	};
}]);
