angular
    .module('app',['fwd.ui.choice'])
    .controller('PageController', function ($scope){
        $scope.selectedM = [];
        $scope.selectedML = [];
        $scope.choices = [
            {value: 'f', label:'Female', cls:'checkFemale'},
            {value: 'm', label: 'Male', cls:'checkMale'}
        ];
        $scope.choiceLevels = [
            {value: 'none', label:'None', cls:'lvl1'},
            {value: 'mild', label: 'Mild', cls:'lvl2'},
            {value: 'moderate', label: 'Moderate', cls:'lvl3'},
            {value: 'severe', label: 'Severe', cls:'lvl4'}
        ];
        $scope.selected = $scope.choices[0];
        $scope.selectedL = $scope.choiceLevels[0];
        $scope.changeValue = function (){
            $scope.choices = [
                $scope.choices[0],
                $scope.choices[1],
                {value: 'd', label: 'Dale', cls:'checkDale'}
            ];
        };
    });