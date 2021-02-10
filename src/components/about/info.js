import React from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import { useInView } from 'react-intersection-observer';
import { Section, DefaultText, ImageAnim, media } from '@styles';

const StyledSection = styled(Section)`
  padding-top: 10rem;

  ${media.tablet`padding-top: 0;`};
`;
const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 80%;
  height: 70vw;
  top: -3vw;
  z-index: -1;

  ${media.tablet`
    width: 100%;
    height: 50vh;
  `};
`;
const StyledImage = styled(BackgroundImage)`
  position: absolute;
  background-size: cover;

  top: 0;
  left: -5%;
  right: -5%;
  bottom: -20%;
`;
const ContentWrapper = styled.div`
  div:first-of-type {
    margin-left: 16.75vw;

    ${media.tablet`margin-left: 0;`};
  }
`;
const Row = styled.div`
  margin-left: 24.5vw;
  width: 64vw;
  margin-top: 7.5vw;
  margin-bottom: 7.5vw;

  ${media.tablet`
    width: 100%;
    margin-left: 0;
  `};
`;
const StyledDefaultText = styled(DefaultText)`
  text-indent: 100px;
`;

const Info = ({ data }) => {
  const [imageRef, inView] = useInView({ threshold: 0.1 });

  return (
    <StyledSection ref={imageRef}>
      <ImageContainer>
        <ImageAnim
          initial={{ height: '100%' }}
          animate={
            inView && {
              height: 0,
              transition: {
                ease: [0.6, 0.05, -0.01, 0.9],
                duration: 1,
              },
            }
          }
        />
        <StyledImage
          data-scroll
          data-scroll-speed={-1}
          style={{ position: 'absolute' }}
          fluid={data.hero.childImageSharp.fluid}
          alt="Kyrylo Orlov"
        />
      </ImageContainer>
      <ContentWrapper>
        <Row>
          <StyledDefaultText>
            Hey there! My name is Kyrylo Orlov and I am a 15 year old ui/ux designer, developer, and
            business strategist with a focus on creating creative digital design solutions. Over the
            past 5 years, I've worked on a diverse range of clients across multiple disciplines,
            ranging from brand creation to large scale e-commerce institutions.
          </StyledDefaultText>
        </Row>
        <Row>
          <StyledDefaultText>
            These experiences have helped me approach brands from a more strategic perspective while
            simultaneously communicating a powerful story that creates a memorable and lasting
            experience. I love everything to do with development and visual design as well as
            delivering extraordinarily creative solutions across digital platforms.
          </StyledDefaultText>
        </Row>
      </ContentWrapper>
    </StyledSection>
  );
};

export default Info;
