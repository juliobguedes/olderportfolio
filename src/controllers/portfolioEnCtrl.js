/**
 * portfolioEnCtrl is the Controller for the English version of
 * the portfolio page and all its children (see ui.router.stateHelper
 * for the concept of page children and nested views)
 * @param $scope is the link between the DOM and the Controller.
 * @param $state is the link between the Controller and the ui.router
 * state change.
 */
app.controller("portfolioEnCtrl", function($scope, $state) {
    $scope.input = true;

    $scope.aboutme = "src/jsons/en/aboutme.json";
    $scope.hobbies1 = "src/jsons/en/hobbies1.json";
    $scope.hobbies2 = "src/jsons/en/hobbies2.json";
    $scope.places1 = "src/jsons/en/places1.json";
    $scope.places2 = "src/jsons/en/places2.json";
    $scope.university1 = "src/jsons/en/university1.json";
    $scope.university2 = "src/jsons/en/university2.json";

    $state.transitionTo('portfolioEN.aboutme');
    /**
     * Method used to change the nested view in the portfolio
     * page. The str parameter is set manually in each button
     * and every input is manually set as a if/elseif to change
     * the state making invalid states are not accepted.
     * @param {String} str 
     */
    $scope.changeTemplate = (str) => {
        if (str == "about") {
            $state.transitionTo('portfolioEN.aboutme');
        } else if (str == "hobbies") {
            $state.transitionTo('portfolioEN.hobbies');
        } else if (str == "libratizar") {
            $state.transitionTo('portfolioEN.libratizar');
        } else if (str == "monitoring") {
            $state.transitionTo('portfolioEN.monitoring');
        } else if (str == "musichub") {
            $state.transitionTo('portfolioEN.musichub');
        } else if (str == "pet") {
            $state.transitionTo('portfolioEN.pet');
        } else if (str == "places1") {
            $state.transitionTo('portfolioEN.places1');
        } else if (str == "places2") {
            $state.transitionTo('portfolioEN.places2');
        } else if (str == "projects") {
            $state.transitionTo('portfolioEN.projects');
        } else if (str == "tormenta") {
            $state.transitionTo('portfolioEN.tormenta');
        } else {
            $state.transitionTo('portfolioEN.university');
        }
    }
})