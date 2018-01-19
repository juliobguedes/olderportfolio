const app = angular.module("PortfolioApp", [
    'ui.router',
    'ui.router.stateHelper',
    'frapontillo.bootstrap-switch'
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
    }).state("portfolio.aboutme", {
        templateUrl:'templates/aboutme.html'
    }).state("portfolio.hobbies", {
        templateUrl:'templates/hobbies.html'
    }).state("portfolio.libratizar", {
        templateUrl:'templates/libratizar.html'
    }).state("portfolio.monitoring", {
        templateUrl:'templates/monitoring.html'
    }).state("portfolio.musichub", {
        templateUrl:'templates/musichub.html'
    }).state("portfolio.pet", {
        templateUrl:'templates/pet.html'
    }).state("portfolio.places", {
        templateUrl:'templates/places.html'
    }).state("portfolio.projects", {
        templateUrl:'templates/projects.html'
    }).state("portfolio.profile", {
        templateUrl:'templates/profile.html'
    }).state("portfolio.university", {
        templateUrl:'templates/university.html'
    })
});