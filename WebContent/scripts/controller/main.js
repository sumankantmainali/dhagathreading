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

 $scope.ind=0;
$scope.contactdiv=true;

    /* storing value in response from json call in service- GuitarService*/
    DhagaService.getdat().then(function(response){
        $scope.jdata=response.data;
           // console.log($scope.jdata);
            $scope.titlechange=$scope.jdata.allProducts[$scope.ind].title;
            $scope.titlechange1=$scope.jdata.allProducts[$scope.ind+4].title;


$scope.facialsteptitle=$scope.jdata.allProducts[$scope.ind+4].step1title;
 $scope.facialsteptitle1=$scope.jdata.allProducts[$scope.ind+4].step2title;
$scope.facialsteptitle2=$scope.jdata.allProducts[$scope.ind+4].step3title;
$scope.facialsteptitle3=$scope.jdata.allProducts[$scope.ind+4].step4title;
$scope.facialsteptitle4=$scope.jdata.allProducts[$scope.ind+4].step5title;

$scope.facialstepdetails=$scope.jdata.allProducts[$scope.ind+4].step1details;
$scope.facialstepdetails1=$scope.jdata.allProducts[$scope.ind+4].step2details;
$scope.facialstepdetails2=$scope.jdata.allProducts[$scope.ind+4].step3details;
$scope.facialstepdetails3=$scope.jdata.allProducts[$scope.ind+4].step4details;
$scope.facialstepdetails4=$scope.jdata.allProducts[$scope.ind+4].step5details;

$scope.stepdetails=$scope.jdata.allProducts[$scope.ind].step1details;


           $scope.productchange=$scope.jdata.allProducts[$scope.ind].productDescription;
           $scope.productchange1=$scope.jdata.allProducts[$scope.ind+1].productDescription;
            $scope.productchange2=$scope.jdata.allProducts[$scope.ind+7].productDescription;


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

