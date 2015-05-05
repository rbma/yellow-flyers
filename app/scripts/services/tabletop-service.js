'use strict';

/* global moment:false */

/**
 * @ngdoc service
 * @name yellowFlyersApp.tabletopService
 * @description
 * # tabletopService
 * Factory in the yellowFlyersApp.
 */
angular.module('yellowFlyersApp').factory('tabletopService', ['$http', '$q', function ($http, $q) {


  var tableTop = {

    imagePrefix: '//d1b56a2nqp2zss.cloudfront.net/',
    imagePost: '.jpg',
    tableData: [],
    tableLength: 0,

    //flag
    initialized: false,


    init: function(){

      var deferred = $q.defer();

      $http.get('http://s3.amazonaws.com/yellow-flyers-data/flyers.json').success(function(data){
        console.log(data);
        deferred.resolve(data);
      }).error(function(err){
        console.log(err);
        deferred.reject(err);
      });




      // var promise = $http({
      //   method: 'GET',
      //   url: 'https://s3.amazonaws.com/yellow-flyers-data/flyers.json',
      //   dataType: 'application/json'
      // });

      return deferred.promise;

    },

    


    storeLength: function(arr){
      var self = this;


      self.tableLength = arr.length;

      //service is officially set up
      self.initialized = true;
    },



    //cleans up times, formatting, picture names, etc
    cleanData: function(dataObject){
      var self = this;

      //get right object
      var data = dataObject;




      for (var i = 0; i < self.tableLength; i++ ){
        //shorthand
        var item = data[i];

        //format data
        var date = moment(new Date(item.date)).format('MMMM YYYY');

        //replace data
        item.date = date;

        //fix main image
        item.mainimagelink = self.imagePrefix + item.mainimagelink + self.imagePost;

        //convert comma separated values in spreadsheet to array
        var subImageArray = item.subimages.split(', ');

        //run through each image and add prefix and filetype
        for (var y = 0; y < subImageArray.length; y++ ){
          subImageArray[y] = self.imagePrefix + subImageArray[y] + self.imagePost;
        }

        //now replace array in flyer item
        item.subimages = subImageArray;
      }

    }




  };



  // Public API here
  return {

    isInitialized: function(){
      return tableTop.initialized;
    },

    init: function () {
      return tableTop.init();
    },

    storeLength: function(arr){
      tableTop.storeLength(arr);
    },

    cleanData: function(data){
      tableTop.cleanData(data);
    },

    splitRange: function(path){
      return tableTop.splitRange(path);
    }
  };

}]);
