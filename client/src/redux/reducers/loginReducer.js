import actionTypesLogin from '../actionTypes/loginAT';
import actionTypesLogout from '../actionTypes/logoutAT';

const initialState = {
  isAdmin: false,
  session: {},
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
        isAdmin: action.payload.isAdmin,
        session: action.payload.session,
      };
    case actionTypesLogin.LOGIN_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case actionTypesLogout.LOGOUT_START:
      return {
        ...state,
        error: null,
      };
    case actionTypesLogout.LOGOUT_SUCCESS:
      return {
        ...state,
        isAdmin: action.payload,
        session: {},
      };
    case actionTypesLogout.LOGOUT_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default loginReducer;
