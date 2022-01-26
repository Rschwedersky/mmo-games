export const filtrarListaPorTermoDeBusca = (lista, termo) => {
    return lista.filter((noticia) => {
      return new RegExp(termo, 'ig').test(noticia.title);
    });
  };
  
  export const filtrarListaPorPagina = (lista, pagina) => {
    const QTD_ITENS = 10;
    return lista.slice(pagina * QTD_ITENS - QTD_ITENS, pagina * QTD_ITENS);
  };