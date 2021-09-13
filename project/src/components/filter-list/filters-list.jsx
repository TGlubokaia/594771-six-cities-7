import React from 'react';
import { cities } from '../../const';
import FilterItem from '../filter-item/filter-item';

function FiltersList() {
  const citiesNames = cities.map((city) => city.cityName);
  
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {citiesNames.map((city) => ( 
          <FilterItem key={city} city={city}/>
        ))}
      </ul>
    </section>

  )
};

export default FiltersList;
