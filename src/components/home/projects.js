import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import BackgroundImage from 'gatsby-background-image';
import { useInView } from 'react-intersection-observer';
import { media, Section, ImageAnim } from '@styles';

const ProjectSection = styled(Section)`
  padding-top: 0;
  padding-bottom: 10vw;
  position: relative;
`;
const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 3vw;
`;
const Project = styled(Link)`
  display: flex;
  flex-direction: column;

  :nth-child(2n) {
    margin-top: 6vw;

    ${media.tablet`margin-top: 0;`};
  }

  ${media.tablet`
    width: 100%!important;
    flex-direction: column-reverse;

    :not(:first-child) {
      margin-top: 8vw;
    }
  `};
`;
const ImageContainer = styled(motion.div)`
  overflow: hidden;
  width: 40vw;
  margin: 0 auto;

  ${media.tablet`
    width: 100%!important;
    height: 80vw;
  `};
`;
const ProjectImage = styled(BackgroundImage)`
  width: 100%;
  height: 60vw;
  position: absolute;
  transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);

  ${media.tablet`height: 100%;`};

  :hover {
    transform: scale(1.05);
  }
`;
const ProjectTitle = styled.p`
  color: var(--text);
  font-family: var(--font-family-serif);
  font-size: 1.3vw;
  line-height: 90%;
  font-weight: 600;
  text-transform: uppercase;
  margin-top: 1.6vw;
  margin-bottom: 0;
  font-size: 2vw;

  ${media.tablet`font-size: 10vw;`};
`;
const ProjectCaption = styled.p`
  margin-top: 0.5vw;
  color: var(--accent);
  font-size: 0.8vw;

  ${media.tablet`font-size: 3vw;`};
`;

const Projects = ({ data }) => {
  const [projectsRef, inView] = useInView({ threshold: 0.1 });

  return (
    <ProjectSection ref={projectsRef}>
      <ProjectsWrapper>
        {data.map((object, i) => {
          const uid = object.node.uid;
          const data = object.node.data;
          const tags = data.tags;

          console.log(uid);

          return (
            <Project to={`/projects/${uid}`} key={i}>
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
                <ProjectImage
                  fluid={data.thumbnail.localFile.childImageSharp.fluid}
                  alt={data.thumbnail.alt}
                  style={
                    (uid === 'code' || uid === 'stigma') && {
                      backgroundSize: 'contain',
                      backgroundColor: '#dcdcdc',
                    }
                  }
                />
              </ImageContainer>
              <div>
                <ProjectTitle>{data.thumb_title}</ProjectTitle>
                <ProjectCaption>
                  {tags.map((data, i) => (
                    <>
                      {data.tag}
                      {tags[tags.length - 1] !== tags[i] && ', '}
                    </>
                  ))}
                </ProjectCaption>
              </div>
            </Project>
          );
        })}
        {/* <Project to="/projects/dynamo">
          <ImageContainer>
            <ProjectImage fluid={data.dynamo.childImageSharp.fluid} alt="Dynamo Fencing" />
          </ImageContainer>
          <ProjectTitle>Dynamo Fencing</ProjectTitle>
          <ProjectCaption>UI/UX, Website Redesign</ProjectCaption>
        </Project>
        <Project to="/projects/rjz">
          <ImageContainer>
            <ProjectImage
              fluid={data.rjz.childImageSharp.fluid}
              alt="RJZ Construction Safety"
              style={{ backgroundSize: 'contain', backgroundColor: '#f2f2f5' }}
            />
          </ImageContainer>
          <ProjectTitle>RJZ Construction Safety</ProjectTitle>
          <ProjectCaption>UI/UX, Website Redesign, Product Redesign</ProjectCaption>
        </Project> */}
      </ProjectsWrapper>
    </ProjectSection>
  );
};

export default Projects;
