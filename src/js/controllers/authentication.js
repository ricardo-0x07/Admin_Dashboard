angular.module("app")
  .controller("AuthCtrl", AuthCtrl);

AuthCtrl.$inject =['AuthService', '$rootScope'];
function AuthCtrl(AuthService, $rootScope) {
    var $ctrl = this;
    $ctrl.auth = {};
    $ctrl.AuthService = AuthService;
    $rootScope.isPaneShown = false;
}