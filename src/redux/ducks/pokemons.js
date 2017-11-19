import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

// Actions

const FETCH = 'pokemons/FETCH';
const FETCH_SUCCESS = 'pokemons/FETCH_SUCCESS';

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

export const fetchPokemons = () => (
  {
    type: FETCH,
  }
);

export const fetchPokemonsSuccess = data => (
  {
    type: FETCH_SUCCESS,
    data,
  }
);

// Epics

export const epic = action$ =>
  action$.ofType(FETCH)
    .mergeMap(() => {
      const promise = fetch('https://pokeapi.co/api/v2/pokemon/')
        .then(response => response.json());

      return Observable.fromPromise(promise)
        .map(fetchPokemonsSuccess);
    })

// Selectors

export const selectPokemons = state => state.pokemons.info;
export const selectPokemonsStatus = state => state.pokemons.fetching;