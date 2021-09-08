import React from 'react';
import { connect } from 'react-redux';
import {ActionCreator} from '../../store/action'

function FilterItem(props) {
  const { city, selectedCity, onFilterItem } = props;

  return (
    <li className="locations__item"
      onClick={onFilterItem}
    >
      <a className={`locations__item-link tabs__item ${city === selectedCity && 'tabs__item--active'}`} href="#">
        <span>{city}</span>
      </a>
    </li>
  )
};

// валидация пропсов

const mapStateToProps = (state) => ({
  selectedCity: state.selectedCity,
})

const mapDispatchToProps = (dispatch) => ({
  onFilterItem() {
    dispatch(ActionCreator.changeCity(city));
  }
})

export {FilterItem};
export default connect(mapStateToProps, mapDispatchToProps)(FilterItem);
