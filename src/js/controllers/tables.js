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
}

TaskQueriesBootstrapIntegrationCtrl.$inject = ['DTOptionsBuilder', 'DTColumnBuilder', 'DTDefaultOptions', '$http', '$q', '$scope', 'QueriesService'];
function TaskQueriesBootstrapIntegrationCtrl(DTOptionsBuilder, DTColumnBuilder, DTDefaultOptions, $http, $q, $scope, QueriesService) {
  console.log('DTDefaultOptions: ', DTDefaultOptions);
  var $ctrl = this;
  $ctrl.flapper = 'Uploading, please wait.'
  $scope.showFlapper = true;
  var defer = $q.defer();
  var request = $http.get('data/assignments.json').then(function(result) {
    $scope.showFlapper = false;
    var columns = Object.keys(result.data[0])
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
}

CustomersQueriesBootstrapIntegrationCtrl.$inject = ['DTOptionsBuilder', 'DTColumnBuilder', '$http', '$q', '$scope', 'QueriesService'];
function CustomersQueriesBootstrapIntegrationCtrl(DTOptionsBuilder, DTColumnBuilder, $http, $q, $scope, QueriesService) {
  var $ctrl = this;
  $ctrl.flapper = 'Uploading, please wait.'
  $scope.showFlapper = true;
  var defer = $q.defer();
  var request = $http.get('data/customers.json').then(function(result) {
    $scope.showFlapper = false;
    var columns = Object.keys(result.data[0])
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
}

TeamQueriesBootstrapIntegrationCtrl.$inject = ['DTOptionsBuilder', 'DTColumnBuilder', '$http', '$q', '$scope', 'QueriesService'];
function TeamQueriesBootstrapIntegrationCtrl(DTOptionsBuilder, DTColumnBuilder, $http, $q, $scope, QueriesService) {
  var $ctrl = this;
  $ctrl.flapper = 'Uploading, please wait.'
  $scope.showFlapper = true;
  var defer = $q.defer();
  var request = $http.get('data/drivers.json').then(function(result) {
    $scope.showFlapper = false;
    var columns = Object.keys(result.data[0])
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
}

RequestsQueriesBootstrapIntegrationCtrl.$inject = ['DTOptionsBuilder', 'DTColumnBuilder', '$http', '$q', '$scope', 'QueriesService'];
function RequestsQueriesBootstrapIntegrationCtrl(DTOptionsBuilder, DTColumnBuilder, $http, $q, $scope, QueriesService) {
  var $ctrl = this;
  $ctrl.flapper = 'Uploading, please wait.'
  $scope.showFlapper = true;
  var defer = $q.defer();
  var request = $http.get('data/requests.json').then(function(result) {
    $scope.showFlapper = false;
    var columns = Object.keys(result.data[0])
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
}

RewardsQueriesBootstrapIntegrationCtrl.$inject = ['DTOptionsBuilder', 'DTColumnBuilder', '$http', '$q', '$scope', 'QueriesService'];
function RewardsQueriesBootstrapIntegrationCtrl(DTOptionsBuilder, DTColumnBuilder, $http, $q, $scope, QueriesService) {
  var $ctrl = this;
  $ctrl.flapper = 'Uploading, please wait.'
  $scope.showFlapper = true;
  var defer = $q.defer();
  var request = $http.get('data/rewards.json').then(function(result) {
    $scope.showFlapper = false;
    var columns = Object.keys(result.data[0])
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
}
