import { createSlice } from "@reduxjs/toolkit";
import { userData } from "./fetchData";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
        error: null,
        loading: false,
        firstName: null,
        lastName: null,

    },
    reducers: {
        logout: (state) => {
            state.firstName = null;
            state.token = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(userData.pending, (state) => {
                state.loading = true;
                state.token = null;
                state.error = null
            })
            .addCase(userData.fulfilled, (state, action) => {
                console.log(action)
                state.loading = false
                state.token = action.payload.body.token
                state.error = null
                state.firstName = action.payload.body.firstName
                state.lastName = action.payload.body.lastName
            })
            .addCase(userData.rejected, (state, action) => {
                state.loading = false
                state.token = null;

                if (action.error.message === 'Request failed with status code 400') {
                    state.error = 'Access denied ! , Invalid Credentials';
                } else {
                    state.error = action.error.message
                }
            })
    }
})
export const { logout } = authSlice.actions
export default authSlice.reducer