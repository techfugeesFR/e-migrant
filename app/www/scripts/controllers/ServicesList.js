app.controller('ServicesListCtrl', function($scope, $stateParams, $ionicModal) {
	$ionicModal.fromTemplateUrl('contact-modal.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal) {
		$scope.modal = modal
	})  

	$scope.openModal = function() {
		$scope.modal.show()
	}

	$scope.closeModal = function() {
		$scope.modal.hide();
	};

	$scope.typeList = 'service';

	$scope.$on('$destroy', function() {
		$scope.modal.remove();
	})
});
