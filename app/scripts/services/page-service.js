'use strict';

/**
 * @ngdoc service
 * @name yellowFlyersApp.pageService
 * @description
 * # pageService
 * Factory in the yellowFlyersApp.
 */
angular.module('yellowFlyersApp')
  .factory('pageService', function () {
    // Service logic
    // ...

    var page = {

      pageRange: function(location){
        //starting ending nums
        var spread = [0,0];

        if (location === '/'){
          spread = [0,20];
        }

        if (location === '/page2'){
          spread = [20,40];
        }

        if (location === '/page3'){
          spread = [40,60];
        }

        if (location === '/page4'){
          spread = [60,80];
        }

        if (location === '/page5'){
          spread = [80,100];
        }

        if (location === '/page6'){
          spread = [100,120];
        }

        if (location === '/page7'){
          spread = [120,140];
        }

        if (location === '/page8'){
          spread = [140,160];
        }

        if (location === '/page9'){
          spread = [160,-1];
        }

        return spread;
      },

      customArray: function(array, range){
        var newArray = [];
        for (var i = range[0]; i < range[1]; i++){
          newArray.push(array[i]);
        }
        return newArray;
      }




    };

    // Public API here
    return {
      pageRange: function (location) {
        return page.pageRange(location);
      },

      customArray: function(flyers, range){
        return page.customArray(flyers, range);
      }
    };
  });
