import React, { useEffect } from 'react';

const GoogleMap = ({ userLocation, destination }) => { // Accept userLocation and destination as props
  useEffect(() => {
    const loadGoogleMapsScript = async () => {
      try {
        // Load the Google Maps API script
        const script = document.createElement('script');
        script.src = process.env.REACT_APP_GOOGLE_MAP_LINK;
        script.defer = true;
        script.async = true;
        document.head.appendChild(script);

        // Initialize the map once the script is loaded
        window.initMap = () => {
          const map = new window.google.maps.Map(document.getElementById('map'), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8
          });

          const directionsService = new window.google.maps.DirectionsService();
          const directionsRenderer = new window.google.maps.DirectionsRenderer();
          directionsRenderer.setMap(map);

          calculateAndDisplayRoute(directionsService, directionsRenderer, userLocation, destination);
        };
      } catch (error) {
        console.error('An error occurred while loading the Google Maps API script:', error);
      }
    };

    loadGoogleMapsScript();
  }, [userLocation, destination]);

  const calculateAndDisplayRoute = (directionsService, directionsRenderer, userLocation, destination) => {
    if (userLocation && destination) {
      const request = {
        origin: userLocation, // Make sure userLocation is properly formatted as an object with lat and lng properties
        destination: destination, // Make sure destination is properly formatted as an object with lat and lng properties
        travelMode: 'DRIVING'
      };

      directionsService.route(request, (response, status) => {
        if (status === 'OK') {
          directionsRenderer.setDirections(response);
        } else {
          console.error('Directions request failed due to ' + status);
        }
      });
    }
  };

  return <div id="map" style={{ width: '100%', height: '60vh' }}></div>;
};

export default GoogleMap;
