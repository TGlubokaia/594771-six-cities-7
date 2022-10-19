import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { changeCity } from '../../store/action';
import { getSelectedCityName } from '../../store/offers-filter/selectors';

function FilterItem(props) {
  const { city } = props;

  const selectedCity = useSelector(getSelectedCityName);
  const dispatch = useDispatch();

  const handleFilterItemClick = (cityOnClick) => {
    dispatch(changeCity(cityOnClick));
  };

  return (
    <li className="locations__item"
      onClick={() => handleFilterItemClick(city)}
    >
      <a className={`locations__item-link tabs__item ${city === selectedCity && 'tabs__item--active'}`} href="#">
        <span>{city}</span>
      </a>
    </li>
  );
}


FilterItem.propTypes = {
  city: PropTypes.string.isRequired,
};

export default FilterItem;
