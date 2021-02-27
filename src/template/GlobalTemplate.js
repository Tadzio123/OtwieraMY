import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';

const Wrapper = styled.div`
  *, *::before, *::after{
    box-sizing: border-box;
  }
`;

const GlobalTemplate = ({ children }) => (
  <Wrapper>
    <GlobalStyle />
    {children}
  </Wrapper>
);

GlobalTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.object,
    PropTypes.func,
  ]).isRequired,
};

export default GlobalTemplate;
