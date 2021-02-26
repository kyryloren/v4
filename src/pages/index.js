import React from 'react';
import { graphql } from 'gatsby';

import { Hero, About, Projects, Services } from '@components/home';

const HomePage = ({ data, hero }) => {
  return (
    <>
      <div data-scroll-section>
        <Hero data={hero} />
      </div>
      <div data-scroll-section>
        <About />
      </div>
      <div data-scroll-section>
        <Projects data={data} />
      </div>
      <div data-scroll-section>
        <Services />
      </div>
    </>
  );
};

export default ({ data }) => {
  const docs = data.allPrismicProject.edges;

  if (!docs) return null;

  return <HomePage data={docs} hero={data.hero} />;
};

export const query = graphql`
  {
    allPrismicProject {
      edges {
        node {
          uid
          data {
            thumbnail {
              alt
              localFile {
                childImageSharp {
                  fluid(quality: 70, maxWidth: 1000) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
            thumb_title
            tags {
              tag
            }
          }
        }
      }
    }
    hero: file(relativePath: { eq: "hero.png" }) {
      childImageSharp {
        fluid(fit: COVER, maxWidth: 500, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;
