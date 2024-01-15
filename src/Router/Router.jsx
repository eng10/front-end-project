import React from 'react'
import Navbar from '../components/utils/navbar/Navbar'
import Footer from '../components/utils/footer/Footer'
import Home from '../pages/pages/home/Home'
import { createBrowserRouter,Outlet } from 'react-router-dom'
// import Login from '../pages/pages/user/Login'
// import SingIn from '../pages/pages/user/SingIn'
import Footers from '../components/utils/footer/Footer'

const Router = () => {
  return ( 
    <div className='flex flex-col min-h-screen   '>
        <div className=''> <Navbar/> </div>
        <div className='flex-grow webkitOutlet py-12 '> <Outlet/> </div>
        {/* <div> <Footers/> </div> */}
    </div>
  )
}

export default Router

export const router = createBrowserRouter([
    {
        path : '/',
        element: <Router/>,
        children:[
            {
                index : true,
                element: <Home/>
            },
            // {
            //     path: "login",
            //     element:<Login/>
            // },
            // {
            //     path:"register",
            //     element:<SingIn/>
            // }
        ]
    }
])
