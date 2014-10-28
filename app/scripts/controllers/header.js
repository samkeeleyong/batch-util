'use strict';

/**
 * @ngdoc function
 * @name batchUtilApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the batchUtilApp
 */
angular.module('batchUtilApp')
  .controller('HeaderCtrl', function ($scope, $location) {
  		$scope.isActive = function(route){
  			return route === $location.path();
  		}
  });
