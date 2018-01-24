/**
 * portfolioCtrl is the Controller of the portfolio page and
 * all its childenr (see ui.router.stateHelper
 * for the concept of page children and nested views)
 * @param $scope is the link between the DOM and the Controller.
 * @param $state is the link between the Controller and the ui.router
 * state change.
 */
app.controller("portfolioCtrl", function($scope, $state, language) {

    $scope.adaptLanguage = (lang) => {
        if (lang == "en") {
            $scope.input = true;
        } else {
            $scope.input = false;
        }
        $scope.aboutme = "src/jsons/" + lang +"/aboutme.json";
        $scope.hobbies1 = "src/jsons/" + lang +"/hobbies1.json";
        $scope.hobbies2 = "src/jsons/" + lang +"/hobbies2.json";
        $scope.places1 = "src/jsons/" + lang +"/places1.json";
        $scope.places2 = "src/jsons/" + lang +"/places2.json";
        $scope.university1 = "src/jsons/" + lang +"/university1.json";
        $scope.university2 = "src/jsons/" + lang +"/university2.json";
        $scope.monitoring = "src/jsons/" + lang +"/monitoring.json";
        $scope.pet1 = "src/jsons/" + lang +"/pet1.json";
        $scope.pet2 = "src/jsons/" + lang +"/pet2.json";
        $scope.libratizar1 = "src/jsons/" + lang +"/libratizar1.json";
        $scope.libratizar2 = "src/jsons/" + lang +"/libratizar2.json";
    }

    $scope.adaptLanguage(language);

    $state.transitionTo('portfolio.aboutme', {language:language});
    /**
     * Method used to change the nested view in the portfolio
     * page. The str parameter is set manually in each button
     * and every input is manually set as a if/elseif to change
     * the state making invalid states are not accepted.
     * @param {String} str 
     */
    $scope.changeTemplate = (str) => {
        if (str == "about") {
            $state.transitionTo('portfolio.aboutme', {language:language});
        } else if (str == "hobbies") {
            $state.transitionTo('portfolio.hobbies', {language:language});
        } else if (str == "libratizar") {
            $state.transitionTo('portfolio.libratizar', {language:language});
        } else if (str == "libratizar2") {
            $state.transitionTo('portfolio.libratizar2', {language:language});
        } else if (str == "monitoring") {
            $state.transitionTo('portfolio.monitoring', {language:language});
        } else if (str == "musichub") {
            $state.transitionTo('portfolio.musichub', {language:language});
        } else if (str == "pet") {
            $state.transitionTo('portfolio.pet', {language:language});
        } else if (str == "places1") {
            $state.transitionTo('portfolio.places1', {language:language});
        } else if (str == "places2") {
            $state.transitionTo('portfolio.places2', {language:language});
        } else if (str == "projects") {
            $state.transitionTo('portfolio.projects', {language:language});
        } else if (str == "tormenta") {
            $state.transitionTo('portfolio.tormenta', {language:language});
        } else {
            $state.transitionTo('portfolio.university', {language:language});
        }
    }
})

