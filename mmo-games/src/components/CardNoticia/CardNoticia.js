
import {Card, Thumbnail, Description, Image, CardTitle, Botao } from './CardNoticia.styles';
import { useDarkMode } from '../../contexts/darkmode/useDarkMode';

export const CardNoticia = ({noticia}) => {
  const state = useDarkMode();

return (
        <Card primary={state.dark}>
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