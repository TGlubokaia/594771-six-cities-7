import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActionCreator } from '../../store/action';

function FilterItem(props) {
  const { city, selectedCity, onFilterItem } = props;

  return (
    <li className="locations__item"
      onClick={() => onFilterItem(city)}
    >
      <a className={`locations__item-link tabs__item ${city === selectedCity && 'tabs__item--active'}`} href="#">
        <span>{city}</span>
      </a>
    </li>
  );
}

FilterItem.propTypes = {
  city: PropTypes.string.isRequired,
  selectedCity: PropTypes.string.isRequired,
  onFilterItem: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  selectedCity: state.selectedCity,
});

const mapDispatchToProps = (dispatch) => ({
  onFilterItem(city) {
    dispatch(ActionCreator.changeCity(city));
  },
});

export { FilterItem };
export default connect(mapStateToProps, mapDispatchToProps)(FilterItem);
