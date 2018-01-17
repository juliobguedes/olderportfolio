app.controller("homeCtrl", function($scope, $state) {
    $scope.input = true;

    $scope.letsgo = () => {
        $state.go("portfolio");
    }
})