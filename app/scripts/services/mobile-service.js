'use strict';

/**
 * @ngdoc service
 * @name yellowFlyersApp.mobileService
 * @description
 * # mobileService
 * Factory in the yellowFlyersApp.
 */
angular.module('yellowFlyersApp').factory('mobileService', ['$detection', function ($detection) {


  var mobile = false;

  var isMobile = function(){
    if ($detection.isAndroid() || $detection.isiOS() || $detection.isWindowsPhone() || $detection.isBB10){
      mobile = true;
    }

    return mobile;
  };

  // Public API here
  return {
    isMobile: function () {
      return isMobile();
    }
  };
}]);
