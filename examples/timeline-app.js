angular
  .module('app', ['fwd.ui.timeline'])
  .controller('PageController', function ($scope, TimelineConfig) {
    $scope.events = [
      {
        time: moment().subtract(1, 'minutes'),
        icon: 'fa fa-paint-brush',
        title: 'Something cool',
        description: 'Sed in libero ut nibh placerat accumsan. Praesent porttitor, nulla vitae posuere iaculis, arcu ' +
          'nisl dignissim dolor, a pretium mi sem ut ipsum. Maecenas egestas arcu quis ligula mattis placerat. Aenean ' +
          'leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Cras ultricies mi eu turpis hendrerit fringilla.'
      },{
        time: moment().subtract(2, 'minutes'),
        icon: 'fa fa-home',
        title: 'Something cool',
        description: 'Sed in libero ut nibh placerat accumsan. Praesent porttitor, nulla vitae posuere iaculis, arcu ' +
          'nisl dignissim dolor, a pretium mi sem ut ipsum. Maecenas egestas arcu quis ligula mattis placerat. Aenean ' +
          'leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Cras ultricies mi eu turpis hendrerit fringilla.'
      },{
        time: moment().subtract(3, 'minutes'),
        icon: 'fa fa-bell',
        title: 'Something cool',
        description: 'Sed in libero ut nibh placerat accumsan. Praesent porttitor, nulla vitae posuere iaculis, arcu ' +
          'nisl dignissim dolor, a pretium mi sem ut ipsum. Maecenas egestas arcu quis ligula mattis placerat. Aenean ' +
          'leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Cras ultricies mi eu turpis hendrerit fringilla.'
      },{
        time: moment().subtract(1, 'hour'),
        icon: 'fa fa-inbox',
        title: 'Something cool',
        description: 'Sed in libero ut nibh placerat accumsan. Praesent porttitor, nulla vitae posuere iaculis, arcu ' +
          'nisl dignissim dolor, a pretium mi sem ut ipsum. Maecenas egestas arcu quis ligula mattis placerat. Aenean ' +
          'leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Cras ultricies mi eu turpis hendrerit fringilla.'
      }
    ];
    $scope.changeContent = function (){
      $scope.events = [
        {
          time: moment().subtract(3, 'minutes'),
          icon: 'fa fa-paint-brush',
          title: 'Another cool thing',
          description: 'Sed in libero ut nibh placerat accumsan. Praesent porttitor, nulla vitae posuere iaculis, arcu ' +
            'nisl dignissim dolor, a pretium mi sem ut ipsum. Maecenas egestas arcu quis ligula mattis placerat. Aenean ' +
            'leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Cras ultricies mi eu turpis hendrerit fringilla.'
        },{
          time: moment().subtract(5, 'minutes'),
          icon: 'fa fa-home',
          title: 'Something cool',
          description: 'Sed in libero ut nibh placerat accumsan. Praesent porttitor, nulla vitae posuere iaculis, arcu ' +
            'nisl dignissim dolor, a pretium mi sem ut ipsum. Maecenas egestas arcu quis ligula mattis placerat. Aenean ' +
            'leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Cras ultricies mi eu turpis hendrerit fringilla.'
        },{
          time: moment().subtract(6, 'minutes'),
          icon: 'fa fa-bell',
          title: 'Something cool',
          description: 'Sed in libero ut nibh placerat accumsan. Praesent porttitor, nulla vitae posuere iaculis, arcu ' +
            'nisl dignissim dolor, a pretium mi sem ut ipsum. Maecenas egestas arcu quis ligula mattis placerat. Aenean ' +
            'leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Cras ultricies mi eu turpis hendrerit fringilla.'
        },{
          time: moment().subtract(13, 'hour'),
          icon: 'fa fa-inbox',
          title: 'Something cool',
          description: 'Sed in libero ut nibh placerat accumsan. Praesent porttitor, nulla vitae posuere iaculis, arcu ' +
            'nisl dignissim dolor, a pretium mi sem ut ipsum. Maecenas egestas arcu quis ligula mattis placerat. Aenean ' +
            'leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Cras ultricies mi eu turpis hendrerit fringilla.'
        }
      ];
    }
  });