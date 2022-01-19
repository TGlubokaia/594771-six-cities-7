import { useState } from 'react';
import { postComment } from '../services/api-utils';


const useForm = () => {

  const initialState = {
    rating: 0,
    review: '',
  };

  const [data, setData] = useState(initialState);

  const [reviewInput, setReviewInput] = useState(false);
  const [ratingError, setRatingError] = useState(true);
  const [reviewError, setReviewError] = useState(true);
  const [formError, setFormError] = useState(false);
  const [isSubmiting, setIsSubmiting] = useState(false);

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

  const handleForm = async (evt, onSubmit, id) => {
    evt.preventDefault();
    setIsSubmiting(true);
    const result = await postComment(id, { comment: review, rating: rating });

    if (result.status === 200) {
      onSubmit();
      const inputs = document.querySelectorAll('input[type=radio]');
      for (const input of inputs) {
        input.checked = false;
      }
      setData(initialState);
    } else {
      setFormError(true);
    }
    setIsSubmiting(false);
  };

  return [review, ratingError, reviewError, reviewInput, formError, isSubmiting, handleInputBlur, handleForm, handleFieldChange];

};

export default useForm;
