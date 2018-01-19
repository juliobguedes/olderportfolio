app.controller("portfolioCtrl", function($scope, $state) {
    $scope.input = true;

    
    $scope.linesAbout = [
        '"{"', '"data":[', '"name":"Júlio Barreto",',
        '"age":19,', '"main-email":"julio.costa@ccc.ufcg.edu.br",',
        '"secondary-email":"juliobguedes@gmail.com",', 
        '"employed":false,', 
        '"description":"hi, im a CS undergratuate student @ UFCG, currently on the 4th semester. So far, i have some experience in front and back-end acquired in the programming classes',
        'that i took'
    ];
    
    $scope.lineAbout = Array.from(new Array($scope.linesAbout.length), (x,i) => i);
    
    $state.transitionTo('portfolio.aboutme');

    $scope.changeTemplate = (str) => {
        console.log(str == "About");
        if (str == "About") {
            $state.transitionTo('portfolio.aboutme');
        } else if (str == "Hobbies") {
            $state.transitionTo('portfolio.hobbies');
        } else if (str == "Libratizar") {
            $state.transitionTo('portfolio.libratizar');
        } else if (str == "Monitoring") {
            $state.transitionTo('portfolio.monitoring');
        } else if (str == "MusicHub") {
            $state.transitionTo('portfolio.musichub');
        } else if (str == "PET") {
            $state.transitionTo('portfolio.pet');
        } else if (str == "Places") {
            $state.transitionTo('portfolio.places');
        } else if (str == "Profile") {
            $state.transitionTo('portfolio.profile');
        } else if (str == "Projects") {
            $state.transitionTo('portfolio.projects');
        } else if (str == "Tormenta") {
            $state.transitionTo('portfolio.tormenta');
        } else {
            $state.transitionTo('portfolio.university');
        }
    }
})