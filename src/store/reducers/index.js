import { combineReducers } from 'redux';

import bookReducer from './bookReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
  book: bookReducer,
  filter: filterReducer,
});

export default rootReducer;
