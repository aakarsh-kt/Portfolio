import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
export default function About() {
    const [opacity, setOpacity] = useState(1); // Opacity state for the element
    const elementRef = useRef(null); // Reference to the element
  
    useEffect(() => {
      const handleScroll = () => {
        const element = elementRef.current;
        const elementTop = element.getBoundingClientRect().top; // Get the element's position from the top of the viewport
  
        // If the element is within 100px of the top, start fading out
        if (elementTop <= 100) {
          const newOpacity = Math.max(0, 1 - (100 - elementTop) / 100); // Calculate opacity based on distance from 100px
          setOpacity(newOpacity); // Update opacity
        } else {
          setOpacity(1); // Reset opacity if it's above 100px
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
    <motion.div
    ref={elementRef} // Attach ref to this element
    style={{
      opacity,
      transition: 'opacity 0.5s ease', // Smooth transition for opacity
      position: 'relative',
      zIndex: 1,
    }}
    className="flex flex-row justify-between  items-center"
  >
    

     <motion.img src="/Profile.jpeg" 
    drag
    dragConstraints={{
      left: -50,
      right: 50,
      top: -50,
      bottom: 100,
    }}
    
    whileTap={{scale:0.9}}
    whileHover={{scale:1.1,cursor:"pointer",boxShadow:"0px 0px 10px salmon"}}
    height={200}
    width={200}
    alt="Profile"
    className="rounded-full m-2 shadow-md"
    /> 


    <div>
      <h1>Hello, I am Akarsh Katiyar, I am currently pursuing my Bachelors of Technology in Computer Science and Engineering from <a href="https://www.iitj.ac.in/"> Indian Institute of Technology, Jodhpur</a></h1>
    </div>
    
  </motion.div>
  );
}