$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


      var map;
      function initMap() {
      	var myLatLng = {lat: 49.1337857, lng: -122.840638};
        map = new google.maps.Map(document.getElementById('map'), {
          center: myLatLng,
          zoom: 12,
          styles: 
          [
  {
    "elementType": "labels",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "stylers": [
      { "hue": "#016bc2" }
    ]
  }
]
        });
        var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Surrey, BC'
  });
      }