const app = angular.module("PortfolioApp", [
    'ngSanitize',
    'ui.router',
    'ui.router.stateHelper',
    'frapontillo.bootstrap-switch',
    'ng-showdown'
]);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
    $stateProvider.state("home", {
        url: "/home",
        templateUrl:'templates/home.html',
        controller:"homeCtrl"
    }).state("portfolio", {
        url:"/portfolio", 
        templateUrl:'templates/portfolio.html',
        controller:"portfolioCtrl"
    }).state("info", {
        url:"/info",
        templateUrl:'templates/info.html',
        controller:"infoCtrl"
    })
});