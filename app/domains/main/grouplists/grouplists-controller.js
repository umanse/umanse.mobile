'use strict';
angular.module('UmanseApp')

.controller('GrouplistsCtrl', function($scope) {
  $scope.groups = [
    { title: 'Group:Board 01', id: 1 },
    { title: 'Group:Board 02', id: 2 },
    { title: 'Group:Board 03', id: 3 },
    { title: 'Group:Board 04', id: 4 },
    { title: 'Group:Board 05', id: 5 },
    { title: 'Group:Board 06', id: 6 }
  ];
})
