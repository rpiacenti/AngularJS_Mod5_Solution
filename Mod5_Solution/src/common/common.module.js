(function() {
"use strict";

angular.module('common', ['ngCookies'])
.constant('ApiPath', 'https://rpiacenti-coursera-c5.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
