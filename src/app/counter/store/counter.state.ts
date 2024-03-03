export interface CounterState {
  counter: number;
  description: string;
}

export const initialState: CounterState = {
  counter: 0,
  description: 'Test Description',
};
