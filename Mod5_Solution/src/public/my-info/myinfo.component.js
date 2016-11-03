(function () {
"use strict";

angular.module('public')
.component('myInfo', {
  templateUrl: 'src/public/my-info/myinfo.html',
  bindings: {
    msg : '&'
  },
  controller: 'MyInfoController',
  controllerAs: 'signUpCtrl'
});

})();
