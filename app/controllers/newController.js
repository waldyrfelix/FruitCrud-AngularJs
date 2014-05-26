var app = angular.module('app');

app.controller('newController', ['$scope', '$location', 
function ($scope, $location) {
    $scope.title = 'new fruit';
    $scope.fruit = '';

    $scope.save = function () {
        $scope.fruits.push($scope.fruit);
        $location.path('/');
    };
}]);
