import { useEffect, useRef, useState } from 'react';
import { fetchAllAPI } from '../../services/api-service';
import { filtrarListaPorPagina, filtrarListaPorTermoDeBusca } from '../../helper/filtros';
import { NoticiasContext } from './NoticiasContext';


export const NoticiasProvider = ({ children }) => {
    const [termoBusca, setTermoBusca] = useState('');
    const [pagina, setPagina] = useState(1);
    
    const [noticiasFiltradas, setNoticiasFiltradas] = useState([]);
    const noticias = useRef([]);
  
    useEffect(() => {
      (async () => {
        const lista = await fetchAllAPI('/latestnews');
        noticias.current = lista;
        setNoticiasFiltradas(filtrarListaPorPagina(noticias.current, pagina));
      })();
    }, []);
  
    useEffect(() => {
        setNoticiasFiltradas(filtrarListaPorTermoDeBusca(noticias.current, termoBusca));
    }, [termoBusca]);
  
    useEffect(() => {
        setNoticiasFiltradas(filtrarListaPorPagina(noticias.current, pagina));
    }, [pagina]);
  
    return (
      <NoticiasContext.Provider value={{ setTermoBusca, noticias, noticiasFiltradas, pagina, setPagina }}>
        {children}
      </NoticiasContext.Provider>
    );
  };