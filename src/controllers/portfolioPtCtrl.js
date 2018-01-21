app.controller("portfolioPtCtrl", function($scope, $state) {
    $scope.input = false;
    $scope.aboutme = "src/jsons/aboutmeBR.json";
    $state.transitionTo('portfolioPT.aboutme');

    $scope.changeTemplate = (str) => {
        if (str == "about") {
            $state.transitionTo('portfolioPT.aboutme');
        } else if (str == "hobbies") {
            $state.transitionTo('portfolioPT.hobbies');
        } else if (str == "libratizar") {
            $state.transitionTo('portfolioPT.libratizar');
        } else if (str == "monitoring") {
            $state.transitionTo('portfolioPT.monitoring');
        } else if (str == "musichub") {
            $state.transitionTo('portfolioPT.musichub');
        } else if (str == "pet") {
            $state.transitionTo('portfolioPT.pet');
        } else if (str == "places1") {
            $state.transitionTo('portfolioPT.places1');
        } else if (str == "places2") {
            $state.transitionTo('portfolioPT.places2');
        } else if (str == "projects") {
            $state.transitionTo('portfolioPT.projects');
        } else if (str == "tormenta") {
            $state.transitionTo('portfolioPT.tormenta');
        } else {
            $state.transitionTo('portfolioPT.university');
        }
    }
});