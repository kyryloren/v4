import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { IconExternal } from '@components';
import { Section, Overflow, media } from '@styles';

const CustomSection = styled(Section)`
  padding-top: 10vh;
  padding-bottom: 10vh;
`;
const CustomTitle = styled(motion.h1)`
  font-size: 7.5vw;
  word-wrap: nowrap;
  margin: 0;
  line-height: 95%;
  font-weight: 400;
  text-transform: uppercase;
  font-family: var(--font-family-serif);

  ${media.tablet`font-size: 9vw;`};
`;
const Line1 = styled.div`
  margin-left: 7.9vw;

  ${media.tablet`margin-left: 0;`};
`;
const Line2 = styled.div`
  display: flex;
  justify-content: flex-end;

  ${media.tablet`justify-content: flex-start;`};
`;
const Line = styled.div`
  background-color: var(--text);
  height: 2px;
  width: ${props => (props.width ? props.width : '100%')};
`;
const Title = styled.span`
  font-size: 4vw;
  word-wrap: nowrap;
  margin: 0;
  line-height: 95%;
  font-weight: 400;
  text-transform: uppercase;
  font-family: var(--font-family-serif);

  ${media.tablet`font-size: 8vw;`};
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  padding-top: 5vh;
`;
const Service = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
  justify-content: center;

  ${media.bigDesktop`width: 100%;`};
`;
const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  text-align: right;
  padding: 1rem 0;
  cursor: pointer;

  ${media.tablet`padding: 0;`};

  svg {
    transition: fill 0.5s cubic-bezier(0.6, 0.05, 0, 0.9);
    fill: ${props => (props.isOpen ? 'var(--text)' : 'transparent')};
  }
`;
const AccordionContent = styled.p`
  width: 90%;
  margin-left: auto;
  font-size: 20px;
  font-family: var(--font-family);
  margin-bottom: 2rem;
  text-transform: uppercase;

  ${media.tablet`font-size: 18px;`};
`;

const accordionIds = [
  {
    id: 0,
    title: 'Business Strategy',
    text:
      "Come up with a successful plan while working closely with your team to set and achieve your organization's goals. We'll go through design strategies, advertising, and product management workshops so that your business grows organically.",
  },
  {
    id: 1,
    title: 'Brand Identity',
    text:
      "Brand identity isn't just your logo or colors. By expressing your functional message, personality, beliefs, and goals, brand identity acts as a gateway to building a proper consumer base. When implemented correctly, your prospective buyers will understand how you differ from the market intuitively and seamlessly.",
  },
  {
    id: 2,
    title: 'UI/UX Design',
    text:
      'Simulating and constructing the digital structure that illustrates the experience of your customer and resonates with it. Optimizing structure and flow so that it gives a smooth and flawless user experience.',
  },
  {
    id: 3,
    title: 'Web Design',
    text:
      'Your website is the frontpage of your business. It is crucial that your website tells the right story while simultaneously focusing on the usability and customer experience. I take on the design by communicating your brand identity and values to the user.',
  },
  {
    id: 4,
    title: 'Web Dev',
    text:
      'Using modern tools and languages like React, I meticulously code out your design with present-day security standards and core concepts of the web. I also go through the painstaking of wiring your website to the world wide web.',
  },
];

const Accordion = ({ details, expanded, setExpanded }) => {
  const isOpen = details.id === expanded;

  return (
    <Service>
      <Line />
      <HeaderWrapper
        initial={false}
        onClick={() => setExpanded(isOpen ? false : details.id)}
        isOpen={isOpen}>
        <motion.span
          animate={{ rotate: isOpen ? 90 : 0, x: 3 }}
          transition={{ duration: 0.7, ease: [0.6, 0.05, -0.01, 0.9] }}>
          <IconExternal />
        </motion.span>
        <Title>{details.title}</Title>
      </HeaderWrapper>
      <motion.div
        key="content"
        style={{ overflow: 'hidden' }}
        animate={{ height: isOpen ? 'auto' : '0' }}
        transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}>
        <AccordionContent>{details.text}</AccordionContent>
      </motion.div>
    </Service>
  );
};

const Services = () => {
  const [expanded, setExpanded] = useState(0);

  return (
    <CustomSection>
      <Overflow>
        <CustomTitle
          initial={{ y: '200%' }}
          animate={{
            y: 0,
            transition: {
              ease: [0.6, 0.05, -0.01, 0.9],
              duration: 1,
              delay: 0.4,
            },
          }}>
          I work with companies
        </CustomTitle>
      </Overflow>
      <Overflow>
        <Line1>
          <CustomTitle
            initial={{ y: '200%' }}
            animate={{
              y: 0,
              transition: {
                ease: [0.6, 0.05, -0.01, 0.9],
                duration: 1,
                delay: 0.8,
              },
            }}>
            and brands as a
          </CustomTitle>
        </Line1>
      </Overflow>
      <Overflow>
        <CustomTitle
          initial={{ y: '200%' }}
          animate={{
            y: 0,
            transition: {
              ease: [0.6, 0.05, -0.01, 0.9],
              duration: 1,
              delay: 1.2,
            },
          }}>
          private specialist on a
        </CustomTitle>
      </Overflow>
      <Overflow>
        <Line2>
          <CustomTitle
            initial={{ y: '200%' }}
            animate={{
              y: 0,
              transition: {
                ease: [0.6, 0.05, -0.01, 0.9],
                duration: 1,
                delay: 1.6,
              },
            }}>
            project basis.
          </CustomTitle>
        </Line2>
      </Overflow>
      <Wrapper>
        {accordionIds.map((details, index) => (
          <Accordion key={index} details={details} expanded={expanded} setExpanded={setExpanded} />
        ))}
      </Wrapper>
    </CustomSection>
  );
};

export default Services;
