import AuthorService from "../../service/author";
import { GET_ALL_SUCCESS, SET_LOADING } from "./const";

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

export const getAllAuthors = () => async (dispatch) => {
  try {
    const { data } = await AuthorService.getAuthors();

    console.log(data);

    dispatch(getAuthorSuccess(data));
  } catch (error) {
    console.log("Error: ", error);
  }
};

const getAuthorSuccess = (payload) => ({
  type: GET_ALL_SUCCESS,
  payload,
});
