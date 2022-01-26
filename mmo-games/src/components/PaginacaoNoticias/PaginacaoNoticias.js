import { useNoticias } from "../../contexts/noticias";
import { BotaoPaginacao, InputBusca, Paginacao } from "./PaginacaoNoticias.styles";


export const PaginacaoNoticias = () => {
    const { setTermoBusca, noticias, noticiasFiltradas, pagina, setPagina }= useNoticias();
    const qtdMaximaPaginas = Math.ceil(noticias.current.length / 10);

    const handlePagAnterior = async () => {
        setPagina((pagAtual) => (pagAtual > 1 ? pagAtual - 1 : 1));
      };
    const handleProxPagina = () => {
        setPagina((pagAtual) => (pagAtual >= qtdMaximaPaginas ? qtdMaximaPaginas : pagAtual + 1));
      };

      return (
        <Paginacao>
          <InputBusca
        onChange={(event) => {setTermoBusca(event.target.value);}}
        type="text"
        placeholder="Procure pelo titulo da notícia"
      />
          
          <div >
            <h1 >Todas as notícias ({noticiasFiltradas.length})</h1>
            <div >
              <BotaoPaginacao  onClick={handlePagAnterior}>
                {`<`}
              </BotaoPaginacao>
              <span>
                Página {pagina} de {qtdMaximaPaginas}
              </span>
              <BotaoPaginacao  onClick={handleProxPagina}>
                {`>`}
              </BotaoPaginacao>
            </div>
          </div>
        </Paginacao>
      );


};