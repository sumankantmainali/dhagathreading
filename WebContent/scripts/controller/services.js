

   angular.module('dhagaThreadingApp' )
   .controller('servicesCtrl', function ($scope,DhagaService) {

$scope.servicePageBannerCarousel=false;
      $scope.maincontentdiv=false;
        $scope.servicepicdetails=false;
      $scope.hennagallery=true;
      $scope.waxinggallery=true;
      $scope.facialgallery=true;
      $scope.eyebrowgallery=true;
    $scope.myInterval = 3000;



//====carausol=====user can click on image for next slide (picture)


$scope.slides0 = [
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

/*Service page ====main Carasoul END=====END====*/

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
$scope.servicePageBannerCarousel=true;


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

$scope.servicePageBannerCarousel=true;

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

$scope.servicePageBannerCarousel=true;

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

$scope.servicePageBannerCarousel=true;

  };

  $scope.backToPricePage=function(){
          $scope.maincontentdiv=false;
          $scope.servicepicdetails=false;
            $scope.hennagallery=true;
      $scope.facialgallery=true;
      $scope.waxinggallery=true;
      $scope.eyebrowgallery=true;

$scope.servicePageBannerCarousel=false;

  };

  $scope.makeAppointment=function(){

      $scope.hennagallery=true;
      $scope.scheduleDay = true;
      $scope.servicepicdetails=true;
      $scope.facialgallery=true;
      $scope.waxinggallery=true;
      $scope.eyebrowgallery=true;
$scope.servicePageBannerCarousel=true;


     $scope.mytime = new Date();

    $scope.hstep = 1;
    $scope.mstep = 15;

    $scope.options = {
      hstep: [1, 2, 3],
      mstep: [1, 5, 10, 15, 25, 30]
    };

    $scope.ismeridian = true;





  };


  // $scope.confirm=function(){
  //         $scope.maincontentdiv=false;
  //     $scope.scheduleDay=false;
  //         $scope.servicepicdetails=false;
  //     $scope.waxinggallery=true;
  //     $scope.facialgallery=true;


  // };

  $scope.confirm=function(){

    $scope.scheduleDay=false;
    $scope.placeorder = true;

};


$scope.confirm2=function(){

    $scope.placeorder = false;
    $scope.maincontentdiv=false;
            $scope.servicepicdetails=false;
$scope.servicePageBannerCarousel=false;

};




  $scope.services = [

    {price: 7, text: 'Eyebrow Threading', checked: false},
     {price: 25, text: 'Full Face Threading ', checked: false},
    {price: 35, text: 'Full Facial',checked : false},
     {price: 15, text: 'Mini Facial ', checked: false},
    {price: 5, text: 'Small Henna',checked:false},
    {price: 40, text: 'Full Leg Waxing', checked:false},
  ];


  // $scope.services2 = [

  //   {price: 1, text: 'item 5'},
  //   {price: 2, text: 'item 6'},
  //   {price: 3, text: 'item 7'},
  //   {price: 4, text: 'item 8'}
  // ];

 $scope.checkedCount = function(){
      return $scope.services.filter(function(person){
        return person.checked;
      }).length;
    }

          $(document).ready(function() {
              $('.go-top').fadeOut();
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


        $(document).ready(function() {

   // Show or hide the sticky footer button scroll down
            $(window).scroll(function() {
                if ($(this).scrollTop() < 50) {
                    $('#bouncearr').fadeIn(200);
                } else {
                    $('#bouncearr').fadeOut(200);
                }
            });


        });


   DhagaService.getdat().then(function(response){
        $scope.jdata=response.data;


 $scope.ind=0;
 $scope.abtHennaServicePage=$scope.jdata.allProducts[$scope.ind+7].productDescription;
  $scope.abtFacialServicePage=$scope.jdata.allProducts[$scope.ind+2].productDescription;
  $scope.abtwaxingServicePage=$scope.jdata.allProducts[$scope.ind+3].productDescription;



   });



      });


/*==============START=========== copied code for credict cared=============== */

angular.module('myApp', ['filters']);
angular.module('filters', []).
filter('validate', [function () {
    return function (ccnumber) {
      if (!ccnumber) { return ''; }
      ccnumber = ccnumber.toString().replace(/\s+/g, '');
      var len = ccnumber.length;
      var cardType, valid;
      mul = 0,
      prodArr = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]],
      sum = 0;
      while (len--) {
          sum += prodArr[mul][parseInt(ccnumber.charAt(len), 10)];
          mul ^= 1;
      }

      if (sum % 10 === 0 && sum > 0) {
        valid = "valid"
      } else {
        valid = "not valid"
      }

      if(/^(34)|^(37)/.test(ccnumber)) {
        cardType = "American Express";
      }
      if(/^(62)|^(88)/.test(ccnumber)) {
        cardType = "China UnionPay";
      }
      if(/^30[0-5]/.test(ccnumber)) {
        cardType = "Diners Club Carte Blanche";
      }
      if(/^(2014)|^(2149)/.test(ccnumber)) {
        cardType = "Diners Club enRoute";
      }
      if(/^36/.test(ccnumber)) {
        cardType = "Diners Club International";
      }
      if(/^(6011)|^(622(1(2[6-9]|[3-9][0-9])|[2-8][0-9]{2}|9([01][0-9]|2[0-5])))|^(64[4-9])|^65/.test(ccnumber)) {
        cardType = "Discover Card";
      }
      if(/^35(2[89]|[3-8][0-9])/.test(ccnumber)) {
        cardType = "JCB";
      }
      if(/^(6304)|^(6706)|^(6771)|^(6709)/.test(ccnumber)) {
        cardType = "Laser";
      }
      if(/^(5018)|^(5020)|^(5038)|^(5893)|^(6304)|^(6759)|^(6761)|^(6762)|^(6763)|^(0604)/.test(ccnumber)) {
        cardType = "Maestro";
      }
      if(/^5[1-5]/.test(ccnumber)) {
        cardType = "MasterCard";
      }
      if (/^4/.test(ccnumber)) {
        cardType = "Visa"
      }
      if (/^(4026)|^(417500)|^(4405)|^(4508)|^(4844)|^(4913)|^(4917)/.test(ccnumber)) {
        cardType = "Visa Electron"
      }
      return ccnumber + " is a(n) " + cardType + "  Card" ;
    };
}]);

/*==============END=========== copied code for credict cared=============== */
