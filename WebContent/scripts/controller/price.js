
  angular.module('dhagaThreadingApp')
 .controller('priceCtrl', function ($scope,DhagaService) {


    $scope.maincontentdiv=false;
    $scope.hennagallery=true;

$scope.myInterval = 3000;

$scope.slides = [
    {
      image: 'images/1.jpg'
    },
    {
     image: 'images/2.jpg'
    },
    {
    image: 'images/3.jpg'
    },
    {
    image: 'images/4.jpg'
    },
     {
    image: 'images/5.jpg'
    },
     {
    image: 'images/6.jpg'
    },
     {
    image: 'images/7.jpg'
    },
     {
    image: 'images/8.jpg'
    },
     {
    image: 'images/9.jpg'
    },
     {
    image: 'images/10.jpg'
    }
  ];


$scope.hennaphotos=function(){

     $scope.maincontentdiv=true;
    $scope.hennagallery=false;

};

$scope.backToPricePage=function(){
        $scope.maincontentdiv=false;
    $scope.hennagallery=true;

};

  });
