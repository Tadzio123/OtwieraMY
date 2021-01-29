import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledNav = styled.nav`
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

const Nav = ({ children }) => (
  <StyledNav>
    {children}
  </StyledNav>
);

Nav.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.object,
    PropTypes.func,
  ]).isRequired,
};

export default Nav;
