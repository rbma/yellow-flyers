'use strict';

/**
 * @ngdoc directive
 * @name yellowFlyersApp.directive:zoomLoad
 * @description
 * # zoomLoad
 */
angular.module('yellowFlyersApp').directive('zoomLoad', ['$rootScope', '$window', 'mobileService', function ($rootScope, $window, mobileService) {
	return {
		restrict: 'A',
		link: function($scope, element, attrs){




		
			//index
			var order = attrs.order;

			var targetImg = element.find('img');

			//page number
			var title = element.find('h2');


			//convert order to num
			order = parseInt(order, 10);

			//create new image
			var img = new Image();

			// source
			img.src = attrs.img;
			
			//when image is ready, bind to src
			img.onload = function(){
				
				targetImg.attr('src', img.src);

				mobileService.isMobile().then(function(response){

					//bypass zoom entirely if mobile
					if (response === true){
						console.log('mobile');
						return 0;
					}

					else{
						//attach loupe
						targetImg.okzoom({
							width: 300,
							height: 300,
							round: true,
							background: 'rgba(255,255,255,0.9)'
						});
					}

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
