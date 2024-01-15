import React from 'react'
import { LuMoveRight } from "react-icons/lu";
import {motion} from 'framer-motion'
import { fadeIn } from '../../Variants';
const Advertisement = () => {

          const contacts =[
            {title:"Nevia body border", des:"get soft body and good smell", img:"./crem.png"},
            {title:"Doll baby", des:" give your baby happy ", img:"./doll.png"},
            {title:"Iphone 15 pro max", des:"pest phone in apple market", img:"./iphone1.png",size:"true"},
            {title:"Iphone 15 pro max", des:"pest phone in apple market", img:"./iphone1.png",size:"true"},
          ]


  return (
    <div     className='w-full  mt-11 px-4'>
        <div className='flex items-center justify-between mb-11'>
            <h1 className='font-semibold'>See categatories</h1>
            <h1 className='flex items-center gap-3 cursor-pointer font-semibold hover:text-[#aaaaab] duration-300  '> All gategories <span className=' text-2xl '><LuMoveRight /></span> </h1>
        </div>
        <motion.div
           
    variants={fadeIn("down",0.4)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once:false,amount:0.5}}
        className='   resCards w-[100%] flex items-center justify-between gap-3'>           
         
           {contacts.map((item,i)=>(
            <div key={i} className='bg-[#F2F3F5] resContact  relative w-[25%] h-[70vh] flex flex-col justify-center  items-center     rounded-md'>
            <img className={`   w-[250px]  `} src={item.img}  alt="" />
            <div className='contact w-[100%] h-[100%] rounded-md absolute bg-[rgba(0,0,0,0.53)] flex items-center justify-center flex-col opacity-0 duration-500 hover:opacity-100'>
            <div className=' flex flex-col items-center justify-center gap-2 '>
            <p className=' relative  text-[#f2f3f5]'>{item.des}</p>
            <h1 className=' relative font-bold text-[#d3d6d1] '> {item.title} </h1>
            <button className='relative rounded-md  px-8 py-1 text-white hover:bg-[#aaaaab] duration-300 border '> see </button>
            </div>
          </div>
    </div>

           ))}

        </motion.div>
        <div >

        </div>
    </div>
  )
}

export default Advertisement