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
      .when('/services', {
        templateUrl: 'views/services.html',
        controller: 'servicesCtrl'
      })
      .when('/price', {
        templateUrl: 'views/price.html',
        controller: 'priceCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'aboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'contactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
