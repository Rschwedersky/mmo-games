import { useDarkMode } from '../../contexts/darkmode/useDarkMode';

import { AppTitle, Botao, ConteinerBotao, NavBar } from './NavBar.styles';

export const Navbar = () =>{
    const state = useDarkMode();
    
    

 
 return(
    <NavBar primary={state.dark}>
        <AppTitle primary={state.dark}>DEVinMMO</AppTitle>
        <ConteinerBotao>
            <Botao onClick={()=>state.dark?state.setDark(false):state.setDark(true)}>{state.dark?'Dark':'Light'}</Botao>
            <Botao onClick={()=>state.dark?state.setDark(false):state.setDark(true)}>Notícias</Botao>
            <Botao onClick={()=>state.dark?state.setDark(false):state.setDark(true)}>Jogos</Botao>
        </ConteinerBotao>
    </NavBar>

    );
};