import { useNoticias } from "../../contexts/noticias";
import { BotaoPaginacao, Controles, InputBusca, Paginacao } from "./PaginacaoNoticias.styles";
import { useDarkMode } from '../../contexts/darkmode/useDarkMode';

export const PaginacaoNoticias = () => {
    const { setTermoBusca, noticias, noticiasFiltradas, pagina, setPagina }= useNoticias();
    const qtdMaximaPaginas = Math.ceil(noticias.current.length / 10);
    const {dark} = useDarkMode();

    const handlePagAnterior = async () => {
        setPagina((pagAtual) => (pagAtual > 1 ? pagAtual - 1 : 1));
      };
    const handleProxPagina = () => {
        setPagina((pagAtual) => (pagAtual >= qtdMaximaPaginas ? qtdMaximaPaginas : pagAtual + 1));
      };

      return (
        <Paginacao primary={dark}>
          <InputBusca
        onChange={(event) => {setTermoBusca(event.target.value);}}
        type="text"
        placeholder="Search for the news"
      />
          
          <div >
            <h3 >All News ({noticiasFiltradas.length})</h3>
            <Controles primary={dark}>
              <BotaoPaginacao  onClick={handlePagAnterior}>
                {`<`}
              </BotaoPaginacao>
              <span>
                Page {pagina} of {qtdMaximaPaginas}
              </span>
              <BotaoPaginacao  onClick={handleProxPagina}>
                {`>`}
              </BotaoPaginacao>
            </Controles>
          </div>
        </Paginacao>
      );


};