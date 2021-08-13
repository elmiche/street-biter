
// alert("My Sweet Spots")

var mymap = L.map('sweetspotsid').setView([45.50, -122.67], 12);


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoiZWxtaWNoZSIsImEiOiJjazQwb2s2NHowM3Y4M2xwbjJ2NXJhZXZ1In0.-bKylG4SBc4ybZCodZGzKQ'
}).addTo(mymap);



// function to save 

function showSweetspots() {

    let coordsArray = document.querySelectorAll(".mysweetcoords")
    // console.log(coordsArray)
    for (i = 0; i< coordsArray.length; i++){
        console.log(coordsArray[i])
        // console.log(coordsArray[i].dataset.longitude)   
        let marker = L.marker([coordsArray[i].dataset.latitude,coordsArray[i].dataset.longitude]).addTo(mymap);
        marker.bindPopup(`<div class="card sweetspot-card">
            
            <div class="card-body">
                <h5 class="card-title"> Sweetspot No.${coordsArray[i].dataset.sweetspotid}</h5>
                <p class="card-text">Details about your discovery</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"> <b>Location:</b> <br> ${coordsArray[i].dataset.latitude}, ${coordsArray[i].dataset.longitude}</li>
                <li class="list-group-item"><b>Species:</b> <br> ${coordsArray[i].dataset.species}</li>
                <li class="list-group-item"><b>User:</b> <br> ${coordsArray[i].dataset.user}</li>
            </ul>
            <div class="card-body">
            <a href="http://127.0.0.1:8000/details/${coordsArray[i].dataset.sweetspotid}" class="card-link">Read More</a>
            </div>
        </div>`)
                           
        .openPopup()
    }
    mymap.setView([45.50, -122.67], 12)
    
    
}




showSweetspots()

// marker function 