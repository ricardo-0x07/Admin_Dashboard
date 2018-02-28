
//modal.js
angular
.module('app')
.controller('EventFormModalController', EventFormModalController);

EventFormModalController.$inject =['$scope', '$uibModalInstance', 'item', 'title'];
function EventFormModalController($scope, $uibModalInstance, item, title) {
    var $ctrl = this;
    console.log('EventFormModalController opened');
    $ctrl.$uibModalInstance = $uibModalInstance;
    $ctrl.item = item;
    $ctrl.title = title;
    $ctrl.save = function (item) {
        console.log('item: ', item);
        item.end = item.date.endDate._d;
        item.start = item.date.startDate._d;
        // delete item[date];
        $uibModalInstance.close(item);
    };
    $ctrl.update = function(key, value) {
        $ctrl.item[key] = value;
        console.log('$ctrl.item: ', $ctrl.item);
    }
    $ctrl.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
    $ctrl.item.date = {
        startDate: moment().subtract(5, 'days'),
        endDate: moment()
    };
    $ctrl.opts = {
        drops: 'down',
        opens: 'left',
        ranges: {
          'Today': [moment(), moment()],
          'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
          'Last 7 days': [moment().subtract(7, 'days'), moment()],
          'Last 30 days': [moment().subtract(30, 'days'), moment()],
          'This month': [moment().startOf('month'), moment().endOf('month')]
        }
    };
    
      //Watch for date changes
      $scope.$watch('$ctrl.item.date', function(newDate) {
          console.log('newDate:', newDate);
      }, false);
}
