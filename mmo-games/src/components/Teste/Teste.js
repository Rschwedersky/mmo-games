import { useNoticias } from '../../contexts/noticias';



export const Teste = () => {
    const { noticias } = useNoticias();
    console.log(noticias);
    return(<p>asdasdasdd</p>);
    

};
