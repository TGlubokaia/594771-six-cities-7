import React from 'react';
import PropTypes from 'prop-types';
import { sortTypeNames } from '../../const';
function SortList(props) {
  const { onSortType, sortType } = props;
  const sortTypes = Object.values(sortTypeNames);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0">
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {sortTypes.map((type) => (
          <li className={`places__option ${sortType === type && 'places__option--active'}`} tabIndex="0"
            onClick={() => onSortType(type)} key={type}
          >{type}
          </li>
        ))}
      </ul>
    </form>
  );
}

SortList.propTypes = {
  sortType: PropTypes.string.isRequired,
  onSortType: PropTypes.func.isRequired,
};

export default SortList;

