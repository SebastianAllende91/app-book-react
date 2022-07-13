import { GET_ALL_SUCCES, SET_LOADING } from "./const";

const initialState = {
  users: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_SUCCES:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
