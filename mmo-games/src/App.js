import logo from './logo.svg';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Router } from './routes/Routes';
import { GlobalStyle } from './themes/GlobalStyles';
import { myTheme } from './themes/themes';
import { NoticiasProvider } from './contexts/noticias';
import { Teste } from './components/Teste';
import { Noticias } from './components/Noticias/Noticias';
import { DarkModeProvider } from './contexts/darkmode/DarkModeProvider';
import { Navbar } from './components/NavBar/NavBar';

function App() {
  return (<>
    <DarkModeProvider>
    <GlobalStyle />
    <ThemeProvider theme={myTheme}>
        <GlobalStyle />
        <Navbar></Navbar>
          <NoticiasProvider>
            <Noticias/>
          </NoticiasProvider> 
          
      </ThemeProvider>
      </DarkModeProvider>
    </>
  );
}

export default App;
