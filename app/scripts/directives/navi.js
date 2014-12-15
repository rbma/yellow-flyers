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
				'title': 'ABOUT'
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

		];

		$scope.nav = {
			
			path: $location.path(),
			naviOpen: $('.navi-open'),
			navOpen: false,
			pages: pages,
			
			openNav: function(){
				var self = this;
				self.naviOpen.addClass('active');
				self.navOpen = true;

			},

			closeNav: function(){
				var self = this;
				self.naviOpen.removeClass('active');
				self.navOpen = false;
			},

			nextPage: function(){
				var self = this;

				//get new location
				self.path = $location.path();

				var currentPath = self.path;

				//find path object
				var currentPage = self.pages.filter(function(page){
					return page.pageHash === currentPath;
				});

				var length = pages.length;

				//get order of path object
				var order = currentPage[0].order;

				//advance to next item in array
				if (order + 1 < length){
					var nextPage = self.pages[order + 1];
					$location.path(nextPage.pageHash);
				}
				else{
					$location.path(pages[1].pageHash);
				}

				
			},
			previousPage: function(){
				
				var self = this;
				
				//get new location
				self.path = $location.path();

				var currentPath = self.path;

				//find path object
				var currentPage = self.pages.filter(function(page){
					return page.pageHash === currentPath;
				});


				//get order of path object
				var order = currentPage[0].order;

				//rewind to prev item in array
				if (order -1 > 0){
					var nextPage = self.pages[order - 1];
					$location.path(nextPage.pageHash);
				}
				else{
					$location.path(pages[9].pageHash);
				}

			}
		};

		//listen route changes to reset nav
		$rootScope.$on('routeChange', function(){
			$scope.nav.navOpen = false;
		});
	};

	return {
		templateUrl: 'views/_navi.html',
		replace: true,
		restrict: 'EA',
		link: link
	};
}]);
