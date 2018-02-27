
//modal.js
angular
.module('app')
.factory('QueriesService', QueriesService);


function QueriesService() {
   return {
        graphs: {
            "line-chart": "views/components/graphs/line-chart.html",
            "bar-chart": "views/components/graphs/bar-chart.html",
            "doughnut-chart": "views/components/graphs/doughnut-chart.html",
            "pie-chart": "views/components/graphs/pie-chart.html",
            "polar-chart": "views/components/graphs/polar-chart.html",
            "radar-chart": "views/components/graphs/radar-chart.html"
        },
        tables: {
            "customers": "views/components/tables/customers-table.html",
            "requests": "views/components/tables/requests-table.html",
            "rewards": "views/components/tables/rewards-table.html",
            "task": "views/components/tables/task-table.html",
            "team": "views/components/tables/team-table.html",
            "user": "views/components/tables/user-table.html"
        },
        displayedGraphs: {},
        displayedTables: {},
        currentSelectedTable: '',
        currentSelectedTableColumns: [],
        addGraph: function(graphKey) {
            this.displayedGraphs[graphKey]  = this.graphs[graphKey];
        },
    
        removeGraph: function(graphKey) {
            delete this.displayedGraphs[graphKey];
        },
    
        getGraphValues: function() {
            return Object.values(this.displayedGraphs);
        },
    
        getGraphKeys: function(graphKey) {
            return Object.keys(this.displayedGraphs);
        },
    
        addTable: function(tableKey) {
            this.currentSelectedTable = this.tables[tableKey];
            this.displayedTables[tableKey] = this.tables[tableKey];
        },
        removeTable: function(tableKey) {
            delete this.displayedTables[tableKey];
        },
    
        getTableValues: function() {
            return Object.values(this.displayedTables);
        },
    
        getTableKeys: function(tableKey) {
            return Object.keys(this.displayedTables);
        },
    }
}

