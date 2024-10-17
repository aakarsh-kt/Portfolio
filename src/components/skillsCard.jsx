import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import StackIcon from 'tech-stack-icons';
import chessLottie1 from "../assets/chess1.json";
import chessLottie2 from "../assets/chess2.json";
import chessLottie3 from "../assets/chess3.json";
import { useLottie } from 'lottie-react';
const SkillsCard = (props) => {
  const controls = useAnimation();  // Controls for triggering animations
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  
  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        scale: 1,
        rotate: 360,
        transition: { duration: 1, ease: 'easeInOut' }
      });
     
    }
  }, [controls, inView]);
  const style = {
    height: "100px",
  };
  
  const Example2 = () => {
    const options = {
      animationData: chessLottie2,
      loop: true,
      autoplay: true,
    };
  
    const { View } = useLottie(options,style);
  
    return View;
  };
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5, rotate: 0 }} // Start hidden and small
      animate={controls}
      className="bg-slate-600 shadow-lg p-6 rounded-lg cursor-pointer"
    //   whileHover={{ scale: 1.1  }}
      
    //   whileTap={{ scale: 1, rotate: 360 }}
      style={{ width: '300px' }} // Example dimensions for the card
    >
      <div className="flex flex-col justify-center items-center">
        <h2 className='text-2xl font-bold text-yellow-400'>{props.title}</h2>

        <p>{props.description}</p>
      { props.title==="Chess Platform" && <button className='bg-green-500 m-2 p-2 rounded-md'
      onClick={()=>{window.open(props.game)}}
      >Play a Game</button>}
        {/* {props.title==="Chess Platform"?<Example2 style={{width:"80px",height:"80px",marginLeft:"auto"}}/>:null} */}
        <div  onClick={
          ()=>{window.open(props.link)}
        }>
        <StackIcon name="github" style={{width:"50px",height:"50px"}}/>
        </div>
        {/* <StackIcon name={props.icon} />  */}
      </div>
    </motion.div>
  );
};

export default SkillsCard;
