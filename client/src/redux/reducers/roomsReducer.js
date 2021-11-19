import actionTypesRooms from '../actionTypes/roomsAT';

const initialState = {
  list: [],
  error: null,
};

// eslint-disable-next-line default-param-last
const roomsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypesRooms.INIT_ROOMS_START:
      return {
        ...state,
        error: null,
      };
    case actionTypesRooms.INIT_ROOMS_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        list: [...action.payload],
      };
    case actionTypesRooms.INIT_ROOMS_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default roomsReducer;
