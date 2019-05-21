module.exports = {
    data: {
        contentfulProject: {
            slug: 'project-page',
            title: 'Project page title',
            description: {
                childMarkdownRemark: {
                    html: '<p>Project page description<p>',
                },
            },
            shortDescription: 'Project page short description',
            featuredImage: {
                description: 'featured image description',
                fluid: {
                    aspectRatio: 1,
                    base64: 'base64',
                    sizes: 'sizes',
                    src: 'src',
                    srcSet: 'srcSet',
                },
            },
            url: 'http://l3digital.co.uk',
        },
    },
    location: {
        state: {
            from: '/projects',
        },
    },
}
