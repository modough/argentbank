import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const hostname = "http://localhost:3001";

export const userData = createAsyncThunk('userData', async (userInfos) => {
    const request = await axios.post(`${hostname}/api/v1/user/login`, userInfos);
    console.log(request)
    const response = await request.data;
    localStorage.setItem('user/LoginUser', JSON.stringify(response));
    return response;

})