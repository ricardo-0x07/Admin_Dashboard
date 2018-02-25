angular.module("app")
  .controller("DynamicDashboardCtrl", DynamicDashboardCtrl);

function DynamicDashboardCtrl() {
    var $ctrl = this;
    
    $ctrl.graphs = {
        "line-chart": "views/components/dashboard/graphs/line-chart.html",
        "bar-chart": "views/components/dashboard/graphs/bar-chart.html",
        "doughnut-chart": "views/components/dashboard/graphs/doughnut-chart.html",
        "pie-chart": "views/components/dashboard/graphs/pie-chart.html",
        "polar-chart": "views/components/dashboard/graphs/polar-chart.html",
        "radar-chart": "views/components/dashboard/graphs/radar-chart.html",
    };
  
    $ctrl.tables = {
        "customers": "views/components/dashboard/tables/customers-table.html",
        "requests": "views/components/dashboard/tables/requests-table.html",
        "rewards": "views/components/dashboard/tables/rewards-table.html",
        "task": "views/components/dashboard/tables/task-table.html",
        "team": "views/components/dashboard/tables/team-table.html",
        "user": "views/components/dashboard/tables/user-table.html",
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