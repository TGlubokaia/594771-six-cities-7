import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import browserHistory from '../../browser-history';
import { AppRoute } from '../../const';
import { getAuthorizationInfo } from '../../store/user/selectors';
import { fetchFavoriteOffers, fetchOffers } from '../../store/api-actions';
import { postFavoriteOffer } from '../../services/api-utils';


function FavoriteButton(props) {
  const { buttonClass, isFavorite, id, size } = props;
  const authorizationInfo = useSelector(getAuthorizationInfo);
  const dispatch = useDispatch();


  const handleFavoriteClick = () => {
    if (!authorizationInfo) {
      browserHistory.push(AppRoute.LOGIN);
    }
    const statisIndex = isFavorite? 0 : 1;
    (async () => {
      await postFavoriteOffer(id, statisIndex);
      dispatch(fetchOffers());
      dispatch(fetchFavoriteOffers());
    })();
    // setIsFavoriteStatus(!isFavoriteStatus);
  };


  return (
    <button
      className={`${buttonClass}__bookmark-button ${isFavorite && `${buttonClass}__bookmark-button--active`} button`}
      type="button"
      onClick={handleFavoriteClick}
    >
      <svg className={`${buttonClass}__bookmark-icon`} width={`${size.width}`} height={`${size.height}`}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

FavoriteButton.propTypes = {
  buttonClass: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  size: PropTypes.shape({
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }),
};

export default FavoriteButton;
