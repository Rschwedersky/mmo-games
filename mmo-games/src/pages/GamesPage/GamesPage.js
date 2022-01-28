import { GamesProvider } from "../../contexts/games/GamesProvider";
import { Games } from "../../components/Games";
import { Navbar } from "../../components/NavBar/NavBar";



export const GamesPage = () =>{
    
    return(
     <GamesProvider>
        <Navbar/>
        <Games/>
     </GamesProvider>
    );
};
