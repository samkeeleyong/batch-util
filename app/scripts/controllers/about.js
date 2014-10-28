'use strict';

/**
 * @ngdoc function
 * @name batchUtilApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the batchUtilApp
 */
angular.module('batchUtilApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
