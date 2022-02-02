
import {Card, Thumbnail, Description, Image, CardTitle, Botao } from './CardDestaque.styles';
import { useDarkMode } from '../../contexts/darkmode/useDarkMode';
import { useNoticias } from '../../contexts/noticias';

export const CardDestaque = () => {
    const {dark} = useDarkMode();
    const { noticias } = useNoticias();
    const destaque = noticias.current[0];



    return(
        <>
        {destaque === undefined? <></>
        :
        <Card primary={dark}>
            <Thumbnail>
                <Image src={destaque.main_image} alt={destaque.title} />
                <CardTitle primary={dark}>{destaque.title}</CardTitle>
            </Thumbnail>
           
                <Description>
                    <p>{destaque.short_description}</p>
                </Description>
            <Botao  onClick={()=>window.open(destaque.article_url)}>Read more...</Botao>
         </Card>}
      </>
      );
};