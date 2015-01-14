'use strict';
/* global $:false */

/**
 * @ngdoc directive
 * @name yellowFlyersApp.directive:navi
 * @description
 * # navi
 */
angular.module('yellowFlyersApp').directive('navi', ['$location', '$rootScope', function ($location, $rootScope) {

	

	var link = function($scope){



		var pages = [
			{
				'pageHash':'/',
				'order': 0,
				'title': 'intro'
			},
			{
				'pageHash': '/page1',
				'order': 1,
				'title': 'Page 1'
			},
			{
				'pageHash':'/page2',
				'order':2,
				'title': 'Page 2'
			},
			{
				'pageHash':'/page3',
				'order':3,
				'title': 'Page 3'
			},
			{
				'pageHash':'/page4',
				'order':4,
				'title': 'Page 4'
			},
			{
				'pageHash':'/page5',
				'order':5,
				'title': 'Page 5'
			},
			{
				'pageHash':'/page6',
				'order':6,
				'title': 'Page 6'
			},
			{
				'pageHash':'/page7',
				'order':7,
				'title': 'Page 7'
			},
			{
				'pageHash':'/page8',
				'order':8,
				'title': 'Page 8'
			},
			{
				'pageHash':'/page9',
				'order':9,
				'title': 'Page 9'
			},
			{
				'pageHash':'/about',
				'order': 10,
				'title': 'about'
			}

		];

		$scope.nav = {
			path: $location.path(),
			naviOpen: $('.navi-open'),
			icon: $('#nav-icon'),
			navOpen: false,
			showNav: false,
			pages: pages,
			currentlyOpen: false,
			init: function(){
				var self = this;
				self.path = $location.path();
				if (self.path === '/'){
					self.showNav = false;
				}
				else{
					self.showNav = true;
				}

			},

			navToggle: function(){
				var self = this;
				if (self.navOpen){
					self.naviOpen.removeClass('active');
					self.icon.removeClass('close');
					self.navOpen = false;
				}
				else{
					self.naviOpen.addClass('active');
					self.icon.addClass('close');
					self.navOpen = true;
				}
			}

		};

		//listen route changes to reset nav
		$rootScope.$on('$locationChangeStart', function(){
			$scope.nav.navOpen = false;
			$scope.nav.icon.removeClass('close');
			$scope.nav.init();
		});


		$scope.nav.init();
	};

	return {
		templateUrl: 'views/_navi.html',
		restrict: 'EA',
		link: link
	};
}]);
