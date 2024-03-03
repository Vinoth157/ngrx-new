import { studentState } from './../student/store/student.store';
import { counterReducer } from '../counter/store/counter.reducer';
import { CounterState } from '../counter/store/counter.state';
import { employeesReducer } from '../employees/store/employees.reducer';
import { employeeState } from '../employees/store/employees.store';
import { usersReducer } from '../users/store/users.reducer';
import { usersState } from '../users/store/users.state';
import { studentReducer } from '../student/store/student.reducer';

export interface AppState {
  counter: CounterState;
  users: usersState;
  employees: employeeState;
  students: studentState;
}

export const appReducer = {
  counter: counterReducer,
  users: usersReducer,
  employees: employeesReducer,
  students: studentReducer,
};
