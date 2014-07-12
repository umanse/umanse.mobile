'use strict';
// Ionic Starter App, v0.9.20

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('UmanseApp', [
  'ionic',
  'restangular',
  'ngCordova'
])


.config(function($stateProvider, $urlRouterProvider, RestangularProvider) {
  
  RestangularProvider.setBaseUrl('http://localhost:9000');

  $stateProvider
    .state('intro', {
      url: '/',
      templateUrl: 'domains/intro/intro.html',
      controller: 'IntroCtrl'
    })

    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'domains/main/main.html',
      controller: 'MainCtrl'
    })

    .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent' :{
          templateUrl: 'domains/main/browse/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent' :{
          templateUrl: 'domains/main/playlists/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

    .state('app.single', {
      url: '/playlists/:playlistId',
      views: {
        'menuContent' :{
          templateUrl: 'domains/main/playlists/playlist/playlist.html'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');
})


.run(function($ionicPlatform, Restangular) {

  Restangular.addResponseInterceptor(function(data, operation, what, url, response, deferred) {

      var extractedData;
      if (operation === "getList") {
        extractedData = data.data;
      } else {
        extractedData = data;
      }
      
      // var token = response.headers('Auth-Token');
      // if(token) {
      //   SessionInfo.setToken(token);
      //   Restangular.setDefaultHeaders({'Authorization': 'Bearer ' + token});
      // }
      
      return extractedData;
    });


  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
});
