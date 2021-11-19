import actionTypesLogin from '../actionTypes/loginAT';

const initialState = {
  isAdmin: false,
  error: null,
};

// eslint-disable-next-line default-param-last
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypesLogin.LOGIN_START:
      return {
        ...state,
        error: null,
      };
    case actionTypesLogin.LOGIN_SUCCESS:
      return {
        ...state,
        isAdmin: action.payload,
      };
    case actionTypesLogin.LOGIN_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default loginReducer;
