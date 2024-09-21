import { createSlice } from "@reduxjs/toolkit";

export const userDetailSlice = createSlice({
    name: "userDetailList",
    initialState: {
    userLoginDetails: {
    email: '',
    password: '',
  },
        userInfo: [],
    adminInfo:[],
    },
    reducers: {
        userLogin: (state, action) => {
            state.userLoginDetails=action.payload;
        },
        // client
        addClient: (state, action) => {
            state.userInfo.push(action.payload);
        },
        deleteClient: (state, action) => {
            state.userInfo = state.userInfo.filter(
                (client) => client?.id !== action.payload);
        },
        // admin
        addAdmin: (state, action) => {
            state.adminInfo.push(action.payload);
        },
        deleteAdmin: (state, action) => {
            state.adminInfo = state.adminInfo.filter(
            (admin) => admin?.id !== action.payload);
        },
    }
});
export const { userLogin,addAdmin,deleteAdmin,addClient,deleteClient } = userDetailSlice.actions;
export default userDetailSlice.reducer;