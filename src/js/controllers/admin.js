angular.module("app")
  .controller("DynamicAdminCtrl", DynamicAdminCtrl);

DynamicAdminCtrl.$inject =['DashboardService'];
function DynamicAdminCtrl(DashboardService) {
    var $ctrl = this;
    $ctrl.DashboardService = DashboardService;
    $ctrl.flapper = "Hello World!";
    
}