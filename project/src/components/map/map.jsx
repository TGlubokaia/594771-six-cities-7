import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import pointProp from '../../common/prop-types/point.prop';

import useMap from '../../hooks/useMap';

const iconDesign = leaflet.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

function Map(props) {
  const { city, points } = props;
  const mapRef = useRef(null);
  const [map, markers] = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      markers.clearLayers();
      map.flyTo([city.location.latitude, city.location.longitude], city.location.zoom);
      points.forEach((point) => {
        leaflet
          .marker({
            lat: point.latitude,
            lng: point.longitude,
          }, { icon: iconDesign })
          .addTo(markers);
      });
    }
  }, [map, city, markers, points]);

  return (
    <section
      className="cities__map map"
      style={{ height: '100%' }}
      ref={mapRef}
    >
      <span>{city.cityName}</span>
    </section>
  );
}

Map.propTypes = {
  city: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }),
    cityName: PropTypes.string.isRequired,
  }),
  points: PropTypes.arrayOf(pointProp),
};

export default Map;
