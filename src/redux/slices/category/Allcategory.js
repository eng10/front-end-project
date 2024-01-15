import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios'
import { API } from '../../Api'

//initialState

const initialState={
    isLoading: false,
    isSuccess : false,
    isError : false,
    errMess : "",
    data:[]
}

//Get API

export const allCateFn = createAsyncThunk("category/all",async(_,{rejectWithValue})=>{
    try {
        
        const all = await axios.get(`${API}/cate/all`)
        return all.data.result

    } catch (error) {
        if(error ,AxiosError){
            return rejectWithValue(error.response?.data.message || "Server Down!")
        }
        return rejectWithValue("server Down")
    }
})

//create Slice

export const allcateSlice = createSlice({
    name:"allcate",
    reducers:{},
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(allCateFn.pending,()=>({
            ...initialState,
            isLoading:true
        }))
        builder.addCase(allCateFn.fulfilled,(_,action)=>({
            ...initialState,
            isSuccess:true,
            data: action.payload
        }))
        builder.addCase(allCateFn.rejected,(_,action)=>({
            ...initialState,
            isError:true,
            errMess: String(action.payload)

        }))
    }
})