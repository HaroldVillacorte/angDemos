GetRoutes = function() {
    var routes = {};
    routes.baseUrl = 'http://localhost:8383/angDemos/controllerdemoapp.html#';
    routes.getAll = function() {
        return [
            {url: '/', controller: 'HelloController', templateUrl: 'partials/controllerdemoapp/hello.html'},
            {url: '/cart', controller: 'CartController', templateUrl: 'partials/controllerdemoapp/cart.html'},
            {url: '/text', controller: 'TextController', templateUrl: 'partials/controllerdemoapp/text.html'},
            {url: '/test', controller: 'TestController', templateUrl: 'partials/controllerdemoapp/test.html'},
            {url: '/startup', controller: 'StartupController', templateUrl: 'partials/controllerdemoapp/startup.html'},
            {url: '/studentlist', controller: 'StudentListController', templateUrl: 'partials/controllerdemoapp/studentlist.html'},
            {url: '/album', controller: 'AlbumController', templateUrl: 'partials/controllerdemoapp/album.html'},
            {url: '/deathraymenu', controller: 'DeathrayMenuController', templateUrl: 'partials/controllerdemoapp/deathraymenu.html'},
            {url: '/header', controller: 'HeaderController', templateUrl: 'partials/controllerdemoapp/header.html'},
            {url: '/restauranttable', controller: 'RestaurantTableController', templateUrl: 'partials/controllerdemoapp/restauranttable.html'},
            {url: '/shopping', controller: 'ShoppingController', templateUrl: 'partials/controllerdemoapp/shopping.html'},
            {url: '/home', controller: 'HomeController', templateUrl: 'partials/controllerdemoapp/home.html'}
        ];
    };
    return routes;
};