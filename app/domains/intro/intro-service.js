'use strict';
angular.module('UmanseApp')

  .service('IntroService', function (Session) {
    
    this.login = function(user) {
      return Session.post(user);
    }
  });