
import { useDarkMode } from '../../contexts/darkmode/useDarkMode';
import { useGames } from '../../contexts/games';
import { InputBuscaI, PaginacaoGamesStyle } from './PaginacaoGames.styles';

export const PaginacaoGames = () => {
    const { setTermoBusca, games, gamesFiltrados, pagina, setPagina }= useGames();
    const qtdMaximaPaginas = Math.ceil(games.current.length / 10);
    const {dark} = useDarkMode();

    const handlePagAnterior = async () => {
        setPagina((pagAtual) => (pagAtual > 1 ? pagAtual - 1 : 1));
      };
    const handleProxPagina = () => {
        setPagina((pagAtual) => (pagAtual >= qtdMaximaPaginas ? qtdMaximaPaginas : pagAtual + 1));
      };

      return (
        <PaginacaoGamesStyle primary={dark} >
          <InputBuscaI
        onChange={(event) => {setTermoBusca(event.target.value);}}
        type="text"
        placeholder="Search for the news"
      />
          
          <div >
            <h3 >All Games ({gamesFiltrados.length})</h3>
            <div >
              <button  onClick={handlePagAnterior}>
                {`<`}
              </button>
              <span>
                Page {pagina} of {qtdMaximaPaginas}
              </span>
              <button  onClick={handleProxPagina}>
                {`>`}
              </button>
            </div>
          </div>
        </PaginacaoGamesStyle>
      );


};