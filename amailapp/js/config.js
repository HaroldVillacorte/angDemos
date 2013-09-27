amailApp.config(function($routeProvider) {
    var routes = GetRoutes();
    var allRoutes = routes.getAll();
    for(var i = 0; i < allRoutes.length; i++) {
        $routeProvider.when(allRoutes[i].url, {
            controller:allRoutes[i].controller,
            templateUrl:allRoutes[i].templateUrl
        });
    };
    $routeProvider.otherwise({redirectTo: '/'});
});


