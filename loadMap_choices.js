function loadMapContents (userChoice) {

//	var index = index;
	infowindow = new google.maps.InfoWindow();

	document.getElementById("details_info").innerHTML = "";
	// Clear out the old markers.
	markersC.forEach(function(marker) {
		marker.setMap(null);
	});

	service = new google.maps.places.PlacesService(map);

	service.nearbySearch({
	    bounds: bounds,
	    types: userChoice
	  }, callback);
}

function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
	    for (var i = 0; i < results.length; i++) {
	      createMarker(results[i]);
	      showDetails(results[i]);
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

function showDetails (place){
		
	/*var divId = "";

	switch (index){
		case 0 : divId = "info1"; break;
		case 1 : divId = "hotels1"; break;
		case 2 : divId = "restaurants1"; break;
		case 3 : divId = "store1"; break;
		case 4 : divId = "rec1"; break;
	}
*/
	var request = { reference: place.reference };
    	
    service.getDetails(request, function(details, status) {
    	if (status == google.maps.places.PlacesServiceStatus.OK)
        document.getElementById("details_info").innerHTML += "<br />" + "<br />" + details.name + "<br />" + details.formatted_address +"<br />" + details.website + "<br />" + details.rating + "<br />" + details.formatted_phone_number;
        
    });
    
}

