import { Action, createReducer, on } from '@ngrx/store';
import { USERACTION } from './users.action';
import { initialState, usersState } from './users.state';

const _usersReducer = createReducer(
  initialState,
  on(USERACTION, (state) => {
    return {
      ...state,
    };
  })
);

export function usersReducer(state: usersState | undefined, action: Action) {
  return _usersReducer(state, action);
}
