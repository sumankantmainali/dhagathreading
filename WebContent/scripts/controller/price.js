
  angular.module('dhagaThreadingApp')
 .controller('priceCtrl', function ($scope,DhagaService,$log) {


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

$scope.makeAppointment=function(){
       
    $scope.hennagallery=true;
    $scope.scheduleDay = true;

   

   $scope.mytime = new Date();

  $scope.hstep = 1;
  $scope.mstep = 15;

  $scope.options = {
    hstep: [1, 2, 3],
    mstep: [1, 5, 10, 15, 25, 30]
  };

  $scope.ismeridian = true;
  

 


};


$scope.confirm=function(){
        $scope.maincontentdiv=false;
    $scope.scheduleDay=false;

};


  });
