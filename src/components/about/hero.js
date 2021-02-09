import React from 'react';
import styled from 'styled-components';
import { Section, Overflow, DisplayTitle, media } from '@styles';

const StyledDisplayTitle = styled(DisplayTitle)`
  ${media.tablet`font-size: 11.9vw;`};
`;
const CustomSection = styled(Section)`
  height: 100vh;
  padding-bottom: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  ${media.tablet`
    height: 40vh;
  `};
`;
const MarginLine = styled.span`
  margin-left: 15.3vw;

  ${media.tablet`margin-left: 0;`};
`;

const Hero = () => {
  return (
    <CustomSection>
      <Overflow>
        <StyledDisplayTitle
          initial={{ y: '200%' }}
          animate={{
            y: 0,
            transition: {
              ease: [0.6, 0.05, -0.01, 0.9],
              duration: 1,
              delay: 0.4,
            },
          }}>
          Hey there —
        </StyledDisplayTitle>
      </Overflow>
      <Overflow>
        <StyledDisplayTitle
          initial={{ y: '200%' }}
          animate={{
            y: 0,
            transition: {
              ease: [0.6, 0.05, -0.01, 0.9],
              duration: 1,
              delay: 0.8,
            },
          }}>
          I give brands a
        </StyledDisplayTitle>
      </Overflow>
      <MarginLine>
        <Overflow>
          <StyledDisplayTitle
            initial={{ y: '200%' }}
            animate={{
              y: 0,
              transition: {
                ease: [0.6, 0.05, -0.01, 0.9],
                duration: 1,
                delay: 1.2,
              },
            }}>
            personality
          </StyledDisplayTitle>
        </Overflow>
      </MarginLine>
    </CustomSection>
  );
};

export default Hero;
