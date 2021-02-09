import React from 'react';
import { ThemeContext } from '@components';
import { media } from '@styles';
import styled from 'styled-components';

const FixedWrapper = styled.div`
  position: fixed;
  width: 100%;
  top: 93vh;
  z-index: 11;

  ${media.thone`
    position: relative;
    top: unset;
  `};
`;
const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 2.75vw;
`;
const StyledText = styled.span`
  color: var(--text);
  font-size: 1.1vw;
  user-select: none;

  ${media.tablet`font-size: 16px;`};
`;
const TogglerWrapper = styled.div`
  z-index: 999;

  label {
    cursor: pointer;

    input {
      display: none;
    }
    padding: 1rem;
  }
`;
const ButtonToggler = styled.ellipse`
  fill: var(--text);
`;

const Footer = () => {
  const d = new Date();
  const y = d.getFullYear();

  const { colorMode, setColorMode } = React.useContext(ThemeContext);

  return (
    <FixedWrapper>
      <StyledFooter>
        <small>
          <StyledText>&copy; {y}</StyledText>
        </small>
        <TogglerWrapper>
          <label>
            <input
              type="checkbox"
              onChange={ev => {
                setColorMode(ev.target.checked ? 'dark' : 'light');
              }}
              checked={colorMode === 'dark'}
            />
            <svg enableBackground="new 0 0 24 24" viewBox="0 0 24 24" height="24" width="24">
              <ButtonToggler cx="8.5" cy="8.5" rx="5.9" ry="5.9" />
            </svg>
          </label>
        </TogglerWrapper>
      </StyledFooter>
    </FixedWrapper>
  );
};

export default Footer;
