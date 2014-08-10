/**
 * Set up the Choice module
 */
angular.module('fwd.ui.choice', [])
/**
 * Choice Directive
 * - show a list of choices in different formats based on the attributes
 */
    .directive('fwdChoice', [function () {
        return {
            restrict: 'AE',
            templateUrl: 'fwdChoice.tpl.html',
            scope: {
                selected: '=value',
                choices: '=fwdChoice'
            },
            link: function ($scope, $element, $attr) {
                $scope.data = {
                    selected: $scope.selected
                };
                $scope.multiple = $attr.hasOwnProperty('multiple');
                $scope.expanded = $attr.hasOwnProperty('expanded');
                $scope.name = $attr.name;

                $scope.change = function (choice) {
                    if (!$scope.multiple) {
                        $scope.data.selected = choice;
                        return;
                    }
                    if (!($scope.data.selected instanceof Array)) {
                        $scope.data.selected = [];
                    }
                    if ($scope.data.selected.indexOf(choice) === -1) {
                        $scope.data.selected.push(choice);
                    } else {
                        $scope.data.selected.splice($scope.data.selected.indexOf(choice), 1);
                    }
                };

                var unwatchChoices = $scope.$watch('choices',
                    function (newValue, oldValue) {
                        if (!newValue || newValue==oldValue) {
                            return;
                        }
                        if ($scope.multiple){
                            $scope.data.selected = [];
                        }else {
                            $scope.data.selected = null;
                        }

                    }
                );
                var unwatchData = $scope.$watch('data.selected',
                    function (newValue, oldValue) {
                        if (!newValue || newValue==oldValue) {
                            return;
                        }
                        $scope.selected = newValue;
                    }
                );
                var unwatchSelected = $scope.$watch('selected',
                    function (newValue, oldValue) {
                        if (!newValue || newValue==oldValue) {
                            return;
                        }
                        $scope.data.selected = newValue;
                    }
                );

                // on scope destroy stop watching for new content
                $scope.$on('$destroy', function () {
                    unwatchChoices();
                    unwatchData();
                    unwatchSelected();
                });
            } // end link
        }
    }]);