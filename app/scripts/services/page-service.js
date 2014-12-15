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

      arrayLength: 0,

      pageRange: function(location){
        //starting ending nums
        var spread = [0,0];
        var page = 1;
        var self = this;

        switch(location){
          case '/':
          page = 1;
          spread = [0,20];
          break;

          case '/page2':
          spread = [20,40];
          page = 2;
          break;

          case '/page3':
          spread = [40,60];
          page = 3;
          break;

          case '/page4':
          spread = [60,80];
          page = 4;
          break;

          case '/page5':
          spread = [80,100];
          page = 5;
          break;

          case '/page6':
          spread = [100,120];
          page = 6;
          break;

          case '/page7':
          spread = [120,140];
          page = 7;
          break;

          case '/page8':
          spread = [140,160];
          page = 8;
          break;

          case '/page9':
          spread = [160, self.arrayLength - 1];
          page = 9;
          break;

          default:
          spread = [0,20];
          page = 1;

        }

        return [spread, page];
      },

      customArray: function(array, range){
        var newArray = [];
        for (var i = range[0]; i < range[1]; i++){
          newArray.push(array[i]);
        }
        return newArray;
      },

      storeLength: function(length){
        var self = this;
        self.arrayLength = parseInt(length, 10);
      }




    };

    // Public API here
    return {
      pageRange: function (location) {
        return page.pageRange(location);
      },

      customArray: function(flyers, range){
        return page.customArray(flyers, range);
      },

      storeLength: function(length){
        page.storeLength(length);
      }
    };
  });
