import actionTypesReviewsTicker from '../actionTypes/reviewsTickerAT';

const reviewsTickerAction = {
  getReviewsFromDB: () => ({
    type: actionTypesReviewsTicker.GET_REVIEWS_FROM_DB_START,
  }),
};

export default reviewsTickerAction;
