'use strict';

/**
 * @ngdoc service
 * @name yellowFlyersApp.flyerPosition
 * @description
 * # flyerPosition
 * Factory in the yellowFlyersApp.
 */
angular.module('yellowFlyersApp').factory('flyerPosition', function () {
    // Service logic
    // ...

  var counter = {
    position: 0,
    increment: function(){
      var self = this;
      self.position++;
    },
    decrement: function(){
      var self = this;
      self.position--;
      if (self.position < 0){
        self.position = 0;
      }
    }
  };

  // Public API here
  return {
    getCount: function(){
      return counter.position;
    },
    advance: function(){
      counter.increment();
    },
    decrement: function(){
      counter.decrement();
    }
  };
});
