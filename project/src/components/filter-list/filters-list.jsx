import React from 'react';
import { cities } from '../../const';
import FilterItem from '../filter-item/filter-item';

function FiltersList() {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) => (
          <FilterItem city={city} />
        ))}
      </ul>
    </section>

  )
};

export default FiltersList;
