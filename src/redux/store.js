import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import incrementReducer from './ducks/increment';

const rootReducer = combineReducers({
  form: formReducer,
  increment: incrementReducer,
});

export default createStore(rootReducer);
