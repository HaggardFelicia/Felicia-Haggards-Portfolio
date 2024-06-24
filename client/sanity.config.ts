import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import project from './sanity/schemas/project-schema'
import page from './sanity/schemas/page-schema'
import skill from './sanity/schemas/skill-schema'



const config = defineConfig({
    projectId: 'feri6r1n',
    dataset:  'production',
    title: "Felicia Haggard Portfolio",
    apiVersion: "2024-06-21",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: {
        types: [
            project,
            page,
            skill        
        ]
    }
});

export default config;