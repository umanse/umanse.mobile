'use strict';
angular.module('UmanseApp')

.controller('GroupBoardCtrl', function($scope) {
  $scope.boards = [
    { name: 'Bruce lee', avatar: 'avatar01.jpg', img: 'car01.jpg', id: 1 },
    { name: 'Chill hong', avatar: 'avatar02.jpg', img: 'car02.jpg', id: 2 },
    { name: 'Dubstep', avatar: 'avatar03.jpg', img: 'car03.jpg', id: 3 },
    { name: 'Indie', avatar: 'avatar04.jpg', img: 'car04.jpg', id: 4 }
  ];
})
