import { ADD_SUCCESS_RENTAL } from "../rental/const";
import { GET_ALL_SUCCESS, SET_LOADING, FILTER_STATUS } from "./const";

const initialState = {
  copys: [],
  secondCopy: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_SUCCESS:
      return {
        ...state,
        secondCopy: action.payload,
        copys: action.payload.filter((el) => el.estado === "BIBLIOTECA"),
        loading: false,
      };
    case FILTER_STATUS:
      return {
        ...state,
        copys: state.secondCopy.filter((el) => el.estado === action.payload),
      };
    case ADD_SUCCESS_RENTAL:
      return {
        ...state,
        copys: state.secondCopy.map((el) =>
          el.idCopia === action.payload ? { ...el, estado: "PRESTADO" } : el
        ),
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
