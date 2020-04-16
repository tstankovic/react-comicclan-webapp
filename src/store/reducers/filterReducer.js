import { SET_CATEGORY } from '../actions/types';

const initialState = {
  searchTerm: '',
  activeCategory: 'year',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        activeCategory: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
