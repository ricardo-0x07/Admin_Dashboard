angular.module("app")
  .controller("DynamicQueriesCtrl", DynamicQueriesCtrl);

DynamicQueriesCtrl.$inject =['QueriesService', '$rootScope'];
function DynamicQueriesCtrl(QueriesService, $rootScope) {
    var $ctrl = this;
    $rootScope.isPaneShown = false;
    
    $ctrl.selectedAll = false;
    $ctrl.selectedAllGroupsBy = false;
    $ctrl.selectedAllOrderBy = false;
    $ctrl.selectedAllMathOpts = false;
    $ctrl.QueriesService = QueriesService;
    console.log('$ctrl.QueriesService.currentSelectedTableColumns: ', $ctrl.QueriesService.currentSelectedTableColumns);

    $ctrl.checkAllColumns = function () {
      $ctrl.selectedAll = ! $ctrl.selectedAll;
      $ctrl.QueriesService.currentSelectedTableColumns.forEach(element => {
        element.selected = $ctrl.selectedAll;
      });
    }

    $ctrl.groupOptions = [
      {name: 'keyword', selected: false},
      {name: 'size', selected: false},
      {name: 'greater than', selected: false},
      {name: 'less than', selected: false},
      {name: 'row', selected: false},
      {name: 'colomn', selected: false},
    ];

    $ctrl.checkAllGroups = function () {
      $ctrl.selectedAllGroupsBy = ! $ctrl.selectedAllGroupsBy;
      $ctrl.groupOptions.forEach(element => {
        element.selected = $ctrl.selectedAllGroupsBy;
      });
    }
    $ctrl.orderOptions = [
      {name: 'ascending', selected: false},
      {name: 'descending', selected: false},
      {name: 'date', selected: false},
    ];

    $ctrl.checkAllOrderBy = function () {
      $ctrl.selectedAllOrderBy = ! $ctrl.selectedAllOrderBy;
      $ctrl.orderOptions.forEach(element => {
        element.selected = $ctrl.selectedAllOrderBy;
      });
    }
    $ctrl.mathOptions = [
      {name: 'add', selected: false},
      {name: 'average', selected: false},
      {name: 'subtract', selected: false},
      {name: 'count', selected: false},
    ];

    $ctrl.checkAllMathOps = function () {
      $ctrl.selectedAllMathOpts = ! $ctrl.selectedAllMathOpts;
      $ctrl.mathOptions.forEach(element => {
        element.selected = $ctrl.selectedAllMathOpts;
      });
    }
    $ctrl.logicOptions = [
      {name: 'and', selected: false},
      {name: 'or', selected: false},
    ];    
}