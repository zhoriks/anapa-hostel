import actionTypesReviewForm from '../actionTypes/reviewsFormAT';

const newReviewInitialState = {
  sent: false,
  error: null,
};
// eslint-disable-next-line default-param-last
const reviewsTickerReducer = (state = newReviewInitialState, action) => {
  switch (action.type) {
    case actionTypesReviewForm.SEND_REVIEWS_IN_DB_START:
      return {
        ...state,
        error: null,
      };
    case actionTypesReviewForm.SEND_REVIEWS_IN_DB_SUCCESS:
      return {
        ...state,
        sent: true,
      };
    case actionTypesReviewForm.SEND_REVIEWS_IN_DB_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reviewsTickerReducer;
