'use strict';

/**
 * @ngdoc overview
 * @name batchUtilApp
 * @description
 * # batchUtilApp
 *
 * Main module of the application.
 */
angular
  .module('batchUtilApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when("/parse_batch_file",{
        templateUrl: 'views/parse_batch_file.html',
        controller: 'BfparsecontrollerCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

