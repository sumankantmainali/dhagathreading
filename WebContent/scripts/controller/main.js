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

//user can click on image for next slide (picture)

$scope.myInterval = 3000;

$scope.slides = [
    {
      image: 'images/5.jpg'
    },
    {
     image: 'images/2.jpg'
    },
    {
    image: 'images/3.jpg'
    },

     {
    image: 'images/1.jpg'
    }
  ];

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


});

