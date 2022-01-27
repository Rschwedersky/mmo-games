
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Router } from './routes/Routes';
import { GlobalStyle } from './themes/GlobalStyles';
import { myTheme } from './themes/themes';
import { DarkModeProvider } from './contexts/darkmode/DarkModeProvider';


function App() {
  return (<>
    <GlobalStyle />
    <DarkModeProvider>
    <ThemeProvider theme={myTheme}>
       
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      
      </ThemeProvider>
      </DarkModeProvider>
    </>
  );
}

export default App;
