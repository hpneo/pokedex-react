import { createStore, combineReducers } from 'redux';

import incrementReducer from './ducks/increment';

const rootReducer = combineReducers({
  increment: incrementReducer,
});

export default createStore(rootReducer);
