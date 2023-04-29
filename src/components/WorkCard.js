import "./WorkCardStyles.css";

import { NavLink } from "react-router-dom";

import React from 'react'

// The component takes in props (short for properties) as an argument, which is an object containing various properties of the project or work item such as imgsrc, title, text, and view.
// const WorkCard = (props) => {...code...} defines the WorkCard component as a functional component that takes in props as an argument.
const WorkCard = (props) => {
  return (
    <div className="project-card">
                <img src={props.imgsrc} alt="thumb1"></img>
                <h1 className="project-title">{props.title}</h1>
                <div className="pro-details">
                    <p>{props.text}</p>
                    <div className="pro-btns">
                        <NavLink to={props.view} className="btn">Enroll</NavLink>
                    </div>
                </div>
            </div>
  );
}

export default WorkCard