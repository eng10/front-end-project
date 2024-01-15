import React, { useEffect, useState, useRef } from 'react'
import { BiCategory } from 'react-icons/bi'
import { BsCart3 } from 'react-icons/bs'
import { FaRegUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import { allCateFn } from '../../../redux/slices/category/Allcategory'
// import { LiaUserCircleSolid } from 'react-icons/lia'
import { RxDashboard } from 'react-icons/rx'
import { HiOutlineLogout } from 'react-icons/hi'
import { Dropdown, Space } from 'antd'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [show, setShow] = useState(false)

  const allcategory = [
    {type:"computers"},
  ]

  const userInfo = {email:"cabdullah",role:"Admim",fullname:"cabdullah"}
  const type = allcategory.map((cate) => cate.type)

  const handleLogout = () => {
    dispatch(logOut())
  }

  const dropdownRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShow(false)
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

 

  const items = [
    {
      key: '1',
      label: (
        <a
          target="_blank" className='  '
          rel="noopener noreferrer"
        >
          {type}
        </a>
      ),
    },
  ]

  return (
    <>
      <div className="w-full z-10 bg-white fixed h-12 px-8 flex justify-between items-center">
        <div className="flex items-center gap-10">
          <div>
            <Link to="/">
              <h1 className="cursor-pointer font-bold text-2xl">
                Hell<span className="text-[#aaaaab] text-3xl underline">O</span>
              </h1>
            </Link>
          </div>
          <div className="flex gap-3 ">
            <Dropdown
              menu={{
                items,
              }}
            >
              <Space>
                <span
                  onClick={(e) => e.preventDefault()}
                  className="text-2xl relative flex items-center cursor-pointer duration-500 text-black"
                >
                  <span className="hover:text-[#aaaaab]  duration-500">
                    <BiCategory />
                  </span>
                </span>
              </Space>
            </Dropdown>
            <button className="hover:text-[#aaaaab] duration-500 text-black">
             
              All
            </button>
          </div>

          <div className="flex gap-3">
            <button className="hover:text-[#aaaaab] duration-500 text-black">
              {' '}
              About{' '}
            </button>
            <button className="hover:text-[#aaaaab] duration-500 text-black">
              {' '}
              Contacts{' '}
            </button>
          </div>
        </div>

        {/* section two */}
        <div className="flex items-center gap-3">
          <div className="flex items-center ">
            <span className="hover:text-[#aaaaab] flex relative cursor-pointer text-2xl duration-500 text-black">
              <BsCart3 />
            </span>
          </div>
          <div ref={dropdownRef} className="">
            {userInfo.email ? (
              <>
                <span
                  onClick={() => setShow(!show)}
                  className={` relative  text-2xl duration-500 text-black  `}
                >
                  <span className="hover:text-[#aaaaab] duration-500 cursor-pointer">
                    {' '}
                    <FaRegUser />
                  </span>

                  {show && ( //mm
                    <>
                      <div
                        className={`absolute drop_down flex items-center shadow-md top-16 right-0 py-5  bg-white transition duration-500 rounded-md w-52 
             
              
              `}
                      >
                        <div className="flex flex-col  w-full transition items-center  duration-500">
                          <div>
                            <h1 className="w-10 h-10 rounded-full flex items-center justify-center text-3xl font-semibold bg-[#F8F3F0]">
                              {' '}
                              {userInfo.fullname[0]}{' '}
                            </h1>
                          </div>

                          <div className="mt-3">
                            <h1 className="text-[#787675] text-sm ">
                              {' '}
                              {userInfo.fullname}{' '}
                            </h1>
                          </div>

                          <hr className="text-black" />
                          <div className="flex flex-col w-full px-8">
                            {userInfo.role === 'ADMIN' && (
                              <div className=" mt-3 flex justify-between cursor-pointer">
                                <div className="text-xs"> Dashboard </div>
                                <div className="text-[1rem]">
                                  {' '}
                                  <RxDashboard />{' '}
                                </div>
                              </div>
                            )}

                            <div
                              onClick={handleLogout}
                              className=" mt-3 cursor-pointer flex justify-between "
                            >
                              <div className="text-xs"> LogOut </div>
                              <div className="text-[1.2rem]">
                                {' '}
                                <HiOutlineLogout />{' '}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </span>
              </>
            ) : (
              <Link to="/login">
                <span className="hover:text-[#aaaaab] cursor-pointer text-2xl duration-500 text-black">
                  <FaRegUser />
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
