import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after{
    box-sizing: border-box;
  }
  
  html, body{
    font-family: 'Roboto', sans-serif;
    font-size: 62.5%;
    margin: 0;
    padding: 0;
  }
  
  body{
      background-image: url("assets/img/bg.png");
  }
`;

export default GlobalStyle;
