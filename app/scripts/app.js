'use strict';

/**
 * @ngdoc overview
 * @name dhagaThreadingApp
 * @description
 * # dhagaThreadingApp
 *
 * Main module of the application.
 */
angular
  .module('dhagaThreadingApp', [
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
      .otherwise({
        redirectTo: '/'
      });
  });
