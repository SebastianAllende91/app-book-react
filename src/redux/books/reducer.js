import { ADD_SUCCESS, GET_ALL_SUCCESS, SET_LOADING } from "./const";

const initialState = {
  books: [],
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
        books: action.payload,
        loading: false,
      };
    case ADD_SUCCESS:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
