import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';

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
  <ThemeProvider theme={theme}>
    <Wrapper>
      <GlobalStyle />
      {children}
    </Wrapper>
  </ThemeProvider>
);

GlobalTemplate.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.node,
    PropTypes.element,
  ]).isRequired,
};

export default GlobalTemplate;
