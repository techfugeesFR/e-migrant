app.controller('ServiceMapCtrl', function($scope, $rootScope, $ionicFilterBar) {
  $scope.typeList = 'service';

  $scope.showFilterBar = function () {
    var filterBarInstance = $ionicFilterBar.show({
      cancelText: "<i class='ion-ios-close-outline'></i>",
      items: $scope.places,
      update: function (filteredItems, filterText) {
        $scope.places = filteredItems;
      }
    });
  };

  var users = [
    {
      "type": 0,
      "name" : "Jean",
      "description" : "J'aime coudre des jeans.",
      "image" : "./img/1.png",
      "job":"Couturier",
      "pos": {
    		"lat": 48.8689,
    		"lng": 2.379886
    	},
    },
    {
      "type": 0,
      "name" : "Pierre",
      "description" : "Je taille la pierre comme personne.",
      "image" : "./img/2.png",
      "job":"Tailleur",
      "pos": {
    		"lat": 48.85,
    		"lng": 2.34
    	},
    },
    {
      "type": 0,
      "name" : "Ali",
      "description" : "J'ai 26 ans et je suis originaire de Syrie...",
      "image" : "./img/ali.png",
      "job": "Maçon",
      "pos": {
        "lat": 48.85712,
        "lng": 2.378969
      }
    },
    {
      "type": 0,
      "name" : "Fred",
      "description" : "L'informatique c'est mon dada.",
      "image" : "./img/3.png",
      "job": "Informaticien",
      "pos": {
    		"lat": 48.87,
    		"lng": 2.3886
    	},
    },
    {
      "type": 0,
      "name" : "Luke",
      "description" : "J'ai la force de beaucoup travailler.",
      "image" : "./img/4.png",
      "job": "Maçon",
      "pos": {
        "lat": 48.864517,
        "lng": 2.369335
      }
    },
    {
      "type": 0,
      "name" : "JacquieMichel",
      "description" : "Endurant et très actif.",
      "image" : "./img/5.png",
      "job": "Acteur de charme",
      "pos": {
        "lat": 48.859576,
        "lng": 2.371759
      }
    },
    {
      "type": 0,
      "name" : "Sacha",
      "description" : "Sacha aux platines !",
      "image" : "./img/6.png",
      "job": "Djokey",
      "pos": {
        "lat": 48.867467,
        "lng": 2.375236
      }
    },
    {
      "type": 0,
      "name" : "Tzïdia",
      "description" : "Je suis une chef reconnu dans mon pays !",
      "image" : "./img/7.png",
      "job": "Cuisinier",
      "pos": {
        "lat": 48.860903,
        "lng": 2.388217
      }
    },
    {
      "type": 1,
    	"name": "Donald",
    	"image": "./img/don.png",
    	"pos": {
    		"lat": 48.8660,
    		"lng": 2.379886
    	},
    	"description": "Bonjour je m'apelle Donald Trump, et je me suis remis en question !",
    	"offer": 0,
      "demand": 1
    },
    {
      "type": 1,
    	"name": "Barack",
    	"image": "./img/oba.png",
    	"pos": {
    		"lat": 48.860508,
    		"lng": 2.375793
    	},
    	"description": "Bonjour je m'apelle Sisi, si vous avez un probleme avec votre voiture appellez moi !",
    	"offer": 3,
      "demand": 1
    },
    {
      "type": 1,
    	"name": "Dr.Denfer",
    	"image": "./img/doc.png",
    	"pos": {
    		"lat": 48.87,
    		"lng": 2.3886
    	},
    	"description": "Mouahahaha..",
    	"offer": 2,
      "demand": 1
    }
  ];

  var map;
  var markers = new Array();
  var infoWindows = new Array();

  getCurrentPosition(function(err, coords){
    map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: err ? {lat: 48.858565, lng: 2.347198} : coords,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      zoomControl: false,
    });

    markerInit();
  });

  function getCurrentPosition(cb){
    function success(pos){
      cb(null, {lat: pos.coords.latitude, lng: pos.coords.longitude});
    }

    function error(err){
      cb(err, null);
    }

    navigator.geolocation.getCurrentPosition(success, error);
  }

  function markerInit(){
    users.forEach(function(element,index){
      if(element.type==1 && $rootScope.type==1) return;

      var infowindow = new google.maps.InfoWindow({
        content: element.type ? contentResidentString(element) : contentMigrantString(element),
        maxWidth: 200
      });

      infoWindows.push(infowindow);

      var marker = new google.maps.Marker({
        animation: google.maps.Animation.DROP,
        position: element.pos,
        map: map,
        title: element.name,
        icon: {
          url: element.image,
          scaledSize: new google.maps.Size(42, 42),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(0, 42)
        }
      });

      google.maps.event.addListener(marker, 'click', function () {
        closeAllInfoWindows();
        infowindow.open(map,this);
      });
    });


  }

  function contentMigrantString(data){
    return "<div style='overflow:hidden'>"+
        "<b>"+data.name+" est un "+data.job+"</b>"+
        "<hr>"+
        "<p>"+data.description+"</p>"+
        "<a href='#/app/settings' class='button button-block button-positive'>"+
          "Voir son profil"+
        "</a>"+
      "</div>";
  }

  function contentResidentString(data){
    return "<div style='overflow:hidden'>"+
        "<b>"+data.name+" est un résident</b>"+
        "<hr>"+
        "<p>"+data.description+"</p>"+
        "<a class='button button-block button-positive'>"+
          "Voir son profil"+
        "</a>"+
      "</div>";
  }

  function closeAllInfoWindows(){
    for (var i=0;i<infoWindows.length;i++) {
       infoWindows[i].close();
    }
  }
});
