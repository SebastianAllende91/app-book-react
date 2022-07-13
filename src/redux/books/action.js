import BookService from "../../service/book";
import { ADD_SUCCESS, GET_ALL_SUCCESS, SET_LOADING } from "./const";

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

export const getAllBooks = () => async (dispatch) => {
  try {
    const { data } = await BookService.getBooks();

    dispatch(getBooksSuccess(data));
  } catch (error) {
    console.log("Error: ", error);
  }
};

const getBooksSuccess = (payload) => ({
  type: GET_ALL_SUCCESS,
  payload,
});

export const addBookSuccess = (payload) => ({
  type: ADD_SUCCESS,
  payload,
});
