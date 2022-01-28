import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDarkMode } from "../../contexts/darkmode/useDarkMode";
import { fetchAllAPI } from "../../services/api-service";
import { Navbar } from "./../../components/NavBar/NavBar";
import { ConteinerH2, DetailImagePrincipal, DetailTitle, Indicator } from "./DetailGames.styles";

import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Formulario } from "../../components/Formulario";





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


    return(
    <>
    {gameDetail===undefined?<Navbar/>:<>
    <Navbar/>
    <ConteinerH2>
    <DetailTitle primary={dark}>{gameDetail.title}</DetailTitle>
    </ConteinerH2>
    <Slideshow lista={gameDetail.screenshots}/>
    <h3>Description:</h3>
      <p>{gameDetail.short_description}</p>
      <div style={{display:'flex'}}>
        <div>
        <ul style={{fontSize:'1.5rem'}}>minimum_system_requirements</ul>
        <li>{gameDetail.minimum_system_requirements.os}</li>
        <li>{gameDetail.minimum_system_requirements.processor}</li>
        <li>{gameDetail.minimum_system_requirements.memory}</li>
        <li>{gameDetail.minimum_system_requirements.graphics}</li>
        <li>{gameDetail.minimum_system_requirements.storage}</li>
        </div>
        <div><Formulario id={gameDetail.id}/></div>

      </div>
    
  
    </>}
    </>
    );
};

/* const ScreenShots= ({lista}) => {
  return (
  <ul>
        {lista?.map((property) => (
          <li key={property.id}>
          <img src={property.image} alt="screenshots"/>
          </li>
        ))}
  </ul>
  );
}; */

const Slideshow = ({lista}) => {
  

  const zoomOutProperties = {
    indicators: true,
    scale: 0.4,
    indicators: i => (<Indicator>{i + 1}</Indicator>),
    autoplay:true
  }
  return (
    <div >
      <Zoom {...zoomOutProperties}>
        { lista.map((each) => <img key={each.id} style={{width: "100%", height:"100%", borderRadius:'10px'}} src={each.image} alt="Screenshoots" />) }
      </Zoom>
    </div>
  )
}

