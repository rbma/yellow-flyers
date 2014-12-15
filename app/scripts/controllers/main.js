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

		$scope.pages = [
			{'pageHash':'/'},
			{'pageHash':'/page2'},
			{'pageHash':'/page3'},
			{'pageHash':'/page4'},
			{'pageHash':'/page5'},
			{'pageHash':'/page6'},
			{'pageHash':'/page7'},
			{'pageHash':'/page8'},
			{'pageHash':'/page9'}
		];

		//sharing
		$scope.social = {
			Name: 'Twitter text goes here',
			ImageUrl: 'image here'
		};


		


		



		//call table function with promise. To-Do: Set local JSON fallback
		tabletopService.init().then(function(data){

			var flyers, splitAmount, allFlyers;

			flyers = data.data.Flyers.elements;

			//store total number of items 
			tabletopService.storeLength(flyers);

			//clean up data
			tabletopService.cleanData(flyers);

			//split data into pages. return value is array [splitAmount, page]
			splitAmount = pageService.pageRange(path)[0];

			$scope.page = pageService.pageRange(path)[1];

			console.log($scope.page);

			if ($scope.page === 1){
				$scope.introPage = true;
			}
			else{
				$scope.introPage = false;
			}

			allFlyers = flyers;

			$scope.flyers = pageService.customArray(allFlyers, splitAmount);

		});



	}
]);
