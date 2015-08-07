'use strict';

/**
 * @ngdoc function
 * @name dhagaThreadingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dhagaThreadingApp
 */

 angular.module('dhagaThreadingApp' )
 .controller('MainCtrl', function ($scope,DhagaService) {


$scope.contactdiv=true;

    /* storing value in response from json call in service- GuitarService*/
    DhagaService.getdat().then(function(response){
        $scope.jdata=response.data;
           // console.log($scope.jdata);
            $scope.titlechange=$scope.jdata.allProducts[$scope.ind].title;
           $scope.productchange=$scope.jdata.allProducts[$scope.ind].productDescription;
           $scope.picPath=$scope.jdata.allProducts[$scope.ind].imagePath;
       });



  /*
    $scope.ind=0;

    $scope.nxt=function(){
        $scope.ind++;
        if ($scope.ind>$scope.jdata.allProducts.length-1){
         $scope.ind=0;
     }
     $scope.titlechange=$scope.jdata.allProducts[$scope.ind].title;
     $scope.picPath=$scope.jdata.allProducts[$scope.ind].imagePath;
     $scope.productchange=$scope.jdata.allProducts[$scope.ind].productDescription;


 };





$scope.prev=function(){
$scope.ind--;
  if ($scope.ind<0){
        $scope.ind=$scope.jdata.allProducts.length-1;
        }
        $scope.titlechange=$scope.jdata.allProducts[$scope.ind].title;
        $scope.picPath=$scope.jdata.allProducts[$scope.ind].imagePath;
         $scope.productchange=$scope.jdata.allProducts[$scope.ind].productDescription;



    };

*/

        $(document).ready(function() {
             $('.go-top').fadeOut();
            // Show or hide the sticky footer button
            $(window).scroll(function() {
                if ($(this).scrollTop() > 300) {
                    $('.go-top').fadeIn(100);
                } else {
                    $('.go-top').fadeOut(100);
                }
            });

            // Animate the scroll to top
            $('.go-top').click(function(event) {
                event.preventDefault();

                $('html, body').animate({scrollTop: 0}, 300);
            })


   // Show or hide the sticky footer button scroll down
            $(window).scroll(function() {
                if ($(this).scrollTop() < 50) {
                    $('#bouncearr').fadeIn(200);
                } else {
                    $('#bouncearr').fadeOut(200);
                }
            });







        });





});

