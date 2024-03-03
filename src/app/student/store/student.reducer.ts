import { Action, createReducer, on } from '@ngrx/store';
import { initialState, studentState } from './student.store';
import { studentAction } from './student.action';

const _studentReducer = createReducer(
  initialState,
  on(studentAction, (state) => {
    return {
      ...state,
    };
  })
);

export function studentReducer(
  state: studentState | undefined,
  action: Action
) {
  return _studentReducer(state, action);
}
