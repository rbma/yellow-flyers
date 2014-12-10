'use strict';


/**
 * @ngdoc directive
 * @name yellowFlyersApp.directive:modalBox
 * @description
 * # modalBox
 */
angular.module('yellowFlyersApp').directive('modalBox', ['$rootScope', function ($rootScope) {
	
	var link = function($scope, element){

		$scope.modalImages = [];

		var image = element.find('.modal-image img');

		$scope.$watch('modal', function(newVal){
			console.log(newVal.open);
		});
		
		//modal properties
		$scope.modal = {
			open: false,
			//used to store how many images are in array
			count: 0,
			openModal: function(imgIndex, parentIndex){
				var self = this;
				self.open = true;
				console.log(imgIndex, parentIndex);

				//displayed image should be selected one coming though, parent collection shoudl be ready
				$scope.modalImages = $scope.flyers[parentIndex].subimages.split(', ');
				self.count = $scope.modalImages.length;
				$scope.modalSelect = imgIndex;
				$rootScope.$broadcast('bindZoom');

			},
			closeModal: function(){
				var self = this;
				self.open = false;
				//clear out scope
				$scope.modalImages = [];
				$scope.modalSelect = null;
				//broadcast message to unbind zoom
				$rootScope.$broadcast('unbindZoom');
			},
			zoom: function(){
				image.okzoom({
					width: 200,
					height: 200,
					round: true,
					background: '#ffffff',
					shadow: '0 0 5px #000',
					border: '1px solid black'
				});
			},

			advance: function(){
				image.removeClass('ng-hide-remove ng-hide-add');
				$rootScope.$broadcast('unbindZoom');

				var self = this;

				if ($scope.modalSelect < self.count - 1){
					$scope.modalSelect++;
				}
				else{
					$scope.modalSelect = 0;
				}
				$rootScope.$broadcast('bindZoom');
			},

			rewind: function(){
				image.removeClass('ng-hide-remove ng-hide-add');
				$rootScope.$broadcast('unbindZoom');
				var self = this;
				if ($scope.modalSelect > 0){
					$scope.modalSelect--;
				}
				else{
					$scope.modalSelect = self.count - 1;
				}
				$rootScope.$broadcast('bindZoom');
				
			}
		};
	};



	return {
		templateUrl: 'views/_modal.html',
		restrict: 'E',
		replace: true,
		link: link
	};
}]);
