import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Section, media } from '@styles';

const ImageSection = styled(Section)`
  position: relative;
  padding-top: 10vw;
  padding-bottom: 10vw;
`;
const RandomImageContainer = styled.div`
  width: 100%;
  display: flex;
  :nth-child(3n + 1) {
    justify-content: flex-end;
  }
  :not(:first-child) {
    padding-top: 10vw;
  }
`;
const RandomImage = styled(Img)`
  position: relative;
  width: 70%;

  ${media.tablet`width: 100%;`};
`;

const Images = ({ images }) => {
  return (
    <ImageSection>
      {images &&
        images.map((image, i) => (
          <RandomImageContainer
            data-scroll
            data-scroll-speed={Math.floor(Math.random() * 2) + 1}
            key={i}>
            <RandomImage
              fluid={image.image.localFile.childImageSharp.fluid}
              alt={image.image.alt && image.image.alt}
            />
          </RandomImageContainer>
        ))}
    </ImageSection>
  );
};

export default Images;
