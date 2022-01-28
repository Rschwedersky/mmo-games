import React, { useRef } from 'react';
import { useGames } from "../../contexts/games/useGames";
import { CardGames } from '../CardGames/CardGames';
import { PaginacaoGames } from '../PaginacaoGames/PaginacaoGames';
import { CardGrid, Container, PaginacaoTeste } from './Games.styles';





export const Games = () => {
const {gamesFiltrados} = useGames();
const top = useRef();

const handleVoltarAoTopo = () => {
    top.current.scrollIntoView({ behavior: 'smooth' });
  };
return(<>
<Container>
<div><PaginacaoGames/></div>
<CardGrid>
  {gamesFiltrados.length === 0
    ? 'Nenhum elemento encontrado'
    : gamesFiltrados.map((elemento) => <CardGames key={elemento.id} games={elemento} />)};
</CardGrid>
</Container>
</>
);

};
