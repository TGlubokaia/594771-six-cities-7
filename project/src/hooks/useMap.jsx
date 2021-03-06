import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

function useMap(mapRef, city) {
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = leaflet.map(mapRef.current, {
        center: [city.location.latitude, city.location.longitude],
        zoom: city.location.zoom,
        zoomControl: false,
        marker: true,
        scrollWheelZoom: false,
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(instance);

      leaflet.control.zoom({
        zoomInText: '+',
        zoomOutText: '&#x2212',
        position: 'bottomright',
      }).addTo(instance);

      setMap(instance);
      setMarkers(leaflet.layerGroup().addTo(instance));
    }
  }, [mapRef, map, city]);

  return [map, markers];
}

useMap.propTypes = {
  mapRef: PropTypes.node,
  city: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }),
    cityName: PropTypes.string.isRequired,
  }),
};

export default useMap;
