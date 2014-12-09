'use strict';


/**
 * @ngdoc directive
 * @name yellowFlyersApp.directive:modalBox
 * @description
 * # modalBox
 */
angular.module('yellowFlyersApp').directive('modalBox', ['$rootScope', function ($rootScope) {
	
	var link = function($scope, element, attrs){

		$scope.modalImages = [];

		var image = element.find('.modal-image img');
		
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
				$rootScope.$broadcast('bindZoom');

			},
			closeModal: function(){
				var self = this;
				self.open = false;
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
