import { getSkills } from '@/sanity/sanity-utils';
import React from 'react'
import Image from 'next/image'

export default async function Skills() {
    const skills = await getSkills();

  return (
    <div>
        <h1 className='bg-gradient-to-b from-red-900  via-red-700 to-rose bg-clip-text text-transparent font-bold text-6xl  drop-shadow heading-text'>Skills</h1>

        
        {/* Skills Section */}
        <div className="mt-5 grid grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8 lg:gap-8">
        {/* mapping over the skills */}
        {skills.map((skill)=>(
            <div key={skill._id}
            className="border-4 border-gray rounded-xl p-1 hover:border-rose hover:scale-105 transition"
            >

            {/* skill Image */}
            {skill.image &&(
                <Image 
                src={skill.image}
                alt={skill.name}
                width={150}
                height={150}
                className="object-cover rounded-lg border-2 border-gray hover:border-rose bg-blue-950"/>
            )}

            {/* Skill Name */}
            <div className="font-extrabold text-rose mt-3 text-center p-text">
                {skill.name}
            </div>
            </div>
        ))}
        </div>
    </div>
  )
}
