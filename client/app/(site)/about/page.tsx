import React from 'react'
import Fullsail from '../../assets/Fullsail.jpg'
import Image from 'next/image'

export default function page() {
  return (
    <div>
        {/* Greeting Section */}
        <h1 className='responsive-special-text'>About</h1>


        {/* Short Intro */}
        <p className='responsive-p-text margin4rem text-rose indent-10'>My name is <span className='responsive-name'>Felicia Haggard!</span>  I am a Full Stack Web Developer. I was taught the MERN stack at Full Sail University. I currently use React, TypeScript, Tailwind CSS, SASS, Sanity, and Next.</p>

        {/* School Info */}
        <div className="school-border">
          <div className=''>
            <Image src={Fullsail} alt="Full Sail University Logo"  className='school-image' />
          </div>
          <div className='school-text-div'>
            <h2 className='school-text-title'>Full Sail University</h2>
            <p className='responsive-p-text text-rose '>Associate of Science in Web Development</p>
            <p className="school-grad-date">April 05, 2024</p>
          </div>
        </div>
    </div>
  )
}
