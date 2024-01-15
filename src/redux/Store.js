import {configureStore} from '@reduxjs/toolkit'
import { allcateSlice } from './slices/category/Allcategory'
import { registerSlice } from './slices/user/Register'
import { loginSlice } from './slices/user/Login'
import { userinfoSlice } from './slices/user/userInfo'

const Store = configureStore({
    reducer:{
        register: registerSlice.reducer,
        login:loginSlice.reducer ,
        userinfo: userinfoSlice.reducer,
        allcategory: allcateSlice.reducer
    }
})

export default Store