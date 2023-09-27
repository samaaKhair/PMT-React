import { LOGOUT, SET_AUTH, SET_USERNAME } from "./types";

export const setAuth = (isAuth) => ({
  type: SET_AUTH,
  payload: isAuth,
});
export const setUsername = (username) => ({
  type: SET_USERNAME,
  payload: username,
});
export const signout = () => ({
  type: LOGOUT,
});
