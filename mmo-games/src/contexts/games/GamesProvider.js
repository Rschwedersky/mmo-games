import { useEffect, useRef, useState } from 'react';
import { fetchAllAPI } from '../../services/api-service';
import { filtrarListaPorPagina, filtrarListaPorTermoDeBusca } from '../../helper/filtros';
import { GamesContext } from './GamesContext';


export const GamesProvider = ({ children }) => {
    const [termoBusca, setTermoBusca] = useState('');
    const [pagina, setPagina] = useState(1);
    const [gameState, setGameState] = useState(false);
    
    const [gamesFiltrados, setGamesFiltrados] = useState([]);
    const games = useRef([]);
  
    useEffect(() => {
      (async () => {
        const lista = await fetchAllAPI('/games');
        games.current = lista;
        setGamesFiltrados(filtrarListaPorPagina(games.current, pagina));
      })();
    }, []);
  
    useEffect(() => {
      setGamesFiltrados(filtrarListaPorTermoDeBusca(games.current, termoBusca));
    }, [termoBusca]);
  
    useEffect(() => {
      setGamesFiltrados(filtrarListaPorPagina(games.current, pagina));
    }, [pagina]);
  
    return (
      <GamesContext.Provider value={{ setTermoBusca, games, gamesFiltrados, pagina, setPagina, gameState, setGameState}}>
        {children}
      </GamesContext.Provider>
    );
  };