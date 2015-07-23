'use strict';

/**
 * @ngdoc function
 * @name dhagaThreadingApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the dhagaThreadingApp
 */
angular.module('dhagaThreadingApp')

  .controller('aboutCtrl', function ($scope) {

  		$scope.moreInfo =  false;

  		

  		$scope.viewInfo = function(){

  				$scope.moreInfo = !$scope.moreInfo;


  		}




  });
