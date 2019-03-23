"use strict"

function initMap() {
    const mapOptions = {
        center: new google.maps.LatLng(51.65, -3.2),
        zoom: 4.25,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoomControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        pancontrol: false,
        fullscreenControl: false,
        styles: [
            {
                "featureType": "administrative.country",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#fdfdfd"
                    },
                    {
                        "weight": "2.02"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9d9d9d"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#fdfdfd"
                    },
                    {
                        "weight": "1.00"
                    }
                ]
            },
            {
                "featureType": "administrative.province",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#f9f9f9"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#f1f1f1"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9d9d9d"
                    }
                ]
            }
        ]
    };

    const mapElement = document.querySelector('.address__map');
    window.map = new google.maps.Map(mapElement, mapOptions);

    const pinLocation = new google.maps.LatLng(53.1158791, 23.127103);
    new google.maps.Marker({
        position: pinLocation,
        map: window.map,
        icon: "images/placeholder.png"
    });
}

function loadScript() {
    const script = document.createElement('script');
    script.src = " https://maps.googleapis.com/maps/api/js?key=AIzaSyBFUFPzipMXaGWVhUw6SgpnXwexTCRxkUo&callback=initMap";
    document.head.appendChild(script);
}

window.onload = loadScript;

window.currentWidth = window.innerWidth;
window.addEventListener('resize', function () {
    const currentLat = window.map.center.lng();
    const direction = window.currentWidth - window.innerWidth;
    if (direction > 0 && window.innerWidth <= 980 && currentLat != -4.4) {
        window.map.setCenter(new google.maps.LatLng(51.65, -4.4));
    }
    else if (direction < 0 && window.innerWidth > 980 && currentLat != -3.2) {
        window.map.setCenter(new google.maps.LatLng(51.65, -3.2));
    }
    window.currentWidth = window.innerWidth;
});
