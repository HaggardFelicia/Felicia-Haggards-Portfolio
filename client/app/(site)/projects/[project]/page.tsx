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
        <header className="header">
            {/* project name with a gradient styling */}
            <h1 className="responsive-special-text">
                {project.name}
            </h1>
            {/* project url with bg hover effect */}
            <a href={project.url} title="View Project" target="_blank" rel="noopener noreferrer" className="a-text">
                View Project
            </a>
        </header>

        {/* content goes here */}
        <div className="responsive-p-text text-rose my-[4rem]">
            <PortableText value={project.content}/>
        </div>

        {/* image goes here */}
        <Image 
        src={project.image}
        alt={project.alt}
        width={1920}
        height={1080}
        className="image-border my-[4rem] bg-blue-950"
        />
    </div>
}