import React, { useRef } from 'react';
import { useNoticias } from '../../contexts/noticias';
import { useTheme } from 'styled-components';
import { Container, CardGrid, Botao} from './Noticias.styles';
import { CardNoticia } from '../CardNoticia/CardNoticia';

export const Noticias = () => {
    const top = useRef();
    const { noticiasFiltradas } = useNoticias();
  
    const handleVoltarAoTopo = () => {
      top.current.scrollIntoView({ behavior: 'smooth' });
    };
  
    return (<>
      <Container ref={top}>
        
          {noticiasFiltradas.length === 0
            ? 'Nenhuma Notícia encontrada'
            : noticiasFiltradas.map((item) => <CardNoticia key={item.id} noticia={item} />)}
        
        
      </Container>
      <Botao onClick={handleVoltarAoTopo}>Back to top</Botao>
      </>
    );
  
};