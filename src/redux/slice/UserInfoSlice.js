import { createSlice } from "@reduxjs/toolkit";

export const userDetailSlice = createSlice({
    name: "userDetailList",
    initialState: {
    userLoginDetails: {
    email: '',
    password: '',
  },
    userInfo: [],
    },
    reducers: {
        userLogin: (state, action) => {
            state.userLoginDetails=action.payload;
        },
        addClient: (state, action) => {
            state.userInfo.push = (action.payload);
        }
    }
});
export const { userLogin,addClient } = userDetailSlice.actions;
export default userDetailSlice.reducer;