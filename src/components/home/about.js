import React from 'react';
import styled from 'styled-components';
import { media, DefaultText, Section } from '@styles';

const AboutSection = styled(Section)`
  padding-bottom: 10vw;
  position: relative;
  overflow-x: hidden;

  div:first-of-type {
    margin-left: 16.75vw;

    ${media.tablet`margin-left: 0;`};
  }
`;
const Row = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 7.5vw;
  margin-bottom: 7.5vw;
`;
const StyledDefaultText = styled(DefaultText)`
  text-indent: 100px;
  max-width: 60vw;

  ${props =>
    props.smaller &&
    `
    max-width: 80vw;
  `}

  ${media.tablet`max-width: 100%;`};
`;

const About = () => {
  return (
    <AboutSection>
      <Row>
        <StyledDefaultText>
          Basically my job is to come up with a strategy and build state-of-the-art marketing
          products for your brand both in print and digital medias. Regardless of different
          disciplines I have one goal in mind: give your brand a head start.
        </StyledDefaultText>
      </Row>
      <Row>
        <StyledDefaultText smaller>
          By working closely with company leaders, I’ve been exposed to numerous different business
          models and projects over the years. Acting as a consultant and lead designer for small and
          large teams alike, I've built industry-standard products and gained experiences which have
          helped me optimize the quality and efficiency of my work. In today’s clustered marketing
          world, various brands are competing for your costumer's attention. I help brands develop
          their core identities by communicating their values through comprehensible and fluid
          design.
        </StyledDefaultText>
      </Row>
    </AboutSection>
  );
};

export default About;
