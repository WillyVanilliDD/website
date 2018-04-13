var myLatLng=new Array();
myLatLng[1] = {lat: 51.047692, lng: 13.735948}; // Altmark Galerie
myLatLng[2] = {lat: 51.042711, lng: 13.750210}; // Arnold-Bad
myLatLng[3] = {lat: 51.012883, lng: 13.694066}; // DD-Coschütz
myLatLng[4] = {lat: 51.044715, lng: 13.779559}; // Borsbergstraße
myLatLng[5] = {lat: 51.024210, lng: 13.840345}; // DD-Laubegast
var map = new Array();
var marker = new Array();
var zoomLevel = 14;

function addMap(id){
	map[id] = new google.maps.Map(document.getElementById("map"+id), {
        center: myLatLng[id],
        scrollwheel: false,
        zoom: zoomLevel 
    });
    marker[id] = new google.maps.Marker({
          position: myLatLng[id],
          map: map[id],
          title: 'Willy Vanilli'
    });
}


function initMap() {
    // Create a map object and specify the DOM element for display.
    addMap(1);
    addMap(2);
    addMap(3);
    addMap(4);
    addMap(5);
}



function setMapHeight(){
    $("#map1").css("height",$("#img1").css("height"));
    $("#map2").css("height",$("#img2").css("height"));
    $("#map3").css("height",$("#img3").css("height"));
    $("#map4").css("height",$("#img4").css("height"));
    $("#map5").css("height",$("#img5").css("height"));
}

window.onload =  function(){
    setMapHeight();
    initMap();
}

$( window ).resize(function() {
    setMapHeight();
});
