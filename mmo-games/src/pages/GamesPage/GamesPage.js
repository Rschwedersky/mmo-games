import { GamesProvider } from "../../contexts/games/GamesProvider";
import { Games } from "../../components/Games";
import { Navbar } from "../../components/NavBar/NavBar";
import { Footer } from "../../components/Footer";



export const GamesPage = () =>{
    
    return(
     <GamesProvider>
        <Navbar/>
        <Games/>
        <Footer/>
     </GamesProvider>
    );
};
