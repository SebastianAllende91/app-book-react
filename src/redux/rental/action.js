import RentalService from "../../service/rental";
import { ADD_SUCCESS_RENTAL, SET_LOADING, GET_ALL_SUCCESS } from "./const";

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

export const addRentalSuccess = (payload) => ({
  type: ADD_SUCCESS_RENTAL,
  payload,
});

export const getAllRentals = () => async (dispatch) => {
  try {
    const { data } = await RentalService.getRentals();

    // console.log(data);

    dispatch(getRentalsSuccess(data));
  } catch (error) {
    console.log("Error:", error);
  }
};

const getRentalsSuccess = (payload) => ({
  type: GET_ALL_SUCCESS,
  payload,
});
