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
angular.module('yellowFlyersApp').controller('MainCtrl', ['$scope', '$interval',  function ($scope, $interval) {

	
	

	//container for all image props and functions
	$scope.image = {};
	
	//prefix
	$scope.image.imgPrefix = 'https://s3.amazonaws.com/yellow-flyers/';
	
	//suffix
	$scope.image.imgPost = '.jpg';

	$scope.image.full = function(src){
		return ($scope.image.imgPrefix + src + $scope.image.imgPost);
	};

	$scope.flyers = [];

	//flag for spinner
	$scope.ready = true;

	$scope.alert = false;

	
	

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
					$scope.flyers = data.Flyers.elements;
					console.log($scope.flyers);

					//convert comma separated values to array
					for (var i = 0; i < $scope.flyers.length; i++ ){

						var self = $scope.flyers[i];

						//convert dates
						var date = moment(new Date(self.date)).format('MMMM YYYY');
						self.date = date;
						

						//if values exists only
						if (!self.description || !self.date || !self.subimages){
							
							//remove this item
							$scope.flyers.slice(-1,1);
						}
						else{
							//turn images into array
							var array = self.subimages.split(', ');

						}
					}
				});
			}
		});
	}

	//initial tabletop call
	tabletop();


}]);
