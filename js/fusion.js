var map;

function initialize() {
  var Tlaxcala = new google.maps.LatLng(19.3181, -98.2375);
  

  map = new google.maps.Map(document.getElementById('mapa'), {
    center: Tlaxcala,
    zoom: 14,
    disableDefaultUI: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP, // SATELLITE, TERRAIN, HYBRID, ROADMAP
    panControl: true,
    zoomControl: true,
    mapTypeControl: true,
    streetViewControl: true
  });

  var capa = new google.maps.FusionTablesLayer({
    query: {
      select: 'idINEGI',
      from: '1o2jTWDXe9VWo_S484ob0jiRhR5D4RalldiueANgc',
      where: 'Poblacion>15000'
    }
  });
  capa.setMap(map);



  var areaCoords = [
    new google.maps.LatLng(19.321633,-98.246963),
    new google.maps.LatLng(19.313087,-98.239924),
    new google.maps.LatLng(19.320944,-98.227908),    
    new google.maps.LatLng(19.326573,-98.239238)
  ];

   var area;
  area = new google.maps.Polygon({
    paths: areaCoords,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#F00000',
    fillOpacity: 0.35
  });
  area.setMap(map);



  var apizaco = [
    new google.maps.LatLng(19.418476, -98.145633),
    new google.maps.LatLng(19.418448, -98.145311),
    new google.maps.LatLng(19.418090, -98.145212),
    new google.maps.LatLng(19.418066, -98.145662)
  ]

  var areaApizaco;
  areaApizaco = new google.maps.Polygon({
    paths: apizaco,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#800000',
    fillOpacity: 0.35
  });
   areaApizaco.setMap(map);





  //Agregando una marca al mapa  *DSinteg*
  var marker = new google.maps.Marker({
      position: new google.maps.LatLng(19.314, -98.194),
      map: map,
      title: 'Click aquí',	
      //icon: 'http://gmaps-samples.googlecode.com/svn/trunk/markers/blue/blank.png'
  });
	var infowindow = new google.maps.InfoWindow({
	content: ' DSInteg '
	});
	infowindow.open(map, marker);


}

google.maps.event.addDomListener(window, 'load', initialize);
