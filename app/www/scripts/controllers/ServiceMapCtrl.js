app.controller('ServiceMapCtrl', function($scope) {
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

    // var searchItem = document.getElementById('search');
    // var searchBox = new google.maps.places.SearchBox(document.getElementById('searchInput'));
    // map.controls[google.maps.ControlPosition.TOP_LEFT].push(searchItem);

    // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', function() {
      searchBox.setBounds(map.getBounds());
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
    migrants.forEach(function(element,index){

      var infowindow = new google.maps.InfoWindow({
        content: contentString(element),
        maxWidth: 200
      });

      infoWindows.push(infowindow);

      var marker = new google.maps.Marker({
        animation: google.maps.Animation.DROP,
        position: element.pos,
        map: map,
        title: element.firstname,
        icon: {
          url: element.img,
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

  function contentString(data){
    return "<div style='overflow:hidden'>"+
        "<b>"+data.firstname+" est un "+data.job+"</b>"+
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
