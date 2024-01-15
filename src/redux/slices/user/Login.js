import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios,{AxiosError} from "axios";
import {API} from '../../Api'

//initailState

const initialState ={
    isLoading:false,
    isSuccess:false,
    isError:false,
    data:{},
    errorMess:""
}

//create register api and function

export const loginFn = createAsyncThunk("user/login", async(data,{rejectWithValue})=>{
    try {
        
     const newUser = await axios.post(`${API}/user/login`,data)
     return newUser.data

    } catch (error) {
        if(error, AxiosError){
            return rejectWithValue(error.response?.data.message || "Server Error")

        }
        return rejectWithValue("Server Error")
    }
})

//register Slice create

export const loginSlice = createSlice({
    name:"user/login",
    reducers:{
        resetLogin: ()=>initialState
    },
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(loginFn.pending,()=>({
            ...initialState,
            isLoading:true
        }))
        builder.addCase(loginFn.fulfilled,(_,action)=>({
            ...initialState,
            isSuccess:true,
            data: action.payload
        }))
        builder.addCase(loginFn.rejected,(_,action)=>({
            initialState,
            isError:true,
            errorMess: String(action.payload)
        }))
    }
})

//export

export const {resetLogin} = loginSlice.actions