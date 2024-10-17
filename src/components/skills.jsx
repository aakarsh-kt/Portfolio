import React, { useEffect, useRef, useState } from "react";
import Card from "./card";
import { motion } from "framer-motion";
import skills from "./skills.json";
import SkillsCard from "./skillsCard";
export default function Skills(props) {
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
    ref={elementRef}
      style={{
        opacity,
        transition: 'opacity 0.6s ease', // Smooth fade-out effect
        position: 'relative',
        zIndex: 1,
      }}
    className="flex flex-col justify-center items-center m-2 p-2 rounded-md  text-white">
      <h1 className="text-4xl font-bold">Skills</h1>
      <div className="flex flex-row gap-10">
        {skills.skills.map((skill) => (
          <SkillsCard
            key={skill.title}
            title={skill.title}
            description={skill.description}
            icon={skill.icon}
          />
        ))}
        
      </div>
    </motion.div>
  );
}