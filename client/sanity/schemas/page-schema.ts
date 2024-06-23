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
        // content for the page
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            // creates type of block for the content
            of: [
                {
                    type: 'block'
                }
            ]
        }
    ]
}

export default page