'use strict';

angular.module('supercrabtreegithubioBuildApp')
  .controller('ContactCtrl', function ($scope, $http, $window, $log) {

    var styles = [{
      featureType: 'administrative.province',
      stylers: [{
        visibility: 'off'
      }]
    }, {
      featureType: 'water',
      elementType: 'labels',
      stylers: [{
        visibility: 'off'
      }]
    }, {
      featureType: 'water',
      elementType: 'geometry.fill',
      stylers: [{
        color: '#75c6ef'
      }]
    }, {
      featureType: 'administrative.country',
      elementType: 'geometry',
      stylers: [{
        visibility: 'off'
      }]
    }, {
      featureType: 'landscape',
      stylers: [{
        visibility: 'on'
      }, {
        color: '#edd65b'
      }]
    }, {
      featureType: 'road.highway',
      elementType: 'labels',
      stylers: [{
        visibility: 'off'
      }]
    }, {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{
        saturation: -100
      }, {
        lightness: -33
      }]
    }, {
      featureType: 'road',
      elementType: 'labels.text.stroke',
      stylers: [{
        lightness: 44
      }]
    }, {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [{
        color: '#000000'
      }]
    }, {
      featureType: 'road.arterial',
      elementType: 'labels.text.stroke',
      stylers: [{
        lightness: 12
      }]
    }, {
      featureType: 'administrative.locality',
      elementType: 'labels.text.stroke',
      stylers: [{
        lightness: 100
      }]
    }, {
      featureType: 'administrative',
      elementType: 'geometry',
      stylers: [{
        visibility: 'off'
      }]
    }];

    $scope.mapOptions = {
      styles: styles,
      center: {
        latitude: -28,
        longitude: 134
      },
      zoom: 4,
      draggable: 'true'
    };

    var map;

    $window.onresize = function () {
      if (windowWidth() > 529) {
        map.setOptions({draggable: true});
      }
      else {
        map.setOptions({draggable: false});
        map.set('scrollwheel', false);
      }
    };
    function windowWidth() {
      if (document.body && document.body.offsetWidth) {
        return document.body.offsetWidth;
      }
      if (document.compatMode === 'CSS1Compat' && document.documentElement && document.documentElement.offsetWidth) {
        return document.documentElement.offsetWidth;
      }
      if (window.innerWidth) {
        return window.innerWidth;
      }
    }

  });