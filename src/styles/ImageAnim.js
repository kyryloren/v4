import styled from 'styled-components';
import { motion } from 'framer-motion';

const ImageAnim = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: var(--background);
  z-index: 1;
  transform-origin: center bottom;
`;

export default ImageAnim;
