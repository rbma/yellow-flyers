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
	'tabletopService',
	function ($scope, $rootScope, $interval, tabletopService) {

	//TO-DO: RELOAD PAGE IF INTERVAL HITS 5

		//last flyer accessed in array
		$scope.last = 0;

		//empty partial array
		$scope.flyers = [];

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


		

		//call table functino with promise. To-Do: Set local JSON fallback
		tabletopService.init().then(function(data){
			console.log(data);
			//store total number of items 
			tabletopService.storeLength(data);

			//clean up data
			tabletopService.cleanData(data);
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
