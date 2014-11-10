/**
 * Set up the Timeline module
 */
angular.module('fwd.ui.timeline', [])
/**
 * Configuration instructions for the Timeline directive
 */
  .provider('TimelineConfig', function () {
    // set the default configuration for the timeline directive
    this.config = {

    };
    this.dateFormater = function (dt){
      return '';
    };
    this.timeFormater = function (dt){
      if (moment){
        return moment(dt).format("ddd, hA");
      }
      return dt;
    }

    // set new configuration value
    this.setConfig = function (config) {
      this.config = config;
    };
    this.setDateFormater = function (formater){
      this.dateFormater = formater;
    };

    this.setTimeFormater = function (formater){
      this.timeFormater = formater;
    }

    // get the configuration object
    this.$get = function () {
      return {
        config: this.config,
        getDate: this.dateFormater,
        getTime: this.timeFormater
      }
    };
  })
/**
 * Timeline Directive
 * - display a vertical timeline of events based on the provided data.
 */
  .directive('fwdTimeline', ['$compile', 'TimelineConfig', function ($compile, TimelineConfig) {
    return {
      templateUrl: 'fwdTimeline.tpl.html',
      controller: function ($scope) {
        $scope.getDate = function (dt) {
          return TimelineConfig.getDate(dt);
        };
        $scope.getTime = function (dt) {
          return TimelineConfig.getTime(dt);
        };
      },
      restrict: 'AE',
      //inherit scope from the parent and create a new one
      scope: {
        timeline: '=fwdTimeline'
      },
      link: function ($scope, $element, $attr) {

        // on scope destroy stop watching for new content
        $scope.$on('$destroy', function () {
          //clean out all the code
        });
      } // end link
    }
  }]);