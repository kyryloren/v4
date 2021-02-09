import React from 'react';
import { graphql } from 'gatsby';

import { Hero, About, Images } from '@components/projects';

const ProjectPage = ({ images, project }) => {
  return (
    <>
      <div data-scroll-section>
        <Hero titleLines={project.title} caption={project.tags} image={images.hero} />
      </div>
      <div data-scroll-section>
        <About
          description={project.description}
          services={project.services}
          site={project.live.url}
          challenge={project.challenge[0].text}
          approach={project.approach[0].text}
          result={project.result}
        />
      </div>
      <div data-scroll-section>
        <Images images={images.screenshots} />
      </div>
    </>
  );
};

export default ({ data, pageContext }) => {
  const doc = data.allPrismicProject.edges.slice(0, 1).pop();

  return <ProjectPage images={doc.node.data} project={pageContext.project.data} />;
};

export const query = graphql`
  query projectImages($id: String) {
    allPrismicProject(filter: { id: { eq: $id } }) {
      edges {
        node {
          data {
            hero {
              alt
              localFile {
                childImageSharp {
                  fluid(quality: 90, maxWidth: 1920) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
            thumbnail {
              alt
              localFile {
                childImageSharp {
                  fluid(quality: 90, maxWidth: 1920) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
            screenshots {
              image {
                alt
                localFile {
                  childImageSharp {
                    fluid(quality: 90, maxWidth: 1920) {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
