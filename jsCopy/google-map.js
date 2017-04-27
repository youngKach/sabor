function initMap(){ 
    var uluru = new google.maps.LatLng(36.077774, -94.173730); 
    var mapOptions = {
        center: uluru,
        mapTypeId: 'roadmap',
        zoom:13
    }; 

    var map = new google.maps.Map(document.getElementById('map'), mapOptions); 

    var marker = new google.maps.Marker({
        position: uluru,
        map:map 

    });
    
}

function loadScript(){ 
    var script = document.createElement('script'); 
    script.setAttribute('src','https://maps.googleapis.com/maps/api/js?key=AIzaSyBHn5OSKnkNid0tMKJiq_2EWOMeF3gkP6k&callback=initMap'); 
    document.body.appendChild(script); 
    } 

window.onload = loadScript; 