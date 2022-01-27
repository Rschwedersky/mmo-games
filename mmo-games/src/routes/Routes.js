import { Routes, Route } from 'react-router-dom';
import { GamesPage } from '../components/GamesPage/GamesPage';
import { NoticiasPage } from '../components/NoticiasPage/NoticiasPage';

export const Router = () => (
    <Routes>
       <Route path="/" element={<NoticiasPage />} />
      <Route path="/home" element={<NoticiasPage />} />
      <Route path="/games" element={<GamesPage/>} />
      
      {/* <Route path="exemplo/:idExemplo" element={<Exemplo />} />
      <Route path="pokemon" element={<PokemonPage />} />
      <Route path="styled" element={<Cadastro />} />
      <Route path="*" element={<p>Qualquer outra coisa</p>} /> */}
    </Routes>
  );