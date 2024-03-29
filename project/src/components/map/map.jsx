import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import pointProp from '../../common/prop-types/point.prop';
import useMap from '../../hooks/useMap';

const defaultIcon = leaflet.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

const focusedIcon = leaflet.icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

const getIcon = (item, itemOnfocus, defaultColor, focusedColor) => {
  if (!itemOnfocus) {
    return defaultColor;
  } else if (item.latitude === itemOnfocus.latitude && item.longitude === itemOnfocus.longitude) {
    return focusedColor;
  } else {
    return defaultColor;
  }
};


function Map(props) {
  const { city, points, pointOnFocus } = props;
  const mapRef = useRef(null);
  const [map, markers] = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      markers.clearLayers();
      map.setView([city.location.latitude, city.location.longitude], city.location.zoom);
      if (points) {
        points.forEach((point) => {
          leaflet
            .marker({
              lat: point.latitude,
              lng: point.longitude,
            }, {
              icon: getIcon(point, pointOnFocus, defaultIcon, focusedIcon),
            })
            .addTo(markers);
        });
      }

    }
  }, [map, city, markers, points, pointOnFocus]);

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
  pointOnFocus: pointProp,
};

export default Map;
