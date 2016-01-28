function loadMapContents (userChoice){

	infowindow = new google.maps.InfoWindow();
	placeType.pop();
	placeType.push(userChoice);

	var service = new google.maps.places.PlacesService(map);

	service.nearbySearch({
	    bounds: bounds,
	    types: placeType
	  }, callback);
	}

	function callback(results, status) {
	  if (status === google.maps.places.PlacesServiceStatus.OK) {
	    for (var i = 0; i < results.length; i++) {
	      createMarker(results[i]);
	    }
	  }
	}

	function createMarker(place) {
	  var placeLoc = place.geometry.location;
	  var marker = new google.maps.Marker({
	    map: map,
	    position: place.geometry.location
	  });

	  google.maps.event.addListener(marker, 'click', function() {
	    infowindow.setContent(place.name);
	    infowindow.open(map, this);
	  });

}