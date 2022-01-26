import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import browserHistory from '../../browser-history';
import { AppRoute } from '../../const';
import { getAuthorizationInfo } from '../../store/user/selectors';
import { postFavoriteOffer } from '../../services/api-utils';


function FavoriteButton(props) {
  const { buttonClass, isFavorite, id, size } = props;
  const [isFavoriteStatus, setIsFavoriteStatus] = useState(isFavorite);
  const authorizationInfo = useSelector(getAuthorizationInfo);

  const handleFavoriteClick = () => {
    if (!authorizationInfo) {
      browserHistory.push(AppRoute.LOGIN);
    }
    const statisIndex = isFavoriteStatus ? 0 : 1;
    postFavoriteOffer(id, statisIndex);
    setIsFavoriteStatus(!isFavoriteStatus);
  };

  return (
    <button
      className={`${buttonClass}__bookmark-button ${isFavoriteStatus && `${buttonClass}__bookmark-button--active`} button`}
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
  id: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

export default FavoriteButton;
