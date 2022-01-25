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

function App() {
  return (<>
    <DarkModeProvider>
    <GlobalStyle />
    <ThemeProvider theme={myTheme}>
        <GlobalStyle />
        
          <NoticiasProvider>
            <Noticias/>
          </NoticiasProvider> 

          
      </ThemeProvider>
      </DarkModeProvider>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </>
  );
}

export default App;
