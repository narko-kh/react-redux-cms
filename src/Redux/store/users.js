import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsersFromServer = createAsyncThunk(
  "Users/getUsersFromServer",
  async () => {
    return axios.get("http://localhost:3000/users").then((res) => res.data);
  }
);

export const removeUserFromServer = createAsyncThunk(
  "Users/removeUserFromServer",
  async (userId) => {
    axios
      .delete(`http://localhost:3000/users/${userId}`)
      .then((res) => res.data);
    return userId;
  }
);
export const registerUser = createAsyncThunk(
  "Users/registerUser",
  async ({title, userName, email, password}) => {
    return axios
      .post(`http://localhost:3000/users`, {
        title,
        userName,
        email,
        rule: "USER",
        password,
      })
      .then((res) => res.data);
  }
);

const userSlice = createSlice({
  name: "Users",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsersFromServer.fulfilled, (state, action) => {
      state.push([...action.payload]);
    });
    builder.addCase(removeUserFromServer.fulfilled, (state, action) => {
      let newUsers = [...state[0]].filter((user) => user.id !== action.payload);
      state[0] = newUsers;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state[0].push(action.payload);
    });
  },
});

export default userSlice.reducer;
