const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const pages = await graphql(`
    {
      allPrismicProject {
        nodes {
          id
          uid
          data {
            tags {
              tag
            }
            title {
              row
            }
            description {
              raw
            }
            services {
              service
            }
            live {
              url
              target
            }
            challenge {
              text {
                raw
              }
            }
            approach {
              text {
                raw
              }
            }
            result {
              raw
            }
          }
        }
      }
    }
  `);

  pages.data.allPrismicProject.nodes.forEach(node => {
    createPage({
      path: `projects/${node.uid}`,
      component: path.resolve(__dirname, 'src/templates/projects.js'),
      context: {
        id: node.id,
        project: node,
      },
    });
  });
};

// https://www.gatsbyjs.org/docs/node-apis/#onCreateWebpackConfig
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@images': path.resolve(__dirname, 'src/images'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@fonts': path.resolve(__dirname, 'src/fonts'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
      },
    },
  });

  if (stage === 'build-html' || stage === 'develop-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /locomotive-scroll/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
