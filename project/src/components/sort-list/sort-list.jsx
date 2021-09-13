import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sortTypeNames } from '../../const';
import SortItem from '../sort-item/sort-item';

function SortList(props) {
  const { sortType } = props;
  const sortTypes = Object.values(sortTypeNames);

  console.log(sortType);

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
          <SortItem key={type} type={type} />
        ))}

      </ul>
    </form>
  )
};

SortList.propTypes = {
  sortType: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  sortType: state.sortType,
});

export { SortList };
export default connect(mapStateToProps, null)(SortList);
