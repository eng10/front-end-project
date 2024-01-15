import React, { useEffect } from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Advertisement from '../advertisement/Advertisement';
import Center from '../center/Center';

//motion
import {motion} from 'framer-motion'
//variants
import { fadeIn } from '../../Variants';





const Home = () => {


  return (
    <div className='w-full  px-4 scroll-element '>
      <div 
     
      
      className="flex responsiveHome items-center mt-5 rounded-md w-full h-[70vh] justify-between px-10 bg-[#f2f3f5] ">
          <motion.div
          
            
        variants={fadeIn("right",0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false,amount:0.7}}
          
          className='fontHome'>
          <h1 className='text-[3rem] font-bold'> SHOP COMPUTERS &  ACCESSORIES </h1>
          <p className=' text-2xl text-[#716e6e]'> shop laptops desktops mobiles PC  gaming and More </p>
          </motion.div>
          {/* IMages */}
          <div className="flex  flex-col items-center">
            <motion.div
            
             
          variants={fadeIn("left",0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false,amount:0.7}}

            className="flex imageHomes ">
            <div className='imageHome'>
              <img className='w-[200px] ' src="./headphone.png" alt="" />
            </div>
            <div className='imageHome'>
              <img className='w-[200px] IMGanimations' src="./labtop.png" alt="" />
            </div>
            </motion.div>
            {/* section two */}
              <motion.div 
              
               
            variants={fadeIn("up",0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false,amount:0.7}}

              className="flex cardsHome  gap-3 w-full h-14 ">
                <div className=" gap-2 flex items-center cursor-default bg-[#e3e4e6] rounded-md px-4  w-full">
                  <img className='w-10' src="./headphone.png" alt="" />
                  <p className='text-[#525354]'> Goog quant</p>
                </div>
                <div className=" gap-2 flex items-center cursor-default bg-[#e3e4e6] rounded-md px-4  w-full">
                  <img className='w-10' src="./labtop.png" alt="" />
                  <p className='text-[#525354]'> Good Price  </p>
                </div>
              </motion.div>
          </div>
      </div>

      {/* section two */}

      <div className="flex boxesRes  intems-center px-8 justify-between w-full  h-[20vh] bg-[#f2f3f5] mt-5 rounded-md ">
        
           <div className='flex items-center gap-2'>
            <img className='w-[200px]' src='./key1.png' alt="" />
            <h1> Keyboard Light <br /> & soft click </h1>
           </div>
           <div className='flex items-center  gap-2'>
            <img className='w-[100px]' src='./per.png' alt="" />
            <h1> perfume well smell <br /> attraction to people </h1>
           </div>
           <div className='flex items-center gap-2'>
            <img className='w-[100px]' src='./box.png' alt="" /> 
            <h1> Box watch gift <br /> happy nice </h1>
           </div>
           <div className='flex items-center gap-3'>
            <img className='w-20' src='./headphone.png' alt="" />
            <h1> 
              Headphone smart  <br />
              & so beautifull
            </h1>
           </div>
         
          
        
      </div>
  
    <Advertisement/>
    <Center/>
    </div>
  )
}

export default Home