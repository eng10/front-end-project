import React from 'react'
import {motion} from 'framer-motion'
import { fadeIn } from '../../Variants'

const Center = () => {
  return (
    <div className='w-full h-[30vh] mt-8 flex items-center gap-10 bg-[#F8F3F0] rounded-md '>
       <div className='flex items-center justify-between w-full px-4'>
        <div>
            <div>
            <h1 className='text-bold '>Video Games </h1> 
             <p className='text-[#676565]'> Lorem ipsum dolor sit,Velit <br /> Velit laborum  enim magni  </p>
            </div>
        </div>
        <motion.div 
        
         
      variants={fadeIn("down",0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:false,amount:0.3}}
        
        > <img className=' w-[150px] ' src="./gamin.png" alt="" /> </motion.div>
       </div>
       <div className='flex items-center justify-between w-full px-4'>
        <div>
            <div>
            <h1 className='text-bold '>Gaming Video </h1> 
             <p className='text-[#676565]'> Lorem ipsum dolor sit, Velit <br />  laborum magni  </p>
            </div>
        </div>
        <motion.div 
        
        variants={fadeIn("up",0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false,amount:0.3}}
        
        > <img className=' w-[200px] ' src="./clock.png" alt="" /> </motion.div>
       </div>
    </div>
  )
}

export default Center