import React from 'react'
import Fullsail from '../../assets/Fullsail.jpg'
import Image from 'next/image'

export default function page() {
  return (
    <div>
        {/* Greeting Section */}
        <h1 className='bg-gradient-to-b from-red-900  via-red-700 to-rose bg-clip-text text-transparent font-black text-6xl mb-6 drop-shadow tooltip heading-text'>Osiyo!
            <span className='tooltiptext text-base text-rose bg-blue-950 p-1 ml-3 justify-center my-auto p-text'>Osiyo means hello in the Tsalagi (Cherokee) language</span></h1>


        {/* Short Intro */}
        <p className='text-2xl font-bold text-rose p-text my-[3rem]'>My name is <span>Felicia Haggard</span>! I am a Full Stack Web Developer. I was taught the MERN stack at Full Sail. I currently use React, TypeScript, SASS, Sanity, and Next.</p>

        {/* School Info */}
        <div className="border-2 border-gray rounded-xl p-1 flex justify-between bg-blue-950">
          <div className=''>
            <Image src={Fullsail} alt="Full Sail University Logo" width={300} height={300} className='rounded-lg' />
          </div>
          <div className='text-right py-10'>
            <h2 className='bg-gradient-to-b from-red-900  via-red-700 to-rose bg-clip-text text-transparent  text-5xl heading-text font-medium'>Full Sail University</h2>
            <p className='text-rose text-xl p-text'>Associate of Science in Web Development</p>
            <p className="text-gray text-xl p-text">April 05, 2024</p>
          </div>
        </div>
    </div>
  )
}
