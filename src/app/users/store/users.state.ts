export interface usersState {
  users: users[];
}

export interface users {
  name: string;
  designation: string;
}
export const initialState: usersState = {
  users: [
    { name: 'vinoth', designation: 'SE' },
    { name: 'dhivi', designation: 'SSE' },
  ],
};
