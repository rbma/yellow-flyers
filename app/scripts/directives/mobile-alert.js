'use strict';

/**
 * @ngdoc directive
 * @name yellowFlyersApp.directive:mobileAlert
 * @description
 * # mobileAlert
 */
angular.module('yellowFlyersApp').directive('mobileAlert', ['mobileService', function (mobileService) {

	return {
		templateUrl: 'views/_alert.html',
		restrict: 'EA',
		link: function postLink($scope) {

			$scope.mobile = false;
			$scope.showAlert = false;
			

			mobileService.isMobile().then(function(response){
				if (response === false){
					$scope.mobile = false;
					$scope.showAlert = false;
				}
				else{
					$scope.mobile = true;
					$scope.showAlert = true;
				}
			});

			$scope.closeAlert = function(){
				$scope.showAlert = false;
			};
		}
	};
}]);
