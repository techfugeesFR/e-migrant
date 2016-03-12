app.controller('HomeCtrl', function($scope, $stateParams) {
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
    $scope.goNews = function(id) {
        $location.path('/app/home/'+id);
    }
});
