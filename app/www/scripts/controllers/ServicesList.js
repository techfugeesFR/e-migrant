app.controller('ServicesListCtrl', function($scope, $stateParams, $ionicModal) {
	$ionicModal.fromTemplateUrl('contact-modal.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal) {
		$scope.modal = modal
	});

	$scope.openModal = function() {
		$scope.modal.show()
	};

	$scope.closeModal = function() {
		$scope.modal.hide();
	};

	$scope.typeList = 'service';

	$scope.$on('$destroy', function() {
		$scope.modal.remove();
	});

  $scope.lists = [
    {
      "name" : "Jean",
      "description" : "J'aime coudre des jeans.",
      "image" : "./img/1.jpg"
    },
    {
      "name" : "Pierre",
      "description" : "Je taille la pierre comme personne.",
      "image" : "./img/2.jpg"
    },
    {
      "name" : "Prince",
      "description" : "J'ai besoin d'un ballon de foot.",
      "image" : "./img/3.jpg"
    },
    {
      "name" : "Luke",
      "description" : "J'ai la force de beaucoup travailler.",
      "image" : "./img/4.jpg"
    },
    {
      "name" : "Jaquie M.",
      "description" : "Endurant et très actif.",
      "image" : "./img/5.jpg"
    },
    {
      "name" : "Sacha",
      "description" : "Habile pour attraper des choses.",
      "image" : "./img/6.jpg"
    },
    {
      "name" : "Thor",
      "description" : "Maître forgeron.",
      "image" : "./img/7.jpg"
    },
    {
      "name" : "Tony",
      "description" : "Mécanicien en herbe.",
      "image" : "./img/8.jpg"
    },
    {
      "name" : "Batman",
      "description" : "J'aime bosser de nuit.",
      "image" : "./img/9.jpg"
    },
    {
      "name" : "François",
      "description" : "Je veux changer maintenant.",
      "image" : "./img/10.jpg"
    }
  ]

});
