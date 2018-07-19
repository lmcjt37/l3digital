const path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const projectItemTemplate = path.resolve('./src/templates/project-item.js')
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
          console.log(result.errors)
          reject(result.errors)
        }

        // Create project pages
        result.data.allContentfulProject.edges.forEach(edge => {
          createPage({
            path: edge.node.slug,
            component: projectItemTemplate,
            context: {
              slug: edge.node.slug,
            },
          })
        })
      })
    )
  })
}
