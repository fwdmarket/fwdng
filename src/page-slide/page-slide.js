/**
 * Set up the PageSlide module
 */
angular.module('fwd.ui.pageSlide', [])
/**
 * Configuration instructions for the PageSlide directive
 */
    .provider('PageSlideConfig', function () {
        // set the default configuration for the page slide directive
        this.config = {
            direction: 'left',
            effect: 'slide',
            easing: 'easeInOutSine',
            duration: 250
        };

        // set new configuration value
        this.setConfig = function (config) {
            this.config = config;
        };

        // get the configuration object
        this.$get = function () {
            return {
                config: this.config,
                getToDirection: function () {
                    return this.config.direction;
                },
                getFromDirection: function () {
                    switch (this.config.direction) {
                        case 'left':
                            return 'right';
                        case 'right':
                            return 'left';
                        case 'up':
                            return 'down';
                        case 'down':
                            return 'up';
                    }
                }
            }
        };
    })
/**
 * Page Slide Directive
 * - use an effect to show the new content when it changes
 * - can use different effects configured in PageSlideConfig
 */
    .directive('fwdPageSlide', ['$compile', 'PageSlideConfig', function ($compile, PageSlideConfig) {
        return {
            restrict: 'AE',
            //inherit scope from the parent and create a new one
            scope: true,
            link: function ($scope, $element, $attr) {
                var unwatch = $scope.$watch(function (){
                        return $attr.fwdPageSlide;
                    },
                    function (newValue) {
                        if (!newValue) {
                            return;
                        }
                        $element.hide({
                            effect: PageSlideConfig.config.effect,
                            direction: PageSlideConfig.getToDirection(),
                            easing: PageSlideConfig.config.easing,
                            duration: PageSlideConfig.config.duration,
                            complete: function () {
                                // assign the new value into the current DOM
                                $element.html(newValue);

                                // quickly show and hide the element while computing the div size
                                // (this will not be visible in the browser)
                                $element.show();

                                // compile the new DOM and link it to the current scope.
                                // NOTE: we only compile .childNodes so that we don't get into
                                // infinite loop compiling ourselves
                                $compile($element.contents())($scope);
                                $scope.$apply();

                                // hide the element after it's contents was computed to be able to
                                // start the show animation
                                $element.hide();
                                $element.show({
                                    effect: PageSlideConfig.config.effect,
                                    direction: PageSlideConfig.getFromDirection(),
                                    easing: PageSlideConfig.config.easing,
                                    duration: PageSlideConfig.config.duration
                                });
                            }
                        });
                    }
                );
                // on scope destroy stop watching for new content
                $scope.$on('$destroy', function (){
                    unwatch();
                });
            } // end link
        }
    }]);