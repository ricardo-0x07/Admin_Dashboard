
//modal.js
angular
.module('app')
.controller('FormModalController', FormModalController);

FormModalController.$inject =['$uibModalInstance', 'item', 'title'];
function FormModalController($uibModalInstance, item, title) {
    var $ctrl = this;
    console.log('FormModalController opened');
    $ctrl.$uibModalInstance = $uibModalInstance;
    $ctrl.item = item;
    $ctrl.title = title;
    $ctrl.save = function (item) {
        $uibModalInstance.close(item);
    };
    $ctrl.update = function(key, value) {
        $ctrl.item[key] = value;
        console.log('$ctrl.item: ', $ctrl.item);
    }
    $ctrl.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
}
