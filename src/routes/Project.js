// The 3rd line imports the React library, which is required for creating and rendering React components.

// The next three lines import three custom components defined in other files: Navbar, HeroImg2, and Work. 
// These components are used within the Project component.

import React from 'react';


// The Navbar component renders a navigation bar, which may contain links to other pages in the application.
import Navbar from '../components/Navbar';

// The HeroImg2 component renders an image with a heading and text. 
import HeroImg2 from '../components/HeroImg2';

// The Work component is rendered after the HeroImg2 component.
import Work from '../components/Work';

const Project = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroImg2 heading="Webloom provides," text="free courses."></HeroImg2>
      <Work></Work>
    </div>
  )
}

export default Project;