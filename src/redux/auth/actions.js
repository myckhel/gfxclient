import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  INIT_URL,
  SIGNOUT_USER_SUCCESS,
  LOGOUT,
  USER_DATA,
  USER_TOKEN_SET
} from "../../constants/ActionTypes";

export const setInitUrl = (url) => {
  return {
    type: INIT_URL,
    payload: url
  };
};

export const setToken = ({token, cache}) => ({
  type: USER_TOKEN_SET,
  payload: {token, cache},
})

export const logoutUser = () => ({type: LOGOUT})

export const signOutSuccess = () => ({
  type: SIGNOUT_USER_SUCCESS,
})

export const storeUser = (user) => ({
  type: USER_DATA,
  payload: user,
})
