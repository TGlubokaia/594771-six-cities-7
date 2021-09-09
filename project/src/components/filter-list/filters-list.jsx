import React from 'react';
import { cities } from '../../const';
import FilterItem from '../filter-item/filter-item';
import offerProp from '../../common/prop-types/offer.prop';

function FiltersList() {

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) => (
          <FilterItem key={city} city={city}/>
        ))}
      </ul>
    </section>

  )
};

export default FiltersList;
