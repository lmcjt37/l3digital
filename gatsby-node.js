const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        },
    })
}

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    return new Promise((resolve, reject) => {
        const projectPageTemplate = path.resolve(
            './src/templates/project-page.js'
        )
        resolve(
            graphql(
                `
                    {
                        allContentfulProject(limit: 1000) {
                            edges {
                                node {
                                    slug
                                }
                            }
                        }
                    }
                `
            ).then(result => {
                if (result.errors) {
                    reject(result.errors)
                }

                // Create project pages
                result.data.allContentfulProject.edges.forEach(edge => {
                    createPage({
                        path: `/projects/${edge.node.slug}`,
                        component: projectPageTemplate,
                        context: {
                            slug: edge.node.slug,
                        },
                    })
                })
            })
        )
    })
}
