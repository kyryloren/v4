import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

import { Hero, Info } from '@components/about';

const AboutPage = ({ data }) => {
  return (
    <>
      <Helmet title="About me" />

      <div data-scroll-section>
        <Hero />
      </div>
      <div data-scroll-section>
        <Info data={data} />
      </div>
    </>
  );
};

export default AboutPage;

export const query = graphql`
  {
    hero: file(relativePath: { eq: "hero.png" }) {
      childImageSharp {
        fluid(fit: COVER, maxWidth: 500, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;
