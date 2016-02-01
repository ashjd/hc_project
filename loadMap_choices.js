// This function loads the appropriate information on the map according to user's choice of place types.  

function loadMapContents (userChoice) {

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
	      //createMarker(results[i]);
	      showDetails(results[i]);
	      createPhotoMarker(results[i]);
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


function createPhotoMarker(place) {
  var photos = place.photos;
  if (!photos) {
  	createMarker(place);
    return;
  }

  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location,
    title: place.name,
    icon: photos[0].getUrl({'maxWidth': 35, 'maxHeight': 35})
  });

  document.getElementById("photo_div").innerHTML = "Please click on the photo markers to see the photos here."

  google.maps.event.addListener(marker, 'click', function() {
  		var img = document.createElement('img');
  		img.src = photos[0].getUrl({'maxWidth': 350, 'maxHeight': 350});
	   	document.getElementById("photo_div").appendChild(img);
 });
}


function showDetails (place){
		
	var request = { reference: place.reference };
    	
    service.getDetails(request, function(details, status) {
    	if (status == google.maps.places.PlacesServiceStatus.OK)
        document.getElementById("details_info").innerHTML += "<br />" + "<br />" + details.name + "<br />" + details.formatted_address +"<br />" + details.website + "<br />" + "User Rating out of 5 is " + details.rating + "<br />" + details.formatted_phone_number;
        
    });
    
}



