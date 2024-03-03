import { createFeatureSelector, createSelector } from '@ngrx/store';
import { studentState } from './student.store';

const studentFeatureSelector = createFeatureSelector<studentState>('students');

export const studentSelector = createSelector(
  studentFeatureSelector,
  (state) => {
    return state.students;
  }
);
