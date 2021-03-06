'use strict';

/**
 * @ngdoc function
 * @name dhagaThreadingApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the dhagaThreadingApp
 */
angular.module('dhagaThreadingApp')
  .controller('historyCtrl', function ($scope) {

  		$scope.chart1=true;
  		$scope.chart2=true;




    InitChart();

function InitChart() {

  var barData = [{
    'x': 2005,
    'y': 10
  }, {
    'x': 2006,
    'y': 20
  }, {
    'x': 2007,
    'y': 25
  }, {
    'x': 2008,
    'y': 5
  }, {
    'x': 2009,
    'y': 15
  }, {
    'x': 2010,
    'y': 20
  }, {
    'x': 2011,
    'y': 35
  }, {
    'x': 2012,
    'y': 40
  }, {
    'x': 2013,
    'y': 45
  }, {
    'x': 2014,
    'y': 30
  },


  {
    'x': 2015,
    'y': 25
  }];

  var vis = d3.select('#visualisation'),
    WIDTH = 1000,
    HEIGHT = 500,
    MARGINS = {
      top: 20,
      right: 20,
      bottom: 20,
      left: 50
    },
    xRange = d3.scale.ordinal().rangeRoundBands([MARGINS.left, WIDTH - MARGINS.right], 0.1).domain(barData.map(function (d) {
      return d.x;
    })),


    yRange = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([0,
      d3.max(barData, function (d) {
        return d.y;
      })
    ]),

    xAxis = d3.svg.axis()
      .scale(xRange)
      .tickSize(5)
      .tickSubdivide(true),

    yAxis = d3.svg.axis()
      .scale(yRange)
      .tickSize(5)
      .orient("left")
      .tickSubdivide(true);


  vis.append('svg:g')
    .attr('class', 'x axis')
    .attr('transform', 'translate(0,' + (HEIGHT - MARGINS.bottom) + ')')
    .call(xAxis);

  vis.append('svg:g')
    .attr('class', 'y axis')
    .attr('transform', 'translate(' + (MARGINS.left) + ',0)')
    .call(yAxis);

  vis.selectAll('rect')
    .data(barData)
    .enter()
    .append('rect')
    .attr('x', function (d) {
      return xRange(d.x);
    })
    .attr('y', function (d) {
      return yRange(d.y);
    })
    .attr('width', xRange.rangeBand())
    .attr('height', function (d) {
      return ((HEIGHT - MARGINS.bottom) - yRange(d.y));
    })
    .attr('fill', 'grey');

}


  });

