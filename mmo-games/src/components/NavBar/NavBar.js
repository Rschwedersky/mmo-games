import { useNavigate } from 'react-router-dom';
import { useDarkMode } from '../../contexts/darkmode/useDarkMode';
import { useItems } from '../../contexts/games/useGames';

import { AppTitle, Botao, ConteinerBotao, NavBar } from './NavBar.styles';

export const Navbar = () =>{
    const state = useDarkMode();
    const navigate = useNavigate();
   
 
    
 return(
    <NavBar primary={state.dark}>
        <AppTitle primary={state.dark}>DEVinMMO</AppTitle>
        <ConteinerBotao>
            <Botao onClick={()=>state.dark?state.setDark(false):state.setDark(true)}>{state.dark?'Dark':'Light'}</Botao>
            <Botao onClick={()=>navigate('/home')}>News</Botao>
            <Botao onClick={()=>navigate('/games')}>Games</Botao>
        </ConteinerBotao>
    </NavBar>

    );
};