import { Routes, Route } from 'react-router-dom';
import { GamesPage } from '../pages/GamesPage/GamesPage';
import { NoticiasPage } from '../pages/NoticiasPage/NoticiasPage';
import { DetailGames } from '../pages/DetailGames';

export const Router = () => (
    <Routes>
       <Route path="/" element={<NoticiasPage />} />
      <Route path="/home" element={<NoticiasPage />} />
      <Route path="/games" element={<GamesPage/>} />
      <Route path="*" element={<NoticiasPage />} />
      <Route path="/games/detail/:id" element={<DetailGames/>} />
    </Routes>
  );