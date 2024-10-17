import React from "react"; 
import StackIcon from "tech-stack-icons";
export default function Card(props) {
  return (
    <div className="flex flex-col justify-center items-center m-2 p-2 rounded-md shadow-md bg-red-400 text-white hover:bg-cyan-900 hover:2xl cursor-pointer">
  
      <div className="flex flex-col justify-center items-center">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <StackIcon name={props.icon} />
      </div>
    </div>
  );
}