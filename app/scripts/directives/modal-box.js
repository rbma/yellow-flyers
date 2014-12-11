'use strict';


/**
 * @ngdoc directive
 * @name yellowFlyersApp.directive:modalBox
 * @description
 * # modalBox
 */
angular.module('yellowFlyersApp').directive('modalBox', ['$rootScope', function ($rootScope) {
	
	var link = function($scope){


		$scope.modalImages = [];

		
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
				

			},


			closeModal: function(){
				
				var self = this;
				
				//modal is now closed
				self.open = false;
				

				//clear out scope of modal images
				$scope.modalImages = [];
				
				//clear out indexed item
				$scope.modalSelect = 0;

			},

			//next item
			advance: function(){

				var self = this;


				// if item is still less than total subimages length, advance count
				if ($scope.modalSelect < self.count - 1){
					$scope.modalSelect++;
				}
				//otherwise, go back to beginning
				else{
					$scope.modalSelect = 0;
				}

				$rootScope.$broadcast('imgChange', $scope.modalSelect);

			},


			//prev
			rewind: function(){

				var self = this;
			
				
				//if item is greater than zero, rewind one
				if ($scope.modalSelect > 0){
					$scope.modalSelect--;
				}

				//otherwise, go to end
				else{
					$scope.modalSelect = self.count - 1;
				}

				$rootScope.$broadcast('imgChange', $scope.modalSelect);
				
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
