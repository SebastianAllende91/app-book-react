import { GET_ALL_SUCCESS, SET_LOADING } from "./const";

const initialState = {
  authors: [],
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
        authors: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
