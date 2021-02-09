import styled from 'styled-components';
import { motion } from 'framer-motion';
import { media } from '@styles';

export const ProjectCaption = styled(motion.p)`
  color: var(--text);
  font-size: 0.9vw;
  text-align: ${props => (props.hero ? 'center' : 'left')};
  font-weight: 500;
  text-transform: uppercase;
  line-height: ${props => (props.hero ? '110%' : 0)};
  margin-bottom: ${props => !props.hero && '18px'};
  ${media.tablet`font-size: 16px;`};
  ${media.tablet`margin-bottom: ${props => !props.hero && '20px'};`};
`;

export const Divider = styled.div`
  width: 100%;
  background-color: var(--text);
  height: 2px;
  margin: 5rem 0;
`;
