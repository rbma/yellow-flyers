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

		var image = element.find('.modal-image img[0]');
		
		//modal properties
		$scope.modal = {
			
			//currently closed
			open: false,
			
			//used to store how many images are in array
			count: 0,
			
			//modal count. always starts on 0 image (first) and references parent flyer from ng-repeat
			openModal: function(imgIndex, parentIndex){
				var self = this;
				
				//modal box is now open
				self.open = true;


				//grab list of subimages from parent flyer, and split into array
				$scope.modalImages = $scope.flyers[parentIndex].subimages;
				
				//how many subimages are there in flyer?
				self.count = $scope.modalImages.length;
				
				//currently visible modal image index count
				$scope.modalSelect = imgIndex;
				
				//fire up loupe
				$rootScope.$broadcast('bindZoom');

			},


			closeModal: function(){
				
				var self = this;
				
				//modal is now closed
				self.open = false;
				

				//clear out scope of modal images
				$scope.modalImages = [];
				
				//clear out indexed item
				$scope.modalSelect = 0;

				//broadcast message to unbind loupe
				$rootScope.$broadcast('unbindZoom');
			},

			//loupe settings
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

			//next item
			advance: function(){

				var self = this;


				//animation settings
				image.removeClass('ng-hide-remove ng-hide-add');

				//unbind loupe
				$rootScope.$broadcast('unbindZoom');

				// if item is still less than total subimages length, advance count
				if ($scope.modalSelect < self.count - 1){
					$scope.modalSelect++;
				}
				//otherwise, go back to beginning
				else{
					$scope.modalSelect = 0;
				}

				$rootScope.$broadcast('imgChange', $scope.modalSelect);

				//rebind loupe
				$rootScope.$broadcast('bindZoom');
			},


			//prev
			rewind: function(){

				var self = this;

				//animation shit
				image.removeClass('ng-hide-remove ng-hide-add');
				
				//remove loupe
				$rootScope.$broadcast('unbindZoom');
				
				//if item is greater than zero, rewind one
				if ($scope.modalSelect > 0){
					$scope.modalSelect--;
				}

				//otherwise, go to end
				else{
					$scope.modalSelect = self.count - 1;
				}

				$rootScope.$broadcast('imgChange', $scope.modalSelect);

				//hook up loupe again
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
