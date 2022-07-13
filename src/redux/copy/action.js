import CopyService from "../../service/copy";
import { GET_ALL_SUCCESS, SET_LOADING, FILTER_STATUS } from "./const";

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

export const getAllCopys = () => async (dispatch) => {
  try {
    const { data } = await CopyService.getCopys();

    // console.log(data);

    dispatch(getCopysSuccess(data));
  } catch (error) {
    console.log("Error:", error);
  }
};

const getCopysSuccess = (payload) => ({
  type: GET_ALL_SUCCESS,
  payload,
});

export const filterStatus = (payload) => ({
  type: FILTER_STATUS,
  payload,
});
