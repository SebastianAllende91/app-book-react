import { getValue, removeItem } from "../../utils/localStorage";
import {
  SET_ERROR,
  SET_LOADING,
  LOGIN_SUCCES,
  LOGOUT,
  LOGIN_ERROR,
} from "./const";

const initialState = {
  loading: false,
  token: getValue("token") || "",
  session: getValue("token") ? true : false,
  errorLogin: false,
  mensajeErrorLogin: "",
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCES:
      return {
        ...state,
        token: action.payload,
        session: true,
        loading: false,
        errorLogin: false,
      };
    case LOGOUT:
      removeItem("token");
      return {
        ...state,
        token: "",
        session:""

      };
    case LOGIN_ERROR:
      return {
        ...state,
        errorLogin: true,
        mensajeErrorLogin: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
