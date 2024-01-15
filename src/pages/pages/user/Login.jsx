// import React, { useEffect, useState } from 'react'
// import toast from 'react-hot-toast'
// import { useDispatch, useSelector } from 'react-redux'
// import { Link, useNavigate } from 'react-router-dom'
// import { loginFn, resetLogin } from '../../../redux/slices/user/Login'
// import { setUser } from '../../../redux/slices/user/userInfo'

// const Login = () => {

//   //get store Slice

//   const login = useSelector((state)=>state.login)

//   //create Dispatch 

//   const dispatch = useDispatch()

//   //create Navigate

//   const navigate = useNavigate()

//   //create States

//   const [email,setEmail] = useState('')
//   const [password,setPassword] =useState('')

//   // create ToastId

//   const toastId = "toastlogin"

//   //make handleSubmit function

//   const handleSubmit = (e)=>{
//     e.preventDefault()

//     const data ={
//       email,
//       password
//     }

//     toast.loading('loading...',{id:toastId})
//     dispatch(loginFn(data))

//   }

//   useEffect(()=>{
  
//     if(login.isSuccess){
//       toast.success("login Success",{id:toastId})
//       const {Role,fullname,email,token}= login.data.result
//       dispatch(setUser({Role,fullname,email,token}))
//       navigate('/')
//     }

//     if(login.isError){
//       toast.error(login.errorMess,{id:toastId})
//     }

//     dispatch(resetLogin())

//   },[login.isSuccess,login.isError])

//   useEffect(()=>{
     
//     if(localStorage.getItem('userinfo')){
//       navigate('/')
//     }

//   },[])


//   return (
//     <div className="bg-[rgb(242,243,245)] flex justify-center items-center w-full h-[100vh] ">
//       <div className="flex  loginRes bg-white w-[80%] h-[80vh] justify-around ">
//         <div className=" flex flex-col items-center homeAnim  w-[40%] mt-8 ">
//           <div className="w-full flex flex-col ">
//             <div className="flex flex-col items-center gap-5">
//               <h1 className=" cursor-pointer font-bold text-2xl">
//                 {' '}
//                 Hell<span className="text-[#aaaaab] text-3xl underline">
//                   o
//                 </span>{' '}
//               </h1>
//               <p className="text-2xl font-bold">Welcome Back</p>
//             </div>

//             <form onSubmit={handleSubmit} className=" formRes flex flex-col gap-2 top-11 relative left-10 items-center ">
//               <div className="w-full">
//                 <input
//                   className="border-2 focus-within:border-2 duration-300  px-2 py-2 w-[80%] focus-within:border-[#f2f3f5] outline-none  "
//                   type="text"
//                   placeholder="Your Email"

//                   value={email}
//                   onChange={e=>setEmail(e.target.value)}

//                 />
//               </div>
//               <div className="w-full">
//                 <input
//                   className="border-2 focus-within:border-2 duration-300  px-2 py-2 w-[80%] focus-within:border-[#f2f3f5]  outline-none "
//                   type="password"
//                   placeholder=" Your Password "

//                   value={password}
//                   onChange={e=>setPassword(e.target.value)}

//                 />
//               </div>
//               <div>
//                 <button className="btnRes rounded-md px-[9rem] top-10 relative -left-10 text-white py-2 bg-[#B2AAAB]">
//                   Login
//                 </button>
//               </div>
//               <div>
//                 <Link to={'/register'}>
//                   {' '}
//                   <p className=" pagRes text-[#B2AAAB] hover:underline relative top-20 cursor-pointer -left-10 ">
//                     {' '}
//                     i don't have Account{' '}
//                   </p>
//                 </Link>
//               </div>
//             </form>
//           </div>
//         </div>
//         <div className="w-[44%] mt-8 IMGanimation px-11">
//           <div className="flex w-full flex-col items-end">
//             <h1 className="text-[#B2AAAB] ">New Update Available</h1>
//             <img className="w-[500px] mt-5" src="./login.jpg" alt="" />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Login
