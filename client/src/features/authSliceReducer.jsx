import { createSlice } from "@reduxjs/toolkit";
import { userData, updateUserData, createAccountData } from "./fetchData";


const initialState = {
    token: null,
    firstName: null,
    lastName: null,
    id: null,
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        createUser: (createAccountData, (state, action) => {
            state.firstName = action.payload.body.firstName
            state.lastName = action.payload.body.lastName
            state.id = action.payload.body._id

        }),
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
                state.token = action.payload.body.token
                state.firstName = action.payload.body.firstName
                state.lastName = action.payload.body.lastName
                state.id = action.payload.body.Id
            })
            .addCase(userData.rejected, (state) => {
                state.token = null;
                state.firstName = null;
                state.lastName = null;
            })
    }
})
export const { createUser, logout, updateUser } = authSlice.actions
export default authSlice.reducer