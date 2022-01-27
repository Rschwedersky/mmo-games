import { GamesProvider } from "../../contexts/games/GamesProvider";
import { Games } from "../Games";
import { Navbar } from "../NavBar/NavBar";
import { PaginacaoGames } from "../PaginacaoGames/PaginacaoGames";


export const GamesPage = () =>{
    
    return(
     <GamesProvider>
        <Navbar/>
        <PaginacaoGames/>
        <Games/>
     </GamesProvider>
    );
};
