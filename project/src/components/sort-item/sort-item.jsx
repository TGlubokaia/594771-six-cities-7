import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {ActionCreator} from '../../store/action';

function SortItem (props) {
  const {type, sortType, onSortItem} = props;
  console.log( onSortItem, type, sortType );

  return (
    <li className={`places__option ${sortType === type &&'places__option--active'}`} tabIndex="0"
      onClick={() => onSortItem(type)}
    >{type}</li>
  )
};

SortItem.propTypes = {
  type: PropTypes.string.isRequired,
  sortType: PropTypes.string.isRequired,
  onSortItem: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  sortType: state.sortType,
});

const mapDispatchToProps = (dispatch) => ({
  onSortItem(type) {
    dispatch(ActionCreator.sortOffers(type));
  }
});

export {SortItem};
export default connect(mapStateToProps, mapDispatchToProps)(SortItem);
