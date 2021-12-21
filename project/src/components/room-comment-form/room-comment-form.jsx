import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { postComment } from '../../services/api-utils';

function RoomCommentForm(props) {
  const { handleFormSubmit, id } = props;

  const initialState = {
    rating: 0,
    review: '',
  };

  const [data, setData] = useState(initialState);

  const [reviewInput, setReviewInput] = useState(false);
  const [ratingError, setRatingError] = useState(true);
  const [reviewError, setReviewError] = useState(true);
  const [formError, setFormError] = useState(false);
  const [formValidity, setformValidity] = useState(false);
  const [isSubmiting, setisSubmiting] = useState(false);

  const { review, rating } = data;

  const handleFieldChange = (evt) => {
    const { name, value } = evt.target;
    setData({ ...data, [name]: value });

    switch (evt.target.name) {
      case 'rating':
        setRatingError(false);
        break;
      case 'review':
        if (evt.target.validity.valid) {
          setReviewError(false);
        } else {
          setReviewError(true);
        }
    }
  };

  const handleInputBlur = () => {
    setReviewInput(true);
  };

  const OnFormSubmit = async (evt) => {
    evt.preventDefault();
    setisSubmiting(true);
    const result = await postComment(id, {comment: review, rating: rating});

    if (result.status === 200) {
      handleFormSubmit();
      const inputs = document.querySelectorAll('input[type=radio]');
      for (const input of inputs) {
        input.checked = false;
      }
      setData(initialState);
    } else {
      setFormError(true);
    }
    setisSubmiting(false);
  };

  useEffect(() => {
    if (!ratingError && !reviewError) {
      setformValidity(true);
    } else {
      setformValidity(false);
    }
  }, [ratingError, reviewError]);


  return (
    <form className="reviews__form form" action="#" method="post" onChange={handleFieldChange} onSubmit={OnFormSubmit}>
      <fieldset style={{ border: 'none' }} disabled={isSubmiting ? 'disabled' : ''}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        {(reviewInput && ratingError) && <div style={{ color: 'red' }}>Необходимо выставить оценку</div>}
        <div className="reviews__rating-form form__rating">
          <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" required="required" />
          <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" />
          <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" />
          <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" />
          <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" />
          <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </div>
        {(reviewInput && reviewError) && <div style={{ color: 'red' }}>Текст отзыва должен содержать от 50 до 300 символов.</div>}
        <textarea
          className="reviews__textarea form__textarea"
          id="review"
          name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
          minLength="50"
          maxLength="300"
          onBlur={handleInputBlur}
          onChange={handleFieldChange}
          value={review}
          required
        >
        </textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled={formValidity ? '' : 'disabled'} >Submit</button>
        </div>
        {formError && <div style={{ color: 'red' }}>Ошибка отправки комментария</div>}
      </fieldset>
    </form>
  );
}

RoomCommentForm.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};


export default RoomCommentForm;
