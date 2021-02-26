import React from 'react';
import styled from 'styled-components';
import { Section, DefaultText, media } from '@styles';

const StyledSection = styled(Section)`
  padding-top: 10rem;

  ${media.tablet`padding-top: 0;`};
`;
const ContentWrapper = styled.div`
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

const Info = () => {
  return (
    <StyledSection>
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
          <StyledDefaultText smaller>
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
