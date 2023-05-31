import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const hostname = "http://localhost:3001";

export const userData = createAsyncThunk('userData', async (userInfos) => {
    const request = await axios.post(`${hostname}/api/v1/user/login`, userInfos);
    console.log(request)
    const response = await request.data;
    return response;
})

export const updateUserData = createAsyncThunk('updateUserData', async (updateInfos) => {
    const { token, updateFirstName, updateLastName } = updateInfos
    let data = JSON.stringify({
        "firstName": updateFirstName,
        "lastName": updateLastName,
    });
    let config = {
        method: 'put',
        maxBodyLength: Infinity,
        url: 'http://localhost:3001/api/v1/user/profile',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        data: data
    };
    await axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error);
        });
})
