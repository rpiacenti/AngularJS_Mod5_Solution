(function () {
  "use strict";

  angular.module('public')
  .controller('SignUpController', SignUpController);


  SignUpController.$inject = ['$scope','SignUpService','menuitens','preferences'];
  function SignUpController($scope,SignUpService,menuitens,preferences) {
    var $ctrl = this;

    if(preferences){
      $ctrl.preferences = preferences;
      $ctrl.firstname = preferences[0];
      $ctrl.lastname = preferences[1];
      $ctrl.emailaddress = preferences[2];
      $ctrl.phonenumber = preferences[3];
      $ctrl.itemmenu = preferences[4];
    }
    $ctrl.menuItens  =  [];
    $ctrl.itemmenuNotMatch = false;
    $ctrl.erro = "";
    $ctrl.msg = "";

    $ctrl.savePreference = function () {
      //$ctrl.menuItens = menuitens;
      // var it;
      // for(it in $ctrl.menuItens.menu_items){
      //   if($ctrl.menuItens.menu_items[it].short_name === $ctrl.itemmenu){
      //     $ctrl.menuItem = $ctrl.menuItens.menu_items[it]
      console.log("Otem Menu OK ?"+$ctrl.itemmenuNotMatch);
      if($ctrl.itemmenuNotMatch){
        SignUpService.savePreference($ctrl);
        $ctrl.msg = "Your information has been saved!";
        $ctrl.itemmenuNotMatch = true;
      }

      //     break;
      //   }
      // }
    };

    $ctrl.checkDish = function(){
      console.log("checando dish!");
      $ctrl.menuItens = menuitens;
      var it;
      var found = false;
      for(it in $ctrl.menuItens.menu_items){
        if($ctrl.menuItens.menu_items[it].short_name === $ctrl.itemmenu){
          $ctrl.itemmenuNotMatch = true;
          found = true;
          console.log("checando dish OK!"+$ctrl.itemmenuNotMatch);
          break;
        }
      }
      if(!found){
        $ctrl.msg = "No such menu number exists !";
        $scope.formPref.itemmenu.$rollbackViewValue();
      }
    };

    $ctrl.onBlur = function($event) {
      $ctrl.itemmenuNotMatch = false;
      $scope.formPref.itemmenu.$commitViewValue()
      console.log("OnBlur event!"+$ctrl.itemmenu);
      $ctrl.checkDish();
    }

    $ctrl.onFocus = function($event) {
      $ctrl.msg = "";
    }

    $ctrl.cancel = function(e) {
      console.log("cancel event!");
      if (e.keyCode === 27) {
        $scope.formPref.itemmenu.$rollbackViewValue();
        $ctrl.msg = "";
      }
    };

  }
})();
