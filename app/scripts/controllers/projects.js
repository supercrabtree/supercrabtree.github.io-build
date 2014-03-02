'use strict';

angular.module('supercrabtreegithubioBuildApp')
  .controller('ProjectsCtrl', function ($scope, $http) {
    $http.get('/api/awesomeThings').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });
  });
