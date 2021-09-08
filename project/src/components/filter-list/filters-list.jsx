import React from 'react';
import { cities } from '../../const';
import FilterItem from '../filter-item/filter-item';

function FiltersList(props) {
 const {} = props;
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <FilterItem city={city}/>
      ))}
    </ul>
  )
};

export default {FiltersList};
