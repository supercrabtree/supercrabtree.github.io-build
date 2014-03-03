'use strict';

angular.module('supercrabtreegithubioBuildApp', [
  'ngRoute',
  'google-maps'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main',
        controller: 'MainCtrl'
      })
      .when('/contact', {
        templateUrl: 'partials/contact',
        controller: 'ContactCtrl'
      })
      .when('/projects', {
        templateUrl: 'partials/projects',
        controller: 'ProjectsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });