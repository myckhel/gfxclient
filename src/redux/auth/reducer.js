import {LOGOUT, INIT_URL, SIGNOUT_USER_SUCCESS, USER_DATA, USER_TOKEN_SET} from "../../constants/ActionTypes";

const INIT_STATE = {
  token: JSON.parse(localStorage.getItem('token')),
  initURL: '',
  authUser: JSON.parse(localStorage.getItem('user')),
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {

    case INIT_URL: {
      return {...state, initURL: action.payload};
    }

    case LOGOUT: {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return {
        ...state,
        token: null,
        authUser: null,
        initURL: ''
      }
    }

    case USER_DATA: {
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        authUser: action.payload,
      };
    }

    case USER_TOKEN_SET: {
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      return {
        ...state,
        token: action.payload.token,
      };
    }

    default:
      return state;
  }
}
