{
  /* header
          hero png
          content
          footer */
}

import React from 'react'
import Hero from './Hero'
import AboutMe from './AboutMe';

const Home = () => {
  return (
    <>
      <div className='mt-8'>
        <Hero/>
        <AboutMe></AboutMe>
        
      </div>
    </>
  );
}

export default Home
