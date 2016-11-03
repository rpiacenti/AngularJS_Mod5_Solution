(function () {
  "use strict";

  angular.module('common')
  .service('SignUpService', SignUpService);

  SignUpService.$inject = ['$cookies'];
  function SignUpService($cookies) {
    var service = this;

    service.savePreference = function($ctrl){
      // Setting a cookie
      $cookies.put('favoriteMenuItem', $ctrl.itemmenu);
      $cookies.put('firstname', $ctrl.firstname);
      $cookies.put('lastname', $ctrl.lastname);
      $cookies.put('emailaddress', $ctrl.emailaddress);
      $cookies.put('phonenumber', $ctrl.phonenumber);
    };

    service.getPreferences = function(){
      // Getting cookies
      if($cookies.get('favoriteMenuItem')){
        if($cookies.get('firstname')){
          var response = [$cookies.get('firstname'),$cookies.get('lastname'),$cookies.get('emailaddress'),$cookies.get('phonenumber'),$cookies.get('favoriteMenuItem')]
          return response.data = response;
        }
      }else{
        return undefined;
      }
    };

  }



})();
