app.controller('NeedMapCtrl', function($scope) {
  $scope.typeList = 'need';

  var map;
  var markers = new Array();
  var infoWindows = new Array();

  getCurrentPosition(function(err, coords){
    map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: err ? {lat: 48.858565, lng: 2.347198} : coords,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false
    });

    // Create the search box and link it to the UI element.
    // var input = document.getElementById('pac-input');
    // var searchBox = new google.maps.places.SearchBox(input);
    // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

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
        "<a class='button button-block button-positive'>"+
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

  function closeAllInfoWindows() {
    for (var i=0;i<infoWindows.length;i++) {
       infoWindows[i].close();
    }
  }
});
