angular.module("app")
  .controller("AppCtrl", AppCtrl);

AppCtrl.$inject =['AuthService', '$rootScope'];
function AppCtrl(AuthService, $rootScope) {
    var $ctrl = this;
    $rootScope.$watch('$viewContentLoaded', function(){
      //Here your view content is fully loaded !!
      $rootScope.isPaneShown = true;
      console.log('$viewContentLoaded', event);
    });
  }