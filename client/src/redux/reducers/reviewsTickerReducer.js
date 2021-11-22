import actionTypeReviewsTicker from '../actionTypes/reviewsTickerAT';

const reviewsInitialState = {
  list: [],
  error: null,
};
// eslint-disable-next-line default-param-last
const reviewsTickerReducer = (state = reviewsInitialState, action) => {
  switch (action.type) {
    case actionTypeReviewsTicker.GET_REVIEWS_FROM_DB_START:
      return {
        ...state,
        error: null,
      };
    case actionTypeReviewsTicker.GET_REVIEWS_FROM_DB_SUCCESS:
      return {
        ...state,
        list: action.payload,
      };
    case actionTypeReviewsTicker.GET_REVIEWS_FROM_DB_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reviewsTickerReducer;
