const GOOGLE_API_KEY = require("../.env");
function getLocation() {
    try {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    }
    catch {
        console.log("Err is ", err, "\nGeo Location Not supported");
    }
}

function showPosition(position) {
    console.log(" Lattitide is " + position.coords.latitude);
    console.log(" Longitude is " + position.coords.longitude);
    let latlon = position.coords.latitude + "," + position.coords.longitude;
    console.log(latlon);
    let img_url = "https://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=400x300&sensor=false&key="+GOOGLE_API_KEY;
  
    document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";

}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}
getLocation();