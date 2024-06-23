import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

// type for the params
type Props ={
    params: {project: string}
}

export default async function Project({params}: Props){
    // creating slug
    const slug = params.project;
    // getting the project by the slug
    const project = await getProject(slug);
    
    return <div className="">
        {/* header. includes project name and url */}
        <header className="flex items-center justify-between">
            {/* project name with a gradient styling */}
            <h1 className="bg-gradient-to-b from-red-900  via-red-700 to-rose bg-clip-text text-transparent font-bold text-5xl  drop-shadow">
                {project.name}
            </h1>
            {/* project url with bg hover effect */}
            <a href={project.url} title="View Project" target="_blank" rel="noopener noreferrer" className="bg-gray rounded-lg font-bold py-3 px-4 whitespace-nowrap hover:bg-rose">
                View Project
            </a>
        </header>

        {/* content goes here */}
        <div className="text-lg text-gray mt-5">
            <PortableText value={project.content}/>
        </div>

        {/* image goes here */}
        <Image 
        src={project.image}
        alt={project.alt}
        width={1920}
        height={1080}
        className="object-cover rounded-lg border-2 border-gray mt-10 bg-blue-950"
        />
    </div>
}