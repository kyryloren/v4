import React from 'react';
import styled from 'styled-components';
import { Section, DisplayTitle, Overflow, media } from '@styles';

const CustomSection = styled(Section)`
  height: calc(100vh - 2.5rem);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  ${media.tablet`
    height: 40vh;
  `};
`;
const Line1 = styled.span`
  margin-left: 7.9vw;

  ${media.tablet`margin-left: 0;`};
`;
const Line2 = styled.span`
  margin-left: 17vw;

  ${media.tablet`margin-left: 0;`};
`;
const Line3 = styled.span`
  margin-left: 7.9vw;

  ${media.tablet`margin-left: 0;`};
`;

const Hero = () => {
  return (
    <CustomSection>
      <Overflow>
        <DisplayTitle
          initial={{ y: '200%' }}
          animate={{
            y: 0,
            transition: {
              ease: [0.6, 0.05, -0.01, 0.9],
              duration: 1,
              delay: 0.4,
            },
          }}>
          Kyrylo — NYC
        </DisplayTitle>
      </Overflow>
      <Line1>
        <Overflow>
          <DisplayTitle
            initial={{ y: '200%' }}
            animate={{
              y: 0,
              transition: {
                ease: [0.6, 0.05, -0.01, 0.9],
                duration: 1,
                delay: 0.8,
              },
            }}>
            Web designer
          </DisplayTitle>
        </Overflow>
      </Line1>
      <Line2>
        <Overflow>
          <DisplayTitle
            initial={{ y: '200%' }}
            animate={{
              y: 0,
              transition: {
                ease: [0.6, 0.05, -0.01, 0.9],
                duration: 1,
                delay: 1.2,
              },
            }}>
            + Developer
          </DisplayTitle>
        </Overflow>
      </Line2>
      <Line3>
        <Overflow>
          <DisplayTitle
            initial={{ y: '200%' }}
            animate={{
              y: 0,
              transition: {
                ease: [0.6, 0.05, -0.01, 0.9],
                duration: 1,
                delay: 1.6,
              },
            }}>
            & Strategy
          </DisplayTitle>
        </Overflow>
      </Line3>
    </CustomSection>
  );
};

export default Hero;
