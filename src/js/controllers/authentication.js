angular.module("app")
  .controller("AuthCtrl", AuthCtrl);

AuthCtrl.$inject =['AuthService'];
function AuthCtrl(AuthService) {
    var $ctrl = this;
    $ctrl.auth = {}
    console.log('AuthService', AuthService);
    $ctrl.AuthService = AuthService;    
}