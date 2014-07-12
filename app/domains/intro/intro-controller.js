'use strict';
angular.module('UmanseApp')

.controller('IntroCtrl', function($scope, $state, $ionicModal, $timeout, $ionicLoading, IntroService) {
 
  // Called to navigate to the main app
  $scope.startApp = function() {
    $state.go('app.playlists');
  };

  // Called each time the slide changes
  $scope.slideChanged = function(index) {
    $scope.slideIndex = index;
  };

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('domains/intro/modals/login-modal.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLoginModal = function() {
    $scope.modal.hide();
  },
  
  // Open the login modal
  $scope.openLoginModal = function() {
    $scope.modal.show();
  };
  
  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);
    
    $ionicLoading.show({
      template: 'Loading...'
    });

    // IntroService.login($scope.loginData).then(function(response){
    //   console.log('login success: response : ', response);

    //   $ionicLoading.hide();
    //   $scope.closeLoginModal();
    //   $state.go('app.playlists');


    // }, function(error){
    //   $ionicLoading.hide();
    //   console.log('login fail: error : ', error);
    // });

    

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $ionicLoading.hide();
      $scope.closeLoginModal();
      $state.go('app.playlists');
    }, 1000);
  }

})