import { NoticiasProvider } from "../../contexts/noticias";
import { NoticiasContext } from "../../contexts/noticias/NoticiasContext";
import { CardDestaque } from "../../components/CardDestaque/CardDestaque";
import { Navbar } from "../../components/NavBar/NavBar";
import { Noticias } from "../../components/Noticias/Noticias";
import { PaginacaoNoticias } from "../../components/PaginacaoNoticias/PaginacaoNoticias";
import { Footer } from "../../components/Footer/Footer";


export const NoticiasPage = () =>{
    
    return(
    <NoticiasProvider>
       
        <Navbar/>
        <CardDestaque/>
        <PaginacaoNoticias/>
        <Noticias/>
        <Footer></Footer>
       
    </NoticiasProvider> 
    );
};