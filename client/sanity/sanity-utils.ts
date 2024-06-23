import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { Page } from "@/types/Page";

// Function to get all the projects
export async function getProjects(): Promise<Project[]>{
    // Fetching the data from the projects dataset and returning it
    return createClient(clientConfig).fetch(
        groq`*[_type=='project']{
            _id, 
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url, 
            content,
            "alt" : image.alt
        }` 
        // * gets everything in dataset[] filters the query {} the projection
    )
}
// Function to get a single project
export async function getProject(slug: string): Promise<Project>{
    // Fetching the data from the project and returning it
    return createClient(clientConfig).fetch(
        groq`*[_type=='project' && slug.current == $slug][0]{
            _id, 
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url, 
            content,
            "alt" : image.alt
        }` ,
        {slug}
        // * gets everything in dataset[] filters the query {} the projection
    )
}
// Function to get all the pages
export async function getPages(): Promise<Page[]>{
    return createClient(clientConfig).fetch(
        groq`*[_type=='page']{
            _id, 
            _createdAt,
            title,
            "slug": slug.current,
        }`
    )    
}
// Function to get a single page
export async function getPage(slug: string): Promise<Page>{
    return createClient(clientConfig).fetch(
        groq`*[_type=='page' && slug.current == $slug][0]{
            _id, 
            _createdAt,
            title,
            "slug": slug.current,
            content
        }`,
        {slug}
    )
}