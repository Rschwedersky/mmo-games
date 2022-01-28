import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDarkMode } from "../../contexts/darkmode/useDarkMode";
import { fetchAllAPI } from "../../services/api-service";
import { Navbar } from "./../../components/NavBar/NavBar";
import { ConteinerH2, DetailImagePrincipal, DetailTitle } from "./DetailGames.styles";




export const DetailGames = () => {
    const {id}= useParams();
    const[gameDetail, setGameDetail]= useState();
    const{dark}= useDarkMode();
    const[listaScreenShots, setListaScreenShots]= useState();

    useEffect(() => {
        (async () => {
          const lista = await fetchAllAPI(`/game?id=${id}`);
          setGameDetail(lista);
        })();
      }, []);

      gameDetail===undefined?console.log('wait'):console.log(gameDetail.screenshots.slice(1));
    
    

    
    


    return(
    <>
    {gameDetail===undefined?<Navbar/>:<>
    <Navbar/>
    <ConteinerH2>
    <DetailTitle primary={dark}>{gameDetail.title}</DetailTitle>
    </ConteinerH2>
    <ScreenShots lista={gameDetail.screenshots}/>
    </>}
    </>
    );
};

const ScreenShots= ({lista}) => {
  return (
  <ul>
        {lista?.map((property) => (
          <li key={property.id}>
          <img src={property.image} alt="screenshots"/>
          </li>
        ))}
  </ul>
  );
};