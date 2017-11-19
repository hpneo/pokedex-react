// Actions

const INCREMENT = 'INCREMENT';
const CHANGE_TIME = 'CHANGE_TIME';

// Reducer

const initialState = {
  count: 10,
  time: Date.now(),
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case CHANGE_TIME:
      return {
        ...state,
        time: Date.now(),
      };
    default:
      return state;
  }
}

// Action creators

export const increment = () => (
  {
    type: INCREMENT,
  }
);

export const changeTime = () => (
  {
    type: CHANGE_TIME,
  }
);

// Selectors

export const selectCount = state => state.increment.count;
export const selectTime = state => state.increment.time;