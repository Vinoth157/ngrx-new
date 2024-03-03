import { createAction, props } from '@ngrx/store';

export const INCREMENT = createAction('increment');
export const DECREMENT = createAction('decrement');
export const CUSTOMINCREMENT = createAction(
  'customincrement',
  props<{ value: number }>()
);
export const CHANGEDESCRIPTION = createAction('changedescription');
