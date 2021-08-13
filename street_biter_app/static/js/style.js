





var mymap = L.map('mapid').setView([45.50, -122.67], 13);


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoiZWxtaWNoZSIsImEiOiJjazQwb2s2NHowM3Y4M2xwbjJ2NXJhZXZ1In0.-bKylG4SBc4ybZCodZGzKQ'
}).addTo(mymap);


// var marker = L.marker([45.50,-122.67]).addTo(mymap);

// coordinates button
var x = document.getElementById("demo");
let lat = document.getElementById("lat");
let long = document.getElementById("long");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } 
  else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
  
  lat.value = String(position.coords.latitude);
  long.value = String(position.coords.longitude);
  var marker = L.marker([position.coords.latitude,position.coords.longitude]).addTo(mymap);

  marker.bindPopup("<b>Marked!</b><br>Now, complete the <br> rest of the form").openPopup()

}




// marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

// var popup = L.popup()
//     .setLatLng([45.502438399999996, -122.67488600000001])
//     .setContent("I am a standalone popup.")
//     .openOn(mymap);


