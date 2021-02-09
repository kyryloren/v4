/* eslint react-hooks/exhaustive-deps: 0 */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { media } from '@styles';
import { motion, AnimatePresence } from 'framer-motion';
import { Overflow } from '@styles';

const StyledComeIn = styled(motion.div)`
  background-color: #fff;
  position: fixed;
  width: 100%;
  z-index: 9998;
  overflow: hidden;
  user-select: none;
`;
const CenteredContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const StyledText = styled(motion.h2)`
  color: #000;
  font-size: 2.2vw;
  font-weight: normal;
  @media (min-width: 400px) {
    white-space: nowrap;
  }

  ${media.tablet`font-size: 18px;`};
`;

const Loader = ({ finishLoading }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [startAnim, setStartAnim] = useState(true);

  const messages = [
    'Putting on the finishing touches.',
    'Generating awesome content.',
    'Forming the pixels on your screen.',
  ];

  const message = messages[Math.floor(Math.random() * messages.length)];

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
        setStartAnim(false);

        setTimeout(() => {
          finishLoading();
        }, 1200);
      }, 1450);
    }, 1000);
  }, []);

  return (
    <div>
      <AnimatePresence>
        {startAnim && (
          <StyledComeIn
            initial={{ height: 0 }}
            animate={{ height: '100vh' }}
            exit={{ width: 0 }}
            transition={{
              ease: [1, 0, 0.265, 1],
              delay: 0.5,
              duration: 0.8,
            }}>
            <CenteredContent>
              <AnimatePresence>
                {isVisible && (
                  <Overflow>
                    <StyledText
                      initial={{ y: '300%' }}
                      animate={{
                        y: 0,
                        opacity: 1,
                      }}
                      exit={{ y: '-300%' }}
                      transition={{
                        ease: [0.6, 0.05, -0.01, 0.9],
                        duration: 0.8,
                      }}>
                      {message}
                    </StyledText>
                  </Overflow>
                )}
              </AnimatePresence>
            </CenteredContent>
          </StyledComeIn>
        )}
      </AnimatePresence>
    </div>
  );
};

Loader.propTypes = {
  finishLoading: PropTypes.func.isRequired,
};

export default Loader;
