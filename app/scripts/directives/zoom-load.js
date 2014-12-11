'use strict';

/**
 * @ngdoc directive
 * @name yellowFlyersApp.directive:zoomLoad
 * @description
 * # zoomLoad
 */
angular.module('yellowFlyersApp').directive('zoomLoad', ['$rootScope', function ($rootScope) {
	return {
		restrict: 'A',
		link: function($scope, element, attrs){

			var order = attrs.order;

			//convert order to num
			order = parseInt(order, 10);

			//create new image
			var img = new Image();

			// source
			img.src = attrs.img;
			
			//when image is ready, bind to src
			img.onload = function(){
				element.attr('src', img.src);
				element.okzoom({
					width: 300,
					height: 300,
					round: true
				});
			};

			//show first image
			if (order === 0){
				element.addClass('active');
				
			}

			//listen for changes
			$rootScope.$on('imgChange', function(msg, data){
				//remove active class from all images
				element.removeClass('active');

				if (order === data){
					element.addClass('active');
				}
			});

		}
	};
}]);
