

   angular.module('dhagaThreadingApp' )
   .controller('servicesCtrl', function ($scope,DhagaService) {



      $scope.maincontentdiv=false;
        $scope.servicepicdetails=false;
      $scope.hennagallery=true;
      $scope.waxinggallery=true;
      $scope.facialgallery=true;
      $scope.eyebrowgallery=true;
    $scope.myInterval = 3000;

  $scope.slides = [
      {
        image: 'images/henna/1.jpg'
      },
      {
       image: 'images/henna/2.jpg'
      },
      {
      image: 'images/henna/3.jpg'
      },
      {
      image: 'images/henna/4.jpg'
      }
    ];


  $scope.hennaphotos=function(){

       $scope.maincontentdiv=true;
      $scope.hennagallery=false;
          $scope.servicepicdetails=true;
      $scope.waxinggallery=true;
      $scope.facialgallery=true;


  };


  $scope.slides1 = [
      {
        image: 'images/facial/1.jpg'
      },
      {
       image: 'images/facial/2.jpg'
      },
      {
      image: 'images/facial/3.jpg'
      },
      {
      image: 'images/facial/4.jpg'
      }
    ];


  $scope.facialphotos=function(){

       $scope.maincontentdiv=true;
      $scope.hennagallery=true;
          $scope.servicepicdetails=true;
      $scope.waxinggallery=true;
      $scope.facialgallery=false;


  };


    $scope.slides2 = [
      {
        image: 'images/waxing/1.jpg'
      },
      {
       image: 'images/waxing/2.jpg'
      },
      {
      image: 'images/waxing/3.jpg'
      },
      {
      image: 'images/waxing/4.jpg'
      }
    ];


  $scope.waxingphotos=function(){

       $scope.maincontentdiv=true;
      $scope.hennagallery=true;
          $scope.servicepicdetails=true;
      $scope.waxinggallery=false;
      $scope.facialgallery=true;


  };


    $scope.slides3 = [
      {
        image: 'images/eyebrow/1.jpg'
      },
      {
       image: 'images/eyebrow/2.jpg'
      },
      {
      image: 'images/eyebrow/3.jpg'
      },
      {
      image: 'images/eyebrow/4.jpg'
      }
    ];





  $scope.eyebrowphotos=function(){

      $scope.maincontentdiv=true;
      $scope.hennagallery=true;
      $scope.servicepicdetails=true;
      $scope.facialgallery=true;
      $scope.eyebrowgallery=false;


  };

  $scope.backToPricePage=function(){
          $scope.maincontentdiv=false;
          $scope.servicepicdetails=false;
            $scope.hennagallery=true;
      $scope.facialgallery=true;
      $scope.waxinggallery=true;
      $scope.eyebrowgallery=true;


  };

  $scope.makeAppointment=function(){

      $scope.hennagallery=true;
      $scope.scheduleDay = true;
      $scope.servicepicdetails=true;
      $scope.facialgallery=true;
      $scope.waxinggallery=true;
      $scope.eyebrowgallery=true;


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
          $scope.servicepicdetails=false;
      $scope.waxinggallery=true;
      $scope.facialgallery=true;


  };






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

