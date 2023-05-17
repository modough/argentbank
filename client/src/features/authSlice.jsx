import { createSlice } from "@reduxjs/toolkit";
import { userData } from "./fetchData";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        error: null,
        loading: false,
        firstName: null,

    },
    extraReducers: (builder) => {
        builder
            .addCase(userData.pending, (state) => {
                state.loading = true;
                state.user = null;
                state.error = null
            })
            .addCase(userData.fulfilled, (state, action) => {
                console.log(action)
                state.loading = false
                state.user = action.payload
                state.error = null
                state.firstName = action.payload.body.firstName
            })
            .addCase(userData.rejected, (state, action) => {
                state.loading = false
                state.user = null;

                if (action.error.message === 'Request failed with status code 400') {
                    state.error = 'Access denied ! , Invalid Credentials';
                } else {
                    state.error = action.error.message
                }
            })
    }
})

export default authSlice.reducer