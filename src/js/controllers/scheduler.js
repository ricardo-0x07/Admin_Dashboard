angular.module("app")
  .controller("DynamicSchedulerCtrl", DynamicSchedulerCtrl);

DynamicSchedulerCtrl.$inject =['QueriesService', '$rootScope'];
function DynamicSchedulerCtrl(QueriesService, $rootScope) {
    var $ctrl = this;
    $rootScope.isPaneShown = false;
    
    $ctrl.item = {};

    var queries = ['query 1', 'query 2', 'query 3', 'query 4', 'query 5']
    $ctrl.selectedAllQueries = false;
    $ctrl.queryOptions = queries.map(function (optionName) {
      return {name: optionName, selected: false};
    });

    $ctrl.checkAllQueries = function () {
      $ctrl.selectedAllQueries = ! $ctrl.selectedAllQueries;
      $ctrl.queryOptions.forEach(element => {
        element.selected = $ctrl.selectedAllQueries;
      });
    }

    var tables = ['table 1', 'table 2', 'table 3', 'table 4', 'table 5']
    $ctrl.selectedAllTables = false;
    $ctrl.tableOptions = tables.map(function (optionName) {
      return {name: optionName, selected: false};
    });

    $ctrl.checkAllTables = function () {
      $ctrl.selectedAllTables = ! $ctrl.selectedAllTables;
      $ctrl.tableOptions.forEach(element => {
        element.selected = $ctrl.selectedAllTables;
      });
    }

    var graphs = ['graph 1', 'graph 2', 'graph 3', 'graph 4', 'graph 5']
    $ctrl.selectedAllGraphs = false;
    $ctrl.graphOptions = graphs.map(function (optionName) {
      return {name: optionName, selected: false};
    });

    $ctrl.checkAllGraphs = function () {
      $ctrl.selectedAllGraphs = ! $ctrl.selectedAllGraphs;
      $ctrl.graphOptions.forEach(element => {
        element.selected = $ctrl.selectedAllGraphs;
      });
    }

    var communications = ['Slack', 'Email']
    $ctrl.selectedAllComm = false;
    $ctrl.commOptions = communications.map(function (optionName) {
      return {name: optionName, selected: false};
    });

    $ctrl.checkAllCommOptions = function () {
      $ctrl.selectedAllComm = ! $ctrl.selectedAllComm;
      $ctrl.commOptions.forEach(element => {
        element.selected = $ctrl.selectedAllComm;
      });
    }
    var posts = ['Slack', 'Email']
    $ctrl.selectedAllPosts = false;
    $ctrl.postOptions = posts.map(function (optionName) {
      return {name: optionName, selected: false};
    });

    $ctrl.checkAllPostOptions = function () {
      $ctrl.selectedAllPosts = ! $ctrl.selectedAllPosts;
      $ctrl.postOptions.forEach(element => {
        element.selected = $ctrl.selectedAllPosts;
      });
    }
    var postGraph = ['Slack', 'Email']
    $ctrl.selectedAllPostGraph = false;
    $ctrl.postGraphOptions = postGraph.map(function (optionName) {
      return {name: optionName, selected: false};
    });

    $ctrl.checkAllPostGraphOptions = function () {
      $ctrl.selectedAllPostGraph = ! $ctrl.selectedAllPostGraph;
      $ctrl.postGraphOptions.forEach(element => {
        element.selected = $ctrl.selectedAllPostGraph;
      });
    }

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
}