import { useNoticias } from '../../contexts/noticias';
import {Card, Thumbnail, Description, Image, CardTitle, Botao } from './CardDestaque.styles';
import { useDarkMode } from '../../contexts/darkmode/useDarkMode';

export const CardDestaque = () => {
    const {dark} = useDarkMode();
    const { noticias } = useNoticias();
    const destaque = noticias.current[0];



    return(
        <>
        {destaque === undefined? 'Nenhuma Notícia encontrada'
        :
        <Card primary={dark}>
            <Thumbnail>
                <Image src={destaque.main_image} alt={destaque.title} />
            </Thumbnail>
            <CardTitle>{destaque.title}</CardTitle>
                <Description>
                    <p>{destaque.short_description}</p>
                </Description>
            <Botao  onClick={()=>window.open(destaque.article_url)}>Read more...</Botao>
         </Card>}
      </>
      );
};