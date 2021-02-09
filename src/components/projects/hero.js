import React from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import { motion } from 'framer-motion';
import { ProjectCaption } from './global';
import { Section, media, Overflow, ImageAnim } from '@styles';

const HeroSection = styled(Section)`
  position: relative;
  padding-top: 10vw;
  padding-bottom: 10vw;
`;
const ProjectTitle = styled(motion.h1)`
  color: var(--text);
  font-weight: 500;
  font-size: 8vw;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: -2px;
  margin: 0;
`;
const HeroImageContainer = styled(motion.div)`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 80vh;
`;
const StyledImage = styled(BackgroundImage)`
  position: absolute;
  background-size: cover;
  @media (min-width: 1000px) {
    top: 0;
    left: -5%;
    right: -5%;
    bottom: -20%;
  }
  ${media.desktop`
    padding-bottom: 125%;
    width: calc(100% - 40px);
    position: relative !important;
    margin: 0 20px 20px;
  `};
`;

const Hero = ({ titleLines, caption, image }) => {
  return (
    <HeroSection>
      {titleLines.map((data, i) => (
        <Overflow key={i}>
          <ProjectTitle
            initial={{ y: '200%' }}
            animate={{
              y: 0,
              transition: {
                ease: [0.6, 0.05, -0.01, 0.9],
                duration: 1,
                delay: i === 0 ? 0 : i - 0.8,
              },
            }}>
            {data.row}
          </ProjectTitle>
        </Overflow>
      ))}
      <ProjectCaption
        hero
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            ease: [0.6, 0.05, -0.01, 0.9],
            duration: 1,
            delay: 0.4,
          },
        }}>
        {caption.map((data, i) => (
          <>
            {data.tag} {caption[caption.length - 1] !== caption[i] && '/'}{' '}
          </>
        ))}
      </ProjectCaption>
      <HeroImageContainer>
        <ImageAnim
          initial={{ height: '100%' }}
          animate={{
            height: 0,
            transition: {
              ease: [0.6, 0.05, -0.01, 0.9],
              duration: 1,
              delay: 0.5,
            },
          }}
        />
        {image && (
          <StyledImage
            data-scroll
            data-scroll-speed={-1}
            fluid={image.localFile.childImageSharp.fluid}
            style={{ position: 'absolute' }}
            alt={image.alt && image.alt}
          />
        )}
      </HeroImageContainer>
    </HeroSection>
  );
};

export default Hero;
