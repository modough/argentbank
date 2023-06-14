import { createSlice } from "@reduxjs/toolkit";
import { userData, updateUserData, createAccountData } from "./fetchData";


const initialState = {
    token: null,
    error: null,
    loading: false,
    firstName: null,
    lastName: null,
    id: null,
    success: null,
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: () => {
            return initialState
        },
        updateUser: (updateUserData, (state, action) => {
            console.log(action)
            state.firstName = action.payload.updateFirstName
            state.lastName = action.payload.updateLastName
            state.token = action.payload.token
        })
    },
    extraReducers: (builder) => {
        builder
            .addCase(userData.fulfilled, (state, action) => {
                console.log(action)
                state.loading = true
                state.token = action.payload.body.token
                state.error = null
                state.firstName = action.payload.body.firstName
                state.lastName = action.payload.body.lastName
                state.id = action.payload.body.Id
            })
            .addCase(userData.rejected, (state, action) => {
                state.loading = false
                state.token = null;
                state.firstName;
                state.lastName;
                if (action.error.message === 'Request failed with status code 400') {
                    state.error = 'Access denied !, Invalid Credentials';
                } else {
                    state.error = action.error.message
                }
            })
            .addCase(createAccountData.fulfilled, (state, action) => {
                state.loading = true
                state.error = null
                if (action.payload.message === "User successfully created") {
                    state.success = 'Account successfully created ! You may return to Sign In page !'
                }
            })
            .addCase(createAccountData.rejected, (state) => {
                state.loading = false
                state.error = 'Access denied !, Invalid Credentials'
            })
    }
})
export const { logout, updateUser } = authSlice.actions
export default authSlice.reducer