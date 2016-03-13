app.controller('SignCtrl', function($scope, $stateParams, $location) {
	$scope.go = function() {
		$location.path('/app/sign/1');
	}

});

app.controller('Sign1Ctrl', function($scope, $stateParams, $ionicHistory, $state) {
	$scope.goSign = function() {
	    $ionicHistory.nextViewOptions({
	      disableBack: true
	    });

	    $state.go('app.sign2');
	}
	$scope.options = [
    {
        "titre": "Services a la personne",
        "img": "julien/signin8.jpg"
    },
    {
        "titre": "Batiment / Renovation",
        "img": "julien/signin9.jpg"
    },
{
        "titre": "Art / Artisanat",
        "img": "julien/signin10.jpg"
    },
    {
        "titre": "Restauration",
        "img": "julien/signin11.jpg"
    },
{
        "titre": "Agriculture / Animaux",
        "img": "julien/signin12.jpg"
    },
    {
        "titre": "Hotellerie / Tourisme",
        "img": "julien/signin13.jpg"
    },
{
        "titre": "Mecanique / Transports",
        "img": "julien/signin7.jpg"
    },
    {
        "titre": "Sante",
        "img": "julien/signin14.jpg"
    },
{
        "titre": "Education",
        "img": "julien/signin5.jpg"
    },
    {
        "titre": "Informatique",
        "img": "julien/signin6.jpg"
    },
{
        "titre": "Sports / Loisirs",
        "img": "julien/signin15.jpg"
    },
    {
        "titre": "Hebergement",
        "img": "julien/signin1.jpg"
    },
{
        "titre": "Nourriture",
        "img": "julien/signin2.jpg"
    },
    {
        "titre": "Vetements",
        "img": "julien/signin3.jpg"
    },
];
});

app.controller('Sign2Ctrl', function($scope, $stateParams, $ionicHistory, $state) {
	$scope.options = [
    {"titre": "Sculpture"},
    {"titre": "Peinture"},
	{"titre": "Poterie"},
	{"titre": "Musique"},
	{"titre": "Textile"},
	{"titre": "Travail du bois"},
	{"titre": "Maroquinerie"},
	{"titre": "Joaillerie"},
	{"titre": "Travail du metal"}
	];

	$scope.goSign = function() {
	    $ionicHistory.nextViewOptions({
	      disableBack: true
	    });

	    $state.go('app.sign3');
	}
});

app.controller('Sign3Ctrl', function($scope, $stateParams, $ionicHistory, $state) {
	$scope.goSign = function() {
	    $ionicHistory.nextViewOptions({
	      disableBack: true
	    });

	    $state.go('app.sign4');
	}

	$scope.options = [{
       "titre": "Hebergement",
        "img": "julien/signin1.jpg"
    },
	{
        "titre": "Nourriture",
        "img": "julien/signin2.jpg"
    },
    {
        "titre": "Vetements",
        "img": "julien/signin3.jpg"
    },
	{
        "titre": "Aide administrative",
        "img": "julien/signin4.png"
    },
	{
        "titre": "Education",
        "img": "julien/signin5.jpg"
    },
    {
        "titre": "Informatique",
        "img": "julien/signin6.jpg"
    },


	{
        "titre": "Transport",
        "img": "julien/signin7.jpg"
    },

    {
        "titre": "Services a la personne",
        "img": "julien/signin8.jpg"
    },
    {
        "titre": "Batiment / Renovation",
        "img": "julien/signin9.jpg"
    },
	{
        "titre": "Art / Artisanat",
        "img": "julien/signin10.jpg"
    },
    {
        "titre": "Restauration",
        "img": "julien/signin11.jpg"
    },
	{
        "titre": "Agriculture / Animaux",
        "img": "julien/signin12.jpg"
    },
    {
        "titre": "Hotellerie / Tourisme",
        "img": "julien/signin13.jpg"
    },

    {
        "titre": "Sante",
        "img": "julien/signin14.jpg"
    },
	{
        "titre": "Sports / Loisirs",
        "img": "julien/signin15.jpg"
    }
];
});

app.controller('Sign4Ctrl', function($scope, $stateParams, $ionicHistory, $state) {
	$scope.options = [
    {"titre": "Enfant"},
    {"titre": "Homme"},
	{"titre": "Femme"},
	{"titre": "Ete"},
	{"titre": "Hiver"},
	{"titre": "Linge de Maison"},
	{"titre": "Couvertures"},
	];

	$scope.goSign = function() {
	    $ionicHistory.nextViewOptions({
	      disableBack: true
	    });

	    $state.go('app.home');
	}
});
