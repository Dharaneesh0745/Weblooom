import React from 'react'

import HeroImg2 from '../components/HeroImg2';
import Navbar from '../components/Navbar';
import Form from '../components/Form';

const Contact = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroImg2 heading="CONTACT US." text="DM for any enquires, we providing 24/7 service."></HeroImg2>
      <Form></Form>
    </div>
  ) 
}

export default Contact