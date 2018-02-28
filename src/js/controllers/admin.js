angular.module("app")
  .controller("DynamicAdminCtrl", DynamicAdminCtrl);

DynamicAdminCtrl.$inject =['DashboardService', '$rootScope'];
function DynamicAdminCtrl(DashboardService, $rootScope) {
    var $ctrl = this;
    $ctrl.DashboardService = DashboardService;
    $ctrl.flapper = "Hello World!";
    $rootScope.isPaneShown = false;
    
}