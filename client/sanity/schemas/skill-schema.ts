// Project schema
const skill = {
    // name of the schema
    name: 'skill',
    // title of the schema
    title: 'Skills',
    // type of the schema
    type: 'document',
    // fields for the skill
    fields: [
        // name of the skill
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        // slug for the skill
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name'
            }
        },
        // image for the skill
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
        // url for the skill
        {
            name: 'url',
            title: 'URL',
            type: 'url',
        },
        // content for the skill
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{type: 'block'}],
        }
    ]
}

export default skill;
