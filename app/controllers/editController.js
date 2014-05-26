var app = angular.module('app');

app.controller('editController', ['$scope', '$location', '$route', 
function ($scope, $location, $route) {
    $scope.title = 'Editar';
    $scope.fruit = $route.name;
    $scope.fruitIndex = $scope.fruits.indexOf($scope.fruit);

    $scope.save = function () {
        $scope.fruits[$scope.fruitIndex] = $scope.fruit;
        $location.path('/');
    };
}]);
