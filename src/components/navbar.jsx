import React,{useState,useEffect} from "react"; 
import {motion} from "framer-motion";
import { useLottie } from "lottie-react";
import lottie1 from "../assets/lottie1.json";
import lottie2 from "../assets/lottieProfile.json";
const Navbar = () => {
  const style = {
    height: "100px",
  };
  
  const Example = () => {
    const options = {
      animationData: lottie1,
      loop: true,
      autoplay: true,
    };
  
    const { View } = useLottie(options,style);
  
    return View;
  };
  const Example2 = () => {
    const options = {
      animationData: lottie2,
      loop: true,
      autoplay: true,
    };
  
    const { View } = useLottie(options,style);
  
    return View;
  };
  return (
   
      <motion.div className="items-center"
      initial={{opacity:0,scale:1}}
      animate={{opacity:1,scale:1}}
      transition={{duration: 2}} 

      style={{
        // backgroundColor: 'black',
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
               
      }}             
      >   
        <ul className="flex w-screen  flex-row justify-around items-center  "
       
       >
         <Example  style={{width:"80px",height:"80px",marginLeft:"auto"}}/>
            <motion.li whileHover={{scale:1.35,cursor:"pointer"}}>About</motion.li>
            <motion.li whileHover={{scale:1.35,cursor:"pointer"}}>Resume</motion.li>
            <motion.li whileHover={{scale:1.35,cursor:"pointer"}}>Projects</motion.li>
         <Example2  style={{width:"80px",height:"80px",marginLeft:"auto"}}/>
        </ul>
      </motion.div>
   
  )
}

export default Navbar;