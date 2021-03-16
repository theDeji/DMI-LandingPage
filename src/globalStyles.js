import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap');
  * {
    box-sizing: border-box;
    margin:0;
    padding: 0;
  }
  body {
    background-color:#ff4d4d;
    font-family: 'Raleway', sans-serif;
    // transition: all 5s linear !important;
  }
`;

export default GlobalStyle