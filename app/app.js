var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', { controller: 'listController', templateUrl: 'app/views/list.html' })
        .when('/edit/:name', { controller: 'editController', templateUrl: 'app/views/form.html' })
        .when('/new', { controller: 'newController', templateUrl: 'app/views/form.html' })
        .otherwise({ redirectTo: '/' });
});

app.run(function ($rootScope) {
    $rootScope.fruits = ['cranberry', 'strawberry', 'banana'];
});