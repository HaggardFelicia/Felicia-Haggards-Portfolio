// Project schema
const project = {
    // name of the schema
    name: 'project',
    // title of the schema
    title: 'Projects',
    // type of the schema
    type: 'document',
    // fields for the project
    fields: [
        // name of the project
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        // slug for the project
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name'
            }
        },
        // image for the project
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            // hotspot for the image
            options: {
                hotspot: true
            },
            // alt for the image
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string',
                }
            ]
        },
        // url for the project
        {
            name: 'url',
            title: 'URL',
            type: 'url',
        },
        // content for the project
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{type: 'block'}],
        }
    ]
}

export default project;