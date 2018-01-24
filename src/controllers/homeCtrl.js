app.controller("homeCtrl", function($scope, $state) {
    $scope.input = true;

    $scope.about = (input) => {
        if (input) {
            $state.go("portfolioEN");
        } else {
            $state.go("portfolioPT");
        }
    }
})