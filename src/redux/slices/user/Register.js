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

export const registerFn = createAsyncThunk("user/new", async(data,{rejectWithValue})=>{
    try {
        
     const newUser = await axios.post(`${API}/user/new`,data)
     return newUser.data

    } catch (error) {
        if(error, AxiosError){
            return rejectWithValue(error.response?.data.message || "Server Error")

        }
        return rejectWithValue("Server Error")
    }
})

//register Slice create

export const registerSlice = createSlice({
    name:"register/user",
    reducers:{
        resetRegister: ()=>initialState
    },
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(registerFn.pending,()=>({
            ...initialState,
            isLoading:true
        }))
        builder.addCase(registerFn.fulfilled,(_,action)=>({
            ...initialState,
            isSuccess:true,
            data: action.payload
        }))
        builder.addCase(registerFn.rejected,(_,action)=>({
            initialState,
            isError:true,
            errorMess: String(action.payload)
        }))
    }
})

//export

export const {resetRegister} = registerSlice.actions