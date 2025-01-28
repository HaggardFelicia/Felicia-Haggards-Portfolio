import React from 'react'
import Fullsail from '../../assets/Fullsail.jpg'
import Marion from '../../assets/Marion.jpg'
import Image from 'next/image'

export default function page() {
  return (
    <div>
        {/* Greeting Section */}
        <h1 className='responsive-special-text'>About</h1>

        {/* Short Intro */}
        <p className='responsive-p-text margin4rem indent-8'>My name is <span className='responsive-name'>Felicia Haggard!</span> My journey into web development began with a high school introduction to HTML. With an Associate of Science in Web Development from Full Sail University, I have honed my skills in front-end technologies, including React.js, TypeScript, and CSS. One of the pivotal moments in my college career was developing an application that adhered to WCAG guidelines, showcasing my commitment to inclusive design. Let&apos;s connect and create something extraordinary together.</p>

        {/* School Info */}

        {/* Marion Co High School */}
        <div className="border">
          <div className='school-text-div'>
            <h2 className='school-text-title'>Marion Co High School</h2>
            <p className="school-grad-date">May 25, 2013</p>
          </div>
          <div className=''>
            <Image src={Marion} alt="Marion County High School"  className='school-image' />
          </div>
        </div>
        {/* Full Sail UNiversity */}
        <div className="border">
          <div className=''>
            <Image src={Fullsail} alt="Full Sail University Logo"  className='school-image' />
          </div>
          <div className='school-text-div'>
            <h2 className='school-text-title'>Full Sail University</h2>
            <p className='responsive-p-text'>Associate of Science in Web Development</p>
            <p className="school-grad-date">April 05, 2024</p>
          </div>
        </div>
    </div>
  )
}
