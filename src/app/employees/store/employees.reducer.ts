import { Action, createReducer, on } from '@ngrx/store';
import { employeeAction, employeeAddAction } from './employees.action';
import { employeeState, initialState } from './employees.store';

const _employeesReducer = createReducer(
  initialState,
  on(employeeAction, (state) => {
    return {
      ...state,
    };
  }),
  on(employeeAddAction, (state, action) => {
    const employee = { ...action.employee };
    employee.id = state.employees.length + 1;
    return {
      ...state,
      employees: [...state.employees, employee],
    };
  })
);

export function employeesReducer(
  state: employeeState | undefined,
  action: Action
) {
  return _employeesReducer(state, action);
}
