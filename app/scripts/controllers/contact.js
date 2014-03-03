'use strict';

angular.module('supercrabtreegithubioBuildApp')
  .controller('ContactCtrl', function ($scope, $http, $window, $document) {

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

    var google = $window.google;
    var map;
    var center;

    var zoomLevel = windowWidth() <= 529 ? 3 : 4;

    var mapOptions = {
      styles: styles,
      center: new google.maps.LatLng(-28, 134),
      zoom: zoomLevel,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,
      zoomControl: false
    };

    var image = {
      url: 'http://www.georgecrabtree.com/img/home.png',
      size: new google.maps.Size(60, 80),
      anchor: new google.maps.Point(30, 80)
    };

    function init() {
      map = new google.maps.Map(document.getElementById('map'), mapOptions);
      google.maps.event.addListenerOnce(map, 'idle', addHomeMarker);

      google.maps.event.addDomListener(map, 'idle', onMapIdle);
      google.maps.event.addDomListener(window, 'resize', onMapResize);

      $window.onresize = onWindowResize;
      onWindowResize();
    }
    function addHomeMarker() {
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(-37.863199, 145.004554),
        clickable: false,
        animation: google.maps.Animation.DROP,
        map: map,
        icon: image
      });
    }
    function onMapIdle() {
      center = map.getCenter();
    }
    function onMapResize() {
      map.setCenter(center);
    }
    function onWindowResize() {
      if (windowWidth() > 529) {
        map.setOptions({draggable: true});
      }
      else {
        map.setOptions({draggable: false});
        map.set('scrollwheel', false);
      }
    }
    function windowWidth() {
      if ($document.body && $document.body.offsetWidth) {
        return $document.body.offsetWidth;
      }
      if ($document.compatMode === 'CSS1Compat' && $document.documentElement && $document.documentElement.offsetWidth) {
        return document.documentElement.offsetWidth;
      }
      if ($window.innerWidth) {
        return $window.innerWidth;
      }
    }
    init();
  });
