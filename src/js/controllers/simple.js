angular.module("app")
  .controller("SimpleCtrl", SimpleCtrl);

SimpleCtrl.$inject =['AuthService', '$rootScope'];
function SimpleCtrl(AuthService, $rootScope) {
    var $ctrl = this;
    $rootScope.$watch('$viewContentLoaded', function(){
      //Here your view content is fully loaded !!
      $rootScope.isPaneShown = false;
      console.log('$viewContentLoaded', event);
    });
  }