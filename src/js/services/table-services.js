
//modal.js
angular
.module('app')
.factory('TableService', TableService);

TableService.$inject = ['DTOptionsBuilder', 'DTColumnBuilder', '$http', '$q', '$rootScope'];
function TableService(DTOptionsBuilder, DTColumnBuilder, $http, $q, $rootScope) {

    return {
       columns: [],
    }
}

