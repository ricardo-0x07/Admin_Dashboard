angular
.module('app')
.directive('includeReplace', includeReplace)
.directive('a', preventClickDirective)
.directive('a', bootstrapCollapseDirective)
.directive('a', navigationDirective)
.directive('button', layoutToggleDirective)
.directive('a', layoutToggleDirective)
.directive('button', collapseMenuTogglerDirective)
.directive('div', bootstrapCarouselDirective)
.directive('toggle', bootstrapTooltipsPopoversDirective)
.directive('tab', bootstrapTabsDirective)
.directive('button', cardCollapseDirective)
.directive('loadingPane', loadingPane)

function includeReplace() {
  var directive = {
    require: 'ngInclude',
    restrict: 'A',
    link: link
  }
  return directive;

  function link(scope, element, attrs) {
    element.replaceWith(element.children());
  }
}

//Prevent click if href="#"
function preventClickDirective() {
  var directive = {
    restrict: 'E',
    link: link
  }
  return directive;

  function link(scope, element, attrs) {
    if (attrs.href === '#'){
      element.on('click', function(event){
        event.preventDefault();
      });
    }
  }
}

//Bootstrap Collapse
function bootstrapCollapseDirective() {
  var directive = {
    restrict: 'E',
    link: link
  }
  return directive;

  function link(scope, element, attrs) {
    if (attrs.toggle=='collapse'){
      element.attr('href','javascript;;').attr('data-target',attrs.href.replace('index.html',''));
    }
  }
}

/**
* @desc Genesis main navigation - Siedebar menu
* @example <li class="nav-item nav-dropdown"></li>
*/
function navigationDirective() {
  var directive = {
    restrict: 'E',
    link: link
  }
  return directive;

  function link(scope, element, attrs) {
    if(element.hasClass('nav-dropdown-toggle') && angular.element('body').width() > 782) {
      element.on('click', function(){
        if(!angular.element('body').hasClass('compact-nav')) {
          element.parent().toggleClass('open').find('.open').removeClass('open');
        }
      });
    } else if (element.hasClass('nav-dropdown-toggle') && angular.element('body').width() < 783) {
      element.on('click', function(){
        element.parent().toggleClass('open').find('.open').removeClass('open');
      });
    }
  }
}

//Dynamic resize .sidebar-nav
sidebarNavDynamicResizeDirective.$inject = ['$window', '$timeout'];
function sidebarNavDynamicResizeDirective($window, $timeout) {
  var directive = {
    restrict: 'E',
    link: link
  }
  return directive;

  function link(scope, element, attrs) {

    if (element.hasClass('sidebar-nav') && angular.element('body').hasClass('fixed-nav')) {
      var bodyHeight = angular.element(window).height();
      scope.$watch(function(){
        var headerHeight = angular.element('header').outerHeight();

        if (angular.element('body').hasClass('sidebar-off-canvas')) {
          element.css('height', bodyHeight);
        } else {
          element.css('height', bodyHeight - headerHeight);
        }
      })

      angular.element($window).bind('resize', function(){
        var bodyHeight = angular.element(window).height();
        var headerHeight = angular.element('header').outerHeight();
        var sidebarHeaderHeight = angular.element('.sidebar-header').outerHeight();
        var sidebarFooterHeight = angular.element('.sidebar-footer').outerHeight();

        if (angular.element('body').hasClass('sidebar-off-canvas')) {
          element.css('height', bodyHeight - sidebarHeaderHeight - sidebarFooterHeight);
        } else {
          element.css('height', bodyHeight - headerHeight - sidebarHeaderHeight - sidebarFooterHeight);
        }
      });
    }
  }
}

//LayoutToggle
layoutToggleDirective.$inject = ['$interval'];
function layoutToggleDirective($interval) {
  var directive = {
    restrict: 'E',
    link: link
  }
  return directive;

  function link(scope, element, attrs) {
    element.on('click', function(){

      if (element.hasClass('sidebar-toggler')) {
        angular.element('body').toggleClass('sidebar-hidden');
      }

      if (element.hasClass('aside-menu-toggler')) {
        angular.element('body').toggleClass('aside-menu-hidden');
      }
    });
  }
}

//Collapse menu toggler
function collapseMenuTogglerDirective() {
  var directive = {
    restrict: 'E',
    link: link
  }
  return directive;

  function link(scope, element, attrs) {
    element.on('click', function(){
      if (element.hasClass('navbar-toggler') && !element.hasClass('layout-toggler')) {
        angular.element('body').toggleClass('sidebar-mobile-show')
      }
    })
  }
}

//Bootstrap Carousel
function bootstrapCarouselDirective() {
  var directive = {
    restrict: 'E',
    link: link
  }
  return directive;

  function link(scope, element, attrs) {
    if (attrs.ride=='carousel'){
      element.find('a').each(function(){
        $(this).attr('data-target',$(this).attr('href').replace('index.html','')).attr('href','javascript;;')
      });
    }
  }
}

//Bootstrap Tooltips & Popovers
function bootstrapTooltipsPopoversDirective() {
  var directive = {
    restrict: 'A',
    link: link
  }
  return directive;

  function link(scope, element, attrs) {
    if (attrs.toggle=='tooltip'){
      angular.element(element).tooltip();
    }
    if (attrs.toggle=='popover'){
      angular.element(element).popover();
    }
  }
}

//Bootstrap Tabs
function bootstrapTabsDirective() {
  var directive = {
    restrict: 'A',
    link: link
  }
  return directive;

  function link(scope, element, attrs) {
    element.click(function(e) {
      e.preventDefault();
      angular.element(element).tab('show');
    });
  }
}

//Card Collapse
function cardCollapseDirective() {
  var directive = {
    restrict: 'E',
    link: link
  }
  return directive;

  function link(scope, element, attrs) {
    if (attrs.toggle=='collapse' && element.parent().hasClass('card-actions')){

      if (element.parent().parent().parent().find('.card-body').hasClass('in')) {
        element.find('i').addClass('r180');
      }

      var id = 'collapse-' + Math.floor((Math.random() * 1000000000) + 1);
      element.attr('data-target','#'+id)
      element.parent().parent().parent().find('.card-body').attr('id',id);

      element.on('click', function(){
        element.find('i').toggleClass('r180');
      })
    }
  }
}

function ngLoading($compile) {
  // var loadingSpinner = angular.element('<div>');
  // loadingSpinner.addClass('loading-pane');
    var loadingSpinner = `<img id="mySpinner" src="img/spinner.gif" style="align-self: center"/>`;

    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var originalContent = element.html();
            // element.html(loadingSpinner);
            console.log('attrs', attrs);
            scope.$watch(attrs.ngLoading, function (val) {
              console.log('val', val);
                if(val) {
                    console.log('originalContent');
                    originalContent.addClass('loading-pane')
                    // element.html(originalContent);
                    $compile(element.contents())(scope);
                } else {
                  console.log('loadingSpinner');
                  originalContent.removeClass('loading-pane')
                    // element.html(loadingSpinner);
                }
            });
        }
    };
}

function loadingPane($timeout, $window) {
  return {
      restrict: 'A',
      link: function (scope, element, attr) {
          var directiveId = 'loadingPane';

          var targetElement;
          var paneElement;
          var throttledPosition;

          function init(element) {
              targetElement = element;

              paneElement = angular.element('<div>');
              paneElement.addClass('loading-pane');

              if (attr['id']) {
                  paneElement.attr('data-target-id', attr['id']);
              }

              var spinnerImage = angular.element('<div>');
              spinnerImage.addClass('spinner-image');
              spinnerImage.appendTo(paneElement);

              angular.element('body').append(paneElement);

              setZIndex();

              //reposition window after a while, just in case if:
              // - watched scope property will be set to true from the beginning
              // - and initial position of the target element will be shifted during page rendering
              $timeout(position, 100);
              $timeout(position, 200);
              $timeout(position, 300);

              // throttledPosition = _.throttle(position, 50);
              angular.element($window).scroll(position);
              angular.element($window).resize(position);
          }

          function updateVisibility(isVisible) {
              if (isVisible) {
                  show();
              } else {
                  hide();
              }
          }

          function setZIndex() {                
              var paneZIndex = 500;

              paneElement.css('zIndex', paneZIndex).find('.spinner-image').css('zIndex', paneZIndex + 1);
          }

          function position() {
              paneElement.css({
                  'left': targetElement.offset().left,
                  'top': targetElement.offset().top - $(window).scrollTop(),
                  'width': targetElement.outerWidth(),
                  'height': targetElement.outerHeight()
              });
          }

          function show() {
              paneElement.show();
              position();
          }

          function hide() {
              paneElement.hide();
          }

          init(element);

          scope.$watch(attr[directiveId], function (newVal) {
              console.log('newVal', newVal);
              updateVisibility(newVal);
          });

          scope.$on('$destroy', function cleanup() {
              paneElement.remove();
              $(window).off('scroll', throttledPosition);
              $(window).off('resize', throttledPosition);
          });
      }
  };
};
