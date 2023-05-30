import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const hostname = "http://localhost:3001";

export const userData = createAsyncThunk('userData', async (userInfos) => {
    const request = await axios.post(`${hostname}/api/v1/user/login`, userInfos);
    console.log(request)
    const response = await request.data;
    return response;
})

export const updateUserData = createAsyncThunk('updateUserData', async (firstName, lastName, token) => {
    if (token) {
        const request = await axios.put(
            `${hostname}/api/v1/user/profile`,
            {
                firstName, lastName
            },
            {
                contentType: 'application/json'
            },
            {
                headers: { authorization: `Bearer ${token}` }
            },
            { body: JSON.stringify({ firstName: firstName, lastName: lastName }) }

        );
        console.log(request)
        const response = await request.data;
        return response;
    }
})
