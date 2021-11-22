import actionTypesGuest from '../actionTypes/guestAT';

const initialState = {
  list: [],
  error: null,
};
// eslint-disable-next-line default-param-last
const guestReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypesGuest.INIT_GUESTS_START:
      return {
        ...state,
        error: null,
      };
    case actionTypesGuest.INIT_GUESTS_SUCCESS:
      return {
        ...state,
        list: [...action.payload],
      };
    case actionTypesGuest.INIT_GUESTS_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default guestReducer;
