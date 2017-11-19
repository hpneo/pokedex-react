import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

// Actions

const FETCH = 'pokemon/FETCH';
const FETCH_SUCCESS = 'pokemon/FETCH_SUCCESS';

// Reducer

const initialState = {
  info: null,
  fetching: true,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH:
      return {
        ...state,
        fetching: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        info: action.data,
        fetching: false,
      };
    default:
      return state;
  }
}

// Action creators

export const fetchPokemon = (idOrName) => (
  {
    type: FETCH,
    payload: idOrName,
  }
);

export const fetchPokemonSuccess = data => (
  {
    type: FETCH_SUCCESS,
    data,
  }
);

// Epics

export const epic = action$ =>
  action$.ofType(FETCH)
    .mergeMap((action) => {
      const basePromise = fetch(`https://pokeapi.co/api/v2/pokemon/${action.payload}`)
        .then(response => response.json());

      const pokedexPromise = fetch(`https://pokeapi.co/api/v2/pokemon-species/${action.payload}`)
        .then(response => response.json());

      const promise = Promise.all([basePromise, pokedexPromise])
        .then(data => (
          {
            ...data[0],
            ...data[1],
          }
        ));

      return Observable.fromPromise(promise)
        .map(fetchPokemonSuccess);
    })

// Selectors

export const selectPokemon = state => state.pokemon.info;
export const selectPokemonStatus = state => state.pokemon.fetching;