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
      <h1 className="responive-heading-text">Hello I&apos;m <span className=" responsive-special-text">Felicia</span>!</h1>
      <p className="responsive-p-text">Osiyo Everyone! Check out my projects!</p>

      {/* Projects Section */}
      <h2 className="mt-24 responsive-h2-text">My Projects</h2>

      <div className="responsive-grid">
        {/* mapping over the projects */}
        {projects.map((project)=>(
          <Link 
          href={`/projects/${project.slug}`}
            key={project._id}
            className="card"
          >
            {/* Project Image */}
            {project.image &&(
              <Image 
              src={project.image}
              alt={project.name}
              width={750}
              height={300}
              className="image-border"/>
            )}

            {/* Project Name */}
            <div className="card-title margin6">
              {project.name}
            </div>
            
          </Link>
        ))}
      </div>
    </div>
  );
}
