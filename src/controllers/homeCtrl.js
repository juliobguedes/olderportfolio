app.controller("homeCtrl", function($scope, $state) {
    $scope.input = true;

    $scope.about = (input) => {
        if (input) {
            $state.go("portfolio", {language:"en"});
        } else {
            $state.go("portfolio", {language:"pt"});
        }
    }
})