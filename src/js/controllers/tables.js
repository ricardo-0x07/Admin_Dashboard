//tables.js
angular
.module('app')
.controller('BootstrapIntegrationCtrl', BootstrapIntegrationCtrl)
.controller('TaskQueriesBootstrapIntegrationCtrl', TaskQueriesBootstrapIntegrationCtrl)
.controller('TeamQueriesBootstrapIntegrationCtrl', TeamQueriesBootstrapIntegrationCtrl)
.controller('RequestsQueriesBootstrapIntegrationCtrl', RequestsQueriesBootstrapIntegrationCtrl)
.controller('RewardsQueriesBootstrapIntegrationCtrl', RewardsQueriesBootstrapIntegrationCtrl)
.controller('CustomersQueriesBootstrapIntegrationCtrl', CustomersQueriesBootstrapIntegrationCtrl);


BootstrapIntegrationCtrl.$inject = ['DTOptionsBuilder', 'DTColumnBuilder'];
function BootstrapIntegrationCtrl(DTOptionsBuilder, DTColumnBuilder) {
  var vm = this;
  console.log('BootstrapIntegrationCtrl loaded DTOptionsBuilder: ', DTOptionsBuilder);
  vm.dtOptions = DTOptionsBuilder
  .fromSource('data.json')
  // Add Bootstrap compatibility
  .withBootstrap()
  .withBootstrapOptions({
    pagination: {
      classes: {
        ul: 'pagination pagination-datatables'
      }
    }
  })
  vm.dtColumns = [
    DTColumnBuilder.newColumn('id').withTitle('ID').withClass('text-danger'),
    DTColumnBuilder.newColumn('firstName').withTitle('First name'),
    DTColumnBuilder.newColumn('lastName').withTitle('Last name')
  ];
}

TaskQueriesBootstrapIntegrationCtrl.$inject = ['DTOptionsBuilder', 'DTColumnBuilder'];
function TaskQueriesBootstrapIntegrationCtrl(DTOptionsBuilder, DTColumnBuilder) {
  var vm = this;
  console.log('TaskQueriesBootstrapIntegrationCtrl loaded DTOptionsBuilder: ', DTOptionsBuilder);
  vm.dtOptions = DTOptionsBuilder
  .fromSource('data/assignments.json')
  // Add Bootstrap compatibility
  .withBootstrap()
  .withBootstrapOptions({
    pagination: {
      classes: {
        ul: 'pagination pagination-datatables'
      }
    }
  })
  vm.dtColumns = [
    DTColumnBuilder.newColumn('id').withTitle('ID').withClass('text-danger'),
    DTColumnBuilder.newColumn('customer').withTitle('Customer'),
    DTColumnBuilder.newColumn('pickup').withTitle('Location'),
    DTColumnBuilder.newColumn('driver').withTitle('Owner'),
    DTColumnBuilder.newColumn('assigned').withTitle('Date Assigned'),
    DTColumnBuilder.newColumn('status').withTitle('Status'),
  ];
}

CustomersQueriesBootstrapIntegrationCtrl.$inject = ['DTOptionsBuilder', 'DTColumnBuilder'];
function CustomersQueriesBootstrapIntegrationCtrl(DTOptionsBuilder, DTColumnBuilder) {
  var vm = this;
  console.log('CustomersQueriesBootstrapIntegrationCtrl loaded DTOptionsBuilder: ', DTOptionsBuilder);
  vm.dtOptions = DTOptionsBuilder
  .fromSource('data/customers.json')
  // Add Bootstrap compatibility
  .withBootstrap()
  .withBootstrapOptions({
    pagination: {
      classes: {
        ul: 'pagination pagination-datatables'
      }
    }
  })
  vm.dtColumns = [
    DTColumnBuilder.newColumn('id').withTitle('ID').withClass('text-danger'),
    DTColumnBuilder.newColumn('firstName').withTitle('First Name'),
    DTColumnBuilder.newColumn('lastName').withTitle('Last Name'),
    DTColumnBuilder.newColumn('email').withTitle('Email'),
    DTColumnBuilder.newColumn('address1').withTitle('Address 1'),
    DTColumnBuilder.newColumn('address2').withTitle('Address 2'),
    DTColumnBuilder.newColumn('city').withTitle('City'),
    DTColumnBuilder.newColumn('state').withTitle('State'),
    DTColumnBuilder.newColumn('zip').withTitle('Zip Code'),
    DTColumnBuilder.newColumn('phone').withTitle('Phone'),
    DTColumnBuilder.newColumn('balance').withTitle('Account Balance'),
  ];
}

TeamQueriesBootstrapIntegrationCtrl.$inject = ['DTOptionsBuilder', 'DTColumnBuilder'];
function TeamQueriesBootstrapIntegrationCtrl(DTOptionsBuilder, DTColumnBuilder) {
  var vm = this;
  console.log('TeamQueriesBootstrapIntegrationCtrl loaded DTOptionsBuilder: ', DTOptionsBuilder);
  vm.dtOptions = DTOptionsBuilder
  .fromSource('data/drivers.json')
  // Add Bootstrap compatibility
  .withBootstrap()
  .withBootstrapOptions({
    pagination: {
      classes: {
        ul: 'pagination pagination-datatables'
      }
    }
  })
  vm.dtColumns = [
    DTColumnBuilder.newColumn('id').withTitle('ID').withClass('text-danger'),
    DTColumnBuilder.newColumn('firstName').withTitle('First Name'),
    DTColumnBuilder.newColumn('lastName').withTitle('Last Name'),
    DTColumnBuilder.newColumn('email').withTitle('Email'),
    DTColumnBuilder.newColumn('address1').withTitle('Address 1'),
    DTColumnBuilder.newColumn('address2').withTitle('Address 2'),
    DTColumnBuilder.newColumn('city').withTitle('City'),
    DTColumnBuilder.newColumn('state').withTitle('State'),
    DTColumnBuilder.newColumn('zip').withTitle('Zip Code'),
    DTColumnBuilder.newColumn('phone').withTitle('Phone'),
    DTColumnBuilder.newColumn('isAvailable').withTitle('Available?'),
  ];
}

RequestsQueriesBootstrapIntegrationCtrl.$inject = ['DTOptionsBuilder', 'DTColumnBuilder'];
function RequestsQueriesBootstrapIntegrationCtrl(DTOptionsBuilder, DTColumnBuilder) {
  var vm = this;
  console.log('RequestsQueriesBootstrapIntegrationCtrl loaded DTOptionsBuilder: ', DTOptionsBuilder);
  vm.dtOptions = DTOptionsBuilder
  .fromSource('data/requests.json')
  // Add Bootstrap compatibility
  .withBootstrap()
  .withBootstrapOptions({
    pagination: {
      classes: {
        ul: 'pagination pagination-datatables'
      }
    }
  })
  vm.dtColumns = [
    DTColumnBuilder.newColumn('id').withTitle('ID').withClass('text-danger'),
    DTColumnBuilder.newColumn('name').withTitle('Name'),
    DTColumnBuilder.newColumn('address').withTitle('Address'),
    DTColumnBuilder.newColumn('phone').withTitle('Phone'),
    DTColumnBuilder.newColumn('recycle_type').withTitle('Type 1'),
    DTColumnBuilder.newColumn('bin_type').withTitle('Type 2'),
    DTColumnBuilder.newColumn('status').withTitle('Status'),
  ];
}

RewardsQueriesBootstrapIntegrationCtrl.$inject = ['DTOptionsBuilder', 'DTColumnBuilder'];
function RewardsQueriesBootstrapIntegrationCtrl(DTOptionsBuilder, DTColumnBuilder) {
  var vm = this;
  console.log('RewardsQueriesBootstrapIntegrationCtrl loaded DTOptionsBuilder: ', DTOptionsBuilder);
  vm.dtOptions = DTOptionsBuilder
  .fromSource('data/rewards.json')
  // Add Bootstrap compatibility
  .withBootstrap()
  .withBootstrapOptions({
    pagination: {
      classes: {
        ul: 'pagination pagination-datatables'
      }
    }
  })
  vm.dtColumns = [
    DTColumnBuilder.newColumn('id').withTitle('ID').withClass('text-danger'),
    DTColumnBuilder.newColumn('name').withTitle('Name'),
    DTColumnBuilder.newColumn('type').withTitle('Type'),
    DTColumnBuilder.newColumn('status').withTitle('Status'),
    DTColumnBuilder.newColumn('amount').withTitle('Amount'),
  ];
}
