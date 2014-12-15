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

		$scope.introPage = false;

		if (path === '/'){
			$scope.introPage = true;
		}

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

		//last flyer accessed in array
		$scope.last = 0;

		//partial array of 20
		$scope.flyers = [];

		//all flyers
		var allFlyers = [];

		//flag for spinner
		$scope.ready = true;



		//container for all image props and functions
		$scope.image = {};
		

		$scope.image.full = function(src){
			return ($scope.image.imgPrefix + src + $scope.image.imgPost);
		};

		


		//call table function with promise. To-Do: Set local JSON fallback
		tabletopService.init().then(function(data){

			var flyers;

			flyers = data.data.Flyers.elements;


			//stores cut amount for given array (ie flyer 10-20)
			var splitAmount = [];
			
			//store total number of items 
			tabletopService.storeLength(flyers);

			//clean up data
			tabletopService.cleanData(flyers);

			//split data into pages
			splitAmount = pageService.pageRange(path);


			allFlyers = flyers;

			$scope.flyers = pageService.customArray(allFlyers, splitAmount);

		});





		// $scope.loadMore = function(){
		// 	//grab last item in array
		// 	$scope.last = $scope.flyers.length - 1;
							
		// 	//load two more
		// 	for (var x = 1; x < 3; x++){
		// 		$scope.flyers.push($scope.flyersArray[$scope.last + x]);
		// 	}
		// };

	}
]);
