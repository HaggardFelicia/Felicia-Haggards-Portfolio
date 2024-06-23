const page = {
    // name of the schema
    name: 'page',
    // title of the schema
    title: 'Pages',
    // type of the schema
    type: 'document',
    // fields for the project
    fields: [
        // title of the page
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        // slug for the page
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            // source for the slug of type title with max length of 96
            options: {
                source: 'title',
                maxLength: 96
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

export default page