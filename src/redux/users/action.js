import UserService from "../../service/user";
import { GET_ALL_SUCCES, SET_LOADING } from "./const";

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

export const getAllUsers = () => async (dispatch) => {
  try {
    const { data } = await UserService.getUsers();

    // console.log(data);

    dispatch(getUsersSuccess(data));
  } catch (error) {
    console.log("Error: ", error);
  }
};

const getUsersSuccess = (payload) => ({
  type: GET_ALL_SUCCES,
  payload,
});
