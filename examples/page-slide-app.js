angular
    .module('app',['fwd.ui.pageSlide'])
    .controller('PageController', function ($scope, PageSlideConfig){
        $scope.content = "Phasellus blandit {{ age }} leo ut odio. Aenean vulputate eleifend tellus. Vestibulum ullamcorper mauris at ligula. Quisque id mi. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla.\n\nMaecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Sed a libero. Praesent congue erat at massa. Quisque id odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\n\nFusce vulputate eleifend sapien. In hac habitasse platea dictumst. Sed cursus turpis vitae tortor. Praesent ac massa at ligula laoreet iaculis. Curabitur a felis in nunc fringilla tristique.\n\nNullam quis ante. In auctor lobortis lacus. Praesent nec nisl a purus blandit viverra. Fusce fermentum. Etiam ultricies nisi vel augue.\n\nCras risus ipsum, faucibus ut, ullamcorper id, varius ac, leo. Proin pretium, leo ac pellentesque mollis, felis nunc ultrices eros, sed gravida augue augue mollis justo. Fusce a quam. In hac habitasse platea dictumst. Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus.";
        $scope.age = 10;
        $scope.show = true;
        $scope.changeContent = function (){
            switch (PageSlideConfig.config.direction){
                case 'left':
                    PageSlideConfig.config.direction = 'up';
                    break;
                case 'up':
                    PageSlideConfig.config.direction = 'right';
                    break;
                case 'right':
                    PageSlideConfig.config.direction = 'down';
                    break;
                case 'down':
                    PageSlideConfig.config.direction = 'left';
                    break;
            }

            $scope.content = Math.random()+"Suspendisse {{ age }} pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, " +
                "nec pellentesque velit pede quis nunc. Ut id nisl quis enim dignissim sagittis. Phasellus " +
                "volutpat, metus eget egestas mollis, lacus lacus blandit dui, id egestas quam mauris ut lacus. " +
                "Maecenas egestas arcu quis ligula mattis placerat. Suspendisse faucibus, nunc et pellentesque " +
                "egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor.\n\nVivamus laoreet. " +
                "Aenean ut eros et nisl sagittis vestibulum. Vestibulum facilisis, purus nec pulvinar iaculis, " +
                "ligula mi congue nunc, vitae euismod ligula urna in dolor. Cras dapibus. Nunc egestas, augue at " +
                "pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede.\n\nUt leo. " +
                "Pellentesque posuere. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. Donec " +
                "vitae sapien ut libero venenatis faucibus. In turpis.\n\nNullam dictum felis eu pede mollis " +
                "pretium. Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Nunc nec neque. " +
                "Vestibulum eu odio. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.\n\n" +
                "Cras dapibus. Quisque ut nisi. Praesent vestibulum dapibus nibh. Ut id nisl quis enim dignissim " +
                "sagittis. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra " +
                "felis nunc et lorem.";
        };
    });