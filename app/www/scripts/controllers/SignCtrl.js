app.controller('SignCtrl', function($scope, $stateParams, $ionicHistory, $state) {

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
        "img": "http://www.entreprises.gouv.fr/files/files/directions_services/services-a-la-personne/homepage/slider-2016/images/image-slider-02.png"
    },
    {
        "titre": "Batiment / Renovation",
        "img": "http://www.franchise-batiment-renovation.fr/images/zoom/concept-franchise-batiment-bis-renovation-120313.jpg"
    },
{
        "titre": "Art / Artisanat",
        "img": "http://www.artisanat-marocain.fr/img/poterie_marocaine.jpg"
    },
    {
        "titre": "Restauration",
        "img": "http://www.6mik.com/temp/specia/restauration2.jpg"
    },
{
        "titre": "Agriculture / Animaux",
        "img": "http://www.debout-la-france.fr/sites/default/files/tribune/agriculture.jpg"
    },
    {
        "titre": "Hotellerie / Tourisme",
        "img": "http://referentiel.nouvelobs.com/file/4281489.jpg"
    },
{
        "titre": "Mecanique / Transports",
        "img": "http://cdn2-europe1.new2.ladmedia.fr/var/europe1/storage/images/europe1/economie/covoiturage-le-coup-de-pouce-de-vinci-autoroutes-786016/15722390-1-fre-FR/Covoiturage-le-coup-de-pouce-de-Vinci-Autoroutes.jpg"
    },
    {
        "titre": "Sante",
        "img": "http://www.rue89strasbourg.com/wp-content/uploads/2015/01/sant%C3%A9.jpg"
    },
{
        "titre": "Education",
        "img": "https://www.global-et-local.eu/IMG/arton46146.jpg?1453498820"
    },
    {
        "titre": "Informatique",
        "img": "http://www.informatiquechezvous.com/wp-content/uploads/2014/06/services.jpg"
    },
{
        "titre": "Sports / Loisirs",
        "img": "http://www.cavaillon.com/assets/images/contenus/sport_tourisme_loisirs/psl/psl2.jpg"
    },
    {
        "titre": "Hebergement",
        "img": "http://www.gagnerunemaison.fr/wp-content/uploads/2012/01/la_maison_champignon.jpg"
    },
{
        "titre": "Nourriture",
        "img": "http://static1.terrafemina.com/articles/7/12/27/37/@/116947-les-americaines-preferent-la-nourriture-saine-a-lamour-622x0-1.jpg"
    },
    {
        "titre": "Vetements",
        "img": "http://www.sagesse-orthodoxe.fr/wp-content/uploads/2015/06/vetements.jpg"
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
        "img": "http://www.gagnerunemaison.fr/wp-content/uploads/2012/01/la_maison_champignon.jpg"
    },
	{
        "titre": "Nourriture",
        "img": "http://static1.terrafemina.com/articles/7/12/27/37/@/116947-les-americaines-preferent-la-nourriture-saine-a-lamour-622x0-1.jpg"
    },
    {
        "titre": "Vetements",
        "img": "http://www.sagesse-orthodoxe.fr/wp-content/uploads/2015/06/vetements.jpg"
    },
	{
        "titre": "Aide administrative",
        "img": "http://www.simplyfiez-vous.fr/images/assistance_administrative.png"
    },
	{
        "titre": "Education",
        "img": "https://www.global-et-local.eu/IMG/arton46146.jpg?1453498820"
    },
    {
        "titre": "Informatique",
        "img": "http://www.informatiquechezvous.com/wp-content/uploads/2014/06/services.jpg"
    },


	{
        "titre": "Transport",
        "img": "http://cdn2-europe1.new2.ladmedia.fr/var/europe1/storage/images/europe1/economie/covoiturage-le-coup-de-pouce-de-vinci-autoroutes-786016/15722390-1-fre-FR/Covoiturage-le-coup-de-pouce-de-Vinci-Autoroutes.jpg"
    },

    {
        "titre": "Services a la personne",
        "img": "http://www.entreprises.gouv.fr/files/files/directions_services/services-a-la-personne/homepage/slider-2016/images/image-slider-02.png"
    },
    {
        "titre": "Batiment / Renovation",
        "img": "http://www.franchise-batiment-renovation.fr/images/zoom/concept-franchise-batiment-bis-renovation-120313.jpg"
    },
	{
        "titre": "Art / Artisanat",
        "img": "http://www.artisanat-marocain.fr/img/poterie_marocaine.jpg"
    },
    {
        "titre": "Restauration",
        "img": "http://www.6mik.com/temp/specia/restauration2.jpg"
    },
	{
        "titre": "Agriculture / Animaux",
        "img": "http://www.debout-la-france.fr/sites/default/files/tribune/agriculture.jpg"
    },
    {
        "titre": "Hotellerie / Tourisme",
        "img": "http://referentiel.nouvelobs.com/file/4281489.jpg"
    },

    {
        "titre": "Sante",
        "img": "http://www.rue89strasbourg.com/wp-content/uploads/2015/01/sant%C3%A9.jpg"
    },
	{
        "titre": "Sports / Loisirs",
        "img": "http://www.cavaillon.com/assets/images/contenus/sport_tourisme_loisirs/psl/psl2.jpg"
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
