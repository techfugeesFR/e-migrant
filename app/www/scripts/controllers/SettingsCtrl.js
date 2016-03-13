app.controller('SettingsCtrl', function($scope, $stateParams, $location, $ionicHistory) {
	$scope.goChat = function() {
      $ionicHistory.nextViewOptions({
        disableBack: true
      });
        $location.path('/app/chat/1');
	};
});
