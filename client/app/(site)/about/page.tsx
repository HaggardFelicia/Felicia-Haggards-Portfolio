import React from 'react'
import Fullsail from '../../assets/Fullsail.jpg'
import Marion from '../../assets/Marion.jpg'
import Warrior from '../../assets/warrior.jpg'
import MCHS from '../../assets/mchs.jpg'
import Image from 'next/image'

export default function page() {
  return (
    <div>
        {/* Greeting Section */}
        <h1 className='responsive-special-text'>About</h1>

        {/* Short Intro */}
        <p className='responsive-p-text margin4rem text-rose indent-10'>My name is <span className='responsive-name'>Felicia Haggard!</span>  I am a Full Stack Web Developer. My love of programming started at Marion County High School. I went to Full Sail University where I was taught the MERN stack. I currently use React, JavaScript, TypeScript, Tailwind CSS, Sanity, and Next.</p>

        {/* School Info */}

        {/* Marion Co High School */}
        <div className="marion-school-border border">
          <div className='marion-school-text-div school-text-div'>
            <h2 className='marion-school-text-title school-text-title'>Marion County High School</h2>
            <p className="marion-school-grad-date school-grad-date">May 25, 2013</p>
          </div>
          <div className=''>
            <Image src={Marion} alt="Marion County High School"  className='school-image' />
          </div>
        </div>
        {/* Full Sail UNiversity */}
        <div className="Fullsail-school-border border">
          <div className=''>
            <Image src={Fullsail} alt="Full Sail University Logo"  className='school-image' />
          </div>
          <div className='Fullsail-school-text-div school-text-div'>
            <h2 className='Fullsail-school-text-title school-text-title'>Full Sail University</h2>
            <p className='responsive-p-text Fullsail-school-p-text '>Associate of Science in Web Development</p>
            <p className="Fullsail-school-grad-date school-grad-date">April 05, 2024</p>
          </div>
        </div>
    </div>
  )
}
