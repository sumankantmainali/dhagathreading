'use strict';

/**
 * @ngdoc function
 * @name dhagaThreadingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dhagaThreadingApp
 */

 angular.module('dhagaThreadingApp')
 .controller('MainCtrl', function ($scope,DhagaService) {
    $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
    ];


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
/*


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

});


/*
function imgChange() {

    setInterval(nextImage, 2000);
}

var xx = 1;

var imgsList=["images/1.jpg", "images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg","images/6.jpg","images/7.jpg", "images/8.jpg"]
function nextImage() {

    if (xx > 0 && xx <= 8) {
        document.getElementById('setIntBox').innerHTML = '<img src='
                + imgsList[xx] + ' >';
        xx = xx + 1;
    }
    if (xx > imgsList.length) {
        xx = 0;
        document.getElementById('setIntBox').innerHTML = '<img src='
                + imgsList[xx] + ' >';
        xx = xx + 1;
    }
}
*/