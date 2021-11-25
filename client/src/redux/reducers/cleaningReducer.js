import actionTypesCleaning from '../actionTypes/cleaningAT';

const initialState = {
  list: [],
  error: null,
};

// eslint-disable-next-line default-param-last
const cleaningReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypesCleaning.INIT_CLEANING_START:
      return {
        ...state,
        error: null,
      };
    case actionTypesCleaning.INIT_CLEANING_SUCCESS:
      return {
        ...state,
        list: [...action.payload],
      };
    case actionTypesCleaning.INIT_CLEANING_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case actionTypesCleaning.UPDATE_CLEANING_START:
      return {
        ...state,
        error: null,
      };
    case actionTypesCleaning.UPDATE_CLEANING_SUCCESS:
      return {
        ...state,
        list: [...action.payload],
      };
    case actionTypesCleaning.UPDATE_CLEANING_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default cleaningReducer;
