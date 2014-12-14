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

    
    key: '1v-aQYwpoUJEcopld4DsYafoOuDXIgJfPepuWwQcd2RY',
    imagePrefix: '//d1b56a2nqp2zss.cloudfront.net/',
    imagePost: '.jpg',
    tableData: [],
    tableLength: 0,

    //flag
    initialized: false,


    init: function(){

      var promise = $http({method: 'GET', url: '/data.json'});

      return promise;
      // Tabletop.init({
      //   key: self.key,
      //   callback: function(data, error){
      //     if (error){
      //       console.log(error);
      //     }
      //     self.tableData = data;
          
      //     //deffered.resolve(self.tableData);
      //   }

      // });

    },

    


    storeLength: function(arr){
      var self = this;

      self.tableLength = arr.data.length;
      console.log(self.tableLength);

      //service is officially set up
      self.initialized = true;
    },




    splitPages: function(location){

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



    //cleans up times, formatting, picture names, etc
    cleanData: function(dataObject){
      var self = this;

      //get right object
      var data = dataObject.data;

      for (var i = 0; i < self.tableLength; i++ ){
        //shorthand
        var item = data[i];

        //format data
        var date = moment(new Date(item.date)).format('MMMM YYYY');

        //replace data
        item.date = date;

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

    splitPages: function(path){
      return tableTop.splitPages(path);
    }
  };

}]);
