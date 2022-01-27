import { NoticiasProvider } from "../../contexts/noticias";
import { NoticiasContext } from "../../contexts/noticias/NoticiasContext";
import { CardDestaque } from "../CardDestaque/CardDestaque";
import { Navbar } from "../NavBar/NavBar";
import { Noticias } from "../Noticias/Noticias";
import { PaginacaoNoticias } from "../PaginacaoNoticias/PaginacaoNoticias";


export const NoticiasPage = () =>{
    
    return(
    <NoticiasProvider>
       
        <Navbar/>
        <CardDestaque/>
        <PaginacaoNoticias/>
        <Noticias/>
       
    </NoticiasProvider> 
    );
};