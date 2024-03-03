import { employee } from './employees.store';
import { createAction, props } from '@ngrx/store';

const EMPLOYEE_ACTION = 'employeeAction';
const ADD_EMPLOYEE_ACTION = 'employeeAction';

export const employeeAction = createAction(EMPLOYEE_ACTION);

export const employeeAddAction = createAction(
  ADD_EMPLOYEE_ACTION,
  props<{ employee: employee }>()
);
