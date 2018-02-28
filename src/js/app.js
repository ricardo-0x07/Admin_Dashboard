// Default colors
var brandPrimary =  '#20a8d8';
var brandSuccess =  '#4dbd74';
var brandInfo =     '#63c2de';
var brandWarning =  '#f8cb00';
var brandDanger =   '#f86c6b';

var grayDark =      '#2a2c36';
var gray =          '#55595c';
var grayLight =     '#818a91';
var grayLighter =   '#d1d4d7';
var grayLightest =  '#f8f9fa';

angular
.module('app', [
  'ui.router',
  'oc.lazyLoad',
  'pascalprecht.translate',
  'ncy-angular-breadcrumb',
  'angular-loading-bar',
  'ngSanitize',
  'ngAnimate',
  'ui.bootstrap',
  'datatables',
  'datatables.bootstrap',
  'ngLodash',
  'angular-flapper',
  'datatables.options'
])
.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
  cfpLoadingBarProvider.includeSpinner = false;
  cfpLoadingBarProvider.latencyThreshold = 1;
}])
.run(['$rootScope', '$state', '$stateParams', 'DTDefaultOptions', function($rootScope, $state, $stateParams, DTDefaultOptions) {
  // DTDefaultOptions.setLoadingTemplate('<div flapper-repeat ng-model="$rootScope.flapper"  nbflap="12" />');
  $rootScope.$on('$stateChangeSuccess',function(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  });
  $rootScope.$state = $state;
  return $rootScope.$stateParams = $stateParams;
  // $rootScope.isPaneShown = false;
  // angular.element(function () {
  //   $rootScope.isPaneShown = true;
  //   console.log('$rootscope angular.element');
  // });  
  $rootScope.isPaneShown = true; 
  // $rootScope.$on('$viewContentLoading', function(eve){
  //   //Here your view content is fully loaded !!
  //   $rootScope.isPaneShown = true;
  //   console.log('$viewContentLoading', eve);
  // });
  // $rootScope.$on('$viewContentLoaded', function(){
  //   //Here your view content is fully loaded !!
  //   $rootScope.isPaneShown = true;
  //   console.log('$viewContentLoaded', event);
  // });
}])
.controller('AppCtrl', AppCtrl);

AppCtrl.$inject =['AuthService', '$rootScope'];
function AppCtrl(AuthService, $rootScope) {
    $rootScope.isPaneShown = true;
    // $rootScope.$watch('$viewContentLoaded', function(){
    //   //Here your view content is fully loaded !!
    //   $rootScope.isPaneShown = true;
    //   console.log('$viewContentLoaded', event);
    // });
  }
