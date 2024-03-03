export interface employeeState {
  employees: employee[];
}

export interface employee {
  id: number;
  name: string;
  experience: number;
}

export const initialState = {
  employees: [
    { id: 1, name: 'vinoth', experience: 8 },
    { id: 2, name: 'hari', experience: 3 },
  ],
};
