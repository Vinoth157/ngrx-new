import { createFeatureSelector, createSelector, props } from '@ngrx/store';
import { employeeState } from './employees.store';

const employeeFeatureState = createFeatureSelector<employeeState>('employees');

export const employeeSelector = createSelector(
  employeeFeatureState,
  (state) => {
    return state.employees;
  }
);

export const employeeOneSelector = createSelector(
  employeeFeatureState,
  (state: employeeState, props: any) => {
    return state.employees.find((employee) => {
      //   console.log(employee.id);
      employee.id === props.id;
    });
  }
);
