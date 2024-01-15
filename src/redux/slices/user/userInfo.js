import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem('userinfo') ? JSON.parse(localStorage.getItem('userinfo')):{
    "fullname" : "",
     "Role" : "",
     "token":"",
     "email":""
}

export const userinfoSlice = createSlice({
    name:"userinfo",
    reducers: {
        setUser : (state,action)=>{
            state.fullname =action.payload.fullname,
            state.email = action.payload.email,
            state.Role = action.payload.Role,
            state.token = action.payload.token,
            state.email = action.payload.email,

            localStorage.setItem('userinfo',JSON.stringify(state))
        },

        logOut : (state)=>{
            state.fullname = "",
            state.email = "",
            state.Role = "",
            state.token ="",

            localStorage.removeItem('userinfo')
        },
        
    },
    initialState
})

export const {logOut,setUser} = userinfoSlice.actions