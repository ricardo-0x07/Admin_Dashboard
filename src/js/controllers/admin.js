angular.module("app")
  .controller("DynamicAdminCtrl", DynamicAdminCtrl);

function DynamicAdminCtrl() {
    var $ctrl = this;
    
    $ctrl.graphs = {
        "line-chart": "views/components/admin/graphs/line-chart.html",
        "bar-chart": "views/components/admin/graphs/bar-chart.html",
        "doughnut-chart": "views/components/admin/graphs/doughnut-chart.html",
        "pie-chart": "views/components/admin/graphs/pie-chart.html",
        "polar-chart": "views/components/admin/graphs/polar-chart.html",
        "radar-chart": "views/components/admin/graphs/radar-chart.html",
    };
  
    $ctrl.tables = {
        "customers": "views/components/admin/tables/customers-table.html",
        "requests": "views/components/admin/tables/requests-table.html",
        "rewards": "views/components/admin/tables/rewards-table.html",
        "task": "views/components/admin/tables/task-table.html",
        "team": "views/components/admin/tables/team-table.html",
        "user": "views/components/admin/tables/user-table.html",
    };
  
    $ctrl.displayedGraphs = {};
    $ctrl.displayedTables = {};
    
    $ctrl.addGraph = function(graphKey) {
        $ctrl.displayedGraphs[graphKey]  = $ctrl.graphs[graphKey];
    }

    $ctrl.removeGraph = function(graphKey) {
        delete $ctrl.displayedGraphs[graphKey];
    }

    $ctrl.getGraphValues = function() {
        return Object.values($ctrl.displayedGraphs);
    }

    $ctrl.getGraphKeys = function(graphKey) {
        return Object.keys($ctrl.displayedGraphs);
    }

    $ctrl.addTable = function(tableKey) {
        $ctrl.displayedTables[tableKey] = $ctrl.tables[tableKey];
    }
    $ctrl.removeTable = function(tableKey) {
        delete $ctrl.displayedTables[tableKey];
    }

    $ctrl.getTableValues = function() {
        return Object.values($ctrl.displayedTables);
    }

    $ctrl.getTableKeys = function(tableKey) {
        return Object.keys($ctrl.displayedTables);
    }

}