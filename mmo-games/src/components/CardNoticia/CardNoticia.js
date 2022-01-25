import { NoticiasProvider } from '../../contexts/noticias';
import {Card, Thumbnail, Description, Image, CardTitle, Botao } from './CardNoticia.styles';

export const CardNoticia = ({noticia}) => {

return (
        <Card>
          <Thumbnail>
            <Image src={noticia.thumbnail} alt={noticia.title} />
          </Thumbnail>
          <CardTitle>{noticia.title}</CardTitle>
          <Description>
            <p>{noticia.short_description}</p>
          </Description>
          <Botao  onClick={()=>window.open(noticia.article_url)}>Read more...</Botao>
        </Card>
      );

}; 