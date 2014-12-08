'use strict';

/* global Tabletop:false */

/**
 * @ngdoc function
 * @name yellowFlyersApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yellowFlyersApp
 */
angular.module('yellowFlyersApp').controller('MainCtrl', ['$scope', '$interval', function ($scope, $interval) {

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

				});
			}
		});
	}

	//initial tabletop call
	tabletop();


}]);
