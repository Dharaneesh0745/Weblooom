import "./WorkCardStyles.css";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";

import React from 'react';

// The imgsrc, title, text, and view properties of the current object are passed to the WorkCard component as props.

const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Courses</h1>
        <div className="project-container">
            {WorkCardData.map((val, ind) => {
                return(
                    <WorkCard 
                    key = {ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                    ></WorkCard>
                );
            })}
        </div>
    </div>
  )
}

export default Work;