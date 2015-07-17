'use strict';

/**
 * @ngdoc function
 * @name dhagaThreadingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dhagaThreadingApp
 */

    angular.module('dhagaThreadingApp')
 .controller('servicesCtrl', function ($scope,DhagaService) {
    $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
    ];


  });

