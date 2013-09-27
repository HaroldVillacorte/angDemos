// NavController
myAppModule.controller('NavController', function($scope, $location) {
    routes = GetRoutes();
    $scope.baseUrl = routes.baseUrl;
    $scope.routes = routes.getAll();
    $scope.$watch(function() {
        $scope.location = $location.path();
    });
});

// HelloController
myAppModule.controller('HelloController', function($scope) {
    $scope.greeting = {text: 'Hello'};
});

// CartController
myAppModule.controller('CartController', function($scope) {
    $scope.items = [
        {title: 'Paint Pots', quantity: 8, price: 3.95},
        {title: 'Polka Dots', quantity: 17, price: 12.95},
        {title: 'Pebbles', quantity: 5, price: 6.95}
    ];
    $scope.remove = function(index) {
        $scope.items.splice(index, 1);
    };
    $scope.billing = {};
    $scope.$watch(function() {
       var total = 0;
       for(var i = 0; i < $scope.items.length; i++) {
            total = total + ($scope.items[i].price * $scope.items[i].quantity);
       };
       $scope.billing.total = total;
       $scope.billing.discount = (total > 100) ? 10 : 0;
       $scope.billing.subtotal = total - $scope.billing.discount;
    });
    /**  |--Alternative spaghetti technique--|
    $scope.totalCart = function() {
        var total = 0;
        for(i = 0; i < $scope.items.length; i++) {
            total = total + ($scope.items[i].price * $scope.items[i].quantity);
        };
        return total;
    };
    $scope.subtotal = function() {
        return $scope.totalCart() - $scope.billing.discount;
    };

    $scope.calculateDiscount = function(newValue, oldValue, scope) {
        $scope.billing.discount = newValue > 100 ? 10 : 0;
    };
    //$scope.billing.discount = ($scope.totalCart() > 100) ? 10 : 0;
    $scope.$watch($scope.totalCart, $scope.calculateDiscount);
    **/
});

// TextController
var messages = {};
messages.someText = 'You have started a journey!';

myAppModule.controller('TextController', function($scope) {
    $scope.messages = messages;
});

// TestController
myAppModule.controller('TestController', function($scope) {
    var messages = {};
    messages.testMessage = 'This is testMessage!';
    $scope.testMessage = messages.testMessage;
});

// StartupController
myAppModule.controller('StartupController', function($scope) {
    $scope.funding = {startingEstimate: 0};
    $scope.computeNeeded = function() {
        $scope.needed = $scope.funding.startingEstimate * 10;
    };
    $scope.requestFunding = function() {
        alert($scope.needed);
    };

    $scope.$watch('funding.startingEstimate', $scope.computeNeeded);

    $scope.reset = function() {
        $scope.funding.startingEstimate = 0;
    };
});

// StudentListController
var students = [
    {name:'Mary Contrary', id:'1'},
    {name:'Jack Sprat', id:'2'},
    {name:'Jill Hill', id:'3'},
    {name:'Booboy Ruby', id:'4'},
    {name:'Phil Hill', id:'5'}
];

myAppModule.controller('StudentListController', function($scope) {
    $scope.students = students;
    $scope.addTomThumb = function() {
        students.splice(1, 0, {name:'Tom Thumb', id:'0'});
    };
});

// Album Controller
var album = [
    {name:'Southwest Serenade', duration: '2:34'},
    {name:'Northern Light Waltz', duration: '3:21'},
    {name:'Eastern Tango', duration: '17:45'}
];

myAppModule.controller('AlbumController', function($scope) {
    $scope.albums = album;
});

// DeathrayMenuController
myAppModule.controller('DeathrayMenuController', function($scope) {
    $scope.menuState = {};
    $scope.menuState.show = false;
    $scope.toggleMenu = function() {
        $scope.menuState.show = !$scope.menuState.show;
    };
    $scope.isDisabled = false;
    $scope.stun = function() {
        $scope.isDisabled = 'true';
    };
});

// HeaderController
myAppModule.controller('HeaderController', function($scope) {
    $scope.isError = false;
    $scope.isWarning = false;
    $scope.showError = function() {
        $scope.messageText = 'This is an error!';
        $scope.isError = true;
        $scope.isWarning = false;
    };
    $scope.showWarning = function() {
        $scope.messageText = 'This is a warning!';
        $scope.isWarning = true;
        $scope.isError = false;
    };
});

// RestaurantTableController
myAppModule.controller('RestaurantTableController', function($scope) {
    $scope.directory = [
        {name:'The Handsome Heifer', cuisine:'BBQ'},
        {name:'Green\'s Green Greens', cuisine:'Salads'},
        {name:'House of Fine Fish', cuisine:'Seafood'}
    ];
    $scope.selectRestaurant = function(row) {
        $scope.selectedRow = row;
    };
});

// ShoppingController
myAppModule.factory('Items', function() {
    var items = {};
    items.query = function() {
        return [
            {title: 'Paint pots', description: 'Pots full of paint', price: 3.95},
            {title: 'Polka dots', description: 'Dots with polka', price: 2.95},
            {title: 'Pebbles', description: 'Just little rocks', price: 6.95}
        ];
    };
    return items;
});
myAppModule.controller('ShoppingController', function(Items, $scope) {
    $scope.items = Items.query();
});

// HomeController
myAppModule.filter('titleCase', function() {
    var titleCaseFilter = function(input) {
        var words = input.split(' ');
        for(var i = 0; i < words.length; i++) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        };
        return words.join(' ');
    };
    return titleCaseFilter;
});
myAppModule.controller('HomeController', function($scope) {
    $scope.pageHeading = 'behold the majesty of your page title';
});