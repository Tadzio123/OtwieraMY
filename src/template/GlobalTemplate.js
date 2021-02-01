import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';

const Wrapper = styled.div`
  *, *::before, *::after{
    box-sizing: border-box;
  }
  
  html, body{
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');
    font-family: 'Roboto', sans-serif;
    font-size: 62.5%;
    margin: 0;
    padding: 0;
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
