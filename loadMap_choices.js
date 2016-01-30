function loadMapContents (userChoice){

	infowindow = new google.maps.InfoWindow();

	// Clear out the old markers.
	markersC.forEach(function(marker) {
	marker.setMap(null);
	});

	var service = new google.maps.places.PlacesService(map);

	service.nearbySearch({
	    bounds: bounds,
	    types: userChoice
	  }, callback);
	}

	function callback(results, status) {
	  if (status === google.maps.places.PlacesServiceStatus.OK) {
	    for (var i = 0; i < results.length; i++) {
	      createMarker(results[i]);
	      //showDetails.(place);
	    }
	  }
	}

	function createMarker(place) {
	  	var placeLoc = place.geometry.location;
	  	var marker = new google.maps.Marker({
	    	map: map,
	    	position: place.geometry.location
		});

	 	markersC.push(marker);

	  	google.maps.event.addListener(marker, 'click', function() {
	    	infowindow.setContent(place.name);
	    	infowindow.open(map, this);
	 	});



}