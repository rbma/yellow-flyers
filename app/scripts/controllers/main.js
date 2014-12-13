'use strict';


/**
 * @ngdoc function
 * @name yellowFlyersApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yellowFlyersApp
 */
angular.module('yellowFlyersApp').controller('MainCtrl', [
	'$scope',
	'$rootScope',
	'$interval',
	'$location',
	'tabletopService',
	function ($scope, $rootScope, $interval, $location, tabletopService) {

	//TO-DO: RELOAD PAGE IF INTERVAL HITS 5

		//last flyer accessed in array
		$scope.last = 0;

		//partial array of 20
		$scope.flyers = [];

		//all flyers
		$scope.allFlyers = [];

		//flag for spinner
		$scope.ready = true;

		$scope.alert = false;

		$scope.dataIn = false;

		$scope.loading = false;

		//container for all image props and functions
		$scope.image = {};
		

		$scope.image.full = function(src){
			return ($scope.image.imgPrefix + src + $scope.image.imgPost);
		};

		
		//get current url page
		var path = $location.path();

		//run switch to determine what to pass in to service

		//cut out last number



var orientation = window.orientation; switch(orientation) {
case 0:
// portrait orientation
break; case 90:
case -90:
// landscape orientation
break; }
}

		
		//TO:DO: only call if no data already exists
		//call table functino with promise. To-Do: Set local JSON fallback
		tabletopService.init().then(function(data){
			
			//store total number of items 
			tabletopService.storeLength(data);

			//clean up data
			tabletopService.cleanData(data);

			//split data into pages
			tabletopService.splitPages();

			$scope.allFlyers = data.data;


		});




		$scope.loadMore = function(){
			//grab last item in array
			$scope.last = $scope.flyers.length - 1;
							
			//load two more
			for (var x = 1; x < 3; x++){
				$scope.flyers.push($scope.flyersArray[$scope.last + x]);
			}
		};



		//once flyers are resized, drop loading
		$rootScope.$on('resized', function(){
			$scope.loading = false;
		});

	}
]);
