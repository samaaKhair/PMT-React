import { SET_AUTH, SET_USERNAME,LOGOUT } from "./types";
import storage from "redux-persist/lib/storage";

const initialState = { username: "", isAuth: false };

export default function userReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_AUTH:
      return { ...state, isAuth: payload };
    case SET_USERNAME:
      return { ...state, username: payload };
      case LOGOUT:
        storage.removeItem("persist:root");
        return {undefined};
    default:
      return state;
  }
}
