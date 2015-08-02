'use strict';

/**
 * @ngdoc function
 * @name dhagaThreadingApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the dhagaThreadingApp
 */
angular.module('dhagaThreadingApp')
  .controller('AboutCtrl', function ($scope) {






  });


        $(document).ready(function() {
            // Show or hide the sticky footer button
            $(window).scroll(function() {
                if ($(this).scrollTop() > 200) {
                    $('.go-top').fadeIn(200);
                } else {
                    $('.go-top').fadeOut(200);
                }
            });

            // Animate the scroll to top
            $('.go-top').click(function(event) {
                event.preventDefault();

                $('html, body').animate({scrollTop: 0}, 300);
            })
        });

