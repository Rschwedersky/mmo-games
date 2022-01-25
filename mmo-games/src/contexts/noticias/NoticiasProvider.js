import { useEffect, useRef, useState } from 'react';
import { fetchAllNoticias } from '../../services/noticias-service';
import { filtrarListaPorPagina, filtrarListaPorTermoDeBusca } from '../../helper/noticias';
import { NoticiasContext } from './NoticiasContext';


export const NoticiasProvider = ({ children }) => {
    const [termoBusca, setTermoBusca] = useState('');
    const [noticiasFiltradas, setNoticiasFiltradas] = useState([]);
    const [pagina, setPagina] = useState(1);
    const noticias = useRef([]);
  
    useEffect(() => {
      // IIFE Imediately Invoked Function Expression
      (async () => {
        const lista = await fetchAllNoticias();
        noticias.current = lista;
        setNoticiasFiltradas(filtrarListaPorPagina(noticias.current, pagina));
      })();
      // :)
      //eslint-disable-next-line
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