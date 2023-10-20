import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: {
    username: null, // Change 'username' to the actual field representing the username
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = { username: null };
    },
    setUsername: (state, action) => {
      state.user.username = action.payload;
    },
  },
});

export const { login, logout, setUsername } = authSlice.actions;
export const selectAuth = (state: { auth: any; }) => state.auth;
export default authSlice.reducer;
