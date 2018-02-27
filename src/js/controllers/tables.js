//tables.js
angular
.module('app')
.controller('BootstrapIntegrationCtrl', BootstrapIntegrationCtrl)
.controller('TaskQueriesBootstrapIntegrationCtrl', TaskQueriesBootstrapIntegrationCtrl)
.controller('TeamQueriesBootstrapIntegrationCtrl', TeamQueriesBootstrapIntegrationCtrl)
.controller('RequestsQueriesBootstrapIntegrationCtrl', RequestsQueriesBootstrapIntegrationCtrl)
.controller('RewardsQueriesBootstrapIntegrationCtrl', RewardsQueriesBootstrapIntegrationCtrl)
.controller('CustomersQueriesBootstrapIntegrationCtrl', CustomersQueriesBootstrapIntegrationCtrl);


BootstrapIntegrationCtrl.$inject = ['DTOptionsBuilder', 'DTColumnBuilder', '$http', '$q', '$scope', 'QueriesService'];
function BootstrapIntegrationCtrl(DTOptionsBuilder, DTColumnBuilder, $http, $q, $scope, QueriesService) {
  var $ctrl = this;
  var columns = [];
  $ctrl.flapper = 'Uploading, please wait.'
  $scope.showFlapper = true;
  var defer = $q.defer();
  var request = $http.get('data.json').then(function(result) {
    $scope.showFlapper = false;
    columns = Object.keys(result.data[0])
    console.log('columns: ', columns);
    QueriesService.currentSelectedTableColumns = columns.map(function (columnName) {
      return {name: columnName, selected: false};
    });
    defer.resolve(result.data);
    return columns;
  });

  $ctrl.dtOptions = DTOptionsBuilder.fromFnPromise(function() {
    return defer.promise;
  })
  .withBootstrap()
  .withBootstrapOptions({
    pagination: {
      classes: {
        ul: 'pagination pagination-datatables'
      }
    }
  })
  $ctrl.dtColumns = [];
  request.then(function(columns) {
    $ctrl.dtColumns = columns.map(function(columnName, index) {
      if (index ===0) {
        return DTColumnBuilder.newColumn(columnName).withTitle(columnName.toUpperCase()).withClass('text-danger')
      }
      return DTColumnBuilder.newColumn(columnName).withTitle(columnName.toUpperCase())
    });
  })
  .then(function() {
    $scope.showDT = true;
  });

  // var $ctrl = this;
  // $ctrl.TableService = TableService
  // $ctrl.flapper = 'Uploading, please wait.'
  // $scope.showFlapper = true;
  // console.log('TaskQueriesBootstrapIntegrationCtrl loaded TableService: ', TableService);
  // $ctrl.dtOptions = DTOptionsBuilder.fromFnPromise(function() {
  //   var defer = $q.defer();
  //   $http.get('data.json').then(function(result) {
  //     console.log('$ctrl', $ctrl);
  //     $scope.showFlapper = false;
  //     defer.resolve(result.data);
  //   });
  //   return defer.promise;
  // })
  // // $ctrl.dtOptions = DTOptionsBuilder
  // // .fromSource('data.json')
  // // Add Bootstrap compatibility
  // .withBootstrap()
  // .withBootstrapOptions({
  //   pagination: {
  //     classes: {
  //       ul: 'pagination pagination-datatables'
  //     }
  //   }
  // })
  // $ctrl.dtColumns = [
  //   DTColumnBuilder.newColumn('id').withTitle('ID').withClass('text-danger'),
  //   DTColumnBuilder.newColumn('firstName').withTitle('First name'),
  //   DTColumnBuilder.newColumn('lastName').withTitle('Last name')
  // ];
}

TaskQueriesBootstrapIntegrationCtrl.$inject = ['DTOptionsBuilder', 'DTColumnBuilder', 'DTDefaultOptions', '$http', '$q', '$scope'];
function TaskQueriesBootstrapIntegrationCtrl(DTOptionsBuilder, DTColumnBuilder, DTDefaultOptions, $http, $q, $scope) {
  console.log('DTDefaultOptions: ', DTDefaultOptions);
  var $ctrl = this;
  $ctrl.flapper = 'Uploading, please wait.'
  $scope.showFlapper = true;
  var defer = $q.defer();
  var request = $http.get('data/assignments.json').then(function(result) {
    $scope.showFlapper = false;
    var columns = Object.keys(result.data[0])
    defer.resolve(result.data);
    return columns;
  });

  $ctrl.dtOptions = DTOptionsBuilder.fromFnPromise(function() {
    return defer.promise;
  })
  .withBootstrap()
  .withBootstrapOptions({
    pagination: {
      classes: {
        ul: 'pagination pagination-datatables'
      }
    }
  })
  $ctrl.dtColumns = [];
  request.then(function(columns) {
    $ctrl.dtColumns = columns.map(function(columnName, index) {
      if (index ===0) {
        return DTColumnBuilder.newColumn(columnName).withTitle(columnName.toUpperCase()).withClass('text-danger')
      }
      return DTColumnBuilder.newColumn(columnName).withTitle(columnName.toUpperCase())
    });
  })
  .then(function() {
    $scope.showDT = true;
  });
}

CustomersQueriesBootstrapIntegrationCtrl.$inject = ['DTOptionsBuilder', 'DTColumnBuilder', '$http', '$q', '$scope'];
function CustomersQueriesBootstrapIntegrationCtrl(DTOptionsBuilder, DTColumnBuilder, $http, $q, $scope) {
  var $ctrl = this;
  $ctrl.flapper = 'Uploading, please wait.'
  $scope.showFlapper = true;
  var defer = $q.defer();
  var request = $http.get('data/customers.json').then(function(result) {
    $scope.showFlapper = false;
    var columns = Object.keys(result.data[0])
    defer.resolve(result.data);
    return columns;
  });

  $ctrl.dtOptions = DTOptionsBuilder.fromFnPromise(function() {
    return defer.promise;
  })
  .withBootstrap()
  .withBootstrapOptions({
    pagination: {
      classes: {
        ul: 'pagination pagination-datatables'
      }
    }
  })
  $ctrl.dtColumns = [];
  request.then(function(columns) {
    $ctrl.dtColumns = columns.map(function(columnName, index) {
      if (index ===0) {
        return DTColumnBuilder.newColumn(columnName).withTitle(columnName.toUpperCase()).withClass('text-danger')
      }
      return DTColumnBuilder.newColumn(columnName).withTitle(columnName.toUpperCase())
    });
  })
  .then(function() {
    $scope.showDT = true;
  });
}

TeamQueriesBootstrapIntegrationCtrl.$inject = ['DTOptionsBuilder', 'DTColumnBuilder', '$http', '$q', '$scope'];
function TeamQueriesBootstrapIntegrationCtrl(DTOptionsBuilder, DTColumnBuilder, $http, $q, $scope) {
  var $ctrl = this;
  $ctrl.flapper = 'Uploading, please wait.'
  $scope.showFlapper = true;
  var defer = $q.defer();
  var request = $http.get('data/drivers.json').then(function(result) {
    $scope.showFlapper = false;
    var columns = Object.keys(result.data[0])
    defer.resolve(result.data);
    return columns;
  });

  $ctrl.dtOptions = DTOptionsBuilder.fromFnPromise(function() {
    return defer.promise;
  })
  .withBootstrap()
  .withBootstrapOptions({
    pagination: {
      classes: {
        ul: 'pagination pagination-datatables'
      }
    }
  })
  $ctrl.dtColumns = [];
  request.then(function(columns) {
    $ctrl.dtColumns = columns.map(function(columnName, index) {
      if (index ===0) {
        return DTColumnBuilder.newColumn(columnName).withTitle(columnName.toUpperCase()).withClass('text-danger')
      }
      return DTColumnBuilder.newColumn(columnName).withTitle(columnName.toUpperCase())
    });
  })
  .then(function() {
    $scope.showDT = true;
  });
}

RequestsQueriesBootstrapIntegrationCtrl.$inject = ['DTOptionsBuilder', 'DTColumnBuilder', '$http', '$q', '$scope'];
function RequestsQueriesBootstrapIntegrationCtrl(DTOptionsBuilder, DTColumnBuilder, $http, $q, $scope) {
  var $ctrl = this;
  $ctrl.flapper = 'Uploading, please wait.'
  $scope.showFlapper = true;
  var defer = $q.defer();
  var request = $http.get('data/requests.json').then(function(result) {
    $scope.showFlapper = false;
    var columns = Object.keys(result.data[0])
    defer.resolve(result.data);
    return columns;
  });

  $ctrl.dtOptions = DTOptionsBuilder.fromFnPromise(function() {
    return defer.promise;
  })
  .withBootstrap()
  .withBootstrapOptions({
    pagination: {
      classes: {
        ul: 'pagination pagination-datatables'
      }
    }
  })
  $ctrl.dtColumns = [];
  request.then(function(columns) {
    $ctrl.dtColumns = columns.map(function(columnName, index) {
      if (index ===0) {
        return DTColumnBuilder.newColumn(columnName).withTitle(columnName.toUpperCase()).withClass('text-danger')
      }
      return DTColumnBuilder.newColumn(columnName).withTitle(columnName.toUpperCase())
    });
  })
  .then(function() {
    $scope.showDT = true;
  });
}

RewardsQueriesBootstrapIntegrationCtrl.$inject = ['DTOptionsBuilder', 'DTColumnBuilder', '$http', '$q', '$scope'];
function RewardsQueriesBootstrapIntegrationCtrl(DTOptionsBuilder, DTColumnBuilder, $http, $q, $scope) {
  var $ctrl = this;
  $ctrl.flapper = 'Uploading, please wait.'
  $scope.showFlapper = true;
  var defer = $q.defer();
  var request = $http.get('data/rewards.json').then(function(result) {
    $scope.showFlapper = false;
    var columns = Object.keys(result.data[0])
    defer.resolve(result.data);
    return columns;
  });

  $ctrl.dtOptions = DTOptionsBuilder.fromFnPromise(function() {
    return defer.promise;
  })
  .withBootstrap()
  .withBootstrapOptions({
    pagination: {
      classes: {
        ul: 'pagination pagination-datatables'
      }
    }
  })
  $ctrl.dtColumns = [];
  request.then(function(columns) {
    $ctrl.dtColumns = columns.map(function(columnName, index) {
      if (index ===0) {
        return DTColumnBuilder.newColumn(columnName).withTitle(columnName.toUpperCase()).withClass('text-danger')
      }
      return DTColumnBuilder.newColumn(columnName).withTitle(columnName.toUpperCase())
    });
  })
  .then(function() {
    $scope.showDT = true;
  });
}
