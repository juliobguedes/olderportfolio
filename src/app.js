const app = angular.module("PortfolioApp", [
    'ui.router',
    'ui.router.stateHelper',
    'frapontillo.bootstrap-switch',
    'hljs'
]);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
    $stateProvider.state("home", {
        url: "/home",
        templateUrl:'templates/home.html',
        controller:"homeCtrl"
    }).state("portfolio", {
        url:"/:language/about", 
        templateUrl:'templates/portfolio.html',
        controller:"portfolioCtrl",
        resolve:{
            language:function($stateParams) {
                return $stateParams.language;
            }
        }
    }).state("info", {
        url:"/info",
        templateUrl:'templates/info.html',
        controller:"infoCtrl"
    }).state("portfolio.aboutme", {
        templateUrl:'templates/aboutme.html'
    }).state("portfolio.hobbies", {
        templateUrl:'templates/hobbies.html'
    }).state("portfolio.libratizar", {
        templateUrl:'templates/libratizar.html'
    }).state("portfolio.libratizar2", {
        templateUrl:'templates/libratizar2.html'
    }).state("portfolio.monitoring", {
        templateUrl:'templates/monitoring.html'
    }).state("portfolio.musichub", {
        templateUrl:'templates/musichub.html'
    }).state("portfolio.pet", {
        templateUrl:'templates/pet.html'
    }).state("portfolio.places1", {
        templateUrl:'templates/places1.html'
    }).state("portfolio.places2", {
        templateUrl:'templates/places2.html'
    }).state("portfolio.university", {
        templateUrl:'templates/university.html'
    }).state("portfolio.tormenta", {
        templateUrl:'templates/tormenta.html'
    });
});