import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDarkMode } from "../../contexts/darkmode/useDarkMode";
import { fetchAllAPI } from "../../services/api-service";
import { Navbar } from "./../../components/NavBar/NavBar";
import { ComentariosConteiner, ConteinerH2, DetailDescricao, DetailGenre, DetailP, DetailP2, DetailTitle, ItemLista, MinimumSystemRequirements } from "./DetailGames.styles";
import 'react-slideshow-image/dist/styles.css'
import { Comentarios } from "../../components/Comentarios";
import { SlideShow } from "../../components/SlideShow/SlideShow";
import { Footer } from "../../components/Footer";





export const DetailGames = () => {
    const {id}= useParams();
    const[gameDetail, setGameDetail]= useState();
    const{dark}= useDarkMode();

    useEffect(() => {
        (async () => {
          const lista = await fetchAllAPI(`/game?id=${id}`);
          setGameDetail(lista);
        })();
      }, [id]);


    return(
    <>
    {gameDetail===undefined?<Navbar/>:<>
    <Navbar/>
    <ConteinerH2>
    <DetailTitle primary={dark}>{gameDetail.title}</DetailTitle>
    </ConteinerH2>
    
      <SlideShow lista={gameDetail.screenshots}/>
    
    <DetailDescricao primary={dark}>Description:</DetailDescricao>
        <DetailP primary={dark}>{gameDetail.short_description}</DetailP>
      <DetailP primary={dark}>Genre:  {gameDetail.genre} </DetailP>
      <DetailP primary={dark}>Platform:  {gameDetail.platform}</DetailP>
            <MinimumSystemRequirements>
            <DetailP2 primary={dark}>minimum_system_requirements</DetailP2>
            <ItemLista primary={dark}>Operating System:  {gameDetail.minimum_system_requirements.os}</ItemLista>
            <ItemLista primary={dark}>Processor:  {gameDetail.minimum_system_requirements.processor}</ItemLista>
            <ItemLista primary={dark}>Memory:  {gameDetail.minimum_system_requirements.memory}</ItemLista>
            <ItemLista primary={dark}>Graphics:  {gameDetail.minimum_system_requirements.graphics}</ItemLista>
            <ItemLista primary={dark}>Storage:  {gameDetail.minimum_system_requirements.storage}</ItemLista>
            </MinimumSystemRequirements>
       
          <ComentariosConteiner primary={dark}><Comentarios idGame={gameDetail.id}/></ComentariosConteiner>
        <Footer/>
     
  
  
    </>}
    </>
    );
};



