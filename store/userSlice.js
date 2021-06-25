import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const response = await fetch("http://localhost:3000/api/user");
  const user = await response.json();
  return user;
});

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  const response = await fetch("http://localhost:3000/api/users");
  const user = await response.json();
  return user;
});

const initialState = {
  user: {},
  users:[],
  loading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export default userSlice.reducer;
