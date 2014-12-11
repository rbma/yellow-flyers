'use strict';

/* global Tabletop:false */
/* global moment:false */

/**
 * @ngdoc function
 * @name yellowFlyersApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yellowFlyersApp
 */
angular.module('yellowFlyersApp').controller('MainCtrl', ['$scope', '$rootScope', '$interval',  function ($scope, $rootScope, $interval) {

	//TO-DO: RELOAD PAGE IF INTERVAL HITS 5

	//last flyer accessed in array
	$scope.last = 0;

	//empty partial array
	$scope.flyers = [];

	//empty full array
	$scope.flyersArray = [];

	//flag for spinner
	$scope.ready = true;

	$scope.alert = false;

	$scope.dataIn = false;

	$scope.loading = false;

	//container for all image props and functions
	$scope.image = {};
	
	//prefix
	$scope.image.imgPrefix = 'https://s3.amazonaws.com/yellow-flyers/';
		
	//suffix
	$scope.image.imgPost = '.jpg';

	$scope.image.full = function(src){
		return ($scope.image.imgPrefix + src + $scope.image.imgPost);
	};

	
	

	//if google hangs, keep checking
	var init = $interval(function(){
		console.log('init');
		tabletop();
	}, 3000);




	//data store
	function tabletop(){
		Tabletop.init({
			key: '1v-aQYwpoUJEcopld4DsYafoOuDXIgJfPepuWwQcd2RY',
			callback: function(data){
				
				//cancel timer once data is in
				$interval.cancel(init);

				//outside of angular digest, hence apply
				$scope.$apply(function(){
					
					//get array of total flyers
					$scope.flyersArray = data.Flyers.elements;

					//clean up data and convert comma separated values to array
					for (var i = 0; i < $scope.flyersArray.length; i++ ){

						var self = $scope.flyersArray[i];

						//convert dates
						var date = moment(new Date(self.date)).format('MMMM YYYY');
						self.date = date;

						var array = self.subimages.split(', ');

						//run through each image and add prefix and filetype
						for (var y = 0; y < array.length; y++ ){
							array[y] = $scope.image.imgPrefix + array[y] + $scope.image.imgPost;
						}

						
						//render
						self.subimages = array;
					}


					//push first three items into $scope.flyers
					for (var z = 0; z < 3; z++){
						$scope.flyers.push($scope.flyersArray[z]);
						
					}

					//$scope.flyers = flyersArray;
					$scope.dataIn = true;
				});

			}
		});
	}


	$scope.loadMore = function(){
		//grab last item in array
		$scope.last = $scope.flyers.length - 1;
						

		//load three more
		for (var x = 1; x < 4; x++){
			$scope.flyers.push($scope.flyersArray[$scope.last + x]);
		}
		console.log($scope.flyers);
	};





	//once flyers are resized, drop loading
	$rootScope.$on('resized', function(){
		$scope.loading = false;
	});

	//initial tabletop call
	tabletop();


}]);
