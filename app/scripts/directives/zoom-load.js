'use strict';

/**
 * @ngdoc directive
 * @name yellowFlyersApp.directive:zoomLoad
 * @description
 * # zoomLoad
 */
angular.module('yellowFlyersApp').directive('zoomLoad', ['$rootScope', '$window', function ($rootScope, $window) {
	return {
		restrict: 'A',
		link: function($scope, element, attrs){

			//index
			var order = attrs.order;

			//page number
			var title = element.parent().find('h2');

			var winHeight = $window.innerHeight;
			var winWidth = $window.innerWidth;

			//convert order to num
			order = parseInt(order, 10);

			//create new image
			var img = new Image();

			// source
			img.src = attrs.img;
			
			//when image is ready, bind to src
			img.onload = function(){
				
				element.attr('src', img.src);

				//get ref to height
				//if height is too great, then reduce width
				if (img.height > (winHeight * 0.7)){
					img.width = winWidth * 0.5;
				}
				
				//attach loupe
				element.okzoom({
					width: 300,
					height: 300,
					round: true
				});
			};

			//show first image
			if (order === 0){
				element.addClass('active');
				title.addClass('active');
				
			}

			//listen for changes
			$rootScope.$on('imgChange', function(msg, data){
				//remove active class from all images
				element.removeClass('active');
				title.removeClass('active');

				if (order === data){
					element.addClass('active');
					title.addClass('active');
				}
			});

		}
	};
}]);
