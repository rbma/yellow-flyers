'use strict';

/**
 * @ngdoc directive
 * @name yellowFlyersApp.directive:nextPage
 * @description
 * # nextPage
 */
angular.module('yellowFlyersApp').directive('nextPage', ['$location', function ($location) {

	var link = function($scope){

		$scope.nextMessage = 'Next';
		$scope.prevMessage = 'Prev';

		$scope.showNext = true;
		$scope.showPrev = true;
		
		var currPath = $location.path();

		if (currPath === '/'){
			$scope.showPrev = false;
		}
		if (currPath === '/page9'){
			$scope.showNext = false;
		}

		
		$scope.nextPage = function(){


			if (currPath === '/'){
				$location.path('/page2');
			}

			else{
				//convert last page number into digit
				var digitString = currPath.substring(currPath.length - 1);
				var digit = parseInt(digitString, 10);
				var newPath = '/page' + (digit + 1);
				$location.path(newPath);
			}
		};

		$scope.prevPage = function(){

			if (currPath === '/page2'){
				$location.path('/');
			}

			else{
				var digitString = currPath.substring(currPath.length - 1);
				var digit = parseInt(digitString, 10);
				var newPath = '/page' + (digit - 1);
				$location.path(newPath);
			}
			
		};
	};


	return {
		restrict: 'EA',
		link: link
	};
}]);
