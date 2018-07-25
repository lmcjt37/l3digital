const path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const projectPageTemplate = path.resolve('./src/templates/project-page.js')
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
            path: edge.node.slug,
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
