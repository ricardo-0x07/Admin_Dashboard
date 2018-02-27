angular.module("app")
  .controller("DynamicDashboardCtrl", DynamicDashboardCtrl);

DynamicDashboardCtrl.$inject =['DashboardService'];

function DynamicDashboardCtrl(DashboardService) {
    var $ctrl = this;
    $ctrl.DashboardService = DashboardService;
}