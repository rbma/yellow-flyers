'use strict';

/**
 * @ngdoc directive
 * @name yellowFlyersApp.directive:zoomLoad
 * @description
 * # zoomLoad
 */
angular.module('yellowFlyersApp').directive('zoomLoad', ['$rootScope', '$window', '$detection', function ($rootScope, $window, $detection) {
	return {
		restrict: 'A',
		link: function($scope, element, attrs){

		
			//index
			var order = attrs.order;

			var targetImg = element.find('img');

			//page number
			var title = element.find('h2');

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
				
				targetImg.attr('src', img.src);


				//bypass zoom entirely if mobile
				if ($detection.isiOS() || $detection.isAndroid() || $detection.isWindowsPhone() || $detection.isBB10()){
					console.log('mobile');
					$rootScope.$broadcast('mobileDevice');
				}

				else{
					//attach loupe
					targetImg.okzoom({
						width: 300,
						height: 300,
						round: true,
						background: '#000000'
					});
				}
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
