import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="">
      {/* Hero Section */}
      {/* greating, styling my name with a gradient */}
      <h1 className="text-7xl font-black text-rose">Hello I&apos;m <span className="bg-gradient-to-b from-red-900  via-red-700 to-rose bg-clip-text text-transparent">Felicia</span>!</h1>
      <p className="text-2xl font-bold text-gray">Osiyo Everyone! Check out my projects!</p>

      {/* Projects Section */}
      <h2 className="mt-24 font-bold text-gray text-3xl">My Projects</h2>

      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* mapping over the projects */}
        {projects.map((project)=>(
          <Link 
          href={`/projects/${project.slug}`}
            key={project._id}
            className="border-4 border-gray rounded-xl p-1 hover:border-rose hover:scale-105 transition"
          >
            {/* Project Image */}
            {project.image &&(
              <Image 
              src={project.image}
              alt={project.name}
              width={750}
              height={300}
              className="object-cover rounded-lg border border-gray bg-blue-950"/>
            )}

            {/* Project Name */}
            <div className="font-extrabold bg-gradient-to-b from-red-900 via-red-400 to-rose bg-clip-text text-transparent mt-3">
              {project.name}
            </div>
            
          </Link>
        ))}
      </div>
    </div>
  );
}
