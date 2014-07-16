'use strict';
angular.module('UmanseApp')

.controller('BoardMapsCtrl', function($scope, $ionicLoading, $compile) {
  
  $scope.map = {
    control: {},
    center: {
      latitude: 45,
      longitude: -73
    },
    options: {
      streetViewControl: false,
      panControl: false,
      maxZoom: 20,
      minZoom: 3
    },
    zoom: 8,
    dragging: false,
    bounds: {},
    markers: [
      {
        id:1,
        latitude: 45,
        longitude: -72.5,
        showWindow: false,
        title: 'Marker 2'
      },
      {
        id:2,
        latitude: 45,
        longitude: -73.5,
        showWindow: false,
        title: 'Marker 2'
      },
      {
        id:3,
        icon: 'assets/images/plane.png',
        latitude: 37,
        longitude: -122,
        showWindow: false,
        title: 'Plane'
      }
    ],
    markers2: [
      {
        id: 1,
        latitude: 46,
        longitude: -77,
        title: '[46,-77]'
      },
      {
        id: 2,
        latitude: 33,
        longitude: -77,
        title: '[33,-77]'
      },
      {
        id:3,
        icon: 'assets/images/plane.png',
        latitude: 35,
        longitude: -125,
        title: '[35,-125]'
      }
    ],
    dynamicMarkers: [],
    refresh: function () {
      $scope.map.control.refresh(origCenter);
    }
  };
})
