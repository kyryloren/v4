import React from 'react';
import { motion } from 'framer-motion';
import { media, Overflow, Section, ImageAnim, DisplayTitle } from '@styles';
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';

const HeroWrapper = styled(Section)`
  padding-top: 15vw;
  position: relative;
  user-select: none;
`;
const FlexWrapper = styled.div`
  text-align: right;
  z-index: -1;
`;
const Title = styled(DisplayTitle)`
  font-size: ${props => (props.smaller ? '10.9vw' : '12.9vw')};

  span {
    font-size: 4vw;
    margin-right: 16px;
    font-style: italic;
    line-height: 0;

    ${media.tablet`
      font-size: 4vw;
      margin-right: 1vw;
    `};
  }
  ${media.desktop`font-size: 12.5vw;`};
`;
const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 50%;
  height: 70vw;
  top: -3vw;
  z-index: -1;
  ${media.tablet`
    height: 60vh;
    min-height: 500px;
    width: 70%;
    position: relative;
  `};
  ${media.thone`
    height: 50vh;
    width: 100%;
  `};
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
const InfoWrapepr = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  ${media.thone`
    flex-direction: column;
    margin: 0 20px;
  `};
`;
const LinksWrapper = styled(motion.div)`
  margin-left: 3vw;
  display: flex;
  flex-direction: column;

  ${media.tablet`
    margin-left: 1vw;
  `};
  ${media.thone`
    margin-left: 0;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  `};
`;
const Col = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5vw;
`;
const LinkLabel = styled.p`
  font-size: 1vw;
  text-transform: uppercase;
  color: var(--accent);
  margin: 0;

  ${media.tablet`font-size: 1.5vw;`};
  ${media.thone`
    margin-bottom: 3px;
    font-size: 3vw;
  `};
`;
const SocialLink = styled.a`
  color: var(--text);
  text-decoration: none;
  font-style: italic;
  text-transform: uppercase;
  font-size: 1.2vw;
  margin-top: 0.3vw;

  ${media.tablet`font-size: 2vw;`};
  ${media.thone`font-size: 4vw;`};
`;

const Hero = ({ data }) => {
  return (
    <HeroWrapper>
      <Overflow>
        <Title
          initial={{ y: '200%' }}
          animate={{
            y: 0,
            transition: {
              ease: [0.6, 0.05, -0.01, 0.9],
              duration: 1,
              delay: 0.4,
            },
          }}>
          Kyrylo Orlov
        </Title>
      </Overflow>
      <Overflow>
        <Title
          smaller
          initial={{ y: '200%' }}
          animate={{
            y: 0,
            transition: {
              ease: [0.6, 0.05, -0.01, 0.9],
              duration: 1,
              delay: 0.8,
            },
          }}>
          <span>(creative)</span>developer
        </Title>
      </Overflow>
      <Overflow>
        <Title
          smaller
          initial={{ y: '200%' }}
          animate={{
            y: 0,
            transition: {
              ease: [0.6, 0.05, -0.01, 0.9],
              duration: 1,
              delay: 1.2,
            },
          }}>
          based in
        </Title>
      </Overflow>
      <FlexWrapper>
        <Overflow>
          <Title
            smaller
            initial={{ y: '200%' }}
            animate={{
              y: 0,
              transition: {
                ease: [0.6, 0.05, -0.01, 0.9],
                duration: 1,
                delay: 1.6,
              },
            }}>
            <i>New York</i>
          </Title>
        </Overflow>
      </FlexWrapper>
      <InfoWrapepr>
        <ImageContainer>
          <ImageAnim
            initial={{ height: '100%' }}
            animate={{
              height: 0,
              transition: {
                ease: [0.6, 0.05, -0.01, 0.9],
                duration: 0.8,
                delay: 0.8,
              },
            }}
          />
          <StyledImage
            data-scroll
            data-scroll-speed={-1}
            fluid={data.childImageSharp.fluid}
            alt="Kyrylo Orlov"
            style={{ position: 'absolute' }}
            critical
          />
        </ImageContainer>
        <LinksWrapper
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              ease: [0.6, 0.05, -0.01, 0.9],
              duration: 1.5,
              delay: 0.6,
            },
          }}>
          <Col>
            <LinkLabel>Socials</LinkLabel>
            <SocialLink
              href="https://dribbble.com/kyryloren"
              target="_blank"
              rel="noopener noreferrer">
              Dribbble
            </SocialLink>
            <SocialLink
              href="https://instagram.com/kyryloren"
              target="_blank"
              rel="noopener noreferrer">
              Instagram
            </SocialLink>
            <SocialLink
              href="https://twitter.com/kyryloren"
              target="_blank"
              rel="noopener noreferrer">
              Twitter
            </SocialLink>
          </Col>
          <Col>
            <LinkLabel>Contact</LinkLabel>
            <SocialLink
              href={`mailto:dev@kyryloorlov.com?subject=Let's make something cool`}
              target="_blank"
              rel="nofollow noopener noreferrer">
              dev@kyryloorlov.com
            </SocialLink>
          </Col>
        </LinksWrapper>
      </InfoWrapepr>
    </HeroWrapper>
  );
};

export default Hero;
