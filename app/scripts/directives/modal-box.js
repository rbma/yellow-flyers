'use strict';

/**
 * @ngdoc directive
 * @name yellowFlyersApp.directive:modalBox
 * @description
 * # modalBox
 */
angular.module('yellowFlyersApp').directive('modalBox', function () {
	
	var link = function($scope, element, attrs){

		$scope.modalImages = [];
		
		//modal properties
		$scope.modal = {
			open: false,
			openModal: function(imgIndex, parentIndex){
				var self = this;
				self.open = true;
				console.log(imgIndex, parentIndex);

				//displayed image should be selected one coming though, parent collection shoudl be ready
				$scope.modalImages = $scope.flyers[parentIndex].subimages.split(', ');
				$scope.modalSelect = imgIndex;

			},
			closeModal: function(){
				var self = this;
				self.open = false;
			}
		};
	};



	return {
		templateUrl: 'views/_modal.html',
		restrict: 'E',
		replace: true,
		link: link
	};
});
