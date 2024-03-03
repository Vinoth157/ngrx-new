import { Action, createReducer, on } from '@ngrx/store';
import {
  CHANGEDESCRIPTION,
  CUSTOMINCREMENT,
  DECREMENT,
  INCREMENT,
} from './counter.action';
import { CounterState, initialState } from './counter.state';

const _counterReducer = createReducer(
  initialState,
  on(INCREMENT, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(DECREMENT, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(CUSTOMINCREMENT, (state, action) => {
    return {
      ...state,
      counter: state.counter + action.value,
    };
  }),
  on(CHANGEDESCRIPTION, (state) => {
    return {
      ...state,
      description: 'changed description',
    };
  })
);

export function counterReducer(
  state: CounterState | undefined,
  action: Action
) {
  return _counterReducer(state, action);
}
