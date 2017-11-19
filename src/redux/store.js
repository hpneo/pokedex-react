import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
// import { reducer as formReducer } from 'redux-form';

import pokemonsReducer, { epic as pokemonsEpic } from './ducks/pokemons';
import pokemonReducer, { epic as pokemonEpic } from './ducks/pokemon';

const rootReducer = combineReducers({
  // form: formReducer,
  pokemons: pokemonsReducer,
  pokemon: pokemonReducer,
});

const rootEpic = combineEpics(
  pokemonsEpic,
  pokemonEpic
);

export default createStore(
  rootReducer,
  compose(
    applyMiddleware(
      createEpicMiddleware(rootEpic)
    )
  )
);
