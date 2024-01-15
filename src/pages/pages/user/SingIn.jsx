import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import toast, { } from 'react-hot-toast'
import { registerFn, resetRegister } from '../../../redux/slices/user/Register'


const SingIn = () => {

  //get store Slice

  const register = useSelector((state)=>state.register)

  //create Dispatch 

  const dispatch = useDispatch()

  //create Navigate

  const navigate = useNavigate()

  //create States

  const [fullname,setFullname] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] =useState('')

  // create ToastId

  const toastId = "toastRegister"

  //make handleSubmit function

  const handleSubmit = (e)=>{
  e.preventDefault()

  const data = {
   fullname,
   email,
   password
  }

  toast.loading("waiting...",{id:toastId})  
  dispatch(registerFn(data))

  }

  //create Effect 

  useEffect(()=>{
  
    if(register.isSuccess){
      toast.success("registered",{id:toastId})
      navigate('/login')
    }

    if(register.isError){
      toast.error(register.errorMess,{id:toastId})
    }

    dispatch(resetRegister())

  },[register.isSuccess,register.isError])

  useEffect(()=>{
     
    if(localStorage.getItem('userinfo')){
      navigate('/')
    }

  },[])


  return (
    <div className="bg-[rgb(242,243,245)]  flex justify-center items-center w-full h-[100vh] ">
      <div className="flex   bg-white rigRes w-[80%] h-[80vh] justify-around ">
        <div className=" flex flex-col  items-center homeAnim  w-[40%] mt-8 ">
          <div className="w-full flex flex-col ">
            <div className="flex flex-col items-center gap-5">
              <h1 className=" cursor-pointer font-bold text-2xl">
                {' '}
                Hell<span className="text-[#aaaaab] text-3xl underline">
                  o
                </span>{' '}
              </h1>
              <p className="text-2xl font-bold">
                Welcome to Hell
                <span className="text-[#aaaaab] underline text-[2rem] ">o</span>{' '}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex formRes w-full flex-col gap-2 top-6 relative left-10 items-center ">
              <div className="w-full">
                <input
                  className="border-2  px-2 py-2 w-[80%] duration-300 focus-within:border-[#f5f3f2] outline-none  "
                  type="text"
                  placeholder="Your Name"

                  value={fullname}
                  onChange={(e)=>setFullname(e.target.value)}

                />
              </div>
              
  
              <div className="w-full">
                <input
                  className="border-2  px-2 py-2 w-[80%] focus-within:border-[#f5f3f2] outline-none  "
                  type="text"
                  placeholder="Your Email"

                  value={email}
                  onChange={e=>setEmail(e.target.value)}

                />
              </div>
              <div className="w-full">
                <input
                  className="border-2  px-2 py-2 w-[80%] focus-within:border-[#f2f3f5] outline-none "
                  type="password"
                  placeholder=" Your Password "

                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}

                />
              </div>
              <div>
                <button className=" btnRes rounded-md px-[9rem] top-6 relative -left-10 text-white py-2 bg-[#B2AAAB]">
                  Reginter
                </button>
              </div>
             
                <Link to={'/login'}>
                  {' '}
                  <p className="pagRes text-[#B2AAAB] hover:underline duration-150 relative top-10 cursor-pointer -left-10 ">
                    {' '}
                    i have Account{' '}
                  </p>
                </Link>
           
            </form>
          </div>
        </div>
        <div className="w-[44%] mt-8 IMGanimation px-11">
          <div className="flex w-full flex-col items-end">
            <h1 className="text-[#B2AAAB] ">New Update Available</h1>
            <img className="w-[500px] mt-5" src="./login.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingIn
