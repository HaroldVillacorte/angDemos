GetRoutes = function() {
    var routes = {};
    routes.rootUrl = 'http://localhost:8383/angDemos';
    routes.baseUrl = 'http://localhost:8383/angDemos/flashcardagent.html#';
    routes.getMainMenu = function() {
        return [
            {url: '/', controller: 'IndexController', templateUrl: 'partials/flashcardagent/index.html'},
            {url: '/settings', controller: 'SettingsController', templateUrl: 'partials/flashcardagent/settings.html'},
            {url: '/card/:deck', controller: 'CardController', templateUrl: 'partials/flashcardagent/card.html'}
        ];
    };
    return routes;
};