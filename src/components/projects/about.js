import React from 'react';
import { RichText } from 'prismic-reactjs';
import { Elements } from 'prismic-richtext';
import styled from 'styled-components';
import { Marquee } from '@components';
import { ProjectCaption, Divider } from './global';
import { Section, media, Link } from '@styles';

const AboutSection = styled(Section)`
  position: relative;
  padding-top: 10vw;
  padding-bottom: 10vw;
`;
const Row = styled.div`
  display: flex;
  ${media.tablet`flex-direction: column;`};
`;
const Col = styled.div`
  flex: ${props => (props.rest ? '50% 0' : '0 50%')};
  ${media.tablet`flex: 100%;`};
`;
const ContentWrapper = styled.div`
  max-width: 70%;
  a {
    top: 2vw;
    ${media.tablet`font-size: 16px;`};
  }
  ${media.desktop`max-width: 80%;`};
  ${media.tablet`max-width: 100%;`};
`;
const AboutText = styled.p`
  color: var(--text);
  font-size: ${props => (props.big ? '2.5vw' : '2vw')};
  line-height: 110%;
  margin-top: 0;
  ${props =>
    props.big &&
    `
      text-transform: uppercase;
      font-weight: 500;
    `}
  ${media.tablet`font-size: 36px;`};
  ${media.thone`font-size: 24px;`};
`;
const Paragraphs = styled.div`
  display: flex;
  flex-direction: column;

  ${props => props.margin && media.tablet`margin-top: 8vw;`}
  ${props => props.margin && media.thone`margin-top: 12vw;`}
`;
const ApproachCol = styled.div`
  margin-top: 5vw;

  ${media.tablet`margin-top: 8vw;`};
`;
const InformationText = styled.p`
  color: var(--text);
  font-size: 1.3vw;
  line-height: 150%;
  ${media.desktop`font-size: 1.6vw;`};
  ${media.tablet`font-size: 18px;`};
`;
const BiggerText = styled(InformationText)`
  font-size: 1.7vw;
  line-height: 120%;
  margin: 0;

  ${media.desktop`font-size: 1.6vw;`};
  ${media.tablet`font-size: 18px;`};
`;

var aboutSerializer = function (type, element, content, children) {
  switch (type) {
    case Elements.paragraph:
      return React.createElement(AboutText, {}, children);
    default:
      return null;
  }
};

var infoSerializer = function (type, element, content, children) {
  switch (type) {
    case Elements.paragraph:
      return React.createElement(InformationText, {}, children);
    default:
      return null;
  }
};

const About = ({ description, services, site, challenge, approach, result }) => {
  return (
    <AboutSection>
      <Row>
        <Col>
          <ContentWrapper>
            <RichText render={description.raw} htmlSerializer={aboutSerializer} />
            {services.map((data, i) => (
              <ProjectCaption key={i}>{data.service}</ProjectCaption>
            ))}
            {site && <Link href={site}>Visit live site</Link>}
          </ContentWrapper>
        </Col>
        <Col rest>
          <Paragraphs margin>
            <div>
              <Marquee>Challenge</Marquee>
              <RichText render={challenge.raw} htmlSerializer={infoSerializer} />
            </div>
            <ApproachCol>
              <Marquee>Approach</Marquee>
              <RichText render={approach.raw} htmlSerializer={infoSerializer} />
            </ApproachCol>
          </Paragraphs>
        </Col>
      </Row>
      <Divider />
      {result && (
        <Row>
          <Col>
            <AboutText big>The result</AboutText>
          </Col>
          <Col rest>
            <Paragraphs>
              <RichText render={result.raw} Component={BiggerText} />
            </Paragraphs>
          </Col>
        </Row>
      )}
    </AboutSection>
  );
};

export default About;
