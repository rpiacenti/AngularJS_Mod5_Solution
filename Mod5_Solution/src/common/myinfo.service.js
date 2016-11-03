(function () {
  "use strict";

  angular.module('common')
  .service('MyInfoService', MyInfoService);


  MyInfoService.$inject = ['$cookies','$http', 'ApiPath'];
  function MyInfoService($cookies,$http, ApiPath) {
    var service = this;

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
      }

    }

  })();
