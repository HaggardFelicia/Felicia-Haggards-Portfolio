import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import "../globals.css";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="">
      {/* Hero Section */}
      {/* greating, styling my name with a gradient */}
      <h1 className="text-7xl font-black text-rose p-text">Hello I&apos;m <span className="bg-gradient-to-b from-red-900  via-red-700 to-rose bg-clip-text text-transparent heading-text text-8xl">Felicia</span>!</h1>
      <p className="text-2xl font-bold text-gray p-text ">Osiyo Everyone! Check out my projects!</p>

      {/* Projects Section */}
      <h2 className="mt-24 font-bold text-gray text-3xl p-text">My Projects</h2>

      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* mapping over the projects */}
        {projects.map((project)=>(
          <Link 
          href={`/projects/${project.slug}`}
            key={project._id}
            className="border-4 border-gray rounded-xl p-1 hover:border-rose hover:scale-105 transition bg-blue-950"
          >
            {/* Project Image */}
            {project.image &&(
              <Image 
              src={project.image}
              alt={project.name}
              width={750}
              height={300}
              className="object-cover rounded-lg border border-gray hover:border-rose"/>
            )}

            {/* Project Name */}
            <div className="font-extrabold  text-rose mt-3 p-text text-xl text-center">
              {project.name}
            </div>
            
          </Link>
        ))}
      </div>
    </div>
  );
}
