import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDarkMode } from "../../contexts/darkmode/useDarkMode";
import { fetchAllAPI } from "../../services/api-service";
import { Navbar } from "./../../components/NavBar/NavBar";
import { DetailImagePrincipal, DetailTitle } from "./DetailGames.styles";




export const DetailGames = () => {
    const {id}= useParams();
    const[gameDetail, setGameDetail]= useState();
    const{dark}= useDarkMode();

    useEffect(() => {
        (async () => {
          const lista = await fetchAllAPI(`/game?id=${id}`);
          setGameDetail(lista);
        })();
      }, []);

      console.log(gameDetail);
    
    

    
    


    return(<>
    {gameDetail===undefined?<Navbar/>:<>
    <Navbar/>
    <DetailTitle primary={dark}>{gameDetail.title}</DetailTitle>
    <DetailImagePrincipal src={gameDetail.screenshots[0].image} alt="adadad"/></>}
    
    
    </>
    );
};