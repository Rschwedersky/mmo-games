import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`  

*,
*::after,
*::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  color: #333;
  font-family: 'Montserrat', sans-serif;
  
}

body {
  background-color: #cfcfcf;
}
`;