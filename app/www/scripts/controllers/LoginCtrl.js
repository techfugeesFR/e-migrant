app.controller('LoginCtrl', function($scope, $stateParams, $ionicHistory, $state) {

  $scope.goHomePage = function()
  {
    $ionicHistory.nextViewOptions({
      disableBack: true
    });

    $state.go('app.home');
  }

});
