import { GET_BOOKS, GET_BOOK, BOOKS_LOADING } from '../actions/types';

const initialState = {
  books: [],
  book: {},
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        books: action.payload,
        loading: false,
      };
    case GET_BOOK:
      return {
        ...state,
        books: action.payload.data,
        book: action.payload.data.find((b) =>
          b.name.includes(action.payload.id)
        ),
        loading: false,
      };
    case BOOKS_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default reducer;
