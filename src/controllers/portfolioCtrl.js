/**
 * portfolioCtrl is the Controller of the portfolio page and
 * all its childenr (see ui.router.stateHelper
 * for the concept of page children and nested views)
 * @param $scope is the link between the DOM and the Controller.
 * @param $state is the link between the Controller and the ui.router
 * state change.
 */
app.controller("portfolioCtrl", function($scope, $state, Portfolio) {
    $scope.language = Portfolio.getLanguage()
    $scope.input = $scope.language.input;
    $scope.aboutme = $scope.language.aboutme;
    $scope.hobbies1 = $scope.language.hobbies1;
    $scope.hobbies2 = $scope.language.hobbies2;
    $scope.places1 = $scope.language.places1;
    $scope.places2 = $scope.language.places2;
    $scope.university1 = $scope.language.university1;
    $scope.university2 = $scope.language.university2;

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
        } else if (str == "tormta") {
            $state.transitionTo('portfolioEN.tormta');
        } else {
            $state.transitionTo('portfolioEN.university');
        }
    }
})