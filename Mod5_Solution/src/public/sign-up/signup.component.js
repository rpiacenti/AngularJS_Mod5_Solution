(function () {
"use strict";

angular.module('public')
.component('signUp', {
  templateUrl: 'src/public/sign-up/signup.html',
  bindings: {
    firstname: '&',
    lastname: '&',
    emailaddress: '&',
    phonenumber: '&',
    itemmenu: '&',
    msg:'&'
  },
  controller: 'SignUpController',
  controllerAs: 'signUpCtrl'
});

})();
