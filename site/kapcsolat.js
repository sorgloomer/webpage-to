var googleMap;

function initialize() {
  var center = new google.maps.LatLng(48.1031047,20.7916887);
  var mapProp = {
    center: center,
    zoom: 17,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  googleMap = new google.maps.Map(document.getElementById("google-map"), mapProp);

  new google.maps.Marker({
    position: center,
    map: googleMap ,
    title: 'Tökéletes Összhang szalon'
  });

}

google.maps.event.addDomListener(window, 'load', initialize);
