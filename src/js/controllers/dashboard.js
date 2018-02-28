angular.module("app")
  .controller("DynamicDashboardCtrl", DynamicDashboardCtrl);

DynamicDashboardCtrl.$inject =['DashboardService', '$rootScope'];

function DynamicDashboardCtrl(DashboardService, $rootScope) {
    var $ctrl = this;
    $ctrl.DashboardService = DashboardService;
    $rootScope.isPaneShown = false;
}