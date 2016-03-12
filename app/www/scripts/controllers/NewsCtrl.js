app.controller('NewsCtrl', function($scope, $stateParams) {
    $scope.news = [
	{
		"titre": "La valeur",
		"contenu": "Lorem",
		"img": "URL IMG",
	},
	{
		"titre": "La valeur",
		"contenu": "Lorem",
		"img": "URL IMG",
	},
	{
		"titre": "La valeur",
		"contenu": "Lorem",
		"img": "URL IMG",
	},
	{
		"titre": "La valeur",
		"contenu": "Lorem",
		"img": "URL IMG",
	},
];

	$scope.new = $scope.news[$stateParams.id];
});