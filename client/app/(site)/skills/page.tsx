import { getSkills } from '@/sanity/sanity-utils';
import React from 'react'
import Image from 'next/image'

export default async function Skills() {
    const skills = await getSkills();

  return (
    <div>
        <h1 className='responsive-special-text'>Skills</h1>

        
        {/* Skills Section */}
        <div className="responsive-skills-grid">
        {/* mapping over the skills */}
        {skills.map((skill)=>(
            <div key={skill._id}
            className="card"
            >

            {/* skill Image */}
            {skill.image &&(
                <Image 
                src={skill.image}
                alt={skill.name}
                width={150}
                height={150}
                className="image-border bg-blue-900"/>
            )}

            {/* Skill Name */}
            <div className="skills-card-title margin3">
                {skill.name}
            </div>
            </div>
        ))}
        </div>
    </div>
  )
}
