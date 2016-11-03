(function () {
  "use strict";

  angular.module('public')
  .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['preferences','menuitens','ApiPath'];
  function MyInfoController(preferences,menuitens,ApiPath) {
    var $ctrl = this;
    $ctrl.menuItens = menuitens;
    $ctrl.basePath = ApiPath;

    if(preferences){
      $ctrl.preferences = preferences;
      $ctrl.firstname = preferences[0];
      $ctrl.lastname = preferences[1];
      $ctrl.emailaddress = preferences[2];
      $ctrl.phonenumber = preferences[3];
      $ctrl.msg = true;
      var it;
      for(it in $ctrl.menuItens.menu_items){
        if($ctrl.menuItens.menu_items[it].short_name === preferences[4]){
          $ctrl.menuItem = $ctrl.menuItens.menu_items[it]
          break;
        }
      }
    }else{
      $ctrl.firstname = "";
      $ctrl.lastname = "";
      $ctrl.emailaddress = "";
      $ctrl.phonenumber = "";
      $ctrl.menuItem = "";
      $ctrl.msg = false;
    }
  }


})();
