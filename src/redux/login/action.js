import { createToken, saveValue } from "../../utils/localStorage";
import { LOGIN_SUCCES, LOGIN_ERROR, LOGOUT } from "./const";

export const loginRequest = (values) => (dispatch) => {
  const token = createToken(40);
  saveValue("token", token);
  dispatch(loginSucces(token));
};

const loginSucces = (payload) => ({
  type: LOGIN_SUCCES,
  payload,
});
const loginError = () => ({
  type: LOGIN_ERROR,
});

export const logout = () => ({
  type: LOGOUT,
});
