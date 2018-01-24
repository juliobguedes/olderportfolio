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
    }).state("portfolioEN", {
        url:"/about", 
        templateUrl:'templates/portfolio.html',
        controller:"portfolioCtrl"
    }).state("info", {
        url:"/info",
        templateUrl:'templates/info.html',
        controller:"infoCtrl"
    }).state("portfolioPT", {
        url:"/portfolio", 
        templateUrl:'templates/portfolio.html',
        controller:"portfolioCtrl"
    }).state("portfolioEN.aboutme", {
        templateUrl:'templates/aboutme.html'
    }).state("portfolioEN.hobbies", {
        templateUrl:'templates/hobbies.html'
    }).state("portfolioEN.libratizar", {
        templateUrl:'templates/libratizar.html'
    }).state("portfolioEN.libratizar2", {
        templateUrl:'templates/libratizar2.html'
    }).state("portfolioEN.monitoring", {
        templateUrl:'templates/monitoring.html'
    }).state("portfolioEN.musichub", {
        templateUrl:'templates/musichub.html'
    }).state("portfolioEN.pet", {
        templateUrl:'templates/pet.html'
    }).state("portfolioEN.places1", {
        templateUrl:'templates/places1.html'
    }).state("portfolioEN.places2", {
        templateUrl:'templates/places2.html'
    }).state("portfolioEN.projects", {
        templateUrl:'templates/projects.html'
    }).state("portfolioEN.university", {
        templateUrl:'templates/university.html'
    }).state("portfolioEN.tormenta", {
        templateUrl:'templates/tormenta.html'
    });
});