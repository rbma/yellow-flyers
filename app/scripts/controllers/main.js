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
	'pageService',
	function ($scope, $rootScope, $interval, $location, tabletopService, pageService) {

		//get current url page
		var path = $location.path();

		//partial array of 20
		$scope.flyers = [];

		//spinner
		$scope.loading = true;



		//call table function with promise. To-Do: Set local JSON fallback
		tabletopService.init().then(function(data){

			var flyers, globals, flyerLength, splitAmount, allFlyers;

			flyers = data.data.Flyers.elements;
			globals = data.data.Globals.elements[0];

			console.log(globals);

			flyerLength = flyers.length;

			

			//store max result so we can divvy up pages
			pageService.storeLength(flyerLength);

			


			//store total number of items 
			tabletopService.storeLength(flyers);

			


			//clean up data
			tabletopService.cleanData(flyers);

			


			//split data into pages. return value is array [splitAmount, page]
			splitAmount = pageService.pageRange(path)[0];
			$scope.page = pageService.pageRange(path)[1];

			

			if ($scope.page === 1){
				$scope.introPage = true;
			}
			else{
				$scope.introPage = false;
			}

			
			allFlyers = flyers;

			$scope.flyers = pageService.customArray(allFlyers, splitAmount);

			$scope.loading = false;

			//error handling
		}, function(error){
			console.log('Error getting data.' + error);
		});



	}
]);
