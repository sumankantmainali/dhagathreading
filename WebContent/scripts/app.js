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
    
    'ngRoute',
    'ui.bootstrap'
    

  ] )
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/service', {
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

  /*  creating service and giving name as GuitarService*/
angular.module('dhagaThreadingApp').service('DhagaService',function($http){
/* in main.js controller inds stores valur of indexN, (parameter passed in buy button)  */
this.inds='';
/*  creating a service to get jason data*/

            return{
                getdat : function(tempdat){
                    return $http.get('scripts/data.json').success(function(resp){

                        tempdat=resp;
                    });
                }
            };
      });
