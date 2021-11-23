import actionTypesAdminReviews from '../actionTypes/adminReviewsAT';

const initialState = {
  list: [],
  error: null,
};

// eslint-disable-next-line default-param-last
const adminReviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypesAdminReviews.INIT_REVIEWS_START:
      return {
        ...state,
        error: null,
      };
    case actionTypesAdminReviews.INIT_REVIEWS_SUCCESS:
      return {
        ...state,
        list: [...action.payload],
      };
    case actionTypesAdminReviews.INIT_REVIEWS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case actionTypesAdminReviews.EDIT_REVIEWS_START:
      return {
        ...state,
        error: null,
      };
    case actionTypesAdminReviews.EDIT_REVIEWS_SUCCESS:
      return {
        ...state,
        list: [...action.payload],
      };
    case actionTypesAdminReviews.EDIT_REVIEWS_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default adminReviewsReducer;
