amailApp.controller('ListController', function($scope) {
    $scope.messages = GetMessages();
});
amailApp.controller('DetailController', function($scope, $routeParams) {
    $scope.messages = GetMessages();
    $scope.message = $scope.messages[$routeParams.id];
});