import styled from 'styled-components';
import { motion } from 'framer-motion';
import media from './media';

export const DisplayTitle = styled(motion.h1)`
  font-size: 11.4vw;
  word-wrap: nowrap;
  margin: 0;
  line-height: 85%;
  font-weight: 400;
  text-transform: uppercase;
  font-family: var(--font-family-serif);

  ${media.tablet`font-size: 12.7vw;`};
`;
export const DefaultText = styled.p`
  font-size: 1.8vw;
  line-height: 1.35em;
  text-transform: uppercase;
  margin: 0;

  ${media.tablet`font-size: 3.5vw;`};
  ${media.thone`font-size: 16px;`};
`;
