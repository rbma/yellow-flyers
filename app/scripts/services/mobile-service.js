'use strict';

/**
 * @ngdoc service
 * @name yellowFlyersApp.mobileService
 * @description
 * # mobileService
 * Factory in the yellowFlyersApp.
 */
angular.module('yellowFlyersApp').factory('mobileService', ['$q', '$detection', function ($q, $detection) {


  var mobile = false;

  var isMobile = function(){
    var deferred = $q.defer();

    if ($detection.isAndroid()){
      mobile = true;
    }
    if ($detection.isiOS()){
      mobile = true;
    }

    if ($detection.isWindowsPhone()){
      mobile = true;
    }

    if ($detection.isBB10()){
      mobile = true;
    }

    else{
      mobile = false;
    }

    deferred.resolve(mobile);

    return deferred.promise;
  };

  // Public API here
  return {
    isMobile: function () {
      return isMobile();
    }
  };
}]);
