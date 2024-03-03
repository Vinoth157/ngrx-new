export interface studentState {
  students: student[];
}
export interface student {
  id: number;
  name: string;
  age: number;
  department: string;
}

export const initialState = {
  students: [
    { id: 1, name: 'vinoth', age: 8, department: 'CS' },
    { id: 2, name: 'Niranjan', age: 2, department: 'DR' },
  ],
};
