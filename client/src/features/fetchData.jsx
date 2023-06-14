import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const hostname = "http://localhost:3001";

export const userData = createAsyncThunk('userData', async (userInfos) => {
    const request = await axios.post(`${hostname}/api/v1/user/login`, userInfos);
    const response = await request.data;
    return response;
})

export const updateUserData = createAsyncThunk('updateUserData', async (updateInfos) => {
    const { token, updateFirstName, updateLastName } = updateInfos
    const data = JSON.stringify({
        "firstName": updateFirstName,
        "lastName": updateLastName,
    });
    const config = {
        method: 'put',
        url: `${hostname}/api/v1/user/profile`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        data: data
    };
    const request = await axios.request(config)
    const response = await request.data
    console.log(response)
    return response
})

export const createAccountData = createAsyncThunk('createAccount', async (createInfos) => {
    const { token, firstName, lastName, email, password } = createInfos
    const data = JSON.stringify({
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "password": password
    });
    const config = {
        method: 'post',
        url: `${hostname}/api/v1/user/signup`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        data: data
    };
    const request = await axios.request(config)
    const response = await request.data
    console.log(response)
    return response
})
