import React from 'react';
import { Section, media } from '@styles';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  width: 100%;
  height: 4.6rem;

  ${media.thone`position: relative;`};
`;
const StyledContainer = styled(Section)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.5rem;
  transition: transform 0.35s ease, background-color 0.35s ease;
  ${media.tablet`
    padding-top: 1rem;
    padding-bottom: 1rem;
  `};
`;
const StyledNav = styled.nav`
  color: var(--text);
`;
const NavList = styled.ul`
  display: flex;
  text-transform: uppercase;
  padding: 0;
`;
const NavItem = styled.li`
  margin-left: 1.87rem;
  position: relative;

  ${media.thone`margin-left: 1rem;`};
`;
const LogoWrapper = styled(Link)`
  display: flex;
  flex-direction: row;
  font-size: 0.9vw;
  text-transform: uppercase;
  color: var(--text);
  gap: 1rem;
  h1 {
    color: var(--text);
    ${media.thone`display: none;`}
  }

  ${media.tablet`font-size: 16px;`};
`;
const NavLink = styled(Link)`
  color: var(--text);
  text-transform: uppercase;
  display: block;
  font-size: 0.9vw;
  line-height: 1;
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0, 1);
  opacity: 1;
  cursor: pointer;
  :hover {
    opacity: 0.6;
  }

  ${media.tablet`font-size: 16px;`};
`;

const Nav = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <LogoWrapper to="/">Kyrylo Orlov</LogoWrapper>
        <StyledNav>
          <NavList>
            <NavItem>
              <NavLink to="/about">About</NavLink>
            </NavItem>
          </NavList>
        </StyledNav>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Nav;
