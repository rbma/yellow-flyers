'use strict';

/**
 * @ngdoc service
 * @name yellowFlyersApp.mobileService
 * @description
 * # mobileService
 * Factory in the yellowFlyersApp.
 */
angular.module('yellowFlyersApp').factory('mobileService', ['$q', '$detection', function ($q, $detection) {


  var isMobile = function(){
    var mobile = false;

    var deferred = $q.defer();

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
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
