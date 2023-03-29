import { createSlice } from "@reduxjs/toolkit";
//reducers
const addUserToStore = (state, action) => {
  const newUser = action.payload.user;
  state.users = state.users.concat(newUser)
};
const deleteUserFromStore = (state, action) => {
  const userId = action.payload.user.id;
  state.users = state.users.filter((user) => user.id !== userId);
};
const updateUserById = (state, action) => {
  const newUserDetails = action.payload.user;
  const currentUsers = state.users;
  const updatableUserIndex = currentUsers.findIndex(
    user => user.id === newUserDetails.id
  );
  currentUsers[updatableUserIndex] = newUserDetails;
  state.users = currentUsers;
};
const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
  },
  reducers: {
    addUser: addUserToStore,
    deleteuser: deleteUserFromStore,
    updateUser: updateUserById,
  },
});
export default usersSlice.reducer;
export const { addUser, deleteUser, updateUser } = usersSlice.actions;
export const usersSelector = state=> state.users.users
